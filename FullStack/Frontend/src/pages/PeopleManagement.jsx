import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  User,
  Users,
  Banknote,
  Clock,
  TrendingUp,
  Calendar,
  Building2,
  Monitor,
  Heart,
  ShoppingCart,
  GraduationCap,
  LayoutGrid,
  Settings,
  BookOpen,
  Zap,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const ACCENT = "#c02677";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const heroList = [
  { Icon: User, label: "Recruitment" },
  { Icon: Users, label: "Employee Management" },
  { Icon: Banknote, label: "Payroll & Benefits" },
  { Icon: Clock, label: "Attendance" },
  { Icon: TrendingUp, label: "Performance" },
];

const features = [
  {
    Icon: User,
    title: "Recruitment Management",
    text: "Organize hiring activities, track applicants, coordinate interviews, and support employee onboarding with ease.",
  },
  {
    Icon: Users,
    title: "Employee Management",
    text: "Maintain employee records and support performance reviews, training, and career development.",
  },
  {
    Icon: Banknote,
    title: "Payroll & Benefits Administration",
    text: "Simplify payroll processes and benefits management to ensure accurate and timely compensation.",
  },
  {
    Icon: Calendar,
    title: "Time & Attendance Tracking",
    text: "Manage attendance, leave records, and working hours to improve visibility and reporting.",
  },
  {
    Icon: TrendingUp,
    title: "Performance Management",
    text: "Support goal setting, feedback, and reviews to align individual growth with business objectives.",
  },
];

const industries = [
  { Icon: Building2, label: "Manufacturing" },
  { Icon: Monitor, label: "Technology" },
  { Icon: Heart, label: "Healthcare" },
  { Icon: ShoppingCart, label: "Retail" },
  { Icon: GraduationCap, label: "Education" },
];

const whyChoose = [
  {
    Icon: User,
    title: "Industry-Focused Solutions",
    text: "Support workforce needs across different sectors with specialized HR capabilities.",
  },
  {
    Icon: LayoutGrid,
    title: "Flexible & Customizable",
    text: "Adapt features flexibly to your organizational HR processes, policies, and growth goals.",
  },
  {
    Icon: Settings,
    title: "Implementation Support",
    text: "Get hands-on expert guidance for seamless onboarding, integration, and setup.",
  },
  {
    Icon: BookOpen,
    title: "Employee Development",
    text: "Enable sustainable talent progression through structured training and goal management.",
  },
  {
    Icon: Zap,
    title: "Ongoing Optimization",
    text: "Refine workflows and boost operational efficiency continuously as your organization scales.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Eyebrow = ({ children, light = false }) => (
  <p
    className="m-0 flex items-center gap-3 font-inter text-[11px] font-bold uppercase tracking-[0.12em]"
    style={{ color: light ? "#fff" : ACCENT }}
  >
    <span className="inline-block h-[2px] w-6" style={{ background: ACCENT }} />
    {children}
  </p>
);

const Dash = () => (
  <span className="block h-[2px] w-6" style={{ background: ACCENT }} />
);

const PinkIcon = ({ Icon, size = 20 }) => (
  <div
    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f8]"
    style={{ color: ACCENT }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </div>
);

export default function PeopleManagementPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full px-4 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>People Resources</Eyebrow>
            <h1
              className="mt-5 mb-6 font-plus-jakarta text-[36px] font-extrabold leading-[1.08] tracking-tight md:text-[46px]"
              style={{ color: DARK }}
            >
              Empower Your People. Strengthen Your Business.
            </h1>
            <p className="max-w-[520px] text-[16px] leading-[1.7]">
              TechTorch Solutions helps organizations manage their workforce
              more effectively with People Resources solutions designed to
              support recruitment, employee development, payroll administration,
              attendance, and performance management.
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

          <div className="relative mx-auto w-full max-w-[560px] pb-24 sm:pb-28">
            <div
              className="absolute -right-3 bottom-10 top-10 hidden w-[55%] rounded-3xl sm:block"
              style={{ background: PLUM }}
            />
            <img
              src="/people-hero.png"
              alt="Team collaborating in a modern office"
              className="relative h-[260px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.2)] md:h-[300px]"
            />
            <div className="absolute bottom-0 right-0 w-[200px] rounded-xl bg-white px-5 py-4 shadow-xl sm:right-4">
              <div className="flex flex-col gap-3">
                {heroList.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-[11px] font-semibold"
                    style={{ color: DARK }}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f8]"
                      style={{ color: ACCENT }}
                    >
                      <Icon size={12} />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= A SMARTER APPROACH ================= */}
      <section className="w-full bg-[#f8fafc] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[460px]">
            <div
              className="absolute -left-3 -top-3 h-20 w-[40%] rounded-tl-2xl"
              style={{ background: PLUM }}
            />
            <img
              src="/people-meeting.png"
              alt="HR strategy presentation in a meeting room"
              className="relative h-[340px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)] md:h-[380px]"
            />
            <div className="absolute right-3 top-5 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-lg">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fdf2f8]"
                style={{ color: ACCENT }}
              >
                <Users size={14} />
              </span>
              <div
                className="text-[10px] font-bold leading-tight"
                style={{ color: PLUM }}
              >
                Better People
                <br />
                Better Outcomes
              </div>
            </div>
          </div>

          <div>
            <Dash />
            <h2
              className="mt-6 mb-6 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px]"
              style={{ color: DARK }}
            >
              A Smarter Approach to Workforce Management
            </h2>
            <p className="mb-5 text-[15px] leading-[1.75]">
              Managing people effectively is essential to building a productive
              and engaged workforce. TechTorch People Resources solutions help
              businesses organize key HR activities, simplify everyday
              processes, and support employees throughout their professional
              journey.
            </p>
            <p className="m-0 text-[15px] leading-[1.75]">
              From recruitment and employee records to payroll, attendance, and
              performance reviews, our solutions bring essential workforce
              processes together, enabling HR teams to work more efficiently and
              make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section
        className="w-full px-4 py-16 md:px-8 md:py-20"
        style={{ background: PLUM }}
      >
        <Eyebrow light>Key Features</Eyebrow>
        <h2 className="mt-4 mb-10 max-w-[560px] font-plus-jakarta text-[28px] font-semibold leading-[1.2] text-white md:text-[34px]">
          Everything You Need to Manage Your Workforce
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow-md">
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[15px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.7]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES & BENEFITS ================= */}
      <section className="w-full bg-[#f8fafc] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[360px]">
            <img
              src="/people-office.png"
              alt="HR professional reviewing workforce analytics"
              className="h-[330px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)]"
            />
            <div className="absolute -right-6 bottom-12 rounded-xl bg-white px-5 py-4 shadow-xl">
              <p
                className="m-0 font-plus-jakarta text-[16px] font-bold leading-[1.2]"
                style={{ color: DARK }}
              >
                People Power
                <br />
                Progress
              </p>
              <span
                className="mt-3 block h-[3px] w-6"
                style={{ background: ACCENT }}
              />
            </div>
          </div>

          <div>
            <Eyebrow>Industries &amp; Benefits</Eyebrow>
            <h2
              className="mt-4 mb-4 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px]"
              style={{ color: DARK }}
            >
              People Resources for Your Business
            </h2>
            <p className="mb-8 max-w-[620px] text-[14.5px] leading-[1.75]">
              Our solutions support organizations across manufacturing,
              technology, healthcare, retail, and education. With a focus on
              practical workforce management, we help businesses address their
              HR requirements through adaptable solutions and ongoing support.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {industries.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white px-2 py-4 shadow-sm"
                >
                  <PinkIcon Icon={Icon} />
                  <span
                    className="text-[11.5px] font-bold"
                    style={{ color: DARK }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <h2
          className="mb-3 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px]"
          style={{ color: DARK }}
        >
          Why Choose TechTorch Solutions?
        </h2>
        <p className="mb-10 text-[14.5px]">
          We combine industry expertise with technology to deliver HR solutions
          that create real impact.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[15px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.7]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POWERED BY ================= */}
      <section className="w-full px-4 pb-16 pt-6 md:px-8">
        <Eyebrow>Delivering Solutions Powered By</Eyebrow>

        {/* Replace this image with your real partner logos */}
        <img
          src="/people-partners.png"
          alt="Technology partners: AWS, Google, Cloud, DELL and others"
          className="mt-8 h-auto w-full max-w-[1000px] object-contain"
        />
      </section>
    </div>
  );
}
