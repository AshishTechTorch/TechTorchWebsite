import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, CheckCircle2, Loader2, X, XCircle } from "lucide-react";

export const ACCENT = "#780042";

/* Site navbar is z-[1000]; every overlay must sit above it. */
const Z_MODAL = 2000;
const Z_TOAST = 2100;

/* ---------------- Toasts ---------------- */
const ToastCtx = createContext(() => {});
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);

  const push = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setItems((l) => [...l, { id, message, type }]);
    setTimeout(() => setItems((l) => l.filter((t) => t.id !== id)), 4000);
  }, []);

  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div
        style={{ zIndex: Z_TOAST }}
        className="pointer-events-none fixed inset-x-4 bottom-4 flex flex-col items-stretch gap-2 sm:left-auto sm:right-5 sm:w-96"
      >
        {items.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`pointer-events-auto flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.25)] ${
              t.type === "error" ? "border-red-200 text-red-700" : "border-emerald-200 text-emerald-700"
            }`}
          >
            {t.type === "error" ? <XCircle size={18} className="mt-0.5 shrink-0" /> : <CheckCircle2 size={18} className="mt-0.5 shrink-0" />}
            <span className="leading-snug">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

/* ---------------- Basics ---------------- */
export const Spinner = ({ className = "" }) => (
  <Loader2 className={`animate-spin ${className}`} size={18} />
);

export const PageLoader = () => (
  <div className="flex items-center justify-center gap-2 py-24 text-sm text-stone-400">
    <Spinner /> Loading…
  </div>
);

export const ErrorBox = ({ error, onRetry }) => (
  <div className="flex items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
    <span className="flex items-center gap-2">
      <AlertTriangle size={16} className="shrink-0" />
      {error?.message || "Something went wrong"}
    </span>
    {onRetry && (
      <button onClick={onRetry} className="shrink-0 rounded-lg bg-white px-3 py-1 font-medium text-red-700 ring-1 ring-red-200 hover:bg-red-100">
        Retry
      </button>
    )}
  </div>
);

const TONES = {
  green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  stone: "bg-stone-100 text-stone-600 ring-stone-200",
  blue: "bg-blue-50 text-blue-700 ring-blue-200",
  red: "bg-red-50 text-red-700 ring-red-200",
};
export const Badge = ({ tone = "stone", children }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset ${TONES[tone] || TONES.stone}`}>
    {children}
  </span>
);

const STATUS_TONE = {
  published: "green", Published: "green", active: "green", "Active / Open": "green", upcoming: "blue",
  draft: "stone", Draft: "stone", "Draft / Unlisted": "stone", inactive: "red",
  past: "stone", "Closing Soon": "amber",
};
export const StatusBadge = ({ value }) =>
  value ? <Badge tone={STATUS_TONE[value] || "stone"}>{value}</Badge> : <span className="text-stone-400">—</span>;

export const Button = ({ variant = "primary", loading, className = "", children, ...rest }) => {
  const styles =
    variant === "primary"
      ? "text-white shadow-sm hover:brightness-110 active:brightness-95"
      : variant === "danger"
      ? "bg-red-600 text-white shadow-sm hover:bg-red-700"
      : "bg-white text-stone-700 ring-1 ring-inset ring-stone-300 hover:bg-stone-50";
  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      style={variant === "primary" ? { backgroundColor: ACCENT } : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#780042]/40 disabled:cursor-not-allowed disabled:opacity-60 ${styles} ${className}`}
    >
      {loading && <Spinner />} {children}
    </button>
  );
};

/* ---------------- Modal + Confirm ----------------
   Rendered in a portal on <body> so it is never trapped under the site navbar
   or inside another stacking context. Header stays fixed, body scrolls. */
export function Modal({ title, onClose, children, wide }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      style={{ zIndex: Z_MODAL }}
      className="fixed inset-0 flex items-end justify-center bg-stone-950/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[88dvh] sm:rounded-2xl ${wide ? "sm:max-w-3xl" : "sm:max-w-md"}`}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-stone-200 bg-white px-5 py-4">
          <h2 className="truncate text-base font-semibold text-stone-900">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-1.5 text-stone-500 transition hover:bg-stone-100 hover:text-stone-800">
            <X size={18} />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export function ConfirmDialog({ title, message, confirmLabel = "Delete", loading, onConfirm, onCancel }) {
  return (
    <Modal title={title} onClose={onCancel}>
      <div className="p-5">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
            <AlertTriangle size={18} />
          </span>
          <p className="pt-1 text-sm leading-6 text-stone-600">{message}</p>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" onClick={onCancel}>Cancel</Button>
          <Button variant="danger" loading={loading} onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </Modal>
  );
}
