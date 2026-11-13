import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Search, X } from "lucide-react";
import { ROUTES } from "./navRoutes";

/* ---------------- Settings (edit these) ---------------- */

// Extra words people might type for a page (label -> keywords)
const KEYWORDS = {
  "Artificial Intelligence (AaaS)": "ai machine learning ml automation",
  "Cloud Infrastructure Services (IaaS)":
    "cloud aws azure hosting migration devops",
  "Cyber Security": "security protection threat compliance",
  "IT Consultancy": "consulting advisory strategy roadmap",
  "Software Engineering Outsourcing": "engineering development outsourcing",
  "Software Development & Support":
    "custom software app development maintenance support",
  "Resource and Staffing": "staffing hiring talent resources augmentation",
  "TorchX Suite": "platform hr talent product",
  "TorchX Campus": "platform education campus",
  News: "blog blogs articles updates",
  "Join Us": "careers jobs hiring work apply",
  ERP: "enterprise resource planning",
  CRM: "customer relationship management sales",
  "Customer Centricity": "know more brochure",
};

// Pages that are not in the menu but people will look for
const EXTRA_PAGES = [
  {
    label: "Contact Us",
    path: "/start-conversation",
    keywords:
      "contact enquiry get in touch office address phone email location map noida bareilly",
  },
  {
    label: "Talk to an Expert",
    path: "/talk-to-expert",
    keywords: "expert consultation call speak book",
  },
  {
    label: "Ask a Question",
    path: "/explore-questions",
    keywords: "faq help questions support",
  },
  {
    label: "Our Services",
    path: "/OurService",
    keywords: "services portfolio offerings",
  },
  {
    label: "IT Augmentation",
    path: "/ItAugmentation",
    keywords: "staffing contract hiring bench remote offshore dedicated team",
  },
  {
    label: "Explore Solutions",
    path: "/explore-solutions",
    keywords: "solutions products",
  },
];

// Shown when the search box is empty
const POPULAR = [
  "IT Consultancy",
  "Artificial Intelligence (AaaS)",
  "Cloud Infrastructure Services (IaaS)",
  "Cyber Security",
  "Contact Us",
  "Join Us",
];

const MAX_RESULTS = 8;
/* -------------------------------------------------------- */

// One flat list of every searchable page
const PAGES = (() => {
  const seen = new Set();
  const list = [];

  const add = (label, path, keywords = "") => {
    if (seen.has(label)) return;
    seen.add(label);
    list.push({
      label,
      path,
      keywords,
      haystack: `${label} ${keywords}`.toLowerCase(),
    });
  };

  Object.entries(ROUTES).forEach(([label, path]) =>
    add(label, path, KEYWORDS[label] || ""),
  );
  EXTRA_PAGES.forEach((p) => add(p.label, p.path, p.keywords));

  return list;
})();

function searchPages(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    return POPULAR.map((label) => PAGES.find((p) => p.label === label)).filter(
      Boolean,
    );
  }

  const tokens = q.split(/\s+/);

  return PAGES.map((page) => {
    // every word typed must appear somewhere in the label or keywords
    if (!tokens.every((t) => page.haystack.includes(t))) return null;

    const label = page.label.toLowerCase();
    let score = 0;
    if (label === q) score += 10;
    if (label.startsWith(q)) score += 6;
    if (label.includes(q)) score += 4;
    tokens.forEach((t) => {
      if (label.split(/[\s&()/-]+/).some((w) => w.startsWith(t))) score += 2;
      else if (label.includes(t)) score += 1;
    });
    return { page, score };
  })
    .filter(Boolean)
    .sort(
      (a, b) => b.score - a.score || a.page.label.localeCompare(b.page.label),
    )
    .slice(0, MAX_RESULTS)
    .map((r) => r.page);
}

export default function SearchOverlay({ onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = useMemo(() => searchPages(query), [query]);

  /* Focus the box, lock page scroll, Escape closes */
  useEffect(() => {
    inputRef.current?.focus();

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  useEffect(() => setActive(0), [query]);

  /* Keep the highlighted result visible while using the arrow keys */
  useEffect(() => {
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (page) => {
    onClose();
    navigate(page.path);
  };

  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active]);
    }
  };

  return createPortal(
    <div
      className="site-search-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search TechTorch"
    >
      <div className="site-search-box" onClick={(e) => e.stopPropagation()}>
        <div className="site-search-input-row">
          <Search size={20} strokeWidth={2.2} className="site-search-icon" />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Search services, industries, pages…"
            aria-label="Search the website"
            data-no-auth-guard
            autoComplete="off"
            spellCheck="false"
          />

          <button
            type="button"
            className="site-search-close"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={18} strokeWidth={2.4} />
          </button>
        </div>

        <p className="site-search-label">
          {query.trim() ? "RESULTS" : "POPULAR PAGES"}
        </p>

        {results.length > 0 ? (
          <ul className="site-search-list" ref={listRef} role="listbox">
            {results.map((page, i) => (
              <li key={page.label} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  className={`site-search-item ${i === active ? "is-active" : ""}`}
                  onClick={() => go(page)}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="site-search-item-text">
                    <strong>{page.label}</strong>
                    <small>{page.path}</small>
                  </span>
                  <ArrowRight size={16} strokeWidth={2.2} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="site-search-empty">
            <p>No pages found for “{query.trim()}”.</p>
            <button
              type="button"
              onClick={() => go({ path: "/start-conversation" })}
            >
              Talk to our team instead
              <ArrowRight size={14} strokeWidth={2.2} />
            </button>
          </div>
        )}

        <p className="site-search-hint">
          <kbd>↑</kbd> <kbd>↓</kbd> to move · <kbd>Enter</kbd> to open ·{" "}
          <kbd>Esc</kbd> to close
        </p>
      </div>

      <style>{`
        .site-search-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100001;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 90px 16px 24px;
          background: rgba(15, 8, 20, 0.55);
          backdrop-filter: blur(3px);
          overflow-y: auto;
          animation: siteSearchFade 0.2s ease-out;
        }

        .site-search-box {
          width: 100%;
          max-width: 620px;
          background: #ffffff;
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);
          animation: siteSearchPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: "Inter", sans-serif;
        }

        .site-search-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 6px 12px;
          border-bottom: 1px solid #eeeeee;
        }

        .site-search-icon {
          flex: 0 0 auto;
          color: #8a0048;
        }

        .site-search-input-row input {
          flex: 1;
          min-width: 0;
          height: 44px;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          color: #121826;
          font-family: "Inter", sans-serif;
        }

        .site-search-input-row input::placeholder {
          color: #aab0ba;
        }

        .site-search-close {
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          background: #f3f4f6;
          color: #555;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .site-search-close:hover {
          background: #8a0048;
          color: #ffffff;
        }

        .site-search-label {
          margin: 14px 8px 6px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #8b93a0;
        }

        .site-search-list {
          list-style: none;
          margin: 0;
          padding: 0;
          max-height: 52vh;
          overflow-y: auto;
        }

        .site-search-item {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 12px;
          border: none;
          border-radius: 12px;
          background: transparent;
          text-align: left;
          cursor: pointer;
          color: #8a0048;
        }

        .site-search-item.is-active {
          background: #fcecf4;
        }

        .site-search-item-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .site-search-item-text strong {
          font-size: 14px;
          font-weight: 600;
          color: #121826;
        }

        .site-search-item-text small {
          font-size: 11px;
          color: #8b93a0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .site-search-empty {
          padding: 22px 12px 14px;
          text-align: center;
        }

        .site-search-empty p {
          margin: 0 0 12px;
          font-size: 14px;
          color: #5b6472;
        }

        .site-search-empty button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: none;
          background: transparent;
          color: #8a0048;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .site-search-hint {
          margin: 12px 8px 0;
          padding-top: 12px;
          border-top: 1px solid #eeeeee;
          font-size: 11px;
          color: #9aa1ad;
        }

        .site-search-hint kbd {
          padding: 1px 6px;
          border: 1px solid #e1e4e8;
          border-radius: 5px;
          background: #f7f8fa;
          font-family: inherit;
          font-size: 10px;
          color: #5b6472;
        }

        @media (max-width: 600px) {
          .site-search-backdrop { padding-top: 70px; }
          .site-search-hint { display: none; }
        }

        @keyframes siteSearchFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes siteSearchPop {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-search-backdrop,
          .site-search-box { animation: none; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
