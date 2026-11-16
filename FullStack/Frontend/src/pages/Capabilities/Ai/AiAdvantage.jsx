import React from "react";
import { CloudOff, Gauge, ShieldCheck } from "lucide-react";

const MAROON = "#730024";

const benefits = [
  {
    icon: CloudOff,
    title: "Zero Capital Infrastructure Burden",
    description:
      "Bypass multi-million dollar hardware procurement cycles, specialized GPU cluster maintenance, and specialized data-center cooling overhead.",
  },
  {
    icon: Gauge,
    title: "Rapid Enterprise Model Deployment",
    description:
      "Integrate advanced cognitive workflows, LLM orchestration, and enterprise predictive models immediately into your operational stack without delay.",
    featured: true,
    badge: "CORE BENEFIT",
  },
  {
    icon: ShieldCheck,
    title: "Governed & Scalable Operations",
    description:
      "Benefit from institutional-grade model safety, compliance isolation, continuous data privacy protocols, and automatic capacity auto-scaling.",
  },
];

export default function WhyAIaaS() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* HEADER */}
        <div className="why-header">
          <div className="why-eyebrow">
            <span className="why-eyebrow-line"></span>
            <span className="why-eyebrow-text">Architectural Advantage</span>
          </div>

          <h2 className="why-heading">
            Why Artificial Intelligence as a Service?
          </h2>

          <h3 className="why-subtitle">
            Access AI Without Building the Entire Infrastructure
          </h3>

          <p className="why-text">
            Building and maintaining technology infrastructure can add
            complexity to an organization's technology environment. TechTorch's
            Artificial Intelligence as a Service approach enables businesses to
            harness AI capabilities without taking on the complete
            responsibility of building and maintaining their own infrastructure.
          </p>
        </div>

        {/* CARDS (not clickable, no footer) */}
        <div className="why-grid">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`why-card ${item.featured ? "is-featured" : ""}`}
              >
                <div className="why-card-top">
                  <div className="why-icon-wrapper">
                    <Icon className="why-icon" />
                  </div>

                  {item.badge && (
                    <span className="why-badge">{item.badge}</span>
                  )}
                </div>

                <h3 className="why-card-title">{item.title}</h3>

                <p className="why-card-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-section { width: 100%; overflow: hidden; background: #f2f0ee; }

        .why-container {
          width: 100%;
          box-sizing: border-box;
          padding: 70px 100px;
        }

        /* HEADER */
        .why-header { max-width: 1050px; margin-bottom: 52px; }

        .why-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .why-eyebrow-line { width: 40px; height: 1px; flex-shrink: 0; background: ${MAROON}; }
        .why-eyebrow-text {
          font-family: "Inter", sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em; color: ${MAROON};
        }

        .why-heading {
          margin: 0 0 12px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 44px; font-weight: 700; line-height: 1.15;
          letter-spacing: -0.03em; color: #1c1c1c;
        }
        .why-subtitle {
          margin: 0 0 16px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 24px; font-weight: 500; line-height: 1.3;
          letter-spacing: -0.01em; color: ${MAROON};
        }
        .why-text {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 15px; font-weight: 400; line-height: 1.75; color: #737373;
        }

        /* GRID */
        .why-grid {
          min-width: 0;
          height: 100%;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
          align-items: start;
        }

        /* CARD: static, not clickable */
        .why-card {
          min-width: 0;
          min-height: 250px;
          box-sizing: border-box;
          padding: 30px;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          background: #fff;
          cursor: default;
        }
        .why-card.is-featured {
          margin-top: -4px;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
        }

        .why-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 26px;
        }

        .why-icon-wrapper {
          width: 50px; height: 50px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-sizing: border-box;
          border: 1px solid #ecd5de; border-radius: 10px; background: #fbeff3;
        }
        .why-icon { width: 22px; height: 22px; color: ${MAROON}; }

        .why-badge {
          padding: 6px 12px; border-radius: 999px;
          font-family: "Inter", sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: 0.06em;
          white-space: nowrap; color: #fff; background: ${MAROON};
        }

        .why-card-title {
          margin: 0 0 12px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px; font-weight: 600; line-height: 1.35; color: #1c1c1c;
        }
        .why-card-description {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 15px; font-weight: 400; line-height: 1.7; color: #737373;
        }

        /* <= 1200px */
        @media (max-width: 1200px) {
          .why-container { padding: 60px 40px; }
          .why-heading { font-size: 38px; }
          .why-grid { gap: 20px; }
          .why-card { padding: 24px; }
        }

        /* <= 900px */
        @media (max-width: 900px) {
          .why-container { padding: 52px 40px; }
          .why-header { margin-bottom: 36px; }
          .why-heading { font-size: 34px; }
          .why-subtitle { font-size: 20px; }
          .why-text { font-size: 14px; }
          .why-grid { grid-template-columns: 1fr; gap: 18px; }
          .why-card { min-height: auto; }
          .why-card.is-featured { margin-top: 0; }
        }

        /* <= 700px */
        @media (max-width: 700px) {
          .why-container { padding: 44px 24px; }
          .why-heading { font-size: 28px; }
          .why-subtitle { font-size: 18px; }
          .why-card { padding: 20px; }
          .why-card-top { margin-bottom: 18px; }
          .why-card-title { font-size: 16px; }
          .why-card-description { font-size: 13.5px; }
        }

        /* <= 480px */
        @media (max-width: 480px) {
          .why-container { padding: 36px 16px; }
          .why-heading { font-size: 25px; }
          .why-subtitle { font-size: 16px; }
          .why-text { font-size: 13px; }
          .why-eyebrow-line { width: 28px; }
          .why-eyebrow-text { font-size: 10px; }
          .why-icon-wrapper { width: 44px; height: 44px; }
          .why-icon { width: 20px; height: 20px; }
          .why-badge { font-size: 8px; padding: 5px 10px; }
        }
      `}</style>
    </section>
  );
}
