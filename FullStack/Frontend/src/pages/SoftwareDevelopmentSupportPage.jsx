import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Code,
  ShieldCheck,
  Settings,
  Monitor,
  Smartphone,
  Building2,
  Cloud,
  Star,
  RefreshCw,
  TrendingUp,
  Headphones,
  Heart,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Truck,
  Activity,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const approach = [
  {
    no: "01",
    Icon: Users,
    title: "Understand Your Requirements",
    text: "We assess your business objectives, workflows, and technical needs to define the project scope.",
  },
  {
    no: "02",
    Icon: Code,
    title: "Plan and Develop",
    text: "We select suitable technologies and develop software around your functional and operational requirements.",
  },
  {
    no: "03",
    Icon: ShieldCheck,
    title: "Test and Deploy",
    text: "We evaluate application functionality, usability, and performance before deployment.",
  },
  {
    no: "04",
    Icon: Settings,
    title: "Maintain and Improve",
    text: "We provide ongoing technical assistance, updates, and improvements as your requirements evolve.",
  },
];

const capabilities = [
  {
    Icon: Monitor,
    title: "01. Custom Software Development",
    text: "Develop purpose-built applications around your business processes, requirements, and priorities.",
  },
  {
    Icon: Smartphone,
    title: "02. Web and Mobile Application Development",
    text: "Create responsive web and mobile applications that provide consistent experiences across devices.",
  },
  {
    Icon: Building2,
    title: "03. Enterprise Software Development",
    text: "Build and enhance business systems such as ERP, CRM, and HRMS to support connected workflows.",
  },
  {
    Icon: Settings,
    title: "04. Software Modernization",
    text: "Improve existing applications through updated technologies and modernization strategies.",
  },
  {
    Icon: Cloud,
    title: "05. API Development and System Integration",
    text: "Connect applications and external platforms through APIs and integrations.",
  },
  {
    Icon: ShieldCheck,
    title: "06. Quality Assurance and Testing",
    text: "Evaluate software functionality, performance, and security.",
  },
  {
    Icon: Settings,
    title: "07. Software Maintenance and Technical Support",
    text: "Keep applications updated and maintainable with bug fixes, technical assistance, and feature enhancements.",
    wide: true,
  },
];

const sectors = [
  { Icon: Heart, label: "Healthcare" },
  { Icon: GraduationCap, label: "Education" },
  { Icon: ShoppingCart, label: "E-Commerce" },
  { Icon: Landmark, label: "Finance" },
  { Icon: Truck, label: "Logistics" },
  { Icon: Monitor, label: "Information Technology" },
];

const why = [
  {
    Icon: Star,
    title: "Technology Expertise",
    text: "Apply suitable technologies and development practices to meet project requirements.",
  },
  {
    Icon: RefreshCw,
    title: "Agile Project Management",
    text: "Organize development activities into manageable stages.",
  },
  {
    Icon: TrendingUp,
    title: "Scalable Development",
    text: "Build applications with the flexibility to accommodate changing needs.",
  },
  {
    Icon: ShieldCheck,
    title: "Quality-Focused Delivery",
    text: "Give attention to functionality, usability, and reliability.",
  },
  {
    Icon: Headphones,
    title: "Continued Technical Support",
    text: "Receive assistance with maintenance and updates.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;

const SoftIcon = ({ Icon, size = 18 }) => (
  <span
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f8]"
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </span>
);

/* Partner chips drawn in code (sharp at any size) */
const PartnerChip = ({ children }) => (
  <span className="flex h-12 min-w-[110px] items-center justify-center gap-2 rounded-lg border border-gray-100 bg-white px-4 text-[12px] font-semibold text-[#374151] shadow-sm">
    {children}
  </span>
);

export default function SoftwareDevelopmentSupportPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section
        className="w-full px-4 py-14 md:px-8 md:py-16"
        style={{
          background: "linear-gradient(180deg, #fdf6fa 0%, #ffffff 60%)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span
              className="inline-block rounded-full px-4 py-1.5 font-inter text-[10.5px] font-semibold text-white"
              style={{ background: PLUM }}
            >
              Software Development &amp; Support
            </span>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[38px] font-extrabold leading-[1.02] tracking-tight md:text-[50px]"
              style={{ color: DARK }}
            >
              Software Solutions <Plum>Designed to Move</Plum> Your Business
              Forward
            </h1>
            <p className="max-w-[500px] text-[15px] leading-[1.75]">
              Build, improve, and maintain software that supports the way your
              business works. TechTorch Solutions delivers development and
              technical support services focused on your operational needs,
              business goals, and long-term growth.
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

          <div className="relative mx-auto w-full max-w-[520px] pb-4 pt-4">
            <div className="absolute -right-3 -top-3 h-[92%] w-[92%] rounded-2xl bg-[#f6e9f0]" />
            <img
              src="/software-hero.png"
              alt="Developer working at a multi-monitor desk"
              className="relative h-[330px] w-full rounded-2xl object-cover shadow-[0_24px_50px_rgba(15,23,42,0.22)] md:h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* ================= TURNING REQUIREMENTS INTO SOFTWARE ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              className="absolute -left-3 -top-3 h-16 w-[40%] rounded-tl-2xl"
              style={{ background: PLUM }}
            />
            <img
              src="/software-about.png"
              alt="Developer working on code in a dark office"
              className="relative h-[250px] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.22)]"
            />
          </div>

          <div>
            <h2
              className="mb-5 font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[34px]"
              style={{ color: DARK }}
            >
              Turning Business Requirements into{" "}
              <Plum>Practical Software Solutions</Plum>
            </h2>
            <p className="mb-5 text-[14px] leading-[1.75]">
              Every business needs technology that works around its processes.
              From developing a new application to improving existing systems,
              the right software can help teams work more efficiently and manage
              business operations with greater flexibility.
            </p>
            <p className="m-0 text-[14px] leading-[1.75]">
              At <b style={{ color: DARK }}>TechTorch Solutions</b>, we work to
              understand your requirements and translate them into functional
              software solutions. Our approach covers planning, development,
              integration, testing, deployment, and ongoing technical support.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR DEVELOPMENT APPROACH ================= */}
      <section
        className="w-full px-4 py-16 md:px-8 md:py-20"
        style={{ background: PLUM }}
      >
        <div className="text-center text-white">
          <h2 className="m-0 mb-2 font-plus-jakarta text-[28px] font-bold md:text-[34px]">
            Our Development Approach
          </h2>
          <p className="m-0 mb-12 text-[14px] text-white/90">
            From Initial Requirements to Ongoing Support
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map(({ no, Icon, title, text }) => (
            <div
              key={no}
              className="relative rounded-xl bg-white px-6 pb-8 pt-10 text-center shadow-md"
            >
              <span
                className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-white text-[10px] font-bold"
                style={{ borderColor: PLUM, color: PLUM }}
              >
                {no}
              </span>
              <span
                className="mx-auto flex h-9 w-9 items-center justify-center"
                style={{ color: "#c0839f" }}
              >
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <h3
                className="mt-4 mb-3 font-plus-jakarta text-[15px] font-bold leading-[1.3]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[12px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DEVELOPMENT CAPABILITIES ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <h2
          className="mx-auto mb-12 max-w-[640px] text-center font-plus-jakarta text-[26px] font-extrabold leading-[1.2] md:text-[32px]"
          style={{ color: DARK }}
        >
          Development Capabilities That Support Your Business
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map(({ Icon, title, text, wide }) => (
            <div
              key={title}
              className={`flex items-start gap-4 rounded-xl border border-gray-100 bg-[#fcfcfd] p-5 shadow-sm ${
                wide ? "md:col-span-3" : ""
              }`}
            >
              <SoftIcon Icon={Icon} size={16} />
              <div>
                <h3
                  className="m-0 mb-1.5 font-plus-jakarta text-[13px] font-bold leading-[1.35]"
                  style={{ color: DARK }}
                >
                  {title}
                </h3>
                <p className="m-0 text-[12px] leading-[1.6]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2
              className="mb-5 font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[34px]"
              style={{ color: DARK }}
            >
              Software Solutions Across <Plum>Diverse Business Sectors</Plum>
            </h2>
            <p className="mb-6 max-w-[440px] text-[14px] leading-[1.75]">
              We support businesses across different industries with software
              development and technical services aligned with their operational
              requirements.
            </p>
            <div className="flex max-w-[460px] flex-wrap gap-2.5">
              {sectors.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-[11.5px] font-semibold text-[#374151] shadow-sm"
                >
                  <span style={{ color: PLUM }}>
                    <Icon size={13} />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              className="absolute -left-3 top-1/4 h-24 w-6 rounded-l-xl"
              style={{ background: PLUM }}
            />
            <img
              src="/software-sectors.png"
              alt="Digital city skyline with cloud network overlay"
              className="relative h-[260px] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.25)] md:h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <h2
            className="m-0 mb-2 font-plus-jakarta text-[28px] font-extrabold md:text-[34px]"
            style={{ color: DARK }}
          >
            Why Choose <Plum>TechTorch?</Plum>
          </h2>
          <p className="m-0 mb-12 text-[13.5px]">
            A Practical Approach to Software Development
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {why.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white px-5 py-7 text-center shadow-sm"
            >
              <span
                className="mx-auto flex h-9 w-9 items-center justify-center"
                style={{ color: "#c0839f" }}
              >
                <Icon size={20} strokeWidth={1.6} />
              </span>
              <h3
                className="mt-4 mb-2 font-plus-jakarta text-[13.5px] font-bold leading-[1.3]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[12px] leading-[1.6]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGY ECOSYSTEM ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-14 md:px-8">
        <div className="text-center">
          <h2
            className="m-0 mb-2 font-plus-jakarta text-[26px] font-extrabold md:text-[30px]"
            style={{ color: DARK }}
          >
            Technology Ecosystem
          </h2>
          <p className="m-0 mb-8 text-[13px]">
            Delivering Solutions Powered by Technology Partners
          </p>
        </div>

        {/* Partner chips drawn in code. Swap for <img> official logos later. */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PartnerChip>
            <span className="grid grid-cols-2 gap-[2px]">
              <i className="block h-2 w-2 bg-[#f25022]" />
              <i className="block h-2 w-2 bg-[#7fba00]" />
              <i className="block h-2 w-2 bg-[#00a4ef]" />
              <i className="block h-2 w-2 bg-[#ffb900]" />
            </span>
            Microsoft
          </PartnerChip>
          <PartnerChip>
            <Cloud size={16} color="#4285f4" fill="#4285f4" />
            Google Cloud
          </PartnerChip>
          <PartnerChip>
            <span className="text-[15px] font-extrabold text-[#252f3e]">
              aws
            </span>
            <span className="text-[#ff9900]">⌣</span>
          </PartnerChip>
          <PartnerChip>
            <span className="text-[11px] font-extrabold tracking-[0.12em] text-[#e0402a]">
              ORACLE
            </span>
          </PartnerChip>
          <PartnerChip>
            <Cloud size={16} color="#00a1e0" fill="#00a1e0" />
            <span className="text-[#00a1e0]">salesforce</span>
          </PartnerChip>
          <PartnerChip>
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#e1251b] text-[9px] font-bold text-white">
              A
            </span>
            Adobe
          </PartnerChip>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full px-4 py-14 md:px-8">
        <div
          className="grid items-center gap-8 rounded-3xl px-8 py-10 text-white shadow-[0_24px_50px_rgba(115,0,66,0.35)] md:px-14 lg:grid-cols-2"
          style={{
            background: "linear-gradient(120deg, #6b0c36 0%, #8a1050 100%)",
          }}
        >
          <div>
            <h2 className="mb-4 font-plus-jakarta text-[26px] font-bold leading-[1.15] md:text-[34px]">
              Let&rsquo;s Build Software That Works for Your Business
            </h2>
            <p className="mb-7 max-w-[440px] text-[13.5px] leading-[1.7] text-white/90">
              Have a new software requirement or an existing application that
              needs improvement? Connect with TechTorch Solutions to discuss
              your project.
            </p>
            <Link
              to="/talk-to-expert"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12.5px] font-semibold no-underline transition-opacity hover:opacity-90"
              style={{ color: PLUM }}
            >
              Talk to Our Experts
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[400px] pb-5 pt-5">
            <img
              src="/software-cta.png"
              alt="Laptop showing secure software dashboards"
              className="h-[200px] w-full rounded-xl object-cover shadow-xl"
            />
            <span className="absolute left-0 top-0 inline-flex items-center gap-2 rounded-md border border-white/30 bg-[#2a0f3a]/80 px-3 py-1.5 text-[9.5px] font-medium">
              <Activity size={11} />
              99.9% Uptime
            </span>
            <span className="absolute -bottom-1 right-0 inline-flex items-center gap-2 rounded-md border border-white/30 bg-[#2a0f3a]/80 px-3 py-1.5 text-[9.5px] font-medium">
              <ShieldCheck size={11} />
              Enterprise Security
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
