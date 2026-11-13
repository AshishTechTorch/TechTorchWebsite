import { API_BASE } from "../apiBase";

import { useEffect, useRef, useState } from "react";
import { Lock, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormAuthGuard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(false);
  const primaryBtnRef = useRef(null);

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    // Auth pages aur admin routes par prompt nahi dikhana
    if (
      path.startsWith("/admin") ||
      path === "/signin" ||
      path === "/signup" ||
      path === "/login" ||
      path === "/candidate"
    ) {
      setShowPrompt(false);
      return;
    }

    let cancelled = false;

    const checkAuth = async () => {
      try {
        const base = API_BASE;

        const response = await fetch(`${base}/api/auth/me`, {
          credentials: "include",
        });

        if (!response.ok) return false;

        const data = await response.json();
        return data.accountType === "candidate";
      } catch (error) {
        console.error("Auth check failed:", error);
        return false;
      }
    };

    const handleFieldClick = async (event) => {
      const field = event.target.closest(
        'input:not([type="button"]):not([type="submit"]), textarea, select, [contenteditable="true"]'
      );

      if (!field || !document.contains(field)) return;
      if (!field.hasAttribute("data-on-auth-guard")) return;
      
      const loggedIn = await checkAuth();

      if (cancelled || loggedIn) return;

      event.preventDefault();
      field.blur();
      setShowPrompt(true);
    };

    document.addEventListener("focusin", handleFieldClick, true);

    return () => {
      cancelled = true;
      document.removeEventListener("focusin", handleFieldClick, true);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!showPrompt) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowPrompt(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primaryBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [showPrompt]);

  if (!showPrompt) return null;

  // Current form URL, query string aur hash preserve karo
  const returnTo = {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
  };

  const goTo = (path) => navigate(path, { state: { from: returnTo } });

  return (
    <div
      className="auth-prompt-overlay fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setShowPrompt(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-prompt-title"
        aria-describedby="auth-prompt-desc"
        className="auth-prompt-card relative w-full max-w-md rounded-2xl bg-white px-7 pb-7 pt-9 text-center shadow-2xl ring-1 ring-black/5"
      >
        <button
          type="button"
          onClick={() => setShowPrompt(false)}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full p-2 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
        >
          <X size={18} />
        </button>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#780042]/10">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#780042] text-white shadow-md shadow-[#780042]/30">
            <Lock size={20} strokeWidth={2.2} />
          </div>
        </div>

        <h2
          id="auth-prompt-title"
          className="text-2xl font-semibold tracking-tight text-[#1b1b2a]"
        >
          Sign in to continue
        </h2>

        <p
          id="auth-prompt-desc"
          className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500"
        >
          Please sign in or create a free account before submitting a query, so
          our team can get back to you.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <button
            ref={primaryBtnRef}
            type="button"
            onClick={() => goTo("/signin")}
            className="w-full rounded-xl bg-[#780042] px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#5e0034] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#780042]/30"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => goTo("/signup")}
            className="w-full rounded-xl border border-[#780042] bg-white px-5 py-3 text-[15px] font-semibold text-[#780042] transition hover:bg-[#780042]/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#780042]/20"
          >
            Create Account
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowPrompt(false)}
          className="mt-4 text-sm font-medium text-stone-400 transition hover:text-stone-700"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
