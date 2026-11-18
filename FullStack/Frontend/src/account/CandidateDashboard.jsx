import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BookOpen, Briefcase, LogOut, Pencil, Plus, Trash2, UserRound } from "lucide-react";
import { Badge, Button, ConfirmDialog, ErrorBox, Modal, PageLoader, useToast } from "../components/ui";
import { formatDate } from "../admin/utils/india";
import {
  useDeleteBlog, useMe, useMyBlogs, useMyInterests, useSaveBlog, useSignOut, useWithdrawInterest,
} from "./useAccount";

const field =
  "w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#780042] focus:ring-4 focus:ring-[#780042]/10";

const BLOG_TONE = { pending: "amber", published: "green", rejected: "red" };
const BLOG_LABEL = { pending: "Waiting for review", published: "Published", rejected: "Not approved" };
const INTEREST_TONE = { New: "blue", Reviewing: "amber", Shortlisted: "green", Contacted: "green", Rejected: "red" };

const EMPTY_BLOG = { title: "", category: "", tags: "", coverImage: "", excerpt: "", content: "" };

/* ------------------------------- blog editor ------------------------------- */
function BlogEditor({ blog, onClose }) {
  const toast = useToast();
  const save = useSaveBlog();
  const [f, setF] = useState(
    blog ? { ...EMPTY_BLOG, ...blog, tags: (blog.tags || []).join(", ") } : EMPTY_BLOG
  );
  const [error, setError] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (f.content.trim().length < 50) return setError("Write at least 50 characters in the blog body");
    try {
      await save.mutateAsync({
        id: blog?._id,
        data: {
          title: f.title,
          category: f.category,
          tags: f.tags.split(",").map((t) => t.trim()).filter(Boolean),
          coverImage: f.coverImage,
          excerpt: f.excerpt,
          content: f.content,
        },
      });
      toast(blog ? "Blog updated and sent for review again" : "Blog submitted for review");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal title={blog ? "Edit blog" : "Write a blog"} onClose={onClose} wide>
      <form onSubmit={submit} className="space-y-4 p-5 sm:p-6">
        <input required maxLength={160} placeholder="Title" className={`${field} text-base font-medium`} value={f.title} onChange={set("title")} />
        <div className="grid gap-4 sm:grid-cols-2">
          <input placeholder="Category (e.g. Cloud, AI)" className={field} value={f.category} onChange={set("category")} />
          <input placeholder="Tags, comma separated" className={field} value={f.tags} onChange={set("tags")} />
        </div>
        <input type="url" placeholder="Cover image URL (optional)" className={field} value={f.coverImage} onChange={set("coverImage")} />
        <textarea rows={2} maxLength={300} placeholder="Short summary (optional – we use the first lines if empty)" className={field} value={f.excerpt} onChange={set("excerpt")} />
        <textarea required rows={12} placeholder="Write your blog here…" className={`${field} min-h-[220px] resize-y leading-7`} value={f.content} onChange={set("content")} />
        <p className="rounded-lg bg-stone-50 p-3 text-xs leading-5 text-stone-500">
          Every blog is checked by our team before it appears on the website. Editing a published blog sends it for review again.
        </p>
        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <div className="sticky bottom-0 -mx-5 -mb-5 flex justify-end gap-2 border-t border-stone-100 bg-white/95 px-5 py-4 backdrop-blur sm:-mx-6 sm:-mb-6 sm:px-6">
          <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button type="submit" loading={save.isPending}>{blog ? "Save & resubmit" : "Submit for review"}</Button>
        </div>
      </form>
    </Modal>
  );
}

/* ------------------------------- tabs ------------------------------- */
function BlogsTab() {
  const toast = useToast();
  const { data, isLoading, error, refetch } = useMyBlogs();
  const remove = useDeleteBlog();
  const [editing, setEditing] = useState(null); // null | "new" | blog
  const [deleting, setDeleting] = useState(null);

  if (isLoading) return <PageLoader />;
  if (error) return <ErrorBox error={error} onRetry={refetch} />;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-500">Share what you know. Approved blogs appear on the public Blogs page.</p>
        <Button onClick={() => setEditing("new")}><Plus size={16} /> Write blog</Button>
      </div>

      {data.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <BookOpen className="mx-auto text-stone-300" size={30} />
          <p className="mt-3 text-sm text-stone-500">You haven't written anything yet. Click <b>Write blog</b> to start.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {data.map((b) => (
            <li key={b._id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="line-clamp-2 font-semibold text-stone-900">{b.title}</h3>
                  <p className="mt-0.5 text-xs text-stone-400">Written {formatDate(b.createdAt)}</p>
                </div>
                <Badge tone={BLOG_TONE[b.status]}>{BLOG_LABEL[b.status]}</Badge>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-stone-600">{b.excerpt}</p>
              {b.status === "rejected" && b.reviewNote && (
                <p className="mt-3 rounded-lg bg-red-50 p-3 text-xs leading-5 text-red-700">Reviewer note: {b.reviewNote}</p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {b.status === "published" && (
                  <Link to={`/blogs/${b._id}`} className="rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50">View live</Link>
                )}
                <button onClick={() => setEditing(b)} className="inline-flex items-center gap-1 rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50"><Pencil size={13} /> Edit</button>
                <button onClick={() => setDeleting(b)} className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"><Trash2 size={13} /> Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editing && <BlogEditor blog={editing === "new" ? null : editing} onClose={() => setEditing(null)} />}
      {deleting && (
        <ConfirmDialog
          title="Delete blog"
          message={`Delete "${deleting.title}"? This cannot be undone.`}
          loading={remove.isPending}
          onCancel={() => setDeleting(null)}
          onConfirm={async () => {
            try {
              await remove.mutateAsync(deleting._id);
              toast("Blog deleted");
            } catch (e) {
              toast(e.message, "error");
            }
            setDeleting(null);
          }}
        />
      )}
    </div>
  );
}

function InterestsTab() {
  const toast = useToast();
  const { data, isLoading, error, refetch } = useMyInterests();
  const withdraw = useWithdrawInterest();
  const [target, setTarget] = useState(null);

  if (isLoading) return <PageLoader />;
  if (error) return <ErrorBox error={error} onRetry={refetch} />;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-500">Roles you have shown interest in, and where each one stands.</p>
        <Link to="/careers" className="rounded-lg px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#780042" }}>Browse openings</Link>
      </div>

      {data.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center text-sm text-stone-500">
          No interest shown yet. Open <Link to="/careers" className="font-medium text-[#780042] underline">Careers</Link> and pick a role.
        </div>
      ) : (
        <ul className="space-y-3">
          {data.map((i) => (
            <li key={i._id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="min-w-0">
                <h3 className="font-semibold text-stone-900">{i.jobTitle || i.area || "General interest"}</h3>
                <p className="text-xs text-stone-400">Sent {formatDate(i.createdAt)}</p>
                {i.message && <p className="mt-1 line-clamp-2 text-sm text-stone-600">{i.message}</p>}
              </div>
              <div className="flex items-center gap-3">
                <Badge tone={INTEREST_TONE[i.status]}>{i.status}</Badge>
                <button onClick={() => setTarget(i)} className="text-xs font-medium text-red-600 hover:underline">Withdraw</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {target && (
        <ConfirmDialog
          title="Withdraw interest"
          message="Remove this interest? The hiring team will no longer see it."
          confirmLabel="Withdraw"
          loading={withdraw.isPending}
          onCancel={() => setTarget(null)}
          onConfirm={async () => {
            try {
              await withdraw.mutateAsync(target._id);
              toast("Interest withdrawn");
            } catch (e) {
              toast(e.message, "error");
            }
            setTarget(null);
          }}
        />
      )}
    </div>
  );
}

function ProfileTab({ me }) {
  const rows = [
    ["Name", me.name], ["Email", me.email], ["Phone", me.phone], ["City", me.city],
    ["Headline", me.headline], ["Member since", formatDate(me.createdAt)],
  ];
  return (
    <dl className="divide-y divide-stone-100 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      {rows.map(([k, v]) => (
        <div key={k} className="flex flex-wrap justify-between gap-2 px-5 py-3.5 text-sm">
          <dt className="text-stone-500">{k}</dt>
          <dd className="break-all font-medium text-stone-900 sm:break-normal">{v || "—"}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------- page ------------------------------- */
const TABS = [
  { key: "blogs", label: "My blogs", icon: BookOpen },
  { key: "interests", label: "My interests", icon: Briefcase },
  { key: "profile", label: "Profile", icon: UserRound },
];

export default function CandidateDashboard() {
  const navigate = useNavigate();
  const { data: me, isLoading } = useMe();
  const signOut = useSignOut();
  const [tab, setTab] = useState("blogs");

  if (isLoading) return <PageLoader />;
  if (!me) return <Navigate to="/signin" replace state={{ from: "/candidate" }} />;
  if (me.accountType === "admin") return <Navigate to="/admin-dashboard" replace />;

  const logout = async () => {
    try { await signOut.mutateAsync(); } catch { /* already signed out */ }
    navigate("/", { replace: true });
  };

  const initials = (me.name || "").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "T";

  return (
    <div className="min-h-[70vh] bg-stone-50">
      {/* header banner */}
      <div className="bg-gradient-to-br from-[#780042] via-[#5a0032] to-stone-950 text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6 sm:py-10">
          <div className="flex min-w-0 items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-lg font-semibold ring-1 ring-white/25 backdrop-blur">{initials}</span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-white/60">Candidate dashboard</p>
              <h1 className="truncate text-2xl font-semibold sm:text-3xl">Hi, {me.name.split(" ")[0]}</h1>
              <p className="truncate text-sm text-white/70">{me.email}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={logout} loading={signOut.isPending} className="!border-0 !bg-white/10 !text-white !ring-1 !ring-white/25 hover:!bg-white/20">
            <LogOut size={16} /> Sign out
          </Button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
        {/* tabs */}
        <div className="mb-6 inline-flex max-w-full gap-1 overflow-x-auto rounded-xl bg-white p-1 shadow-sm ring-1 ring-stone-200">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
                tab === key ? "bg-[#780042] text-white shadow" : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        {tab === "blogs" && <BlogsTab />}
        {tab === "interests" && <InterestsTab />}
        {tab === "profile" && <ProfileTab me={me} />}
      </div>
    </div>
  );
}
