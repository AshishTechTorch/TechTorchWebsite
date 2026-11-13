import React, { useState } from "react";
import { MapPin } from "lucide-react";

/* ---------------- Settings (edit these) ---------------- */
const OFFICES = [
  {
    id: "bareilly",
    label: "Bareilly Office",
    address:
      "M-1 Vrindavan Colony, IVRI Road, Near Izzatnagar Police Station, Bareilly, Uttar Pradesh 243122, India",
    // Paste ONLY the src="..." link from the Google Maps embed code
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.967247293842!2d79.4325611!3d28.390057199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0075957e78e9f%3A0xf1d5b04ea8b3ab01!2sTechTorch%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1794547669301!5m2!1sen!2sin",
  },
  {
    id: "noida",
    label: "Noida Office",
    address:
      "Suite G/11, B-8 Sector-2, Near Sector-15 Metro Station, Noida, Uttar Pradesh 201301, India",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897726.7896096581!2d77.71347262192192!3d28.487217002930922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a6f57cf8fd%3A0x7cbdf4a92ebfcac7!2sTechTorch%20Solutions!5e0!3m2!1sen!2sin!4v1794547710725!5m2!1sen!2sin",
  },
];
/* -------------------------------------------------------- */

const mapOpenUrl = (o) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}`;

export default function OfficeMap() {
  const [activeId, setActiveId] = useState(OFFICES[0].id);
  const active = OFFICES.find((o) => o.id === activeId) || OFFICES[0];

  return (
    <div className="office-map-card">
      <p className="office-map-title">OUR LOCATIONS</p>

      <div className="office-map-tabs" role="tablist">
        {OFFICES.map((o) => (
          <button
            key={o.id}
            type="button"
            role="tab"
            aria-selected={o.id === activeId}
            className={`office-map-tab ${o.id === activeId ? "is-active" : ""}`}
            onClick={() => setActiveId(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="office-map-frame">
        <iframe
          key={active.id}
          title={`${active.label} location map`}
          src={active.embed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <a
        className="office-map-link"
        href={mapOpenUrl(active)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin size={16} strokeWidth={2.4} />
        Open in Google Maps
      </a>

      <style>{`
        .office-map-card {
          background: #f4f6fa;
          border: 1px solid #e3e7ef;
          border-radius: 28px;
          padding: 24px;
          width: 100%;
          box-sizing: border-box;
        }

        .office-map-title {
          margin: 0 0 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #5b6472;
        }

        .office-map-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }

        .office-map-tab {
          border: 1px solid #d9dde6;
          background: #fff;
          color: #333;
          font-size: 13px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .office-map-tab:hover {
          border-color: #8a0045;
          color: #8a0045;
        }

        .office-map-tab.is-active {
          background: #8a0045;
          border-color: #8a0045;
          color: #fff;
        }

        .office-map-frame {
          border-radius: 18px;
          overflow: hidden;
          background: #e8ebf1;
          aspect-ratio: 4 / 3;
          min-height: 260px;
        }

        .office-map-frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .office-map-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 14px;
          font-weight: 600;
          color: #8a0045;
          text-decoration: none;
        }

        .office-map-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .office-map-card { padding: 16px; border-radius: 20px; }
        }
      `}</style>
    </div>
  );
}
