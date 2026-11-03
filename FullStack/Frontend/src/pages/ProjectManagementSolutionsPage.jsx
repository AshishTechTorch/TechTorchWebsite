import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Calendar,
  User,
  Users,
  Check,
  Building2,
  Monitor,
  Heart,
  Megaphone,
  Settings,
  LayoutGrid,
  Eye,
  FileText,
  RefreshCw,
  ClipboardList,
  Activity,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const dashboard = [
  { label: "In Progress", value: 12, dot: "#3b82f6" },
  { label: "Completed", value: 8, dot: "#10b981" },
  { label: "Delayed", value: 3, dot: "#ef4444" },
  { label: "On Hold", value: 2, dot: "#a855f7" },
];

const steps = [
  { Icon: Calendar, label: "Plan", bg: "#fce7f3", color: "#be185d" },
  { Icon: Activity, label: "Track", bg: "#dbeafe", color: "#1d4ed8" },
  { Icon: User, label: "Collaborate", bg: "#ffe4e6", color: "#e11d48" },
  { Icon: Check, label: "Deliver", bg: "#dcfce7", color: "#15803d" },
];

const industries = [
  { Icon: Building2, label: "Construction" },
  { Icon: Monitor, label: "IT" },
  { Icon: Heart, label: "Healthcare" },
  { Icon: Megaphone, label: "Marketing" },
  { Icon: Settings, label: "Product Development" },
];

const trust = [
  {
    Icon: LayoutGrid,
    title: "Flexible and Adaptable Solutions",
    text: "Support different project structures and organizational workflows.",
  },
  {
    Icon: Eye,
    title: "Greater Project Visibility",
    text: "Maintain a clearer understanding of project activities and timelines.",
  },
  {
    Icon: Users,
    title: "Improved Team Collaboration",
    text: "Encourage better communication and coordination among team members.",
  },
  {
    Icon: FileText,
    title: "Implementation and Training",
    text: "Receive assistance during setup and training to use the solution effectively.",
  },
  {
    Icon: RefreshCw,
    title: "Ongoing Support and Updates",
    text: "Benefit from continued platform updates and support as your requirements evolve.",
  },
];

const features = [
  {
    Icon: ClipboardList,
    title: "Task and Milestone Tracking",
    text: "Create tasks, assign responsibilities, and monitor progress to keep projects on track.",
  },
  {
    Icon: Users,
    title: "Collaboration Tools",
    text: "Enable real-time communication, file sharing, and discussions to keep teams connected and aligned.",
  },
  {
    Icon: Settings,
    title: "Resource Management",
    text: "Track availability, understand team capacity, and assign the right skills to the right tasks.",
  },
  {
    Icon: Activity,
    title: "Gantt Charts & Kanban",
    text: "Visualize timelines and workflows to simplify planning and track progress.",
  },
  {
    Icon: FileText,
    title: "Reporting and Analytics",
    text: "Access project insights, resource utilization, and budget tracking to make better decisions.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Pill = ({ children }) => (
  <span
    className="inline-block rounded-full border border-[#f3c9de] bg-[#fdf2f8] px-4 py-1.5 font-inter text-[11px] font-bold uppercase tracking-[0.04em]"
    style={{ color: PLUM }}
  >
    {children}
  </span>
);

const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;

const SoftIcon = ({ Icon, size = 20, round = false }) => (
  <span
    className={`flex h-11 w-11 shrink-0 items-center justify-center bg-[#fdf2f8] ${
      round ? "rounded-full" : "rounded-lg"
    }`}
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </span>
);

export default function ProjectManagementSolutionsPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section
        className="w-full px-4 py-14 md:px-8 md:py-16"
        style={{
          background: "linear-gradient(180deg, #fdf6fa 0%, #ffffff 40%)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Pill>Project Management Solutions</Pill>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[38px] font-extrabold leading-[1.02] tracking-tight md:text-[52px]"
              style={{ color: DARK }}
            >
              Project Management <Plum>Solutions</Plum>
            </h1>
            <p
              className="mb-5 max-w-[520px] font-plus-jakarta text-[19px] font-semibold leading-[1.35]"
              style={{ color: DARK }}
            >
              Ensuring Seamless Coordination and Successful Project Delivery.
            </p>
            <p
              className="mb-4 font-plus-jakarta text-[14.5px] font-bold"
              style={{ color: PLUM }}
            >
              Plan Efficiently. Collaborate Seamlessly. Deliver Successfully.
            </p>
            <p className="max-w-[540px] text-[14.5px] leading-[1.75]">
              TechTorch Solutions provides comprehensive SaaS-based Project
              Management Solutions that help organizations plan, organize, and
              manage projects with greater efficiency. Our platform brings
              essential project management capabilities together, enabling teams
              to coordinate tasks, monitor progress, manage resources, and stay
              focused on project goals.
            </p>
            <Link
              to="/talk-to-expert"
              className="mt-9 inline-flex items-center rounded-full border-2 px-8 py-3 text-[13.5px] font-semibold no-underline transition-colors hover:bg-[#730042] hover:text-white"
              style={{ borderColor: PLUM, color: PLUM }}
            >
              Talk to Our Experts
            </Link>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[580px] pb-14 pt-16 sm:pl-16">
            <div className="relative rounded-2xl bg-white p-1.5 shadow-[0_24px_50px_rgba(15,23,42,0.22)]">
              <img
                src="/project-hero.png"
                alt="Team collaborating around a project board"
                className="h-[300px] w-full rounded-xl object-cover md:h-[340px]"
              />
            </div>

            {/* Project dashboard card */}
            <div className="absolute left-0 top-6 hidden w-[190px] rounded-xl bg-white px-4 py-3 shadow-xl sm:block">
              <p
                className="m-0 mb-2 text-[11px] font-bold"
                style={{ color: DARK }}
              >
                Project Dashboard
              </p>
              {dashboard.map(({ label, value, dot }) => (
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

            {/* Kanban mini card */}
            <div className="absolute right-0 top-0 hidden w-[220px] rounded-xl bg-white/95 px-4 py-3 shadow-xl sm:block">
              <div className="mb-2 flex justify-between text-[9px] font-semibold">
                <span className="text-gray-400">To Do</span>
                <span style={{ color: PLUM }}>In Progress</span>
                <span className="text-gray-400">Done</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <span className="h-5 rounded bg-[#e0e7ff]" />
                <span className="h-8 rounded bg-[#fce7f3]" />
                <span className="h-4 rounded bg-[#d1fae5]" />
                <span className="h-5 rounded bg-[#dbeafe]" />
              </div>
            </div>

            {/* Better collaboration */}
            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                style={{ background: PLUM }}
              >
                <Zap size={16} />
              </span>
              <div className="leading-tight">
                <p
                  className="m-0 text-[11.5px] font-bold"
                  style={{ color: DARK }}
                >
                  Better Collaboration
                </p>
                <p className="m-0 text-[10px]" style={{ color: PLUM }}>
                  Greater Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT TECHTORCH ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="rounded-3xl bg-white p-3 shadow-[0_20px_40px_rgba(15,23,42,0.15)]">
              <img
                src="/project-about.png"
                alt="Project timeline displayed on a laptop"
                className="h-[320px] w-full rounded-2xl object-cover md:h-[370px]"
              />
            </div>
            <div className="absolute left-6 top-[28%] hidden w-[170px] rounded-xl bg-white px-4 py-3 shadow-xl sm:block">
              {steps.map(({ Icon, label, bg, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 py-2 text-[11px] font-bold"
                  style={{ color: DARK }}
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: bg, color }}
                  >
                    <Icon size={13} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Pill>About TechTorch</Pill>
            <h2
              className="mt-5 mb-5 font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
              style={{ color: DARK }}
            >
              Driving Project Success with Powerful{" "}
              <Plum>Management Solutions</Plum>
            </h2>
            <p className="mb-7 text-[14.5px] leading-[1.75]">
              From project initiation to final delivery, our solutions help
              businesses maintain better workflow visibility, improve team
              coordination, and manage project activities with greater control.
              By bringing planning and execution into a more organized process,
              we help teams work towards successful project outcomes.
            </p>

            <div className="border-t border-gray-200 pt-6">
              <h3
                className="m-0 mb-1 font-plus-jakarta text-[15.5px] font-bold"
                style={{ color: DARK }}
              >
                Project Management Solutions Across Industries
              </h3>
              <p className="mb-5 text-[12px] leading-[1.6]">
                Our project management solutions are designed to support
                organizations across a range of sectors, including:
              </p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {industries.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white px-2 py-4 text-center shadow-sm"
                  >
                    <SoftIcon Icon={Icon} size={18} />
                    <span
                      className="text-[11.5px] font-bold leading-tight"
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

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section className="relative w-full px-4 py-16 md:px-8 md:py-20">
        {/* soft decorative shape */}
        <div
          className="pointer-events-none absolute bottom-6 right-12 hidden h-[260px] w-[300px] bg-[#f8f1f5] lg:block"
          style={{
            clipPath: "polygon(0 100%, 35% 55%, 60% 70%, 100% 0, 100% 100%)",
          }}
        />

        <div className="relative grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Pill>Why Choose TechTorch?</Pill>
            <h2
              className="mt-5 mb-5 font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
              style={{ color: DARK }}
            >
              Your Trusted Partner for <Plum>Project Management Success</Plum>
            </h2>
            <p className="mb-8 max-w-[440px] text-[14.5px] leading-[1.75]">
              TechTorch Solutions delivers adaptable project management
              technology supported by implementation guidance, training, and
              ongoing platform updates.
            </p>
            <Link
              to="/company-overview"
              className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-[13px] font-semibold no-underline transition-colors hover:bg-[#730042] hover:text-white"
              style={{ borderColor: PLUM, color: PLUM }}
            >
              Learn More About Us
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {trust.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                className={`flex items-start gap-4 ${
                  i === trust.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <SoftIcon Icon={Icon} size={18} round />
                <div>
                  <h3
                    className="m-0 mb-1.5 font-plus-jakarta text-[14.5px] font-bold"
                    style={{ color: DARK }}
                  >
                    {title}
                  </h3>
                  <p className="m-0 max-w-[340px] text-[12.5px] leading-[1.6]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <Pill>Key Features</Pill>
          <h2
            className="mx-auto mt-5 mb-12 max-w-[760px] font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[38px]"
            style={{ color: DARK }}
          >
            Key Features of Our <Plum>Project Management Solutions</Plum>
          </h2>
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text }, i) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <SoftIcon Icon={Icon} />
                <span className="text-[13px] font-bold text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[15px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[12.5px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-[620px] items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
          <SoftIcon Icon={RefreshCw} size={16} round />
          <p className="m-0 text-[12.5px] leading-[1.6]">
            <b style={{ color: DARK }}>Ongoing Support and Updates:</b> Benefit
            from continued platform updates and support as your requirements
            evolve.
          </p>
        </div>
      </section>

      {/* ================= TECHNOLOGY PARTNERS ================= */}
      <section className="w-full px-4 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <Pill>Technology Partners</Pill>
            <h2
              className="mt-4 mb-3 font-plus-jakarta text-[24px] font-extrabold leading-[1.2] md:text-[28px]"
              style={{ color: DARK }}
            >
              Delivering Solutions Powered By
            </h2>
            <p className="m-0 max-w-[470px] text-[13px] leading-[1.65]">
              We leverage established technology platforms and providers to
              support reliable and scalable digital solutions.
            </p>
          </div>

          {/* Partner logos drawn in code (sharp at any size).
              To use official logo files later, swap these for <img> tags. */}
          <div className="flex w-full max-w-[520px] flex-wrap items-center justify-between gap-x-10 gap-y-6">
            {/* AWS */}
            <svg
              width="54"
              height="34"
              viewBox="0 0 54 34"
              role="img"
              aria-label="AWS"
            >
              <text
                x="4"
                y="18"
                fontFamily="Plus Jakarta Sans, Arial, sans-serif"
                fontWeight="800"
                fontSize="20"
                fill="#252f3e"
              >
                aws
              </text>
              <path
                d="M6 24 Q27 33 47 23"
                stroke="#ff9900"
                strokeWidth="2.6"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M42 20.5 L48 23 L43.5 27"
                stroke="#ff9900"
                strokeWidth="2.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Google Cloud */}
            <span className="flex items-center gap-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Cloud"
              >
                <path
                  d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
                  fill="#ea4335"
                />
              </svg>
              <span className="text-[14px] font-semibold text-[#4b5563]">
                Google Cloud
              </span>
            </span>

            {/* DELL */}
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-[#374151] text-[11px] font-extrabold tracking-wide text-[#374151]">
              DELL
            </span>

            {/* NC */}
            <span className="text-[28px] font-extrabold leading-none text-[#374151]">
              NC
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
