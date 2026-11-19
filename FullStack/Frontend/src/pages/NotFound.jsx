import React from "react";
import { Link } from "react-router-dom";

// Shown for unknown URLs. SEO: Seo.jsx marks unknown paths as noindex automatically,
// so Google does not index them (instead of redirecting every bad URL to the home page).
export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#780042]">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-stone-900 sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-base text-stone-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="rounded-full bg-[#780042] px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
          Go to Home
        </Link>
        <Link to="/explore-solutions" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50">
          Explore Solutions
        </Link>
      </div>
    </section>
  );
}
