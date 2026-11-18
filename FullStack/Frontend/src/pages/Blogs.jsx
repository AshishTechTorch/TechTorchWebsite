import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, PenLine } from "lucide-react";
import { ErrorBox, PageLoader } from "../components/ui";
import { formatDate } from "../admin/utils/india";
import { useMe, usePublishedBlogs } from "../account/useAccount";

const readTime = (text = "") => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));
const initials = (name = "") => name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "T";

function Cover({ blog }) {
  return (
    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#780042] via-[#5a0032] to-stone-900">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#fff_0,transparent_45%)]" />
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}
      {blog.category && (
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#780042] shadow-sm">
          {blog.category}
        </span>
      )}
    </div>
  );
}

export default function Blogs() {
  const { data, isLoading, error, refetch } = usePublishedBlogs();
  const { data: me } = useMe();

  return (
    <div className="bg-stone-50">
      {/* hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#780042] via-[#5a0032] to-stone-950 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-end justify-between gap-6 px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Community stories
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">TechTorch Blogs</h1>
            <p className="mt-3 text-base leading-7 text-white/75 sm:text-lg">
              Ideas, learnings and real experiences from our team and community.
            </p>
          </div>
          <Link
            to={me?.accountType === "candidate" ? "/candidate" : "/signin"}
            state={me ? undefined : { from: "/candidate" }}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#780042] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <PenLine size={16} /> Write a blog
          </Link>
        </div>
      </section>

      {/* list */}
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {isLoading && <PageLoader />}
        {error && <ErrorBox error={error} onRetry={refetch} />}
        {data && data.length === 0 && (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center">
            <PenLine className="mx-auto text-stone-300" size={32} />
            <p className="mt-3 font-medium text-stone-700">No blogs published yet</p>
            <p className="mt-1 text-sm text-stone-500">Be the first to share something with the community.</p>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(data || []).map((b) => (
            <Link
              key={b._id}
              to={`/blogs/${b._id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Cover blog={b} />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-stone-900 transition group-hover:text-[#780042]">{b.title}</h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-stone-600">{b.excerpt}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-100 pt-4">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#780042]/10 text-xs font-semibold text-[#780042]">{initials(b.authorName)}</span>
                    <div className="min-w-0 text-xs">
                      <p className="truncate font-medium text-stone-800">{b.authorName}</p>
                      <p className="flex items-center gap-1 text-stone-400">{formatDate(b.publishedAt || b.createdAt)} · <Clock size={11} /> {readTime(b.content || b.excerpt)} min</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="shrink-0 text-stone-300 transition group-hover:translate-x-1 group-hover:text-[#780042]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
