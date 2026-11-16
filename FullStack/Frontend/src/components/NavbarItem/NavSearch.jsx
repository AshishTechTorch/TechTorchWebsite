import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "./navRoutes";

// TorchX items open the external site in a new tab
const EXTERNAL = {
  "TorchX Suite": "https://torchxsuite.com/",
  "TorchX Campus": "https://torchxsuite.com/",
};

// Every page that can be found by search
const PAGES = Object.entries({
  ...ROUTES,
  "Contact Us": "/start-conversation",
}).map(([label, path]) => ({
  label,
  path: EXTERNAL[label] ?? path,
  external: label in EXTERNAL,
}));

function SearchIcon() {
  return (
    <svg
      width="20"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function NavSearch({ onOpen, onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();

  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return PAGES.filter((p) => p.label.toLowerCase().includes(q))
      .sort((a, b) => {
        const aStarts = a.label.toLowerCase().startsWith(q) ? 0 : 1;
        const bStarts = b.label.toLowerCase().startsWith(q) ? 0 : 1;
        return aStarts - bStarts;
      })
      .slice(0, 8);
  }, [query]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActive(0);
  };

  // Close when the page changes
  useEffect(() => {
    close();
  }, [location.key]);

  // Focus the input when the panel opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close();
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const go = (item) => {
    if (!item) return;

    if (item.external) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    close();
    onNavigate?.();
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-label="Search"
        aria-expanded={open}
        onClick={() => {
          onOpen?.();
          setOpen((v) => !v);
        }}
        className="flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
      >
        <SearchIcon />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[100] mt-1 w-[340px] rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search pages..."
            aria-label="Search pages"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[14px] text-gray-800 outline-none focus:border-[#780042]"
          />

          {query.trim() !== "" && (
            <ul className="m-0 mt-2 max-h-[320px] list-none overflow-y-auto p-0">
              {results.length === 0 && (
                <li className="px-3 py-2 text-[13px] text-gray-500">
                  No results found
                </li>
              )}

              {results.map((item, i) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(item)}
                    className={`w-full cursor-pointer rounded-md border-none px-3 py-2 text-left text-[14px] text-gray-800 ${
                      i === active
                        ? "bg-[#fdf1f6] text-[#780042]"
                        : "bg-transparent"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
