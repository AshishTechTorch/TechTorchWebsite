import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

/* ---------------- Settings (edit these) ---------------- */
const IMAGE_SRC = "/torchx-talent-popup.png";
const LINK_URL = "https://torchxsuite.com/talent/";
const DELAY_MS = 0; // wait before the pop-up appears
const STORAGE_KEY = "torchx_talent_popup_seen";

// -1 = show on EVERY page load / refresh (use this while testing)
//  0 = show once per browser session (again after the tab is closed)
//  7 = after it is closed, do not show again for 7 days
const HIDE_FOR_DAYS = -1;

// Largest width of the pop-up on big screens (in pixels).
// The poster is 1000px wide, so keep this at 1000 or less.
const POPUP_MAX_WIDTH = 800;

// Pages where the pop-up should not appear
const HIDE_ON = ["/signin", "/signup", "/talk-to-expert"];
/* -------------------------------------------------------- */

function wasSeen() {
  if (HIDE_FOR_DAYS < 0) return false; // always show
  try {
    if (HIDE_FOR_DAYS === 0) {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    }
    const saved = Number(localStorage.getItem(STORAGE_KEY) || 0);
    return Date.now() - saved < HIDE_FOR_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false; // storage blocked: just show it
  }
}

function markSeen() {
  if (HIDE_FOR_DAYS < 0) return; // nothing to remember
  try {
    if (HIDE_FOR_DAYS === 0) {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } else {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }
  } catch {
    /* ignore */
  }
}

export default function PromoPopup() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  const hidden = HIDE_ON.includes(pathname.toLowerCase());

  /* Open after a short delay, once */
  useEffect(() => {
    if (hidden || wasSeen()) return;
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, [hidden]);

  const close = () => {
    markSeen();
    setOpen(false);
  };

  /* Escape closes, background scroll is locked while open */
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open || hidden) return null;

  return (
    <div
      className="promo-backdrop"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="TorchX Talent: HR management, free forever"
    >
      <div
        className="promo-box"
        style={{ "--popup-max": `${POPUP_MAX_WIDTH}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="promo-close"
          onClick={close}
          aria-label="Close pop-up"
        >
          <X size={20} strokeWidth={2.4} />
        </button>

        <a
          href={LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={markSeen}
          className="promo-link"
        >
          <img
            src={IMAGE_SRC}
            alt="TorchX Talent: HR management, free forever. Get started for free."
            className="promo-image"
          />
        </a>
      </div>

      <style>{`
        .promo-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          padding: 24px 16px;
          background: rgba(15, 8, 20, 0.62);
          backdrop-filter: blur(3px);
          animation: promoFade 0.3s ease-out;

          /* Pop-up scrolls when the poster is taller than the screen */
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        .promo-box {
          position: relative;
          width: min(88vw, var(--popup-max, 800px));
          /* margin:auto centers when it fits, top-aligns when it overflows */
          margin: auto;
          animation: promoPop 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .promo-link {
          display: block;
          line-height: 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
        }

        .promo-image {
          display: block;
          width: 100%;
          height: auto;
          background: #fff;
        }

        .promo-close {
          position: absolute;
          top: -14px;
          right: -14px;
          z-index: 2;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: #fff;
          color: #730042;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .promo-close:hover {
          transform: scale(1.08);
          background: #730042;
          color: #fff;
        }

        .promo-close:focus-visible {
          outline: 3px solid #f6c6de;
          outline-offset: 2px;
        }

        @media (max-width: 480px) {
          .promo-close {
            top: -12px;
            right: -4px;
          }
        }

        @keyframes promoFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes promoPop {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .promo-backdrop,
          .promo-box { animation: none; }
        }
      `}</style>
    </div>
  );
}
