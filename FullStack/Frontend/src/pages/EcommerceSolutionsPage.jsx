import React from "react";
import { Link } from "react-router-dom";
import {
  Store,
  ShieldCheck,
  Truck,
  Headphones,
  ShoppingBag,
  TrendingUp,
  Briefcase,
  Users,
  GraduationCap,
  Wrench,
  Package,
  Activity,
  Sparkles,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const heroList = [
  { Icon: Store, label: "Online Store", bg: "#fce7f3", color: "#be185d" },
  {
    Icon: ShieldCheck,
    label: "Secure Payment",
    bg: "#ede9fe",
    color: "#6d28d9",
  },
  { Icon: Truck, label: "Fast Delivery", bg: "#dbeafe", color: "#1d4ed8" },
  { Icon: Headphones, label: "24/7 Support", bg: "#dcfce7", color: "#15803d" },
];

const trustCards = [
  {
    Icon: TrendingUp,
    title: "Scalable Technology",
    text: "A flexible platform designed to support changing business needs and growing product catalogs.",
  },
  {
    Icon: Briefcase,
    title: "Business-Focused Solutions",
    text: "E-commerce capabilities that help simplify online store operations and improve the customer shopping experience.",
  },
  {
    Icon: Users,
    title: "End-to-End Support",
    text: "Assistance throughout platform implementation, helping businesses get started with confidence.",
  },
  {
    Icon: GraduationCap,
    title: "Training and Guidance",
    text: "Support to help teams understand and use the platform effectively.",
  },
  {
    Icon: Wrench,
    title: "Ongoing Maintenance",
    text: "Continued maintenance and updates to help keep the platform reliable and aligned with evolving requirements.",
    wide: true,
  },
];

const features = [
  {
    Icon: Store,
    title: "User-Friendly Storefront Design",
    text: "Create an engaging online shopping experience with clean, intuitive, and responsive designs across all devices.",
    bg: "#fce7f3",
    color: PLUM,
  },
  {
    Icon: Package,
    title: "Product Management",
    text: "Manage your product catalog with organized tools for listings, pricing, inventory, and promotions.",
    bg: "#ede9fe",
    color: "#6d28d9",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Payment Processing",
    text: "Support convenient transactions through multiple payment gateways with strong security measures.",
    bg: "#dcfce7",
    color: "#15803d",
  },
  {
    Icon: Users,
    title: "Customer Relationship Tools",
    text: "Track customer behavior, purchase history, and preferences to enable personalized communication and better engagement.",
    bg: "#dbeafe",
    color: "#1d4ed8",
  },
  {
    Icon: Activity,
    title: "Analytics and Reporting",
    text: "Monitor sales, customer behavior, and website performance to make data-driven decisions.",
    bg: "#fce7f3",
    color: PLUM,
  },
];

/* ---------- Small reusable pieces ---------- */
const Pill = ({ children, dot = false }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full border border-[#f3d3e3] bg-[#fdf2f8] px-3.5 py-1.5 font-inter text-[10.5px] font-bold uppercase tracking-[0.06em]"
    style={{ color: PLUM }}
  >
    {dot && (
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: PLUM }}
      />
    )}
    {children}
  </span>
);

const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;

const PlumIcon = ({ Icon, size = 18 }) => (
  <span
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
    style={{ background: PLUM }}
  >
    <Icon size={size} strokeWidth={1.8} />
  </span>
);

export default function EcommerceSolutionsPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full px-4 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Pill dot>E-Commerce Solutions</Pill>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[38px] font-extrabold leading-[1.02] tracking-tight md:text-[52px]"
              style={{ color: DARK }}
            >
              Comprehensive
              <br />
              <Plum>E-Commerce Platforms</Plum>
            </h1>
            <p
              className="mb-5 max-w-[520px] font-plus-jakarta text-[19px] font-semibold leading-[1.3]"
              style={{ color: DARK }}
            >
              Empowering Online Success with Innovative E-Commerce Solutions
            </p>
            <p className="max-w-[520px] text-[15.5px] leading-[1.75]">
              TechTorch Solutions provides modern, SaaS-based e-commerce
              solutions designed to help businesses establish and manage their
              online stores. Our platform brings essential online selling
              capabilities together, helping businesses manage products, support
              customers, and create a smooth shopping experience.
            </p>
            <Link
              to="/talk-to-expert"
              className="mt-8 inline-flex items-center rounded-full px-8 py-3.5 text-[14px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: PLUM }}
            >
              Talk to Our Experts
            </Link>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[560px] pb-14 pt-12 sm:pl-20">
            <div
              className="absolute -bottom-2 right-10 hidden h-24 w-[55%] rounded-b-[60px] sm:block"
              style={{ background: PLUM }}
            />
            <div className="relative rounded-2xl bg-white p-1.5 shadow-[0_24px_50px_rgba(15,23,42,0.22)]">
              <img
                src="/ecommerce-hero.png"
                alt="Team member managing an online store on a laptop"
                className="h-[300px] w-full rounded-xl object-cover md:h-[340px]"
              />
            </div>

            {/* Feature list card */}
            <div className="absolute left-0 top-20 hidden w-[165px] rounded-xl bg-white px-3 py-3 shadow-xl sm:block">
              {heroList.map(({ Icon, label, bg, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 py-2 text-[10.5px] font-semibold"
                  style={{ color: DARK }}
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-md"
                    style={{ background: bg, color }}
                  >
                    <Icon size={12} />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            {/* Your Store card */}
            <div className="absolute right-0 top-4 w-[210px] rounded-xl bg-white p-3 shadow-xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex gap-1">
                  <i className="block h-2 w-2 rounded-full bg-[#f87171]" />
                  <i className="block h-2 w-2 rounded-full bg-[#fbbf24]" />
                  <i className="block h-2 w-2 rounded-full bg-[#34d399]" />
                </span>
                <span className="text-[10px] font-bold" style={{ color: DARK }}>
                  Your Store
                </span>
                <span
                  className="flex h-5 w-5 items-center justify-center rounded text-white"
                  style={{ background: PLUM }}
                >
                  <ShoppingBag size={10} />
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-[#f8fafc] p-2">
                <span className="block h-9 w-11 rounded bg-gradient-to-br from-[#93c5fd] to-[#1e3a8a]" />
                <div className="leading-tight">
                  <p
                    className="m-0 text-[9.5px] font-bold"
                    style={{ color: DARK }}
                  >
                    Sport Pro Runner
                  </p>
                  <p
                    className="m-0 text-[9.5px] font-bold"
                    style={{ color: PLUM }}
                  >
                    $129.00
                  </p>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-1.5">
                {[Headphones, ShoppingBag, Sparkles, Package].map((Icon, i) => (
                  <span
                    key={i}
                    className="flex h-8 items-center justify-center rounded-md bg-[#f1f5f9] text-[#374151]"
                  >
                    <Icon size={12} />
                  </span>
                ))}
              </div>
            </div>

            {/* Better shopping */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
                style={{ background: PLUM }}
              >
                <ShoppingBag size={14} />
              </span>
              <div className="leading-tight">
                <p
                  className="m-0 text-[11px] font-bold"
                  style={{ color: DARK }}
                >
                  Better Shopping
                </p>
                <p className="m-0 text-[9px]">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT E-COMMERCE SOLUTIONS ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-4 -top-4 hidden h-[60%] w-[30%] rounded-tl-3xl bg-[#efe3e8] sm:block" />
            <div className="relative rounded-3xl bg-white p-2 shadow-[0_20px_40px_rgba(15,23,42,0.15)]">
              <img
                src="/ecommerce-about.png"
                alt="Team member packing and managing online orders"
                className="h-[320px] w-full rounded-2xl object-cover md:h-[380px]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdf2f8]"
                style={{ color: PLUM }}
              >
                <TrendingUp size={16} />
              </span>
              <div className="leading-tight">
                <p className="m-0 text-[9px] uppercase tracking-wider text-gray-500">
                  Grow your
                </p>
                <p
                  className="m-0 text-[12px] font-bold"
                  style={{ color: DARK }}
                >
                  Online Business
                </p>
              </div>
            </div>
          </div>

          <div>
            <Pill>About E-Commerce Solutions</Pill>
            <h2
              className="mt-5 mb-5 font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
              style={{ color: DARK }}
            >
              Build and Grow Your Online Business with{" "}
              <Plum>Smart E-Commerce Technology</Plum>
            </h2>
            <p className="mb-8 text-[14.5px] leading-[1.75]">
              Whether you are launching a new online store or improving an
              existing digital business, our e-commerce solutions provide the
              flexibility and tools needed to support your business goals.
            </p>

            <div className="flex items-start gap-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: PLUM }}
              >
                <Store size={20} />
              </span>
              <div>
                <h3
                  className="m-0 mb-2 font-plus-jakarta text-[16px] font-bold"
                  style={{ color: DARK }}
                >
                  E-Commerce Solutions for Different Industries
                </h3>
                <p className="m-0 text-[13px] leading-[1.7]">
                  Our e-commerce platform supports businesses across a variety
                  of industries, including retail, fashion and apparel,
                  electronics, health and beauty, and food and beverage. We help
                  businesses create an online shopping environment that aligns
                  with their products, customers, and operational requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Pill>Why Choose TechTorch?</Pill>
            <h2
              className="mt-5 mb-5 font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
              style={{ color: DARK }}
            >
              Your Trusted Partner for <Plum>E-Commerce Success</Plum>
            </h2>
            <p className="mb-8 max-w-[440px] text-[14.5px] leading-[1.75]">
              Choosing the right e-commerce technology is important for building
              a successful online business. TechTorch Solutions focuses on
              providing adaptable platforms and dependable support throughout
              the implementation process.
            </p>

            <div className="relative max-w-[440px]">
              <img
                src="/ecommerce-team.png"
                alt="TechTorch team collaborating in the office"
                className="h-[200px] w-[88%] rounded-3xl object-cover shadow-[0_16px_32px_rgba(15,23,42,0.18)]"
              />
              <div
                className="absolute bottom-3 right-0 -rotate-6 text-right"
                style={{
                  color: PLUM,
                  fontFamily: "'Caveat', 'Segoe Script', cursive",
                  fontSize: "20px",
                  lineHeight: 1.15,
                }}
              >
                Your Growth
                <br />
                Our Priority
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustCards.map(({ Icon, title, text, wide }) => (
              <div
                key={title}
                className={`flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm ${
                  wide ? "sm:col-span-2" : ""
                }`}
              >
                <PlumIcon Icon={Icon} />
                <div>
                  <h3
                    className="m-0 mb-1.5 font-plus-jakarta text-[14.5px] font-bold"
                    style={{ color: DARK }}
                  >
                    {title}
                  </h3>
                  <p className="m-0 text-[12.5px] leading-[1.6]">{text}</p>
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
            className="mt-5 mb-12 font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
            style={{ color: DARK }}
          >
            Key Features of Our <Plum>E-Commerce Platform</Plum>
          </h2>
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text, bg, color }, i) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: bg, color }}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="text-[22px] font-bold text-gray-300">
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
            <p className="m-0 max-w-[430px] text-[13.5px] leading-[1.65]">
              We work with established technology providers and platforms to
              support reliable and scalable digital solutions.
            </p>
          </div>

          {/* Partner logos built in code (sharp at any size).
              To use official logo files later, swap these for <img> tags. */}
          <div className="flex w-full max-w-[560px] flex-wrap items-center justify-between gap-x-10 gap-y-6 text-[#4b5563]">
            <span className="font-plus-jakarta text-[26px] font-extrabold leading-none tracking-tight">
              aws
              <span className="ml-1 text-[12px]" style={{ color: "#ff9900" }}>
                ▾
              </span>
            </span>

            <span className="flex items-center gap-2 text-[14px] font-semibold">
              <span
                className="inline-block h-4 w-6 rounded-full bg-[#6b7280]"
                aria-hidden="true"
              />
              Google Cloud
            </span>

            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#374151] text-[10px] font-extrabold tracking-wider">
              DELL
            </span>

            <span className="text-[26px] font-extrabold italic leading-none">
              NC
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
