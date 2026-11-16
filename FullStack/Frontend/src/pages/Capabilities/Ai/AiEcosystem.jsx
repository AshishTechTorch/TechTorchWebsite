import React from "react";
import {
  MessageSquareText,
  Briefcase,
  Cloud,
  Shield,
  MonitorCog,
  Smartphone,
  Users,
} from "lucide-react";

const MAROON = "#730024";

const cards = [
  {
    icon: MessageSquareText,
    title: "IT Consultancy",
    description:
      "Technology consulting designed to guide businesses through their digital transformation journey.",
  },
  {
    icon: Briefcase,
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence as a Service that enables businesses to harness AI without the complexity of building and maintaining their own infrastructure.",
    featured: true,
    badge: "ACTIVE FOCUS",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Cloud Infrastructure as a Service designed to help businesses scale and optimize their IT operations.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Cybersecurity services focused on protecting an organization's digital assets in an environment where cyber threats continue to evolve.",
  },
  {
    icon: MonitorCog,
    title: "Software Engineering Services",
    description:
      "Engineering services designed to support businesses in achieving their technical and operational goals.",
  },
  {
    icon: Smartphone,
    title: "Software Development & Support",
    description:
      "End-to-end software development and support services designed to help businesses achieve operational excellence and drive innovation.",
  },
  {
    icon: Users,
    title: "Resource & Staffing",
    description:
      "Resource and staffing services that provide businesses with skilled professionals and flexible workforce solutions.",
  },
];

export default function TechTorchEcosystem() {
  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        {/* HEADER */}
        <div className="ecosystem-header">
          <div className="ecosystem-header-content">
            <div className="ecosystem-eyebrow">
              <span className="ecosystem-eyebrow-line"></span>
              <span className="ecosystem-eyebrow-text">
                TechTorch Ecosystem
              </span>
            </div>

            <h1 className="ecosystem-heading">TechTorch Technology Services</h1>

            <p className="ecosystem-subheading">
              Artificial Intelligence is one part of the wider technology
              capabilities offered by TechTorch Solutions.
            </p>
          </div>

          <span className="ecosystem-count">8 Integrated Practices</span>
        </div>

        {/* CARD GRID (cards are NOT clickable) */}
        <div className="ecosystem-grid">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`ecosystem-card ${card.featured ? "is-featured" : ""}`}
              >
                <div className="ecosystem-card-top">
                  <div className="ecosystem-icon-wrapper">
                    <Icon className="ecosystem-icon" />
                  </div>

                  {card.badge && (
                    <span className="ecosystem-badge">{card.badge}</span>
                  )}
                </div>

                <h3 className="ecosystem-card-title">{card.title}</h3>

                <p className="ecosystem-card-description">{card.description}</p>

                {/* Plain text footer: no link, no arrow */}
                <div className="ecosystem-card-footer">
                  <span className="ecosystem-card-label">
                    {card.footerLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .ecosystem-section { width: 100%; overflow: hidden; background: #fff; }

        .ecosystem-container {
          width: 100%;
          box-sizing: border-box;
          padding: 70px 100px;
        }

        /* HEADER */
        .ecosystem-header {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 42px;
        }
        .ecosystem-header-content { min-width: 0; flex: 1; }

        .ecosystem-eyebrow { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .ecosystem-eyebrow-line { width: 32px; height: 1px; flex-shrink: 0; background: ${MAROON}; }
        .ecosystem-eyebrow-text {
          font-family: "Inter", sans-serif;
          font-size: 11px; font-weight: 600; line-height: 1.4;
          letter-spacing: 0.08em; color: ${MAROON};
        }

        .ecosystem-heading {
          max-width: 850px; margin: 0 0 8px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px; font-weight: 700; line-height: 1.2;
          letter-spacing: -0.02em; color: #1c1c1c;
        }
        .ecosystem-subheading {
          max-width: 700px; margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 14px; font-weight: 400; line-height: 1.65; color: #737373;
        }
        .ecosystem-count {
          flex-shrink: 0; white-space: nowrap; padding: 7px 13px;
          border-radius: 999px;
          font-family: "Inter", sans-serif;
          font-size: 10px; font-weight: 500; line-height: 1.3;
          color: #737373; background: #f5f5f5;
        }

        /* GRID */
        .ecosystem-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        /* CARD: static, not clickable */
        .ecosystem-card {
          min-width: 0;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding: 24px;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          background: #fff;
          cursor: default;
        }
        .ecosystem-card.is-featured {
          border-color: rgba(115, 0, 36, 0.16);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
        }

        .ecosystem-card-top {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 21px;
        }

        .ecosystem-icon-wrapper {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-sizing: border-box;
          border: 1px solid #e5e5e5; border-radius: 8px; background: #fafafa;
        }
        .is-featured .ecosystem-icon-wrapper { border-color: ${MAROON}; background: #fdf1f6; }
        .ecosystem-icon { width: 17px; height: 17px; color: ${MAROON}; }

        /* Badge: solid maroon pill like "CORE BENEFIT" */
        .ecosystem-badge {
          flex-shrink: 0; padding: 5px 10px; border-radius: 999px;
          font-family: "Inter", sans-serif;
          font-size: 8px; font-weight: 700; line-height: 1.2;
          letter-spacing: 0.06em; white-space: nowrap;
          color: #fff; background: ${MAROON};
        }

        .ecosystem-card-title {
          margin: 0 0 9px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px; font-weight: 700; line-height: 1.4; color: #1c1c1c;
        }
        .ecosystem-card-description {
          flex: 1; margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 12.5px; font-weight: 400; line-height: 1.7; color: #737373;
        }


        /* <= 1200px */
        @media (max-width: 1200px) {
          .ecosystem-container { padding: 60px 40px; }
          .ecosystem-heading { font-size: 35px; }
          .ecosystem-grid { gap: 20px; }
          .ecosystem-card { padding: 21px; }
        }

        /* <= 900px */
        @media (max-width: 900px) {
          .ecosystem-container { padding: 52px 40px; }
          .ecosystem-header { align-items: flex-start; gap: 18px; margin-bottom: 32px; }
          .ecosystem-heading { font-size: 32px; }
          .ecosystem-subheading { font-size: 13px; }
          .ecosystem-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
          .ecosystem-card { min-height: 275px; padding: 20px; }
          .ecosystem-card-description { font-size: 12px; }
        }

        /* <= 700px */
        @media (max-width: 700px) {
          .ecosystem-container { padding: 44px 24px; }
          .ecosystem-header { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 28px; }
          .ecosystem-eyebrow { gap: 7px; margin-bottom: 11px; }
          .ecosystem-eyebrow-line { width: 26px; }
          .ecosystem-eyebrow-text { font-size: 10px; }
          .ecosystem-heading { max-width: 100%; font-size: 28px; line-height: 1.22; }
          .ecosystem-subheading { max-width: 100%; font-size: 12px; }
          .ecosystem-count { font-size: 9px; padding: 6px 11px; }
          .ecosystem-grid { grid-template-columns: 1fr; gap: 15px; }
          .ecosystem-card { min-height: auto; padding: 20px; }
          .ecosystem-card-top { margin-bottom: 18px; }
          .ecosystem-card-description { line-height: 1.65; }
        }

        /* <= 480px */
        @media (max-width: 480px) {
          .ecosystem-container { padding: 36px 16px; }
          .ecosystem-header { margin-bottom: 24px; }
          .ecosystem-eyebrow-line { width: 22px; }
          .ecosystem-eyebrow-text { font-size: 9px; letter-spacing: 0.07em; }
          .ecosystem-heading { font-size: 25px; line-height: 1.2; }
          .ecosystem-subheading { font-size: 11.5px; }
          .ecosystem-count { padding: 5px 10px; font-size: 8.5px; }
          .ecosystem-grid { gap: 13px; }
          .ecosystem-card { padding: 17px; border-radius: 10px; }
          .ecosystem-card-top { margin-bottom: 16px; }
          .ecosystem-icon-wrapper { width: 36px; height: 36px; }
          .ecosystem-icon { width: 16px; height: 16px; }
          .ecosystem-badge { padding: 4px 8px; font-size: 7px; }
          .ecosystem-card-title { margin-bottom: 8px; font-size: 13px; }
          .ecosystem-card-description { margin-bottom: 16px; font-size: 11.5px; }
        }

        /* <= 360px */
        @media (max-width: 360px) {
          .ecosystem-heading { font-size: 23px; }
          .ecosystem-subheading { font-size: 11px; }
          .ecosystem-card { padding: 16px; }
          .ecosystem-card-title { font-size: 12.5px; }
          .ecosystem-card-description { font-size: 11px; }
          .ecosystem-badge { font-size: 6.5px; }
        }
      `}</style>
    </section>
  );
}
