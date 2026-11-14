import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

/* ---------------- Settings (edit these) ---------------- */
const TITLE = "Get your 14 days free trial now!";
const IMAGE_SRC = "/torchx-talent-popup.png";
const LINK_URL = "https://torchxsuite.com/talent/";
const CHAT_URL = "https://wa.me/917078377916"; // country code + number, no "+" or spaces
const CHAT_LABEL = "Chat Now";
const DELAY_MS = 0; // wait before the pop-up appears
const STORAGE_KEY = "torchx_talent_popup_last_closed";

// Support email (poster me jo email dikh rahi hai uspar click karne par
// user ka mail app khulega aur "To" me ye email apne aap aa jayegi)
const SUPPORT_EMAIL = "support@torchxsuite.com";
const SUPPORT_SUBJECT = "Support request - TorchX Talent";
const SUPPORT_BODY = "Hello TorchX Team,\n\n";

const MAILTO_URL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  SUPPORT_SUBJECT
)}&body=${encodeURIComponent(SUPPORT_BODY)}`;

// Desktop par click karne par kaunsa mail khule:
//   "gmail"   -> Gmail web compose (new tab)
//   "outlook" -> Outlook web compose (new tab)
//   "mailto"  -> computer ka default mail app (agar set nahi hai to kuch nahi hoga)
// Mobile par hamesha mailto chalega (phone ka default mail app / Gmail app khulega)
const DESKTOP_MAIL = "gmail";

const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  SUPPORT_EMAIL
)}&su=${encodeURIComponent(SUPPORT_SUBJECT)}&body=${encodeURIComponent(
  SUPPORT_BODY
)}`;

const OUTLOOK_URL = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
  SUPPORT_EMAIL
)}&subject=${encodeURIComponent(SUPPORT_SUBJECT)}&body=${encodeURIComponent(
  SUPPORT_BODY
)}`;

// Email hotspot ki position check karne ke liye true karo (laal box dikhega).
// Sahi baith jaye to wapas false kar do.
const DEBUG_HOTSPOT = false;

// After the visitor closes the pop-up, it comes back after this many minutes
// (even if they stay on the page, and also after a refresh once time is up).
// Set to 0 to show it only once per page load (no coming back).
const REOPEN_AFTER_MINUTES = 1;

// Largest width of the pop-up on big screens (in pixels).
const POPUP_MAX_WIDTH = 800;

// Pages where the pop-up should not appear
const HIDE_ON = ["/signin", "/signup", "/talk-to-expert"];
/* -------------------------------------------------------- */

const REOPEN_MS = REOPEN_AFTER_MINUTES * 60 * 1000;

// Fallback if the browser blocks storage
let lastClosedInMemory = 0;

// How many ms until the pop-up is allowed to show again (0 = right now)
function msUntilAllowed() {
  if (REOPEN_MS <= 0) return 0;
  let last = lastClosedInMemory;
  try {
    last = Math.max(last, Number(localStorage.getItem(STORAGE_KEY) || 0));
  } catch {
    /* storage blocked: use memory value */
  }
  return Math.max(0, last + REOPEN_MS - Date.now());
}

function markSeen() {
  if (REOPEN_MS <= 0) return;
  lastClosedInMemory = Date.now();
  try {
    localStorage.setItem(STORAGE_KEY, String(lastClosedInMemory));
  } catch {
    /* ignore */
  }
}

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function handleEmailClick(e) {
  markSeen();

  // Mobile ya "mailto" mode: normal mailto link chalne do
  if (isMobileDevice() || DESKTOP_MAIL === "mailto") return;

  // Desktop: web mail compose new tab me kholo
  e.preventDefault();
  const url = DESKTOP_MAIL === "outlook" ? OUTLOOK_URL : GMAIL_URL;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = MAILTO_URL; // popup blocked -> mailto fallback
}

export default function PromoPopup() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const shownOnce = useRef(false);

  const hidden = HIDE_ON.includes(pathname.toLowerCase());

  /* Open after a short delay. When it is closed, this runs again and
     schedules the next appearance after REOPEN_AFTER_MINUTES. */
  useEffect(() => {
    if (hidden || open) return;
    if (REOPEN_MS <= 0 && shownOnce.current) return;

    const wait = Math.max(DELAY_MS, msUntilAllowed());
    const t = setTimeout(() => {
      shownOnce.current = true;
      setOpen(true);
    }, wait);
    return () => clearTimeout(t);
  }, [hidden, open]);

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
      aria-label={TITLE}
    >
      <div
        className="promo-box"
        style={{ "--popup-max": `${POPUP_MAX_WIDTH}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title + close icon */}
        <div className="promo-header">
          <h2 className="promo-title">{TITLE}</h2>

          <button
            ref={closeRef}
            type="button"
            className="promo-close"
            onClick={close}
            aria-label="Close pop-up"
          >
            <X size={18} strokeWidth={2.4} />
          </button>
        </div>

        {/* Poster */}
        <div className="promo-body">
          <div className="promo-poster">
            <img
              src={IMAGE_SRC}
              alt="TorchX Talent: HR management, free forever. Get started for free."
              className="promo-image"
            />

            {/* Poori image par click -> trial page */}
            <a
              href={LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={markSeen}
              className="promo-link"
              aria-label="Open TorchX Talent"
            />

            {/* Email par click -> mail app (To: support@torchxsuite.com) */}
            <a
              href={MAILTO_URL}
              onClick={handleEmailClick}
              className={`promo-hotspot promo-hotspot-email${
                DEBUG_HOTSPOT ? " is-debug" : ""
              }`}
              aria-label={`Email ${SUPPORT_EMAIL}`}
              title={SUPPORT_EMAIL}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="promo-footer">
          <a
            href={CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={markSeen}
            className="promo-btn promo-btn-chat"
          >
            <span aria-hidden="true">💬</span> {CHAT_LABEL}
          </a>

          <button
            type="button"
            className="promo-btn promo-btn-close"
            onClick={close}
          >
            Close
          </button>
        </div>
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

          /* Pop-up scrolls when it is taller than the screen */
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        .promo-box {
          position: relative;
          width: min(88vw, var(--popup-max, 800px));
          /* margin:auto centers when it fits, top-aligns when it overflows */
          margin: auto;
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
          animation: promoPop 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .promo-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 18px;
          border-bottom: 1px solid #eeeeee;
        }

        .promo-title {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 700;
          color: #121826;
        }

        .promo-close {
          flex: 0 0 auto;
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 50%;
          background: #f3f4f6;
          color: #730042;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
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

        .promo-body {
          padding: 14px 18px 0;
        }

        .promo-poster {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          line-height: 0;
        }

        .promo-image {
          display: block;
          width: 100%;
          height: auto;
          background: #fff;
        }

        /* poori image clickable (trial page) */
        .promo-link {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        /* email wala invisible clickable area, image link ke upar */
        .promo-hotspot {
          position: absolute;
          z-index: 2;
          cursor: pointer;
        }

        /* Position image ke % me hai. Zarurat ho to left/bottom/width/height badlo. */
        .promo-hotspot-email {
          left: 3%;
          bottom: 0.4%;
          width: 26.5%;
          height: 3%;
        }

        .promo-hotspot.is-debug {
          outline: 2px dashed red;
          background: rgba(255, 0, 0, 0.15);
        }

        .promo-footer {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 10px;
          padding: 14px 18px 18px;
        }

        .promo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 42px;
          padding: 0 20px;
          border: none;
          border-radius: 10px;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .promo-btn:hover {
          transform: translateY(-1px);
        }

        .promo-btn-chat {
          background: #198754;
          color: #ffffff;
        }

        .promo-btn-chat:hover {
          background: #157347;
        }

        .promo-btn-close {
          background: #6c757d;
          color: #ffffff;
        }

        .promo-btn-close:hover {
          background: #5c636a;
        }

        @media (max-width: 480px) {
          .promo-title { font-size: 16px; }
          .promo-footer { justify-content: stretch; }
          .promo-btn { flex: 1; }
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