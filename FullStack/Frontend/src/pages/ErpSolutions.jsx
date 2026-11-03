import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Box,
  Wallet,
  Users,
  Contact,
  Repeat,
  Banknote,
  Smile,
  GraduationCap,
  Database,
  SlidersVertical,
  TrendingUp,
  RefreshCw,
  ShieldCheck,
  Eye,
  Building2,
  Lock,
  Zap,
  Headphones,
  Briefcase,
  User,
  Settings,
  Link2,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#6b0c36";
const DARK = "#1a1226";
const FOOTER_PLUM = "#730042";

/* ---------- Content ---------- */
const heroChips = [
  { Icon: Box, label: "Inventory" },
  { Icon: Wallet, label: "Finance" },
  { Icon: Users, label: "HR" },
  { Icon: Contact, label: "CRM" },
  { Icon: Repeat, label: "Supply Chain" },
];

const industries = [
  "Information Technology",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Education",
  "Logistics",
  "FMCG",
];

/* href = where each product card goes. Change freely. */
const products = [
  {
    Icon: Users,
    name: "TorchX Talent",
    sub: "Human Resource Management",
    href: "https://torchxsuite.com/",
  },
  {
    Icon: Wallet,
    name: "TorchX Finance",
    sub: "Financial Management",
    href: "https://torchxsuite.com/",
  },
  {
    Icon: Banknote,
    name: "TorchX Pay",
    sub: "Payroll Management",
    href: "https://torchxsuite.com/",
  },
  {
    Icon: Smile,
    name: "TorchX Engage",
    sub: "Employee Engagement",
    href: "https://torchxsuite.com/",
  },
  {
    Icon: Box,
    name: "TorchX Inventory",
    sub: "Inventory Management",
    href: "https://torchxsuite.com/",
  },
  {
    Icon: GraduationCap,
    name: "Edufic Era",
    sub: "ERP solutions for educational institutions",
    href: "/industries/education",
  },
];

const features = [
  {
    Icon: Database,
    title: "Centralised Data Management",
    text: "Bring essential business information together to improve access, consistency and coordination.",
  },
  {
    Icon: SlidersVertical,
    title: "Scalability and Customisation",
    text: "Adapt ERP capabilities to your organisation's changing operational requirements.",
  },
  {
    Icon: TrendingUp,
    title: "Enhanced Decision-Making",
    text: "Support informed decisions with a clearer view of business information and processes.",
  },
  {
    Icon: RefreshCw,
    title: "Workflow Automation",
    text: "Reduce repetitive manual work and help teams manage routine tasks more efficiently.",
  },
  {
    Icon: ShieldCheck,
    title: "Security and Compliance",
    text: "Support responsible data management through appropriate security and compliance practices.",
  },
];

const approach = [
  {
    Icon: Eye,
    title: "Enable Business Vision",
    text: "Align technology solutions with your business objectives and operational needs.",
  },
  {
    Icon: Building2,
    title: "Empower Data-Led Decisions",
    text: "Make business information more accessible to support informed planning.",
  },
  {
    Icon: Lock,
    title: "Build Resilience",
    text: "Develop connected processes that help your organisation adapt to changing needs.",
  },
  {
    Icon: Zap,
    title: "Accelerate Innovation",
    text: "Support continuous improvement through technology-driven business operations.",
  },
  {
    Icon: Headphones,
    title: "Continuous Support",
    text: "Support continuous improvement through technology-driven business operations.",
  },
];

const whyChoose = [
  {
    Icon: Briefcase,
    title: "Implementation Support",
    text: "Assistance throughout the ERP implementation process.",
  },
  {
    Icon: User,
    title: "Post-Deployment Training",
    text: "Help teams understand and use the implemented solution.",
  },
  {
    Icon: Settings,
    title: "Ongoing Maintenance",
    text: "Continued support to help maintain system performance.",
  },
  {
    Icon: Link2,
    title: "System Integration",
    text: "Integration with existing systems and business workflows, based on requirements.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Eyebrow = ({ children, dash = true, light = false }) => (
  <p
    className={`m-0 flex items-center gap-2 font-inter text-[11px] font-bold uppercase tracking-[0.12em] ${
      light ? "text-white" : ""
    }`}
    style={light ? undefined : { color: PLUM }}
  >
    {dash && <span className="inline-block h-[2px] w-4 bg-current" />}
    {children}
  </p>
);

const H2 = ({ children, light = false, className = "" }) => (
  <h2
    className={`font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[34px] ${className}`}
    style={{ color: light ? "#fff" : DARK }}
  >
    {children}
  </h2>
);

const PinkIcon = ({ Icon, size = 20, wide = false }) => (
  <div
    className={`flex items-center justify-center rounded-lg bg-[#fdf2f8] ${
      wide ? "h-14 w-full" : "h-11 w-11 shrink-0"
    }`}
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </div>
);

const ProductCard = ({ Icon, name, sub, href }) => {
  const inner = (
    <>
      <PinkIcon Icon={Icon} />
      <div className="min-w-0 flex-1">
        <p
          className="m-0 font-plus-jakarta text-[16px] font-bold"
          style={{ color: DARK }}
        >
          {name}
        </p>
        <p className="m-0 mt-1 text-[12.5px] leading-[1.4] text-[#6b7280]">
          {sub}
        </p>
      </div>
      <ChevronRight size={16} className="shrink-0 text-gray-400" />
    </>
  );
  const cls =
    "flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md";

  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link to={href} className={cls}>
      {inner}
    </Link>
  );
};

export default function ErpSolutions() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section
        className="w-full px-4 py-14 md:px-8 md:py-16"
        style={{
          background: "linear-gradient(200deg, #fdf2f8 0%, #ffffff 55%)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Enterprise Resource Planning</Eyebrow>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[36px] font-extrabold leading-[1.08] tracking-tight md:text-[46px]"
              style={{ color: DARK }}
            >
              Optimize Business Operations with
              <br />
              <span style={{ color: PLUM }}>TechTorch ERP Solutions</span>
            </h1>
            <p className="max-w-[520px] text-[16px] leading-[1.7]">
              Bring your essential business processes together with TechTorch
              ERP solutions. Manage inventory, finance, human resources,
              customer relationships and supply chain operations through a
              connected approach designed to improve efficiency, visibility and
              business decision-making.
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

          {/* Hero visual: photo + floating chips + growth card */}
          <div className="relative mx-auto w-full max-w-[560px] rounded-3xl bg-white/60 p-6 pl-28 pb-10 shadow-[0_10px_40px_rgba(107,12,54,0.08)]">
            <img
              src="/erp-hero.png"
              alt="Business professional using an ERP dashboard"
              className="h-[260px] w-full rounded-lg object-cover md:h-[300px]"
            />

            <div className="absolute left-6 top-8 flex flex-col gap-3">
              {heroChips.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex w-[104px] items-center gap-2 rounded-full bg-white px-3 py-2 text-[10.5px] font-medium text-[#374151] shadow-md"
                >
                  <Icon size={12} style={{ color: PLUM }} />
                  {label}
                </div>
              ))}
            </div>

            <div className="absolute bottom-3 right-4 w-[120px] rounded-xl bg-white px-4 py-3 shadow-lg">
              <div className="flex h-8 items-end justify-center gap-1">
                <span className="h-3 w-1.5 rounded-sm bg-[#f472b6]" />
                <span className="h-5 w-1.5 rounded-sm bg-[#ec4899]" />
                <span
                  className="h-7 w-1.5 rounded-sm"
                  style={{ background: PLUM }}
                />
                <span
                  className="h-8 w-1.5 rounded-sm"
                  style={{ background: PLUM }}
                />
              </div>
              <p className="m-0 mt-2 flex items-center justify-center gap-1.5 text-[9.5px] font-medium text-[#374151]">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: PLUM }}
                />
                Growth Together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRING YOUR BUSINESS PROCESSES TOGETHER ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{""}</Eyebrow>
            <H2 className="mt-6 mb-6">
              Bring Your Business
              <br />
              Processes Together
            </H2>
            <p className="mb-8 max-w-[500px] text-[15.5px] leading-[1.75]">
              Simplify day-to-day operations with ERP solutions that help
              connect key business functions and support better coordination
              across your organisation. From managing resources to improving
              workflows, TechTorch helps businesses build more structured and
              efficient operations.
            </p>
            <p
              className="mb-5 max-w-[460px] text-[14px] font-semibold leading-[1.5]"
              style={{ color: DARK }}
            >
              Our ERP solutions support businesses across multiple industries,
              including:
            </p>
            <ul className="m-0 grid max-w-[500px] list-none grid-cols-2 gap-x-6 gap-y-4 p-0 sm:grid-cols-3">
              {industries.map((name) => (
                <li
                  key={name}
                  className="flex items-start gap-2.5 text-[13.5px]"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: PLUM }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <img
              src="/erp-building.png"
              alt="Modern enterprise building"
              className="h-[320px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)] md:h-[400px]"
            />
            <div
              className="absolute -right-3 top-1/2 hidden h-[84px] w-[34px] rounded-xl sm:block"
              style={{ background: PLUM }}
            />
          </div>
        </div>
      </section>

      {/* ================= OUR ERP PRODUCT PORTFOLIO ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <Eyebrow>Our ERP Product Portfolio</Eyebrow>
        <H2 className="mt-3 mb-3">Solutions for Different Business Needs</H2>
        <p className="mb-10 text-[14px]">
          Explore ERP products designed to support different business functions.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section
        className="w-full px-4 py-16 text-white md:px-8 md:py-20"
        style={{ background: FOOTER_PLUM }}
      >
        <Eyebrow light>{""}</Eyebrow>
        <H2 light className="mt-6 mb-12">
          Key Features of Our ERP Solutions
        </H2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ Icon, title, text }) => (
            <div key={title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 mb-3 font-plus-jakarta text-[15px] font-bold leading-[1.3]">
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.65] text-white/75">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= THE TECHTORCH APPROACH ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <Eyebrow>{""}</Eyebrow>
        <H2 className="mt-6 mb-10">The TechTorch Approach</H2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {approach.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <PinkIcon Icon={Icon} />
                <span className="text-[11px] font-semibold text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="mt-6 mb-2 font-plus-jakarta text-[15px] font-bold leading-[1.3]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="mb-6 flex-1 text-[13px] leading-[1.65]">{text}</p>
              <div className="h-[3px] w-full rounded bg-gray-100">
                <div
                  className="h-full w-1/3 rounded"
                  style={{ background: PLUM }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <Eyebrow>{""}</Eyebrow>
        <H2 className="mt-6 mb-10">Why Choose TechTorch ERP Solutions?</H2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="min-h-[240px] rounded-xl bg-white p-5 shadow-sm"
            >
              <PinkIcon Icon={Icon} wide />
              <h3
                className="mt-6 mb-2 font-plus-jakarta text-[16px] font-bold leading-[1.3]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POWERED BY ================= */}
      <section className="w-full px-4 pb-16 pt-16 md:px-8 md:pt-20">
        <Eyebrow>{""}</Eyebrow>
        <H2 className="mt-6 mb-8">Delivering Solutions Powered By</H2>

        {/* Replace this image with your real partner logos */}
        <img
          src="/erp-partners.png"
          alt="Technology partners: AWS, Google, DELL and others"
          className="h-auto w-full max-w-[1200px] object-contain"
        />
      </section>
    </div>
  );
}
