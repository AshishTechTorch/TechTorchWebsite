import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  BookOpen,
  Gauge,
  Ear,
  Star,
  TrendingUp,
} from "lucide-react";

const NAVY = "#14193a";
const WINE = "#7A1F3D";
const CRIMSON = "#8b0f2f";
const MUTED = "#5b6478";

const principles = [
  {
    icon: ShieldCheck,
    title: "Respect",
    body: "Treat people with professionalism, consideration and dignity in every interaction.",
  },
  {
    icon: Users,
    title: "Collaboration",
    body: "Share knowledge, exchange ideas and work together towards common objectives.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    body: "Stay curious, learn from experience and remain open to new perspectives.",
  },
  {
    icon: Gauge,
    title: "Accountability",
    body: "Take ownership of responsibilities, communicate clearly and approach decisions thoughtfully.",
  },
];

const practices = [
  {
    icon: Ear,
    title: "Listen to Different Perspectives",
    body: "Consider ideas on their merits and create space for constructive discussion.",
  },
  {
    icon: Star,
    title: "Value Individual Contributions",
    body: "Recognise the skills, knowledge and effort people bring to their work.",
  },
  {
    icon: TrendingUp,
    title: "Support Professional Development",
    body: "Encourage knowledge sharing, feedback and opportunities to strengthen professional capabilities.",
  },
];

export default function CultureInclusion() {
  return (
    <div className="ci-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .ci-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
        }

        .ci-page *,
        .ci-page *::before,
        .ci-page *::after {
          box-sizing: border-box;
        }

        .ci-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 32px;
          padding-right: 32px;
        }

        /* ---------- shared text styles ---------- */

        .ci-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 14px;
          color: ${CRIMSON};
          font-size: 10.5px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ci-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${CRIMSON};
        }

        .ci-h1,
        .ci-h2,
        .ci-card-title,
        .ci-cta-title {
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        .ci-h2 {
          margin: 0 0 12px;
          color: ${NAVY};
          font-size: 34px;
          line-height: 1.18;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .ci-sub {
          max-width: 640px;
          margin: 0;
          color: ${MUTED};
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* ---------- 1. hero ---------- */

        .ci-hero {
          background: #ffffff;
          border-bottom: 1px solid #eef0f5;
        }

        .ci-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
          padding-top: 84px;
          padding-bottom: 84px;
        }

        .ci-h1 {
          margin: 0 0 22px;
          color: ${NAVY};
          font-size: 54px;
          line-height: 1.04;
          font-weight: 800;
          letter-spacing: -0.045em;
        }

        .ci-h1 span {
          display: block;
          color: ${CRIMSON};
        }

        .ci-hero-text {
          max-width: 540px;
          margin: 0;
          color: ${MUTED};
          font-size: 16px;
          line-height: 1.75;
        }

        .ci-hero-media {
          position: relative;
          width: 100%;
        }

        .ci-hero-img {
          display: block;
          width: 100%;
          aspect-ratio: 1.2 / 1;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 22px 50px rgba(20, 25, 58, 0.18);
          background: #e9ecf3;
        }

        .ci-float {
          position: absolute;
          left: -22px;
          bottom: -20px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px 12px 14px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(20, 25, 58, 0.16);
        }

        .ci-float-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 10px;
          background: #fbeef1;
          color: ${CRIMSON};
        }

        .ci-float small {
          display: block;
          color: ${MUTED};
          font-size: 10.5px;
          line-height: 1.4;
        }

        .ci-float strong {
          display: block;
          color: ${NAVY};
          font-size: 12.5px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* ---------- 2. foundation ---------- */

        .ci-foundation {
          background: #f8f9fc;
        }

        .ci-foundation-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 64px;
          align-items: center;
          padding-top: 84px;
          padding-bottom: 84px;
        }

        .ci-side-img {
          display: block;
          width: 100%;
          aspect-ratio: 1.12 / 1;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 18px 42px rgba(20, 25, 58, 0.16);
          background: #e9ecf3;
        }

        .ci-foundation .ci-h2 {
          max-width: 560px;
          font-size: 32px;
          margin-bottom: 20px;
        }

        .ci-lead {
          margin: 0 0 18px;
          color: ${NAVY};
          font-size: 16.5px;
          line-height: 1.7;
          font-weight: 500;
        }

        .ci-body {
          margin: 0 0 16px;
          color: ${MUTED};
          font-size: 14px;
          line-height: 1.75;
        }

        .ci-body:last-child {
          margin-bottom: 0;
        }

        /* ---------- 3 + 4. card sections ---------- */

        .ci-values {
          background: #f8f6f1;
        }

        .ci-practice {
          background: #f8f9fc;
        }

        .ci-section {
          padding-top: 84px;
          padding-bottom: 92px;
        }

        .ci-section-head {
          margin-bottom: 44px;
        }

        .ci-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .ci-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .ci-card {
          min-width: 0;
          background: #ffffff;
          border: 1px solid #ece9e4;
          border-radius: 14px;
          box-shadow: 0 1px 4px rgba(20, 25, 58, 0.05);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .ci-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(20, 25, 58, 0.1);
        }

        .ci-card-value {
          padding: 28px 24px 30px;
          border-top: 3px solid ${CRIMSON};
        }

        .ci-card-practice {
          min-height: 250px;
          padding: 32px 30px;
          background: #ffffff;
          border-color: #eceef4;
        }

        .ci-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 26px;
          border-radius: 11px;
          background: #fbeef1;
          color: ${CRIMSON};
        }

        .ci-card-title {
          margin: 0 0 10px;
          color: ${NAVY};
          font-size: 19px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .ci-card-body {
          margin: 0;
          color: ${MUTED};
          font-size: 13px;
          line-height: 1.7;
        }

        .ci-card-practice .ci-card-title {
          font-size: 20px;
        }

        /* ---------- 5. CTA ---------- */

        .ci-cta {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #6a0020 0%, #830026 55%, #5e001c 100%);
          color: #ffffff;
        }

        .ci-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.05) 0px,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 90px
          );
        }

        .ci-cta-grid {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding-top: 76px;
          padding-bottom: 76px;
        }

        .ci-cta-copy {
          max-width: 680px;
        }

        .ci-cta-eyebrow {
          margin: 0 0 14px;
          color: #f1c9d3;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ci-cta-title {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: 36px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .ci-cta-text {
          margin: 0 0 10px;
          color: #f4dfe5;
          font-size: 15px;
          line-height: 1.7;
        }

        .ci-cta-small {
          margin: 0;
          color: #e3bcc8;
          font-size: 13px;
          line-height: 1.7;
        }

        .ci-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 28px;
          border-radius: 6px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.45);
          transition: transform 0.25s ease, background 0.25s ease,
            border-color 0.25s ease;
        }

        .ci-btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }

        /* ---------- responsive ---------- */

        @media (max-width: 1100px) {
          .ci-hero-grid,
          .ci-foundation-grid {
            gap: 44px;
          }

          .ci-h1 {
            font-size: 46px;
          }

          .ci-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .ci-hero-grid,
          .ci-foundation-grid {
            grid-template-columns: 1fr;
            padding-top: 56px;
            padding-bottom: 60px;
          }

          .ci-hero-media {
            max-width: 620px;
            margin-left: 22px;
          }

          .ci-foundation-grid .ci-side-img {
            max-width: 560px;
          }

          .ci-section {
            padding-top: 60px;
            padding-bottom: 66px;
          }

          .ci-grid-3 {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .ci-card-practice {
            min-height: 0;
          }

          .ci-cta-grid {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 56px;
            padding-bottom: 60px;
          }
        }

        @media (max-width: 600px) {
          .ci-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .ci-h1 {
            font-size: 38px;
          }

          .ci-hero-text {
            font-size: 14.5px;
          }

          .ci-hero-media {
            margin-left: 0;
          }

          .ci-float {
            left: 10px;
            bottom: -18px;
          }

          .ci-h2,
          .ci-foundation .ci-h2 {
            font-size: 26px;
          }

          .ci-lead {
            font-size: 15px;
          }

          .ci-grid-4 {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ci-section-head {
            margin-bottom: 30px;
          }

          .ci-cta-title {
            font-size: 28px;
          }

          .ci-btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ci-card,
          .ci-btn {
            transition: none;
          }

          .ci-card:hover,
          .ci-btn:hover {
            transform: none;
          }
        }
      `}</style>

      {/* ============ 1. HERO ============ */}
      <section className="ci-hero">
        <div className="ci-container ci-hero-grid">
          <div>
            <span className="ci-eyebrow">Culture &amp; Inclusion</span>

            <h1 className="ci-h1">
              People Make
              <span>the Difference</span>
            </h1>

            <p className="ci-hero-text">
              At TechTorch Solutions, we believe that strong professional
              relationships begin with respect, collaboration and a shared
              commitment to doing meaningful work. We value the perspectives
              people bring, the knowledge they share and the contribution each
              individual makes.
            </p>
          </div>

          <div className="ci-hero-media">
            <img
              className="ci-hero-img"
              src="/CultureInclusion1.png"
              alt="Colleagues collaborating around a table in a modern office"
            />

            <div className="ci-float">
              <span className="ci-float-icon" aria-hidden="true">
                <Users size={18} strokeWidth={1.8} />
              </span>
              <span>
                <small>Collaborative Culture</small>
                <strong>People &amp; Innovation</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. OUR FOUNDATION ============ */}
      <section className="ci-foundation">
        <div className="ci-container ci-foundation-grid">
          <img
            className="ci-side-img"
            src="/CultureInclusion2.png"
            alt="Team members discussing ideas at a whiteboard"
          />

          <div>
            <span className="ci-eyebrow">Our Foundation</span>

            <h2 className="ci-h2">
              Building a Culture Where People Can Contribute
            </h2>

            <p className="ci-lead">
              Technology is built through more than technical skills alone. It
              also requires communication, thoughtful problem-solving and the
              ability to work effectively with others.
            </p>

            <p className="ci-body">
              At TechTorch, we believe a constructive work environment starts
              with listening to different perspectives, recognising individual
              contributions and maintaining respect in everyday interactions.
              These principles help teams exchange ideas, approach challenges
              with clarity and work towards shared objectives.
            </p>

            <p className="ci-body">
              We see learning as an ongoing process. Every project offers
              opportunities to develop skills, share knowledge and understand
              different approaches to solving problems. By encouraging
              collaboration and professional responsibility, we aim to make
              these values part of how we work together.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 3. CORE VALUES ============ */}
      <section className="ci-values">
        <div className="ci-container ci-section">
          <div className="ci-section-head">
            <span className="ci-eyebrow">Core Values</span>
            <h2 className="ci-h2">The Principles That Guide Us</h2>
            <p className="ci-sub">
              Our shared commitments shape how we work together, support one
              another, and build lasting solutions.
            </p>
          </div>

          <div className="ci-grid-4">
            {principles.map(({ icon: Icon, title, body }) => (
              <div key={title} className="ci-card ci-card-value">
                <span className="ci-icon">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <h3 className="ci-card-title">{title}</h3>
                <p className="ci-card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. ACTION IN PRACTICE ============ */}
      <section className="ci-practice">
        <div className="ci-container ci-section">
          <div className="ci-section-head">
            <span className="ci-eyebrow">Action in Practice</span>
            <h2 className="ci-h2">Inclusion in Everyday Work</h2>
            <p className="ci-sub">
              How our inclusive philosophy translates into everyday team
              interactions and professional growth.
            </p>
          </div>

          <div className="ci-grid-3">
            {practices.map(({ icon: Icon, title, body }) => (
              <div key={title} className="ci-card ci-card-practice">
                <span className="ci-icon">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <h3 className="ci-card-title">{title}</h3>
                <p className="ci-card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. CTA ============ */}
      <section className="ci-cta">
        <div className="ci-container ci-cta-grid">
          <div className="ci-cta-copy">
            <p className="ci-cta-eyebrow">Join Our Team</p>
            <h2 className="ci-cta-title">Be Part of TechTorch</h2>
            <p className="ci-cta-text">
              Bring your skills, ideas and perspective to a team working across
              technology and business solutions.
            </p>
            <p className="ci-cta-small">
              Explore career opportunities and discover how you could contribute
              to our work.
            </p>
          </div>

          <Link to="/start-conversation" className="ci-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
