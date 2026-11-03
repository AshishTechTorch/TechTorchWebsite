import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Filter,
  TrendingUp,
  User,
  Users,
  ShoppingCart,
  Heart,
  Landmark,
  GraduationCap,
  Cpu,
  Activity,
  MessageCircle,
  Database,
  Settings,
  ClipboardList,
  Headphones,
  Megaphone,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const pipeline = [
  { label: "New Leads", value: "1,250", dot: "#f43f5e" },
  { label: "Qualified", value: "820", dot: "#f59e0b" },
  { label: "Proposal", value: "420", dot: "#6366f1" },
  { label: "Closed Won", value: "310", dot: PLUM },
];

const insights = [
  { label: "Total Customers", value: "12,540", change: "12%", dot: "#a855f7" },
  { label: "Active Leads", value: "3,240", change: "10%", dot: "#f59e0b" },
  { label: "Conversion Rate", value: "24.8%", change: "6%", dot: "#f43f5e" },
];

const industries = [
  { Icon: ShoppingCart, label: "Retail & E-Commerce" },
  { Icon: Heart, label: "Healthcare" },
  { Icon: Landmark, label: "Finance & Banking" },
  { Icon: GraduationCap, label: "Education" },
  { Icon: Cpu, label: "Technology" },
];

const benefits = [
  {
    Icon: User,
    title: "Centralized Customer Information",
    text: "Keep your customer data and interaction history organized in one place.",
  },
  {
    Icon: Activity,
    title: "Streamlined Sales Processes",
    text: "Improve visibility into sales activities, pipeline stages, and opportunities.",
  },
  {
    Icon: Users,
    title: "Improved Team Coordination",
    text: "Help sales, marketing and support teams collaborate with better unified information.",
  },
  {
    Icon: MessageCircle,
    title: "Enhanced Customer Engagement",
    text: "Support consistent communication and deliver better, more attentive customer experiences.",
  },
  {
    Icon: Database,
    title: "Flexible Business Solutions",
    text: "Adapt CRM workflows precisely to your evolving and unique business operational needs.",
  },
  {
    Icon: Settings,
    title: "Implementation & Ongoing Support",
    text: "Get expert guidance, user training, and continuous optimization support at every step.",
  },
];

const features = [
  {
    Icon: Users,
    title: "Lead & Opportunity Management",
    text: "Track leads, manage sales pipelines and prioritize opportunities to close more deals.",
  },
  {
    Icon: ClipboardList,
    title: "Contact Management",
    text: "Centralize customer information, track interactions and understand customer preferences.",
  },
  {
    Icon: Settings,
    title: "Sales Automation",
    text: "Automate routine tasks, manage follow-ups and track sales progress effortlessly.",
  },
  {
    Icon: Headphones,
    title: "Customer Support & Service",
    text: "Manage inquiries, support tickets and feedback to deliver better service and satisfaction.",
  },
  {
    Icon: Megaphone,
    title: "Marketing Automation",
    text: "Run targeted campaigns, manage social media and analyze performance to improve engagement.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Pill = ({ children, upper = false }) => (
  <span
    className={`inline-block rounded-full bg-[#fbe9f2] px-4 py-1.5 font-inter text-[11.5px] font-semibold ${
      upper ? "uppercase tracking-[0.08em]" : ""
    }`}
    style={{ color: PLUM }}
  >
    {children}
  </span>
);

const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;

const Eyebrow = ({ children, light = false }) => (
  <p
    className="m-0 flex items-center gap-3 font-inter text-[11px] font-bold uppercase tracking-[0.12em]"
    style={{ color: light ? "#fff" : "#4b5563" }}
  >
    <span
      className="inline-block h-[2px] w-6"
      style={{ background: light ? "#fff" : PLUM }}
    />
    {children}
  </p>
);

const PinkIcon = ({ Icon, size = 20 }) => (
  <div
    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf0f6]"
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </div>
);

export default function CrmSolutionsPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section
        className="w-full px-4 py-14 md:px-8 md:py-16"
        style={{
          background: "linear-gradient(180deg, #fbf8f9 0%, #ffffff 100%)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Pill>Customer Relationship Management</Pill>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[36px] font-extrabold leading-[1.05] tracking-tight md:text-[48px]"
              style={{ color: DARK }}
            >
              Enhancing Customer Experience and{" "}
              <Plum>Strengthening Business Relationships</Plum>
            </h1>
            <p className="max-w-[500px] text-[16px] leading-[1.75]">
              Build stronger connections with your customers through intelligent
              CRM solutions. TechTorch helps businesses manage customer
              interactions, streamline sales processes, and drive sustainable
              growth with a unified and easy-to-use platform.
            </p>
            <Link
              to="/talk-to-expert"
              className="mt-8 inline-flex items-center rounded-full px-7 py-3.5 text-[13px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: PLUM }}
            >
              Talk to Our Experts
            </Link>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[560px] pb-16 pt-16 sm:pl-24 sm:pr-4">
            <div
              className="absolute -right-6 bottom-4 hidden h-[75%] w-[70%] rounded-full sm:block"
              style={{ background: PLUM }}
            />
            <img
              src="/crm-hero.png"
              alt="Sales professional reviewing CRM dashboards"
              className="relative h-[320px] w-full rounded-[40px] object-cover shadow-[0_24px_50px_rgba(15,23,42,0.22)] md:h-[360px]"
            />

            {/* Sales pipeline */}
            <div className="absolute left-0 top-24 hidden w-[190px] rounded-xl bg-white px-4 py-4 shadow-xl sm:block">
              <p
                className="m-0 mb-3 flex items-center gap-2 text-[11px] font-bold"
                style={{ color: DARK }}
              >
                <span style={{ color: PLUM }}>
                  <Filter size={13} />
                </span>
                Sales Pipeline
              </p>
              {pipeline.map(({ label, value, dot }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-1 text-[10px]"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: dot }}
                    />
                    {label}
                  </span>
                  <span className="font-bold" style={{ color: DARK }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Customer insights */}
            <div className="absolute right-0 top-2 w-[210px] rounded-xl bg-white px-4 py-3 shadow-xl">
              <div className="mb-2 flex items-center justify-between">
                <p
                  className="m-0 text-[11px] font-bold"
                  style={{ color: DARK }}
                >
                  Customer Insights
                </p>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              {insights.map(({ label, value, change, dot }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-1 text-[9.5px]"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: dot }}
                    />
                    {label}
                  </span>
                  <span>
                    <b style={{ color: DARK }}>{value}</b>{" "}
                    <span className="font-semibold text-emerald-600">
                      ↑ {change}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* Stronger relationships */}
            <div className="absolute bottom-6 right-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdf0f6]"
                style={{ color: PLUM }}
              >
                <Users size={16} />
              </span>
              <div className="leading-tight">
                <p
                  className="m-0 text-[11px] font-bold"
                  style={{ color: DARK }}
                >
                  Stronger
                </p>
                <p className="m-0 text-[8.5px]">
                  Relationships
                  <br />
                  Bigger Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT TECHTORCH ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              className="absolute -bottom-4 -left-4 hidden h-[45%] w-[55%] rounded-bl-3xl sm:block"
              style={{ background: PLUM }}
            />
            <img
              src="/crm-about.png"
              alt="Team reviewing customer analytics together"
              className="relative h-[320px] w-full rounded-3xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.2)] md:h-[340px]"
            />
            <span
              className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-lg"
              style={{ color: PLUM }}
            >
              <TrendingUp size={16} />
            </span>
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{ background: PLUM }}
              >
                <User size={15} />
              </span>
              <div className="leading-tight">
                <p
                  className="m-0 text-[11px] font-bold"
                  style={{ color: DARK }}
                >
                  Happy Customers
                </p>
                <p className="m-0 text-[9px]">Build Stronger Brands</p>
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>About TechTorch</Eyebrow>
            <h2
              className="mt-5 mb-6 font-plus-jakarta text-[26px] font-extrabold leading-[1.2] md:text-[34px]"
              style={{ color: DARK }}
            >
              Building Meaningful Customer Connections with{" "}
              <Plum>Smart CRM Solutions</Plum>
            </h2>
            <p className="mb-5 text-[14.5px] leading-[1.75]">
              TechTorch Solutions delivers modern Customer Relationship
              Management (CRM) solutions that help businesses organize customer
              information, manage sales activities, and improve customer
              engagement. Our SaaS-based CRM platform brings essential customer
              relationship, sales, and marketing processes together, enabling
              organizations to manage interactions more effectively and build
              lasting customer relationships.
            </p>
            <p className="m-0 text-[14.5px] leading-[1.75]">
              Our CRM solutions provide businesses with centralized customer
              information, streamlined sales workflows, and organized
              communication management. By simplifying everyday business
              activities, we help teams focus on customer satisfaction, stronger
              engagement, and sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section
        className="w-full px-4 py-16 text-white md:px-8 md:py-20"
        style={{ background: PLUM }}
      >
        <Eyebrow light>Industries We Serve</Eyebrow>
        <h2 className="mt-4 mb-4 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px]">
          CRM Solutions for Every{" "}
          <span className="text-[#f6c6de]">Industry</span>
        </h2>
        <p className="mb-10 max-w-[560px] text-[14.5px] leading-[1.75] text-white/85">
          Our CRM solutions support businesses across multiple industries,
          including retail, healthcare, finance, education, and technology. With
          flexible capabilities designed around different business requirements.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 rounded-xl bg-white px-4 py-7 shadow-md"
            >
              <PinkIcon Icon={Icon} />
              <span className="text-[13px] font-bold" style={{ color: DARK }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Why Choose TechTorch</Eyebrow>
            <h2
              className="mt-5 mb-5 font-plus-jakarta text-[26px] font-extrabold leading-[1.2] md:text-[34px]"
              style={{ color: DARK }}
            >
              Your Technology Partner for{" "}
              <Plum>Better Customer Engagement</Plum>
            </h2>
            <p className="max-w-[560px] text-[14.5px] leading-[1.75]">
              At TechTorch Solutions, we focus on delivering adaptable CRM
              solutions that align with your business goals and customer
              management requirements. Our approach combines user-friendly
              technology, implementation assistance, professional training, and
              ongoing optimization support to help organizations make effective
              use of their CRM capabilities.
            </p>
          </div>

          <img
            src="/crm-engagement.png"
            alt="Colleagues discussing customer engagement results"
            className="h-[240px] w-full rounded-[40px] object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)] md:h-[270px]"
          />
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <PinkIcon Icon={Icon} size={18} />
              <div>
                <h3
                  className="m-0 font-plus-jakarta text-[13.5px] font-bold leading-[1.3]"
                  style={{ color: DARK }}
                >
                  {title}
                </h3>
                <p className="m-0 mt-1.5 text-[12.5px] leading-[1.6]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <Pill upper>Key Features</Pill>
        <h2
          className="mt-5 mb-10 font-plus-jakarta text-[28px] font-extrabold leading-[1.2] md:text-[34px]"
          style={{ color: DARK }}
        >
          Key Features of Our CRM Solutions
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl bg-white p-6 shadow-md"
            >
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[14.5px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="mb-6 flex-1 text-[12.5px] leading-[1.65]">{text}</p>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                style={{ background: PLUM }}
              >
                <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POWERED BY ================= */}
      <section className="w-full px-4 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p
              className="m-0 mb-3 text-[10.5px] font-bold uppercase tracking-[0.12em]"
              style={{ color: PLUM }}
            >
              Delivering Solutions Powered By
            </p>
            <h2
              className="m-0 mb-3 font-plus-jakarta text-[24px] font-extrabold leading-[1.2] md:text-[28px]"
              style={{ color: DARK }}
            >
              Trusted Technology. Reliable Performance.
            </h2>
            <p className="m-0 max-w-[460px] text-[13.5px] leading-[1.65]">
              We leverage modern cloud platforms and enterprise technology to
              build secure, scalable and flexible CRM solutions for your
              business.
            </p>
          </div>

          {/* Partner logos built in code (sharp at any size).
              To use official logo files later, swap these for <img> tags. */}
          <div className="flex w-full max-w-[620px] flex-wrap items-center justify-between gap-x-10 gap-y-6">
            <span
              className="font-plus-jakarta text-[30px] font-extrabold leading-none tracking-tight"
              style={{ color: "#ff9900" }}
            >
              aws
            </span>

            <span className="flex items-center gap-3">
              <span className="flex items-center">
                <i className="block h-5 w-5 rounded-full bg-[#4285f4]" />
                <i className="-ml-1.5 block h-5 w-5 rounded-full bg-[#ea4335]" />
                <i className="-ml-1.5 block h-5 w-5 rounded-full bg-[#fbbc05]" />
                <i className="-ml-1.5 block h-5 w-5 rounded-full bg-[#34a853]" />
              </span>
              <span className="text-[18px] font-semibold text-[#5f6368]">
                Google Cloud
              </span>
            </span>

            <span
              className="rounded-full border-2 px-4 py-0.5 text-[16px] font-extrabold tracking-[0.18em]"
              style={{ borderColor: "#0076ce", color: "#0076ce" }}
            >
              DELL
            </span>

            <span className="text-[28px] font-extrabold leading-none text-[#4b5563]">
              NC
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
