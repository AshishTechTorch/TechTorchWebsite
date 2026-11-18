import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Users,
  Search,
  ThumbsUp,
  Code,
  User,
  Calendar,
  ShieldCheck,
  Settings,
  Clock,
  Briefcase,
  Maximize,
  Smile,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const steps = [
  { no: "01", Icon: FileText, title: "Requirement Analysis", text: "Understand your roles, skills, and project needs." },
  { no: "02", Icon: Users, title: "Talent Sourcing", text: "Identify suitable professionals through relevant talent networks." },
  { no: "03", Icon: Search, title: "Screening & Selection", text: "Evaluate candidates based on skills and role requirements." },
  { no: "04", Icon: ThumbsUp, title: "Onboarding", text: "Support a smooth transition into your team." },
];

const solutions = [
  { Icon: Code, title: "IT Staffing", text: "Find technical professionals for your project and business needs." },
  { Icon: User, title: "Permanent Staffing", text: "Identify suitable candidates for long-term roles." },
  { Icon: Calendar, title: "Contract Staffing", text: "Access professionals for temporary and project-based requirements." },
  { Icon: Users, title: "Team Extension", text: "Strengthen your existing team with additional expertise." },
  { Icon: ShieldCheck, title: "Executive Search", text: "Identify professionals for leadership and specialized positions." },
  { Icon: Users, title: "Remote Staffing", text: "Source remote talent for distributed teams." },
  { Icon: Settings, title: "Resource Management", text: "Support resource coordination and ongoing workforce requirements.", wide: true },
];

const skills = [
  { icon: "☕", label: "Java", color: "#e76f00" },
  { icon: "N", label: ".NET", color: "#512bd4" },
  { icon: "🐍", label: "Python", color: "#3776ab" },
  { icon: "⚛", label: "React", color: "#00b4d8" },
  { icon: "A", label: "Angular", color: "#dd0031", box: true },
  { icon: "V", label: "Vue.js", color: "#41b883" },
  { icon: "🪶", label: "Flutter", color: "#02569b" },
  { icon: "⚛", label: "React Native", color: "#61dafb" },
  { icon: "AWS", label: "AWS", color: "#ff9900", small: true },
  { icon: "▲", label: "Azure", color: "#0078d4" },
  { icon: "☁", label: "GCP", color: "#ea4335" },
];

const industries = [
  { e: "🚗", label: "Automobile" },
  { e: "🎓", label: "Education" },
  { e: "⚡", label: "Energy" },
  { e: "🛒", label: "E-Commerce" },
  { e: "🏛", label: "Finance" },
  { e: "🛍", label: "FMCG" },
  { e: "❤", label: "Healthcare" },
  { e: "💻", label: "IT" },
  { e: "🏭", label: "Manufacturing" },
  { e: "📡", label: "Telecommunications" },
  { e: "🚚", label: "Transportation" },
];

const why = [
  { Icon: Clock, title: "Skilled Talent Access", text: "Connect with professionals across different domains." },
  { Icon: Briefcase, title: "Flexible Engagement Models", text: "Choose staffing options based on your requirements." },
  { Icon: ShieldCheck, title: "Structured Selection", text: "Evaluate candidates through a defined screening process." },
  { Icon: Maximize, title: "Adaptable Workforce", text: "Respond to changing project and resource needs." },
  { Icon: Smile, title: "Ongoing Support", text: "Get assistance with resource coordination and onboarding." },
];

/* ---------- Small reusable pieces ---------- */
const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;
const Pink = ({ children }) => <span style={{ color: "#f6c6de" }}>{children}</span>;

const SoftIcon = ({ Icon, size = 16 }) => (
  <span
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f8]"
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </span>
);

export default function ResourceStaffingPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full px-4 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span
              className="inline-block rounded-full px-4 py-1.5 font-inter text-[10px] font-bold uppercase tracking-[0.06em] text-white"
              style={{ background: PLUM }}
            >
              Resource &amp; Staffing
            </span>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[36px] font-extrabold leading-[1.05] tracking-tight md:text-[48px]"
              style={{ color: DARK }}
            >
              Empower Your Business with the <Plum>Right Talent</Plum>
            </h1>
            <p className="max-w-[500px] text-[15px] leading-[1.75]">
              Find skilled professionals and flexible workforce solutions to
              support your business requirements. TechTorch Solutions helps
              organizations build capable teams and manage changing resource
              needs.
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

          <div className="relative mx-auto w-full max-w-[540px] pb-8">
            <div className="absolute -bottom-2 right-0 h-24 w-[40%] rounded-2xl bg-[#f6e9f0]" />
            <div className="relative rounded-2xl bg-white p-1.5 shadow-[0_24px_50px_rgba(15,23,42,0.22)]">
              <img
                src="/staffing-hero.png"
                alt="TechTorch team collaborating around a display"
                className="h-[260px] w-full rounded-xl object-cover md:h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONNECTING BUSINESSES ================= */}
      <section className="w-full px-4 py-6 md:px-8">
        <div className="grid items-center gap-10 rounded-xl bg-[#f9f8f2] px-6 py-10 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-[400px]">
            <div
              className="absolute inset-0 translate-x-2 translate-y-2 -rotate-2 rounded-2xl"
              style={{ background: PLUM }}
            />
            <img
              src="/staffing-connect.png"
              alt="Professionals networking at a talent summit"
              className="relative h-[240px] w-full rounded-2xl border-4 border-white object-cover"
            />
          </div>

          <div>
            <h2
              className="mb-4 font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[32px]"
              style={{ color: DARK }}
            >
              Connecting Businesses
              <br />
              with <Plum>Skilled Professionals</Plum>
            </h2>
            <p className="m-0 max-w-[480px] text-[13.5px] leading-[1.7]">
              The right talent helps businesses adapt, grow, and deliver better
              results. We support your workforce requirements through tailored
              staffing and resource solutions designed around your business
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STRUCTURED APPROACH ================= */}
      <section className="w-full px-4 py-10 md:px-8">
        <div
          className="rounded-2xl px-6 py-14 md:px-12"
          style={{ background: PLUM }}
        >
          <h2 className="mb-10 text-center font-plus-jakarta text-[26px] font-bold text-white md:text-[32px]">
            A Structured Approach to <Pink>Staffing</Pink>
          </h2>

          <div className="mx-auto grid max-w-[1000px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ no, Icon, title, text }) => (
              <div
                key={no}
                className="rounded-xl bg-white px-5 py-6 text-center shadow-md"
              >
                <span
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ background: PLUM }}
                >
                  {no}
                </span>
                <span
                  className="mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdf2f8]"
                  style={{ color: PLUM }}
                >
                  <Icon size={16} />
                </span>
                <h3
                  className="mt-4 mb-2 font-plus-jakarta text-[14px] font-bold"
                  style={{ color: DARK }}
                >
                  {title}
                </h3>
                <p className="m-0 text-[12px] leading-[1.6]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FLEXIBLE SOLUTIONS ================= */}
      <section className="w-full px-4 py-14 md:px-8">
        <h2
          className="mb-10 text-center font-plus-jakarta text-[26px] font-extrabold md:text-[32px]"
          style={{ color: DARK }}
        >
          Flexible Solutions for Your <Plum>Workforce</Plum>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ Icon, title, text, wide }) => (
            <div
              key={title}
              className={`rounded-xl border border-gray-100 bg-white p-5 shadow-sm ${
                wide ? "lg:col-span-2" : ""
              }`}
            >
              <SoftIcon Icon={Icon} />
              <h3
                className="mt-4 mb-1.5 font-plus-jakarta text-[13.5px] font-bold"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[11.5px] leading-[1.6]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ACROSS MODERN TECHNOLOGIES ================= */}
      <section className="w-full px-4 py-6 md:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-[#f6e9f0] bg-[#fdf8fb] px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <h2
            className="m-0 max-w-[220px] font-plus-jakarta text-[20px] font-extrabold leading-[1.2]"
            style={{ color: DARK }}
          >
            Skills Across Modern <Plum>Technologies</Plum>
          </h2>

          <div className="flex flex-wrap items-end justify-start gap-x-5 gap-y-4 lg:justify-end">
            {skills.map(({ icon, label, color, box, small }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <span
                  className={`flex h-6 items-center justify-center font-bold ${
                    small ? "text-[9px]" : "text-[16px]"
                  } ${
                    box
                      ? "w-6 rounded-sm text-[12px] text-white"
                      : ""
                  }`}
                  style={box ? { background: color } : { color }}
                >
                  {icon}
                </span>
                <span className="text-[9.5px] font-semibold text-[#374151]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY REQUIREMENTS ================= */}
      <section className="w-full px-4 py-10 md:px-8">
        <div
          className="rounded-2xl px-6 py-12 md:px-12"
          style={{ background: PLUM }}
        >
          <h2 className="mb-8 text-center font-plus-jakarta text-[26px] font-bold text-white md:text-[32px]">
            Supporting Diverse <Pink>Industry Requirements</Pink>
          </h2>

          <div className="mx-auto flex max-w-[860px] flex-wrap items-center justify-center gap-3">
            {industries.map(({ e, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold"
                style={{ color: DARK }}
              >
                <span aria-hidden="true">{e}</span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section className="w-full px-4 py-14 md:px-8">
        <div className="text-center">
          <h2
            className="m-0 mb-2 font-plus-jakarta text-[28px] font-extrabold md:text-[34px]"
            style={{ color: DARK }}
          >
            Why Choose <Plum>TechTorch?</Plum>
          </h2>
          <p className="m-0 mb-10 text-[13.5px]">
            Staffing That Supports Your Business Goals
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {why.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white px-5 py-6 text-center shadow-sm"
            >
              <span
                className="mx-auto flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{ background: PLUM }}
              >
                <Icon size={15} />
              </span>
              <h3
                className="mt-4 mb-2 font-plus-jakarta text-[12.5px] font-bold leading-[1.3]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[11.5px] leading-[1.6]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGY PARTNERS ================= */}
      <section className="w-full px-4 py-10 text-center md:px-8">
        <h2
          className="m-0 mb-2 font-plus-jakarta text-[22px] font-bold md:text-[26px]"
          style={{ color: DARK }}
        >
          Delivering Solutions Powered by Technology Partners
        </h2>
        <p className="m-0 mb-8 text-[12.5px]">
          We work with technology providers to support modern business and
          workforce requirements.
        </p>

        {/* Partner names drawn in code. Swap for <img> official logos later. */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-[13px] font-semibold text-[#374151]">
          <span className="flex items-center gap-2">
            <span className="grid grid-cols-2 gap-[2px]">
              <i className="block h-2.5 w-2.5 bg-[#f25022]" />
              <i className="block h-2.5 w-2.5 bg-[#7fba00]" />
              <i className="block h-2.5 w-2.5 bg-[#00a4ef]" />
              <i className="block h-2.5 w-2.5 bg-[#ffb900]" />
            </span>
            Microsoft
          </span>
          <span>☁ Google Cloud</span>
          <span className="font-bold text-[#ff9900]">AWS</span>
          <span className="font-bold tracking-[0.12em] text-[#e0402a]">
            ORACLE
          </span>
          <span className="font-bold text-[#00a1e0]">☁ salesforce</span>
          <span className="flex items-center gap-1.5">
            <b className="text-[#e1251b]">A</b> Adobe
          </span>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full px-4 pb-14 pt-6 md:px-8">
        <div
          className="grid items-center gap-8 rounded-3xl px-8 py-12 text-white shadow-[0_24px_50px_rgba(115,0,66,0.35)] md:px-14 lg:grid-cols-[1fr_1.1fr_0.4fr]"
          style={{
            background: "linear-gradient(120deg, #5a0a2c 0%, #7a0f4a 100%)",
          }}
        >
          <h2 className="m-0 font-plus-jakarta text-[34px] font-extrabold leading-[1.05] md:text-[46px]">
            Build the Team <Pink>Your Business Needs</Pink>
          </h2>

          <div>
            <p className="mb-5 max-w-[360px] text-[13px] leading-[1.7] text-white/90">
              Let&rsquo;s discuss your staffing requirements and explore
              suitable workforce solutions.
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

          <div className="hidden items-center justify-center lg:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white/80">
              <User size={18} />
            </span>
            <span className="-mx-2 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/25 text-white ring-2 ring-white/40">
              <User size={26} />
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white/80">
              <User size={18} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
