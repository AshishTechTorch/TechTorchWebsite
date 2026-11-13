import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

/* ---------------- Settings (edit these) ---------------- */

// Poster image (put the file in the /public folder).
// If you use the JPG version, change the ending to .jpg
const IMAGE_SRC = "/torchx-talent-popup.png";

// Where the website link and the "Get Started for Free" button go
const LINK_URL = "https://torchxsuite.com/talent/";

// support@torchxsuite.com opens Gmail with this address filled in
const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=support@torchxsuite.com&su=TorchX%20Talent%20Enquiry";

// Phone number starts a call
const PHONE_URL = "tel:+917454098820";

// Wait before the pop-up appears (0 = as soon as the image is loaded)
const DELAY_MS = 0;

// -1 = show on EVERY page load / refresh (use this while testing)
//  0 = show once per browser session (again after the tab is closed)
//  7 = after it is closed, do not show again for 7 days
// Before you publish the site, change this to 0 or 7.
const HIDE_FOR_DAYS = -1;

// Largest width of the pop-up on big screens (in pixels).
// The large poster is 1600px wide, so keep this at 1600 or less.
const POPUP_MAX_WIDTH = 1000;

const STORAGE_KEY = "torchx_talent_popup_seen";

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

  /* Load the poster first, then open (no empty box) */
  useEffect(() => {
    if (hidden || wasSeen()) return;

    let timer;
    const img = new Image();
    img.src = IMAGE_SRC;

    const show = () => {
      timer = setTimeout(() => setOpen(true), DELAY_MS);
    };

    if (img.complete) {
      show();
    } else {
      img.onload = show;
      img.onerror = show;
    }

    return () => {
      clearTimeout(timer);
      img.onload = null;
      img.onerror = null;
    };
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

        <div className="promo-link">
          <img
            src={IMAGE_SRC}
            alt="TorchX Talent: HR management, free forever. Get started for free."
            className="promo-image"
          />

          {/* Get Started for Free button */}
          <a
            href={LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={markSeen}
            className="promo-hot"
            style={{
              left: "67.5%",
              top: "87.2%",
              width: "27%",
              height: "4.6%",
            }}
            aria-label="Get started for free"
          />

          {/* support@torchxsuite.com: opens Gmail */}
          <a
            href={EMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={markSeen}
            className="promo-hot"
            style={{ left: "3%", top: "96%", width: "27%", height: "3.6%" }}
            aria-label="Email support@torchxsuite.com"
          />

          {/* Phone number: starts a call */}
          <a
            href={PHONE_URL}
            onClick={markSeen}
            className="promo-hot"
            style={{ left: "38%", top: "96%", width: "20%", height: "3.6%" }}
            aria-label="Call +91 74540 98820"
          />

          {/* Website link */}
          <a
            href={LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={markSeen}
            className="promo-hot"
            style={{ left: "65%", top: "96%", width: "31%", height: "3.6%" }}
            aria-label="Open torchxsuite.com/talent"
          />
        </div>
      </div>

      <style>{`
        .promo-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 24px 16px;
          background: rgba(15, 8, 20, 0.62);
          backdrop-filter: blur(3px);
          animation: promoFade 0.3s ease-out;
        }

        .promo-box {
          position: relative;
          width: min(94vw, var(--popup-max, 1000px));
          margin: auto;
          animation: promoPop 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .promo-link {
          position: relative;
          display: block;
          line-height: 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
        }

        .promo-hot {
          position: absolute;
          display: block;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .promo-hot:hover,
        .promo-hot:focus-visible {
          background: rgba(115, 0, 66, 0.1);
          outline: none;
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
