import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  Settings,
  TrendingDown,
  Zap,
  Presentation,
  UserCog,
  Truck,
  ShieldCheck,
  Building2,
  ChartColumn,
  Link2,
  Users,
  RefreshCw,
  Factory,
  ShoppingCart,
  FlaskConical,
  Wheat,
} from "lucide-react";

const WINE = "#7a1f45";
const NAVY = "#14182f";
const MUTED = "#5f6677";

const benefits = [
  { icon: Eye, label: "Better Visibility" },
  { icon: Settings, label: "Smoother Operations" },
  { icon: TrendingDown, label: "Lower Costs" },
  { icon: Zap, label: "Greater Efficiency" },
];

const features = [
  {
    icon: Eye,
    title: "End-to-End Supply Chain Visibility",
    body: "Monitor inventory levels, order status, and supplier performance to support informed decisions.",
  },
  {
    icon: Presentation,
    title: "Demand Forecasting",
    body: "Use demand insights to plan inventory and align resources with changing business requirements.",
  },
  {
    icon: UserCog,
    title: "Supplier Collaboration",
    body: "Improve communication with suppliers to support procurement coordination and reduce delays.",
  },
  {
    icon: Truck,
    title: "Logistics Management",
    body: "Manage transportation, shipment tracking, and delivery activities for smoother logistics operations.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    body: "Identify potential supply chain risks and support continuity through proactive planning.",
  },
];

const approach = [
  {
    icon: Building2,
    title: "Industry-Focused Solutions",
    body: "Address industry-specific supply chain requirements.",
  },
  {
    icon: ChartColumn,
    title: "Data-Led Planning",
    body: "Support decisions with relevant operational insights.",
  },
  {
    icon: Link2,
    title: "Flexible Integration",
    body: "Connect with existing business systems where required.",
  },
  {
    icon: Users,
    title: "Implementation and Training",
    body: "Support adoption through implementation guidance and user training.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    body: "Adapt processes to evolving business needs and operational priorities.",
  },
];

const industries = [
  {
    image: "/SupplyChainIndustry1.png",
    icon: Factory,
    title: "Manufacturing",
    body: "Support production and materials flow across the value chain.",
  },
  {
    image: "/SupplyChainIndustry2.png",
    icon: ShoppingCart,
    title: "Retail",
    body: "Improve inventory availability and replenishment.",
  },
  {
    image: "/SupplyChainIndustry3.png",
    icon: FlaskConical,
    title: "Pharmaceuticals",
    body: "Meet compliance needs with reliable supply coordination.",
  },
  {
    image: "/SupplyChainIndustry4.png",
    icon: Wheat,
    title: "Food & Beverage",
    body: "Maintain product availability and timely distribution.",
  },
];

export default function SupplyChainManagement() {
  return (
    <div className="scm-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .scm-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
        }

        .scm-page *,
        .scm-page *::before,
        .scm-page *::after {
          box-sizing: border-box;
        }

        .scm-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* ---------- shared ---------- */

        .scm-eyebrow {
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

        .scm-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          flex-shrink: 0;
          background: ${WINE};
        }

        .scm-h1,
        .scm-h2 {
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        .scm-h2 {
          margin: 0 0 18px;
          color: ${NAVY};
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .scm-text {
          margin: 0 0 18px;
          color: ${MUTED};
          font-size: 15.5px;
          line-height: 1.7;
        }

        .scm-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* ---------- 1. hero ---------- */

        .scm-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
          gap: 48px;
          align-items: center;
          padding-top: 70px;
          padding-bottom: 80px;
        }

        .scm-h1 {
          margin: 0 0 22px;
          color: ${NAVY};
          font-size: 42px;
          line-height: 1.06;
          font-weight: 800;
          letter-spacing: -0.045em;
        }

        .scm-hero-text {
          max-width: 540px;
          margin: 0 0 30px;
          color: ${MUTED};
          font-size: 16px;
          line-height: 1.7;
        }

        .scm-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 44px;
          padding: 0 24px;
          border-radius: 999px;
          background: ${WINE};
          color: #ffffff;
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(122, 31, 69, 0.25);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .scm-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(122, 31, 69, 0.32);
        }

        .scm-btn-outline {
          background: #ffffff;
          color: ${WINE};
          border: 1px solid ${WINE};
          box-shadow: none;
        }

        .scm-btn-outline:hover {
          background: #fbeef1;
          box-shadow: none;
        }

        .scm-hero-media {
          position: relative;
          width: 100%;
          max-width: 540px;
          margin-left: auto;
          padding-bottom: 22px;
        }

        .scm-hero-shape {
          position: absolute;
          left: -44px;
          bottom: 4px;
          width: 54%;
          height: 52%;
          border-radius: 18px;
          background: ${WINE};
          transform: rotate(-3deg);
        }

        .scm-hero-shape-2 {
          position: absolute;
          right: 18px;
          bottom: 0;
          width: 26%;
          height: 7%;
          border-radius: 0 0 12px 12px;
          background: ${WINE};
        }

        .scm-hero-frame {
          position: relative;
          padding: 5px;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 18px 44px rgba(20, 24, 47, 0.2);
        }

        .scm-hero-photo {
          display: block;
          width: 100%;
          aspect-ratio: 1.1 / 1;
          object-fit: cover;
          object-position: left center;
          border-radius: 18px;
          background: #dfe5ee;
        }

        .scm-benefits {
          position: absolute;
          top: 22px;
          right: 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 18px 26px 18px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 12px 30px rgba(20, 24, 47, 0.16);
        }

        .scm-benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          color: ${NAVY};
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
          white-space: nowrap;
        }

        .scm-benefit span {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* ---------- 2. intro ---------- */

        .scm-intro {
          background: #f8f6f1;
        }

        .scm-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 72px;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 88px;
        }

        .scm-intro-media {
          position: relative;
          max-width: 480px;
        }

        .scm-shape-a {
          position: absolute;
          top: -20px;
          left: -16px;
          width: 28%;
          height: 28%;
          border-radius: 16px;
          background: ${WINE};
        }

        .scm-shape-b {
          position: absolute;
          right: -34px;
          bottom: -34px;
          width: 24%;
          height: 28%;
          border-radius: 14px;
          background: ${WINE};
        }

        .scm-intro-frame {
          position: relative;
          padding: 5px;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 18px 42px rgba(20, 24, 47, 0.18);
        }

        .scm-intro-photo {
          display: block;
          width: 100%;
          aspect-ratio: 1.19 / 1;
          object-fit: cover;
          border-radius: 16px;
          background: #e9ecf3;
        }

        .scm-intro .scm-eyebrow {
          margin-bottom: 20px;
        }

        .scm-intro .scm-eyebrow::before {
          width: 28px;
        }

        .scm-intro .scm-h2 {
          max-width: 520px;
          font-size: 34px;
          margin-bottom: 26px;
        }

        .scm-intro .scm-text {
          font-size: 16px;
          line-height: 1.7;
        }

        /* ---------- 3. key features ---------- */

        .scm-features {
          background: #fafafa;
        }

        .scm-features-wrap {
          padding-top: 70px;
          padding-bottom: 80px;
        }

        .scm-features .scm-h2 {
          margin-bottom: 38px;
          font-size: 32px;
        }

        .scm-feature-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
        }

        .scm-card {
          min-width: 0;
          padding: 22px 20px 26px;
          border: 1px solid #eeeeee;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(20, 24, 47, 0.05);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .scm-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(20, 24, 47, 0.1);
        }

        .scm-card .scm-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 24px;
        }

        .scm-card h3 {
          margin: 0 0 10px;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13.5px;
          line-height: 1.4;
          font-weight: 700;
        }

        .scm-card p {
          margin: 0;
          color: ${MUTED};
          font-size: 13px;
          line-height: 1.65;
        }

        /* ---------- 4. approach ---------- */

        .scm-approach-wrap {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .scm-approach-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          gap: 48px;
          align-items: center;
          margin-bottom: 44px;
        }

        .scm-approach-top .scm-h2 {
          max-width: 480px;
          font-size: 34px;
        }

        .scm-approach-top .scm-text {
          max-width: 460px;
          font-size: 15px;
        }

        .scm-truck-wrap {
          position: relative;
          padding-bottom: 14px;
        }

        .scm-truck-photo {
          display: block;
          width: 100%;
          aspect-ratio: 2.35 / 1;
          object-fit: cover;
          border-radius: 14px;
          background: #dfe5ee;
        }

        .scm-truck-shape {
          position: absolute;
          right: 26px;
          bottom: 0;
          width: 14%;
          height: 12px;
          border-radius: 0 0 10px 10px;
          background: ${WINE};
        }

        .scm-approach-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 22px;
        }

        .scm-approach-item {
          min-width: 0;
          padding-top: 22px;
          border-top: 2px solid #f0d9e3;
        }

        .scm-approach-item .scm-icon {
          width: 32px;
          height: 32px;
          margin-bottom: 14px;
        }

        .scm-approach-item h3 {
          margin: 0 0 8px;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .scm-approach-item p {
          margin: 0;
          color: ${MUTED};
          font-size: 13px;
          line-height: 1.65;
        }

        /* ---------- 5. industries ---------- */

        .scm-industries {
          background: #f8f6f1;
        }

        .scm-industries-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 2fr);
          gap: 36px;
          align-items: start;
          padding-top: 70px;
          padding-bottom: 76px;
        }

        .scm-industries-copy .scm-h2 {
          max-width: 300px;
          font-size: 32px;
        }

        .scm-industries-copy .scm-text {
          max-width: 340px;
          margin-bottom: 28px;
          font-size: 15px;
        }

        .scm-industry-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .scm-industry {
          min-width: 0;
          padding: 10px 10px 18px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(20, 24, 47, 0.07);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .scm-industry:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(20, 24, 47, 0.12);
        }

        .scm-industry img {
          display: block;
          width: 100%;
          height: 108px;
          object-fit: cover;
          border-radius: 8px;
          background: #e9ecf3;
        }

        .scm-industry h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 14px 0 8px;
          color: ${NAVY};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11.5px;
          font-weight: 700;
        }

        .scm-industry h3 svg {
          color: ${WINE};
        }

        .scm-industry p {
          margin: 0;
          color: ${MUTED};
          font-size: 13px;
          line-height: 1.6;
        }

        /* ---------- 6. powered by ---------- */

        .scm-powered-wrap {
          padding-top: 44px;
          padding-bottom: 56px;
        }

        .scm-powered .scm-eyebrow {
          margin-bottom: 36px;
          color: #6a7388;
        }

        .scm-powered .scm-eyebrow::before {
          background: ${WINE};
        }

        .scm-logos {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .scm-logo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${NAVY};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-weight: 800;
          white-space: nowrap;
        }

        .scm-logo-aws {
          font-size: 15px;
          letter-spacing: -0.03em;
        }

        .scm-logo-google {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .scm-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .scm-logo-nc {
          color: #4b5b8a;
          font-size: 22px;
          letter-spacing: -0.04em;
        }

        .scm-logo-dell {
          width: 36px;
          height: 36px;
          justify-content: center;
          border: 2px solid #1b6fd6;
          border-radius: 50%;
          color: #1b6fd6;
          font-size: 8.5px;
        }

        /* ---------- responsive ---------- */

        @media (max-width: 1200px) {
          .scm-feature-grid,
          .scm-approach-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .scm-industries-grid {
            grid-template-columns: 1fr;
          }

          .scm-industries-copy .scm-h2,
          .scm-industries-copy .scm-text {
            max-width: 560px;
          }
        }

        @media (max-width: 900px) {
          .scm-container {
            padding-left: 32px;
            padding-right: 32px;
          }

          .scm-hero-grid,
          .scm-intro-grid,
          .scm-approach-top {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .scm-hero-grid {
            padding-top: 52px;
            padding-bottom: 60px;
          }

          .scm-hero-media {
            margin: 0 auto 0 40px;
          }

          .scm-intro-media {
            margin-left: 18px;
          }

          .scm-h1 {
            font-size: 36px;
          }

          .scm-industry-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .scm-logos {
            flex-wrap: wrap;
            justify-content: center;
            gap: 28px 44px;
          }
        }

        @media (max-width: 640px) {
          .scm-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .scm-h1 {
            font-size: 31px;
          }

          .scm-h2,
          .scm-intro .scm-h2,
          .scm-approach-top .scm-h2,
          .scm-industries-copy .scm-h2,
          .scm-features .scm-h2 {
            font-size: 26px;
          }

          .scm-feature-grid,
          .scm-approach-grid,
          .scm-industry-grid {
            grid-template-columns: 1fr;
          }

          .scm-hero-media {
            margin-left: 18px;
          }

          .scm-benefits {
            top: 12px;
            right: 12px;
            padding: 14px 16px 14px 12px;
          }

          .scm-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scm-card,
          .scm-industry,
          .scm-btn {
            transition: none;
          }

          .scm-card:hover,
          .scm-industry:hover,
          .scm-btn:hover {
            transform: none;
          }
        }
      `}</style>

      {/* ============ 1. HERO ============ */}
      <section className="scm-hero">
        <div className="scm-container scm-hero-grid">
          <div>
            <p className="scm-eyebrow">Supply Chain Management</p>

            <h1 className="scm-h1">
              Build a More Connected and Efficient Supply Chain
            </h1>

            <p className="scm-hero-text">
              TechTorch Solutions helps businesses improve supply chain
              visibility, coordinate suppliers, and manage inventory and
              deliveries more effectively. Our solutions support better
              planning, operational efficiency, and informed decision-making
              across the supply chain.
            </p>

            <Link to="/talk-to-expert" className="scm-btn">
              Talk to Our Experts
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="scm-hero-media">
            <div className="scm-hero-shape" aria-hidden="true" />
            <div className="scm-hero-shape-2" aria-hidden="true" />

            <div className="scm-hero-frame">
              <img
                className="scm-hero-photo"
                src="/SupplyChainHero.png"
                alt="Aerial view of a container port and logistics yard"
              />

              <div className="scm-benefits">
                {benefits.map(({ icon: Icon, label }) => (
                  <div key={label} className="scm-benefit">
                    <span>
                      <Icon size={13} strokeWidth={1.9} />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. SMARTER SUPPLY CHAIN ============ */}
      <section className="scm-intro">
        <div className="scm-container scm-intro-grid">
          <div className="scm-intro-media">
            <div className="scm-shape-a" aria-hidden="true" />
            <div className="scm-shape-b" aria-hidden="true" />
            <div className="scm-intro-frame">
              <img
                className="scm-intro-photo"
                src="/SupplyChainWarehouse.png"
                alt="Warehouse manager reviewing inventory on a tablet"
              />
            </div>
          </div>

          <div>
            <p className="scm-eyebrow" style={{ marginBottom: 20 }} />
            <h2 className="scm-h2">
              Smarter Supply Chain Management for Modern Businesses
            </h2>

            <p className="scm-text">
              An efficient supply chain requires visibility, coordination, and
              timely decisions. TechTorch Solutions helps businesses manage key
              supply chain activities, from procurement and inventory to
              logistics and delivery.
            </p>

            <p className="scm-text">
              With capabilities such as demand forecasting, supplier
              collaboration, and risk management, businesses can improve
              coordination, respond to changing needs, and manage operations
              more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 3. KEY FEATURES ============ */}
      <section className="scm-features">
        <div className="scm-container scm-features-wrap">
          <p className="scm-eyebrow">Key Features</p>
          <h2 className="scm-h2">Key Features of Our Supply Chain Solutions</h2>

          <div className="scm-feature-grid">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="scm-card">
                <span className="scm-icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. OUR APPROACH ============ */}
      <section className="scm-approach">
        <div className="scm-container scm-approach-wrap">
          <div className="scm-approach-top">
            <div>
              <p className="scm-eyebrow">Our Approach</p>
              <h2 className="scm-h2">
                A Supply Chain Approach Designed Around Your Business
              </h2>
              <p className="scm-text">
                Our solutions are designed to support the needs of businesses
                across manufacturing, retail, pharmaceuticals, and food and
                beverage.
              </p>
            </div>

            <div className="scm-truck-wrap">
              <img
                className="scm-truck-photo"
                src="/SupplyChainTruck.png"
                alt="Freight truck on a mountain highway"
              />
              <div className="scm-truck-shape" aria-hidden="true" />
            </div>
          </div>

          <div className="scm-approach-grid">
            {approach.map(({ icon: Icon, title, body }) => (
              <div key={title} className="scm-approach-item">
                <span className="scm-icon">
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. INDUSTRIES ============ */}
      <section className="scm-industries">
        <div className="scm-container scm-industries-grid">
          <div className="scm-industries-copy">
            <p className="scm-eyebrow">Industries We Serve</p>
            <h2 className="scm-h2">
              Supply Chain Solutions for Different Industries
            </h2>
            <p className="scm-text">
              We support businesses across manufacturing, retail,
              pharmaceuticals, and food and beverage with solutions tailored to
              their unique supply chain requirements.
            </p>
            <Link to="/digitalsolution" className="scm-btn scm-btn-outline">
              Explore Our Solutions
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="scm-industry-grid">
            {industries.map(({ image, icon: Icon, title, body }) => (
              <div key={title} className="scm-industry">
                <img src={image} alt={title} loading="lazy" />
                <h3>
                  <Icon size={14} strokeWidth={1.9} />
                  {title}
                </h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. POWERED BY ============ */}
      <section className="scm-powered">
        <div className="scm-container scm-powered-wrap">
          <p className="scm-eyebrow">Delivering Solutions Powered By</p>

          <div className="scm-logos">
            <span className="scm-logo scm-logo-aws">aws</span>

            <span className="scm-logo scm-logo-google" aria-label="Google">
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>

            <span className="scm-logo" aria-label="Cloud">
              <span className="scm-dot" style={{ background: "#4285F4" }} />
              <span className="scm-dot" style={{ background: "#FBBC05" }} />
              <span className="scm-dot" style={{ background: "#34A853" }} />
            </span>

            <span className="scm-logo scm-logo-nc">nc</span>

            <span className="scm-logo scm-logo-dell" aria-label="Dell">
              DELL
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
