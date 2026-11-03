import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CreditCard,
  Wallet,
  Landmark,
  QrCode,
  ShieldCheck,
  Zap,
  CircleDot,
  Check,
  RefreshCw,
  CalendarDays,
  ChartLine,
  Settings,
  Eye,
  Share2,
  Users,
  Headphones,
  ShoppingCart,
  ShoppingBag,
  ConciergeBell,
  HeartPulse,
  Cloud,
} from "lucide-react";

const WINE = "#730042";
const NAVY = "#14193a";
const MUTED = "#5f6677";

const methods = [
  { icon: CreditCard, label: "Card" },
  { icon: Wallet, label: "Wallet" },
  { icon: Landmark, label: "Bank Transfer" },
  { icon: QrCode, label: "UPI" },
];

const features = [
  {
    icon: Wallet,
    title: "Multi-Channel Payment Processing",
    body: "Support multiple payment methods based on business needs and available integrations.",
  },
  {
    icon: RefreshCw,
    title: "Automated Reconciliation",
    body: "Match payment transactions with financial records and identify discrepancies more efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Security and Fraud Monitoring",
    body: "Support secure payment operations through appropriate security controls and fraud-monitoring processes.",
  },
  {
    icon: CalendarDays,
    title: "Recurring Billing Management",
    body: "Organize subscription billing and scheduled payments for recurring services.",
  },
  {
    icon: ChartLine,
    title: "Reporting and Analytics",
    body: "Review transaction activity and payment trends to support better business decisions.",
  },
];

const industries = [
  {
    image: "/PaymentIndustry1.png",
    icon: ShoppingCart,
    title: "E-Commerce",
    body: "Support convenient online transactions.",
  },
  {
    image: "/PaymentIndustry2.png",
    icon: ShoppingBag,
    title: "Retail",
    body: "Organize payment processing across sales channels.",
  },
  {
    image: "/PaymentIndustry3.png",
    icon: ConciergeBell,
    title: "Hospitality",
    body: "Manage payments related to bookings and customer services.",
  },
  {
    image: "/PaymentIndustry4.png",
    icon: HeartPulse,
    title: "Healthcare",
    body: "Support payment records and related workflows.",
  },
  {
    image: "/PaymentIndustry5.png",
    icon: Landmark,
    title: "Financial Services",
    body: "Organize transaction information and reporting.",
  },
];

const reasons = [
  {
    icon: Settings,
    title: "Efficient Workflows",
    body: "Simplify routine payment activities.",
  },
  {
    icon: Eye,
    title: "Transaction Visibility",
    body: "Make payment records easier to monitor and review.",
  },
  {
    icon: Share2,
    title: "Flexible Integration",
    body: "Connect compatible payment tools and business systems.",
  },
  {
    icon: Users,
    title: "Implementation and Training",
    body: "Support teams during adoption and setup.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    body: "Adapt payment workflows as business needs evolve.",
  },
];

export default function PaymentManagement() {
  return (
    <div className="pm-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .pm-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
        }

        .pm-page *,
        .pm-page *::before,
        .pm-page *::after {
          box-sizing: border-box;
        }

        .pm-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* ---------- shared ---------- */

        .pm-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 14px;
          color: ${WINE};
          font-size: 10.5px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pm-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          flex-shrink: 0;
          background: ${WINE};
        }

        .pm-h1,
        .pm-h2,
        .pm-card-title {
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        .pm-h2 {
          margin: 0 0 18px;
          color: ${NAVY};
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .pm-text {
          margin: 0;
          color: ${MUTED};
          font-size: 15px;
          line-height: 1.7;
        }

        .pm-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* ---------- 1. hero ---------- */

        .pm-hero {
          background:
            radial-gradient(circle at 85% 0%, rgba(255, 228, 238, 0.7), transparent 45%),
            #ffffff;
        }

        .pm-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.98fr);
          gap: 48px;
          align-items: center;
          padding-top: 72px;
          padding-bottom: 72px;
        }

        .pm-h1 {
          margin: 0 0 22px;
          color: ${NAVY};
          font-size: 44px;
          line-height: 1.04;
          font-weight: 800;
          letter-spacing: -0.045em;
        }

        .pm-hero-text {
          max-width: 540px;
          margin: 0 0 30px;
          color: ${MUTED};
          font-size: 16px;
          line-height: 1.7;
        }

        .pm-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 46px;
          padding: 0 26px;
          border-radius: 999px;
          background: ${WINE};
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(115, 0, 66, 0.25);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .pm-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(115, 0, 66, 0.32);
        }

        .pm-hero-frame {
          position: relative;
          padding: 22px;
          border-radius: 26px;
          background: #fbf3f6;
          box-shadow: 0 18px 44px rgba(115, 0, 66, 0.1);
        }

        .pm-hero-photo {
          display: block;
          width: 100%;
          aspect-ratio: 1.7 / 1;
          object-fit: cover;
          border-radius: 14px;
          background: #1c2433;
        }

        .pm-float {
          position: absolute;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 14px 34px rgba(20, 25, 58, 0.16);
        }

        .pm-badges {
          top: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 14px 18px 14px 14px;
        }

        .pm-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: ${NAVY};
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
        }

        .pm-badge-row svg {
          color: ${WINE};
        }

        .pm-paid {
          right: 4px;
          bottom: -26px;
          width: 170px;
          padding: 14px;
          text-align: center;
        }

        .pm-paid-inner {
          padding: 12px 10px;
          border-radius: 10px;
          background: #f8f9fb;
        }

        .pm-paid-icon {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          border-radius: 50%;
          background: #dff5e8;
          color: #1d8a52;
        }

        .pm-paid strong {
          display: block;
          color: ${NAVY};
          font-size: 11.5px;
          line-height: 1.4;
          font-weight: 700;
        }

        .pm-paid small {
          display: block;
          color: #9aa1b2;
          font-size: 9.5px;
          line-height: 1.4;
        }

        /* ---------- 2. smarter payments ---------- */

        .pm-smart {
          background: #f8f6f1;
        }

        .pm-smart-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 88px;
        }

        .pm-smart-media {
          position: relative;
        }

        .pm-smart-photo {
          display: block;
          width: 100%;
          aspect-ratio: 1.5 / 1;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 18px 42px rgba(20, 25, 58, 0.16);
          background: #e9ecf3;
        }

        .pm-methods {
          top: 22px;
          right: 22px;
          display: flex;
          flex-direction: column;
          gap: 11px;
          padding: 16px 40px 16px 18px;
        }

        .pm-method {
          display: flex;
          align-items: center;
          gap: 12px;
          color: ${NAVY};
          font-size: 11.5px;
          line-height: 1;
        }

        .pm-method svg {
          color: ${WINE};
        }

        .pm-pill {
          left: 50%;
          bottom: 22px;
          transform: translateX(-6%);
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px 8px 10px;
          border-radius: 999px;
          color: ${NAVY};
          font-size: 11.5px;
          font-weight: 500;
          white-space: nowrap;
        }

        .pm-pill-check {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #1d8a52;
          color: #ffffff;
        }

        .pm-smart .pm-h2 {
          max-width: 520px;
          font-size: 36px;
        }

        .pm-smart .pm-eyebrow {
          margin-bottom: 22px;
        }

        .pm-smart .pm-eyebrow::before {
          width: 28px;
        }

        .pm-smart .pm-text {
          font-size: 16px;
          line-height: 1.75;
        }

        /* ---------- 3. key features ---------- */

        .pm-features {
          background: ${WINE};
        }

        .pm-features-wrap {
          padding-top: 76px;
          padding-bottom: 84px;
        }

        .pm-features .pm-eyebrow {
          color: #f4d6e3;
        }

        .pm-features .pm-eyebrow::before {
          background: #f4d6e3;
        }

        .pm-features .pm-h2 {
          color: #ffffff;
          margin-bottom: 40px;
        }

        .pm-feature-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
        }

        .pm-feature {
          min-width: 0;
          padding: 24px 20px 26px;
          border-radius: 14px;
          background: #ffffff;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .pm-feature:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.22);
        }

        .pm-feature .pm-icon {
          width: 42px;
          height: 42px;
        }

        .pm-num {
          display: block;
          margin: 16px 0 10px;
          color: #9aa1b2;
          font-size: 10.5px;
          font-weight: 500;
        }

        .pm-card-title {
          margin: 0 0 10px;
          color: ${NAVY};
          font-size: 14.5px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .pm-card-text {
          margin: 0;
          color: ${MUTED};
          font-size: 13.5px;
          line-height: 1.65;
        }

        /* ---------- 4. industries ---------- */

        .pm-industries-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 2fr);
          gap: 28px;
          align-items: start;
          padding-top: 72px;
          padding-bottom: 80px;
        }

        .pm-industries-copy .pm-h2 {
          margin-top: 6px;
          font-size: 30px;
        }

        .pm-industries-copy .pm-text {
          font-size: 15px;
          margin-bottom: 26px;
        }

        .pm-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: ${WINE};
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
        }

        .pm-link:hover {
          text-decoration: underline;
        }

        .pm-industry-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .pm-industry {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #ece9e4;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(20, 25, 58, 0.05);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .pm-industry:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(20, 25, 58, 0.12);
        }

        .pm-industry img {
          display: block;
          width: 100%;
          height: 102px;
          object-fit: cover;
          background: #e9ecf3;
        }

        .pm-industry-body {
          padding: 16px 14px 18px;
        }

        .pm-industry .pm-icon {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          margin-bottom: 8px;
        }

        .pm-industry h3 {
          margin: 0 0 8px;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 700;
        }

        .pm-industry p {
          margin: 0;
          color: ${MUTED};
          font-size: 12.5px;
          line-height: 1.6;
        }

        /* ---------- 5. why choose ---------- */

        .pm-why {
          background: #f8f6f1;
        }

        .pm-why-wrap {
          padding-top: 72px;
          padding-bottom: 80px;
        }

        .pm-why .pm-h2 {
          margin-bottom: 40px;
        }

        .pm-why-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 28px;
        }

        .pm-why-item {
          min-width: 0;
        }

        .pm-why-item .pm-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin-bottom: 16px;
        }

        .pm-why-item h3 {
          margin: 0 0 8px;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12.5px;
          line-height: 1.35;
          font-weight: 700;
        }

        .pm-why-item p {
          margin: 0;
          color: ${MUTED};
          font-size: 14.5px;
          line-height: 1.6;
        }

        /* ---------- 6. powered by ---------- */

        .pm-powered {
          background: #ffffff;
        }

        .pm-powered-wrap {
          padding-top: 44px;
          padding-bottom: 52px;
        }

        .pm-powered .pm-eyebrow {
          color: #6a7388;
          margin-bottom: 34px;
        }

        .pm-powered .pm-eyebrow::before {
          background: ${WINE};
        }

        .pm-logos {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .pm-logo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: ${NAVY};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-weight: 800;
          white-space: nowrap;
        }

        .pm-logo-aws {
          font-size: 24px;
          letter-spacing: -0.04em;
        }

        .pm-logo-google {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .pm-logo-cloud {
          font-size: 13px;
          letter-spacing: 0.04em;
        }

        .pm-logo-cloud svg {
          color: #1b8bf0;
          fill: #1b8bf0;
        }

        .pm-logo-nc {
          color: #6d28d9;
          font-size: 26px;
          font-style: italic;
          letter-spacing: -0.04em;
        }

        .pm-logo-dell {
          width: 38px;
          height: 38px;
          justify-content: center;
          border: 2px solid #1b6fd6;
          border-radius: 50%;
          color: #1b6fd6;
          font-size: 9px;
          letter-spacing: 0;
        }

        /* ---------- responsive ---------- */

        @media (max-width: 1200px) {
          .pm-feature-grid,
          .pm-industry-grid,
          .pm-why-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pm-industries-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .pm-container {
            padding-left: 32px;
            padding-right: 32px;
          }

          .pm-hero-grid,
          .pm-smart-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-top: 52px;
            padding-bottom: 60px;
          }

          .pm-h1 {
            font-size: 38px;
          }

          .pm-hero-frame {
            max-width: 620px;
          }

          .pm-logos {
            flex-wrap: wrap;
            justify-content: center;
            gap: 28px 44px;
          }
        }

        @media (max-width: 640px) {
          .pm-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .pm-h1 {
            font-size: 32px;
          }

          .pm-h2,
          .pm-smart .pm-h2 {
            font-size: 26px;
          }

          .pm-feature-grid,
          .pm-industry-grid,
          .pm-why-grid {
            grid-template-columns: 1fr;
          }

          .pm-hero-frame {
            padding: 14px;
          }

          .pm-badges {
            top: 16px;
            right: 16px;
          }

          .pm-paid {
            right: 10px;
          }

          .pm-pill {
            left: 16px;
            transform: none;
          }

          .pm-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pm-feature,
          .pm-industry,
          .pm-btn {
            transition: none;
          }

          .pm-feature:hover,
          .pm-industry:hover,
          .pm-btn:hover {
            transform: none;
          }
        }
      `}</style>

      {/* ============ 1. HERO ============ */}
      <section className="pm-hero">
        <div className="pm-container pm-hero-grid">
          <div>
            <p className="pm-eyebrow">Payment Management</p>

            <h1 className="pm-h1">
              Simplify Payments.
              <br />
              Improve Business Efficiency.
            </h1>

            <p className="pm-hero-text">
              TechTorch Solutions helps businesses organize payment operations,
              manage transactions, and improve financial visibility. Our payment
              management solutions support payment processing, reconciliation,
              recurring billing, and reporting to help streamline everyday
              financial activities.
            </p>

            <Link to="/talk-to-expert" className="pm-btn">
              Talk to Our Experts
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="pm-hero-frame">
            <img
              className="pm-hero-photo"
              src="/PaymentManagement1.png"
              alt="Payment performance dashboard on a monitor"
            />

            <div className="pm-float pm-badges">
              <div className="pm-badge-row">
                <ShieldCheck size={14} />
                Secure
              </div>
              <div className="pm-badge-row">
                <Zap size={14} />
                Fast
              </div>
              <div className="pm-badge-row">
                <CircleDot size={14} />
                Reliable
              </div>
            </div>

            <div className="pm-float pm-paid">
              <div className="pm-paid-inner">
                <span className="pm-paid-icon">
                  <Check size={15} strokeWidth={2.4} />
                </span>
                <strong>Payment Successful</strong>
                <small>$1,280.00 Processed</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. SMARTER PAYMENT MANAGEMENT ============ */}
      <section className="pm-smart">
        <div className="pm-container pm-smart-grid">
          <div className="pm-smart-media">
            <img
              className="pm-smart-photo"
              src="/PaymentManagement2.png"
              alt="Finance professional reviewing payment data on dual monitors"
            />

            <div className="pm-float pm-methods">
              {methods.map(({ icon: Icon, label }) => (
                <div key={label} className="pm-method">
                  <Icon size={15} />
                  {label}
                </div>
              ))}
            </div>

            <div className="pm-float pm-pill">
              <span className="pm-pill-check">
                <Check size={13} strokeWidth={2.6} />
              </span>
              Transaction Successful
            </div>
          </div>

          <div>
            <p className="pm-eyebrow" style={{ marginBottom: 22 }} />
            <h2 className="pm-h2">
              Smarter Payment Management for Modern Businesses
            </h2>
            <p className="pm-text">
              Efficient payment operations help businesses maintain accurate
              records, monitor transactions, and deliver a smoother payment
              experience. TechTorch Solutions supports these needs with
              capabilities designed to simplify payment workflows, improve
              transaction visibility, and reduce manual effort.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 3. KEY FEATURES ============ */}
      <section className="pm-features">
        <div className="pm-container pm-features-wrap">
          <p className="pm-eyebrow">Key Features</p>
          <h2 className="pm-h2">Key Features of Payment Management</h2>

          <div className="pm-feature-grid">
            {features.map(({ icon: Icon, title, body }, index) => (
              <div key={title} className="pm-feature">
                <span className="pm-icon">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <span className="pm-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="pm-card-title">{title}</h3>
                <p className="pm-card-text">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. INDUSTRIES ============ */}
      <section className="pm-industries">
        <div className="pm-container pm-industries-grid">
          <div className="pm-industries-copy">
            <p className="pm-eyebrow">Industries We Serve</p>
            <h2 className="pm-h2">
              Payment Solutions for Different Industries
            </h2>
            <p className="pm-text">
              Our solutions can support payment-related workflows across a range
              of business sectors.
            </p>
            <Link to="/digitalsolution" className="pm-link">
              Explore All Industries
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="pm-industry-grid">
            {industries.map(({ image, icon: Icon, title, body }) => (
              <div key={title} className="pm-industry">
                <img src={image} alt={title} loading="lazy" />
                <div className="pm-industry-body">
                  <span className="pm-icon">
                    <Icon size={13} strokeWidth={1.9} />
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. WHY CHOOSE ============ */}
      <section className="pm-why">
        <div className="pm-container pm-why-wrap">
          <p className="pm-eyebrow">Why Choose TechTorch Solutions?</p>
          <h2 className="pm-h2">Built for Smarter Payment Operations</h2>

          <div className="pm-why-grid">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div key={title} className="pm-why-item">
                <span className="pm-icon">
                  <Icon size={15} strokeWidth={1.9} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. POWERED BY ============ */}
      <section className="pm-powered">
        <div className="pm-container pm-powered-wrap">
          <p className="pm-eyebrow">Delivering Solutions Powered By</p>

          <div className="pm-logos">
            <span className="pm-logo pm-logo-aws">aws</span>

            <span className="pm-logo pm-logo-google" aria-label="Google">
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>

            <span className="pm-logo pm-logo-cloud">
              <Cloud size={26} />
              CLOUD
            </span>

            <span className="pm-logo pm-logo-nc">nc</span>

            <span className="pm-logo pm-logo-dell" aria-label="Dell">
              DELL
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
