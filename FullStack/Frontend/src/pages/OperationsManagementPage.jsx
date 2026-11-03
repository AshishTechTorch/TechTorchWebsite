import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Factory,
  Repeat,
  Box,
  ShieldCheck,
  TrendingUp,
  Truck,
  Plus,
  ShoppingBag,
  Briefcase,
  Settings,
  Calendar,
  Activity,
  Puzzle,
  Monitor,
  Link2,
  Headphones,
  RefreshCw,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#6b0c36";
const DARK = "#1a1226";
const DEEP_PLUM = "#730042";

/* ---------- Content ---------- */
const heroChips = [
  { Icon: Factory, label: "Production" },
  { Icon: Repeat, label: "Logistics" },
  { Icon: Box, label: "Inventory" },
  { Icon: ShieldCheck, label: "Quality" },
];

const aboutParagraphs = [
  "Effective operations management is essential for businesses that want to improve productivity, coordinate resources and maintain consistent workflows. When operational activities are difficult to monitor or manage, teams may face delays, inefficient resource utilisation and challenges in maintaining quality.",
  "TechTorch Operations Management solutions are designed to help businesses organise and monitor their operational processes more effectively. By supporting workflow automation, resource allocation, scheduling and operational analytics, these solutions help organisations gain better visibility into their operations and identify opportunities for improvement.",
  "Businesses can use operational insights to support planning, recognise potential bottlenecks and make informed decisions. Resource allocation and scheduling capabilities help teams coordinate workloads, while inventory and supply chain management support better control over stock-related activities and operational requirements.",
  "Quality control and compliance tracking also play an important role in maintaining operational standards. By bringing these activities into a more structured management approach, organisations can improve process consistency and respond more effectively to changing business needs.",
  "TechTorch Solutions works with businesses to understand their operational requirements and support implementation according to their needs. Customisable modules, user-friendly interfaces and integration capabilities with compatible existing ERP systems help organisations align operational tools with their established workflows.",
  "From initial deployment to ongoing improvement, the focus remains on helping businesses build more organised, adaptable and efficient operations.",
];

const industries = [
  {
    Icon: Factory,
    title: "Manufacturing",
    text: "Production coordination and resource planning.",
  },
  {
    Icon: Truck,
    title: "Logistics",
    text: "Scheduling and operational coordination.",
  },
  {
    Icon: Plus,
    title: "Healthcare",
    text: "Organised workflows and resource management.",
  },
  {
    Icon: ShoppingBag,
    title: "Retail",
    text: "Inventory-related activities and daily operations.",
  },
  {
    Icon: Briefcase,
    title: "Service Businesses",
    text: "Workflow coordination and service delivery.",
    wide: true,
  },
];

const features = [
  {
    Icon: Settings,
    title: "Workflow Automation",
    text: "Streamline repetitive tasks and reduce manual intervention so teams can focus on higher-value activities.",
  },
  {
    Icon: Calendar,
    title: "Resource Allocation & Scheduling",
    text: "Coordinate resources, manage schedules and support effective workforce planning.",
  },
  {
    Icon: Activity,
    title: "Real-Time Monitoring & Analytics",
    text: "Review operational information, identify potential bottlenecks and help meet timely decision-making.",
  },
  {
    Icon: Box,
    title: "Inventory & Supply Chain Management",
    text: "Improve coordination of inventory and supply chain activities to help meet operational demand.",
  },
  {
    Icon: ShieldCheck,
    title: "Quality Control & Compliance Tracking",
    text: "Support quality monitoring and compliance-related processes to help maintain required operational standards.",
  },
];

const whyChoose = [
  {
    Icon: Puzzle,
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
    title: "ERP Integration",
    text: "Support integration with compatible existing systems and workflows.",
  },
  {
    Icon: Headphones,
    title: "Implementation Support",
    text: "Receive guidance during solution deployment.",
  },
  {
    Icon: RefreshCw,
    title: "Continuous Improvement",
    text: "Adapt operational processes as business requirements change.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Eyebrow = ({ children, light = false, dash = true }) => (
  <p
    className="m-0 flex items-center gap-2 font-inter text-[11px] font-bold uppercase tracking-[0.12em]"
    style={{ color: light ? "#fff" : PLUM }}
  >
    {dash && <span className="inline-block h-[2px] w-4 bg-current" />}
    {children}
  </p>
);

const Dash = ({ light = false }) => (
  <span
    className="block h-[2px] w-5"
    style={{ background: light ? "#f9a8d4" : PLUM }}
  />
);

const PinkIcon = ({ Icon, size = 18 }) => (
  <div
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f8]"
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </div>
);

export default function OperationsManagementPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full px-4 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Operations Management</Eyebrow>
            <h1
              className="mt-5 mb-6 font-plus-jakarta text-[36px] font-extrabold leading-[1.08] tracking-tight md:text-[46px]"
              style={{ color: DARK }}
            >
              Optimise Your Operations with
              <br />
              <span style={{ color: PLUM }}>TechTorch Solutions</span>
            </h1>
            <p className="max-w-[520px] text-[16px] leading-[1.7]">
              Improve operational efficiency with solutions designed to simplify
              workflows, coordinate resources and strengthen day-to-day business
              management. TechTorch helps organisations improve visibility,
              support informed decisions and manage operational activities more
              effectively.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/talk-to-expert"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
                style={{ background: PLUM }}
              >
                Talk to Our Experts
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/explore-solutions"
                className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-[13px] font-semibold text-[#1a1226] no-underline transition-colors hover:border-[#6b0c36] hover:text-[#6b0c36]"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>

          {/* Hero visual: photo + floating list + insights card */}
          <div className="relative mx-auto w-full max-w-[560px] pb-10 pl-10 sm:pl-24">
            <div
              className="absolute bottom-4 right-[-14px] top-10 hidden w-[60%] rounded-3xl sm:block"
              style={{ background: PLUM }}
            />
            <img
              src="/operations-hero.png"
              alt="Operations manager reviewing dashboards"
              className="relative h-[300px] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.2)] md:h-[340px]"
            />

            <div className="absolute left-0 top-8 flex w-[128px] flex-col gap-3 rounded-xl bg-white/95 px-4 py-4 shadow-lg sm:left-2">
              {heroChips.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-[10.5px] font-semibold"
                  style={{ color: DARK }}
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-md bg-[#fdf2f8]"
                    style={{ color: PLUM }}
                  >
                    <Icon size={11} />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 right-0 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdf2f8]"
                style={{ color: PLUM }}
              >
                <TrendingUp size={16} />
              </span>
              <div className="leading-tight">
                <p className="m-0 text-[9px] uppercase tracking-wide text-gray-500">
                  Operational
                </p>
                <p
                  className="m-0 text-[12px] font-bold"
                  style={{ color: DARK }}
                >
                  Insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUILDING MORE EFFICIENT OPERATIONS ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[400px]">
            <div
              className="absolute -left-3 -top-3 h-24 w-[45%] rounded-tl-2xl"
              style={{ background: PLUM }}
            />
            <img
              src="/operations-warehouse.png"
              alt="Forklift operating in a distribution warehouse"
              className="relative h-[420px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)] md:h-[500px]"
            />
          </div>

          <div>
            <Dash />
            <h2
              className="mt-4 mb-6 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px]"
              style={{ color: DARK }}
            >
              Building More Efficient Operations Through Better Management
            </h2>
            {aboutParagraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mb-5 text-[14.5px] leading-[1.75]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section
        className="w-full px-4 py-16 text-white md:px-8 md:py-20"
        style={{ background: DEEP_PLUM }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <Dash light />
            <p className="mt-8 mb-3 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white/80">
              Industries We Serve
            </p>
            <h2 className="mb-5 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[32px]">
              Operations Management for Your Industry
            </h2>
            <p className="max-w-[420px] text-[14.5px] leading-[1.7] text-white/85">
              TechTorch Operations Management solutions are designed to support
              operational requirements across:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map(({ Icon, title, text, wide }) => (
              <div
                key={title}
                className={`rounded-xl border border-white/15 bg-white/10 p-5 ${
                  wide ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                  <Icon size={16} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 mb-1.5 font-plus-jakarta text-[14px] font-bold">
                  {title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.55] text-white/80">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="w-full bg-[#fafbfd] px-4 py-16 md:px-8 md:py-20">
        <Dash />
        <p
          className="mt-5 mb-2 text-[10.5px] font-bold uppercase tracking-[0.12em]"
          style={{ color: PLUM }}
        >
          Key Features
        </p>
        <h2
          className="mb-10 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[32px]"
          style={{ color: DARK }}
        >
          Tools to Support Efficient Operations
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[14.5px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[12.5px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Dash />
            <p
              className="mt-8 mb-3 text-[10.5px] font-bold uppercase tracking-[0.12em]"
              style={{ color: PLUM }}
            >
              Why Choose TechTorch Solutions?
            </p>
            <h2
              className="mb-6 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px]"
              style={{ color: DARK }}
            >
              Technology That Supports Your Operational Goals
            </h2>
            <p className="max-w-[420px] text-[14.5px] leading-[1.7]">
              TechTorch Solutions combines operational understanding with
              technology-focused implementation to help businesses address their
              process requirements.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {whyChoose.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <PinkIcon Icon={Icon} />
                <div>
                  <h3
                    className="m-0 font-plus-jakarta text-[14.5px] font-bold"
                    style={{ color: DARK }}
                  >
                    {title}
                  </h3>
                  <p className="m-0 mt-1 text-[13px] leading-[1.55]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POWERED BY ================= */}
      <section className="flex w-full flex-col items-center px-4 pb-16 pt-16 text-center md:px-8">
        <Dash />
        <p
          className="mt-6 mb-8 text-[10.5px] font-bold uppercase tracking-[0.14em]"
          style={{ color: PLUM }}
        >
          Delivering Solutions Powered By
        </p>

        {/* Replace this image with your real partner logos */}
        <img
          src="/operations-partners.png"
          alt="Technology partners: AWS, Google Cloud, DELL and others"
          className="h-auto w-full max-w-[640px] object-contain"
        />
      </section>
    </div>
  );
}
