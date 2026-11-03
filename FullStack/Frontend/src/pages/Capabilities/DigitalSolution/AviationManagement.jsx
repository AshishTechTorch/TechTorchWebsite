import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  ShoppingBag,
  Factory,
  Truck,
  Building2,
  ShoppingCart,
  Pill,
  UtensilsCrossed,
  Eye,
  TrendingUp,
  Users,
  Repeat,
  ShieldCheck,
  Calendar,
  Lightbulb,
  Briefcase,
  Monitor,
  Link2,
  Headphones,
  Zap,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#6b0c36";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const heroSteps = [
  { Icon: ClipboardList, label: "Plan" },
  { Icon: ShoppingBag, label: "Source" },
  { Icon: Factory, label: "Make" },
  { Icon: Truck, label: "Deliver" },
];

const aboutParagraphs = [
  "A well-coordinated supply chain connects procurement, suppliers, inventory, transportation and delivery. When these activities are managed without sufficient visibility or coordination, businesses may encounter delays, higher operating costs and difficulty responding to changing demand.",
  "TechTorch Supply Chain Management solutions are designed to help organisations organise these activities and gain a clearer understanding of their supply chain operations. Better access to operational information can help teams review order progress, monitor inventory, coordinate suppliers and identify areas that may require attention.",
  "Demand forecasting supports inventory planning by helping businesses assess requirements using available demand information. Supplier collaboration helps streamline communication and procurement activities, while logistics management supports the coordination of transportation and shipments. Risk management adds another important layer by helping organisations identify potential disruptions and prepare appropriate responses.",
  "Every supply chain has different operational requirements. TechTorch Solutions works with businesses to understand their needs and support implementation, customisation, training and ongoing improvement. Integration with compatible existing systems can also help align supply chain activities with established business processes.",
  "With a structured approach to supply chain management, businesses can work towards improved coordination, greater operational visibility and more efficient movement of goods from procurement to delivery.",
];

const industries = [
  { Icon: Building2, label: "Manufacturing" },
  { Icon: ShoppingCart, label: "Retail" },
  { Icon: Pill, label: "Pharmaceuticals" },
  { Icon: UtensilsCrossed, label: "Food & Beverage" },
];

const features = [
  {
    Icon: Eye,
    title: "End-to-End Supply Chain Visibility",
    text: "Gain clearer insight into inventory information, order progress and supplier activities to support operational decisions.",
  },
  {
    Icon: TrendingUp,
    title: "Demand Forecasting",
    text: "Use available demand data and analytical insights to support inventory planning and anticipate business requirements.",
  },
  {
    Icon: Users,
    title: "Supplier Collaboration",
    text: "Improve communication and coordination with suppliers to help manage procurement activities and purchasing timelines.",
  },
  {
    Icon: Repeat,
    title: "Logistics Management",
    text: "Organise transportation, shipment tracking and delivery activities to support the efficient movement of goods.",
  },
  {
    Icon: ShieldCheck,
    title: "Risk Management",
    text: "Identify potential supply chain vulnerabilities and plan responses to help address operational disruptions.",
  },
];

const approach = [
  {
    Icon: Building2,
    title: "Enable Business Vision",
    text: "Align supply chain improvements with business objectives and priorities.",
  },
  {
    Icon: Calendar,
    title: "Empower Data-Led Decisions",
    text: "Use supply chain information to support forecasting, planning and informed decisions.",
  },
  {
    Icon: Users,
    title: "Build Resilience",
    text: "Strengthen coordination and respond to changing conditions with greater flexibility.",
  },
  {
    Icon: Lightbulb,
    title: "Accelerate Innovation",
    text: "Encourage continuous improvement through the effective use of technology.",
  },
];

const whyChoose = [
  {
    Icon: Briefcase,
    title: "Customisable Modules",
    text: "Adapt solutions to your operational needs.",
  },
  {
    Icon: Monitor,
    title: "User-Friendly Interfaces",
    text: "Make operational information easier for teams to access and use.",
  },
  {
    Icon: Link2,
    title: "Flexible Integration",
    text: "Connect with compatible existing systems and workflows where supported.",
  },
  {
    Icon: Headphones,
    title: "Implementation Support",
    text: "Receive guidance during solution deployment.",
  },
  {
    Icon: Zap,
    title: "Ongoing Improvement",
    text: "Adapt processes as business requirements evolve.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Dash = () => (
  <span className="block h-[2px] w-5" style={{ background: PLUM }} />
);

const Eyebrow = ({ children }) => (
  <p
    className="m-0 flex items-center gap-2 font-inter text-[11px] font-bold uppercase tracking-[0.12em]"
    style={{ color: PLUM }}
  >
    <span className="inline-block h-[2px] w-4 bg-current" />
    {children}
  </p>
);

const PinkIcon = ({ Icon, size = 18 }) => (
  <div
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f8]"
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </div>
);

export default function AviationManagement() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full px-4 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Supply Chain Management</Eyebrow>
            <h1
              className="mt-5 mb-6 font-plus-jakarta text-[34px] font-extrabold leading-[1.08] tracking-tight md:text-[44px]"
              style={{ color: DARK }}
            >
              Build a More Connected and Efficient Supply Chain
            </h1>
            <p className="max-w-[520px] text-[16px] leading-[1.7]">
              TechTorch Solutions helps businesses improve supply chain
              visibility, coordinate suppliers and manage inventory and delivery
              activities more effectively. Our technology-focused solutions
              support better planning, operational coordination and informed
              decision-making across supply chain processes.
            </p>
            <Link
              to="/talk-to-expert"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: PLUM }}
            >
              Talk to Our Experts
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[600px]">
            <img
              src="/supply-chain-hero.png"
              alt="Container terminal and logistics operations"
              className="h-[300px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.2)] md:h-[360px]"
            />
            <div className="absolute right-4 top-5 flex w-[120px] flex-col gap-4 rounded-xl bg-white px-4 py-4 shadow-lg">
              {heroSteps.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-[11px] font-medium"
                  style={{ color: DARK }}
                >
                  <span style={{ color: PLUM }}>
                    <Icon size={13} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SMARTER SUPPLY CHAIN + INDUSTRIES ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Dash />
            <h2
              className="mt-5 mb-6 font-plus-jakarta text-[26px] font-bold leading-[1.2] md:text-[32px]"
              style={{ color: DARK }}
            >
              Smarter Supply Chain Management for Changing Business Needs
            </h2>
            {aboutParagraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mb-5 text-[15px] leading-[1.75]"
              >
                {p}
              </p>
            ))}
          </div>

          <div>
            <img
              src="/supply-chain-warehouse.png"
              alt="Warehouse team reviewing inventory on a tablet"
              className="h-[240px] w-full rounded-xl border-4 border-white object-cover shadow-[0_14px_30px_rgba(15,23,42,0.15)] md:h-[290px]"
            />

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <Eyebrow>Ecosystem</Eyebrow>
              <h3
                className="mt-4 mb-3 font-plus-jakarta text-[18px] font-bold"
                style={{ color: DARK }}
              >
                Industries We Serve
              </h3>
              <p className="mb-5 text-[13.5px] leading-[1.65]">
                TechTorch Solutions supports businesses across manufacturing,
                retail, pharmaceuticals and food and beverage, with supply chain
                solutions designed to meet their specific operational needs.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {industries.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-3 shadow-sm"
                  >
                    <PinkIcon Icon={Icon} size={16} />
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: DARK }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="w-full bg-[#fafbfd] px-4 py-16 md:px-8 md:py-20">
        <Eyebrow>Capabilities</Eyebrow>
        <h2
          className="mt-3 mb-10 font-plus-jakarta text-[26px] font-bold leading-[1.2] md:text-[32px]"
          style={{ color: DARK }}
        >
          Key Features of Our Supply Chain Management Solutions
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              style={{ borderTop: "3px solid #f3d3df" }}
            >
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[15px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPROACH + WHY CHOOSE ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Approach */}
          <div>
            <Dash />
            <h2
              className="mt-5 mb-4 font-plus-jakarta text-[26px] font-bold leading-[1.2] md:text-[32px]"
              style={{ color: DARK }}
            >
              A Supply Chain Approach Designed Around Your Business
            </h2>
            <p
              className="mb-6 text-[10.5px] font-bold uppercase tracking-[0.12em]"
              style={{ color: PLUM }}
            >
              Our Approach
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {approach.map(({ Icon, title, text }) => (
                <div key={title} className="rounded-xl bg-white p-5 shadow-sm">
                  <PinkIcon Icon={Icon} />
                  <h3
                    className="mt-5 mb-2 font-plus-jakarta text-[14px] font-bold"
                    style={{ color: DARK }}
                  >
                    {title}
                  </h3>
                  <p className="m-0 text-[12.5px] leading-[1.6]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why choose */}
          <div>
            <Dash />
            <h2
              className="mt-5 mb-4 font-plus-jakarta text-[26px] font-bold leading-[1.2] md:text-[32px]"
              style={{ color: DARK }}
            >
              Why Choose TechTorch Solutions?
            </h2>
            <p className="mb-6 text-[14.5px] leading-[1.7]">
              TechTorch Solutions combines industry expertise with
              technology-focused implementation to deliver supply chain
              solutions that create real business value.
            </p>

            <div className="flex flex-col gap-3">
              {whyChoose.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <PinkIcon Icon={Icon} />
                  <div>
                    <h3
                      className="m-0 font-plus-jakarta text-[13.5px] font-bold"
                      style={{ color: DARK }}
                    >
                      {title}
                    </h3>
                    <p className="m-0 mt-1 text-[12.5px] leading-[1.5]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= POWERED BY ================= */}
      <section className="flex w-full flex-col items-center px-4 pb-16 pt-16 text-center md:px-8">
        <p
          className="m-0 mb-8 flex items-center gap-2 text-[12.5px] font-semibold"
          style={{ color: DARK }}
        >
          <span
            className="inline-block h-[2px] w-4"
            style={{ background: PLUM }}
          />
          Delivering Solutions Powered By
        </p>

        {/* Replace this image with your real partner logos */}
        <img
          src="/supply-chain-partners.png"
          alt="Technology partners: AWS, Google, DELL and others"
          className="h-auto w-full max-w-[900px] object-contain"
        />
      </section>
    </div>
  );
}
