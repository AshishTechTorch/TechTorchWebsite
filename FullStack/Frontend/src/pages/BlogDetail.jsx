import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { ErrorBox, PageLoader } from "../components/ui";
import { formatDate } from "../admin/utils/india";
import { usePublishedBlog } from "../account/useAccount";

const readTime = (text = "") => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));
const initials = (name = "") => name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "T";

export default function BlogDetail() {
  const { id } = useParams();
  const { data: blog, isLoading, error, refetch } = usePublishedBlog(id);

  return (
    <div className="bg-stone-50">
      <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#780042] hover:underline">
          <ArrowLeft size={15} /> All blogs
        </Link>

        {isLoading && <PageLoader />}
        {error && <div className="mt-6"><ErrorBox error={error} onRetry={refetch} /></div>}

        {blog && (
          <>
            {blog.category && (
              <span className="mt-8 inline-block rounded-full bg-[#780042]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#780042]">
                {blog.category}
              </span>
            )}
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.1]">{blog.title}</h1>

            <div className="mt-6 flex items-center gap-3 border-y border-stone-200 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#780042] text-sm font-semibold text-white">{initials(blog.authorName)}</span>
              <div className="text-sm">
                <p className="font-medium text-stone-900">{blog.authorName}</p>
                <p className="flex items-center gap-1.5 text-stone-500">
                  {formatDate(blog.publishedAt || blog.createdAt)} · <Clock size={13} /> {readTime(blog.content)} min read
                </p>
              </div>
            </div>

            {blog.coverImage && (
              <img
                loading="lazy"
                decoding="async"
                src={blog.coverImage}
                alt=""
                className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}

            {/* plain text (never HTML) so user-written content cannot inject scripts */}
            <div className="mt-8 whitespace-pre-wrap break-words text-[17px] leading-8 text-stone-800 sm:text-lg sm:leading-9">{blog.content}</div>

            {blog.tags?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-stone-200 pt-6">
                {blog.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 ring-1 ring-stone-200">#{t}</span>
                ))}
              </div>
            )}
          </>
        )}
      </article>
    </div>
  );
}
