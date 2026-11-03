import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Briefcase,
  User,
  Monitor,
  ShieldCheck,
  Code,
  Activity,
  GraduationCap,
  Plus,
  ShoppingCart,
  Settings,
  Building2,
  BookOpen,
  SlidersVertical,
  Link2,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const ACCENT = "#c02677";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const heroList = [
  { Icon: Users, label: "Customers" },
  { Icon: Briefcase, label: "Partners" },
  { Icon: User, label: "Employees" },
];

const features = [
  {
    Icon: Monitor,
    title: "Personalized Portal Interfaces",
    text: "Align portal layouts and user experiences with your brand identity, business objectives, and user requirements.",
  },
  {
    Icon: ShieldCheck,
    title: "Role-Based Access Control",
    text: "Manage access to portal information and functions according to defined roles and permissions.",
  },
  {
    Icon: Code,
    title: "Business System Integration",
    text: "Connect compatible CRM, ERP, and HRMS applications to make relevant information easier to access.",
  },
  {
    Icon: User,
    title: "Self-Service Functionality",
    text: "Enable users to access information, submit requests, and manage routine activities through a centralized portal.",
  },
  {
    Icon: Activity,
    title: "Usage Analytics and Reporting",
    text: "Review portal activity and performance insights to identify opportunities for improvement.",
  },
];

/* image files live in /public */
const industries = [
  {
    Icon: GraduationCap,
    title: "Education",
    image: "/portal-education.png",
    text: "Organize access to institutional information and digital resources.",
  },
  {
    Icon: Plus,
    title: "Healthcare",
    image: "/portal-healthcare.png",
    text: "Support convenient access to relevant information and services for authorized users.",
  },
  {
    Icon: ShoppingCart,
    title: "E-Commerce",
    image: "/portal-ecommerce.png",
    text: "Create accessible digital touchpoints for customer and business interactions.",
  },
  {
    Icon: Settings,
    title: "Manufacturing",
    image: "/portal-manufacturing.png",
    text: "Connect users with operational information and business resources.",
  },
  {
    Icon: Building2,
    title: "Finance",
    image: "/portal-finance.png",
    text: "Structure access to relevant information and services according to user permissions.",
  },
];

const whyChoose = [
  {
    Icon: BookOpen,
    title: "User-Focused Design",
    text: "Make portal navigation clear, consistent, and easy to use.",
  },
  {
    Icon: SlidersVertical,
    title: "Flexible Customization",
    text: "Adapt portal experiences to your organization's requirements and workflows.",
  },
  {
    Icon: Link2,
    title: "Connected Systems",
    text: "Integrate compatible business applications to support a more unified experience.",
  },
  {
    Icon: Briefcase,
    title: "Implementation and Training",
    text: "Help teams get started with structured implementation guidance and user training.",
  },
  {
    Icon: Settings,
    title: "Ongoing Support",
    text: "Maintain and refine portal experiences as business requirements evolve.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Eyebrow = ({ children, light = false }) => (
  <p
    className="m-0 flex items-center gap-3 font-inter text-[11px] font-bold uppercase tracking-[0.12em]"
    style={{ color: light ? "#fff" : "#4b5563" }}
  >
    <span className="inline-block h-[2px] w-6" style={{ background: ACCENT }} />
    {children}
  </p>
);

const PinkIcon = ({ Icon, size = 20, small = false }) => (
  <div
    className={`flex shrink-0 items-center justify-center rounded-lg bg-[#fdf2f8] ${
      small ? "h-6 w-6" : "h-11 w-11"
    }`}
    style={{ color: ACCENT }}
  >
    <Icon size={small ? 12 : size} strokeWidth={1.7} />
  </div>
);

export default function WebPortalsPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full px-4 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow>Web Portals</Eyebrow>
            <h1
              className="mt-5 mb-6 font-plus-jakarta text-[34px] font-extrabold leading-[1.1] tracking-tight md:text-[44px]"
              style={{ color: DARK }}
            >
              Create Connected Digital Experiences for Your Business
            </h1>
            <p className="max-w-[560px] text-[16px] leading-[1.7]">
              TechTorch Solutions delivers adaptable web portal solutions that
              help businesses organize information, connect users with relevant
              resources, and simplify digital interactions. Designed around
              organizational needs, our portals support smoother communication,
              convenient access, and more efficient workflows.
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

          <div className="relative mx-auto w-full max-w-[500px] pr-0 sm:pr-6">
            <div
              className="absolute -right-2 -top-4 hidden h-[75%] w-[55%] rounded-3xl sm:block"
              style={{ background: PLUM }}
            />
            <div className="relative rounded-2xl bg-white p-3 shadow-[0_20px_40px_rgba(15,23,42,0.2)]">
              <img
                src="/portal-hero.png"
                alt="Connected web portal dashboard on a laptop"
                className="h-[280px] w-full rounded-lg object-cover md:h-[320px]"
              />
            </div>
            <div className="absolute right-0 top-14 w-[160px] rounded-xl bg-white px-5 py-4 shadow-xl">
              <div className="flex flex-col gap-4">
                {heroList.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-[11.5px] font-semibold"
                    style={{ color: DARK }}
                  >
                    <span style={{ color: ACCENT }}>
                      <Icon size={14} />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= A UNIFIED DIGITAL EXPERIENCE ================= */}
      <section className="w-full bg-[#f8fafc] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              className="absolute -left-3 -top-3 h-16 w-[30%] rounded-tl-2xl"
              style={{ background: PLUM }}
            />
            <div
              className="absolute -bottom-3 -right-3 h-16 w-[30%] rounded-br-2xl"
              style={{ background: PLUM }}
            />
            <img
              src="/portal-team.png"
              alt="Team reviewing a portal dashboard together"
              className="relative h-[320px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)] md:h-[360px]"
            />
            <div className="absolute right-3 top-4 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-lg">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fdf2f8]"
                style={{ color: ACCENT }}
              >
                <Users size={14} />
              </span>
              <div
                className="text-[10px] font-bold leading-tight"
                style={{ color: DARK }}
              >
                Better
                <br />
                Collaboration
              </div>
            </div>
          </div>

          <div>
            <span className="block h-[2px] w-6" style={{ background: PLUM }} />
            <h2
              className="mt-6 mb-6 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px]"
              style={{ color: DARK }}
            >
              A Unified Digital Experience for Every User
            </h2>
            <p className="mb-5 text-[15px] leading-[1.75]">
              Businesses need a reliable way to connect people with the
              information and services they need. TechTorch Solutions helps
              organizations create web portals that bring essential resources,
              user access, and business interactions together in one structured
              digital environment.
            </p>
            <p className="m-0 text-[15px] leading-[1.75]">
              From personalized interfaces and permission-based access to system
              integration and self-service tools, our solutions help simplify
              everyday tasks and support more consistent user experiences.
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
        <h2 className="mt-4 mb-10 font-plus-jakarta text-[26px] font-semibold leading-[1.2] text-white md:text-[32px]">
          Portal Capabilities That Support Your Business
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow-md">
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-5 mb-3 font-plus-jakarta text-[14px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[13.5px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="w-full bg-[#f8fafc] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-10 xl:grid-cols-[0.8fr_1.6fr]">
          <div>
            <Eyebrow>Industries We Serve</Eyebrow>
            <h2
              className="mt-4 mb-4 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[32px]"
              style={{ color: DARK }}
            >
              Digital Portals for Diverse Business Needs
            </h2>
            <p className="mb-8 max-w-[420px] text-[14.5px] leading-[1.75]">
              Our web portal solutions can be tailored to support organizations
              across multiple industries, with functionality shaped around their
              workflows and user requirements.
            </p>
            <Link
              to="/explore-solutions"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-semibold no-underline transition-colors hover:bg-[#730042] hover:text-white"
              style={{ borderColor: PLUM, color: PLUM }}
            >
              Explore Solutions
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map(({ Icon, title, image, text }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
              >
                <img
                  src={image}
                  alt=""
                  className="h-[96px] w-full rounded-md object-cover"
                />
                <div className="mt-3">
                  <PinkIcon Icon={Icon} small />
                </div>
                <h3
                  className="mt-2 mb-2 font-plus-jakarta text-[12.5px] font-bold"
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

      {/* ================= WHY CHOOSE ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <Eyebrow>Why Choose TechTorch Solutions?</Eyebrow>
        <h2
          className="mt-4 mb-10 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[32px]"
          style={{ color: DARK }}
        >
          Designed Around Your Business Requirements
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map(({ Icon, title, text }) => (
            <div key={title}>
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-5 mb-2 font-plus-jakarta text-[14px] font-bold"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[13.5px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POWERED BY ================= */}
      <section className="w-full px-4 pb-16 pt-6 md:px-8">
        <Eyebrow>Delivering Solutions Powered By</Eyebrow>

        {/* Replace this image with your real partner logos */}
        <img
          src="/portal-partners.png"
          alt="Technology partners: AWS, Google, DELL and others"
          className="mt-8 h-auto w-full max-w-[1100px] object-contain"
        />
      </section>
    </div>
  );
}
