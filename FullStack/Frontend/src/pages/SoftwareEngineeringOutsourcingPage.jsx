import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Code,
  Globe,
  Smartphone,
  Puzzle,
  Users,
  Infinity as InfinityIcon,
  ShieldCheck,
  Building2,
  CloudUpload,
  RefreshCw,
  Cpu,
  Box,
  Cloud,
  Wrench,
  Layers,
  Wifi,
  Zap,
  Handshake,
  TrendingUp,
  Headphones,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const services = [
  { Icon: Code, label: "Custom Software Development" },
  { Icon: Globe, label: "Web Application Development" },
  { Icon: Smartphone, label: "Mobile App Development" },
  { Icon: Puzzle, label: "API Development and Integration" },
  { Icon: Users, label: "Software Consulting and Architecture" },
  { Icon: InfinityIcon, label: "DevOps and Continuous Delivery" },
  { Icon: ShieldCheck, label: "Software Testing and Quality Assurance" },
  { Icon: Building2, label: "Enterprise Software Solutions" },
  { Icon: CloudUpload, label: "SaaS Application Development" },
  { Icon: RefreshCw, label: "Legacy System Modernization" },
  { Icon: Cpu, label: "AI and Machine Learning Solutions" },
  { Icon: Box, label: "Blockchain Development" },
  { Icon: Cloud, label: "Cloud-Native Application Development" },
  { Icon: Wrench, label: "Software Maintenance and Support" },
  { Icon: Layers, label: "Software Architecture Design" },
  { Icon: Wifi, label: "Internet of Things (IoT) Solutions" },
];

const why = [
  { Icon: Zap, label: "Modern Technology Expertise" },
  { Icon: Handshake, label: "Business-Focused Development" },
  { Icon: ShieldCheck, label: "Quality-Driven Approach" },
  { Icon: TrendingUp, label: "Scalable Solutions" },
  { Icon: Headphones, label: "Ongoing Support" },
];

/* ---------- Small reusable pieces ---------- */
const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;

const Eyebrow = ({ children }) => (
  <div
    className="mb-4 flex items-center gap-2.5 font-inter text-[10.5px] font-semibold uppercase tracking-[0.04em]"
    style={{ color: "#a0124f" }}
  >
    <span className="block h-[2px] w-5" style={{ background: "#a0124f" }} />
    {children}
  </div>
);

/* Partner chips drawn in code. Swap for <img> official logos later. */
const PartnerChip = ({ children }) => (
  <span className="flex h-12 min-w-[90px] items-center justify-center gap-2 px-3 text-[13px] font-semibold text-[#6b7280]">
    {children}
  </span>
);

export default function SoftwareEngineeringOutsourcingPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section
        className="w-full px-4 py-14 md:px-8 md:py-16"
        style={{
          background: "linear-gradient(180deg, #fdf8fa 0%, #ffffff 70%)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Software Engineering Services</Eyebrow>
            <h1
              className="mb-6 font-plus-jakarta text-[38px] font-extrabold leading-[1.02] tracking-tight md:text-[50px]"
              style={{ color: DARK }}
            >
              Engineering Digital Solutions That Drive{" "}
              <Plum>Business Growth</Plum>
            </h1>
            <p className="max-w-[500px] text-[15px] leading-[1.75]">
              Turn your ideas into reliable, scalable software solutions.
              TechTorch Solutions helps businesses design, develop, modernize,
              and maintain applications that improve operations.
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

          <div className="relative mx-auto w-full max-w-[560px] pb-4 pt-4">
            <div
              className="absolute -left-4 top-1/4 h-24 w-8 rounded-l-xl"
              style={{ background: PLUM }}
            />
            <img
              src="/se-hero.png"
              alt="Laptop displaying code with glowing cloud and app icons"
              className="relative h-[300px] w-full rounded-2xl object-cover shadow-[0_24px_50px_rgba(15,23,42,0.28)] md:h-[340px]"
            />
          </div>
        </div>
      </section>

      {/* ================= BUILDING BETTER SOFTWARE ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[560px]">
            <div className="rounded-3xl bg-[#ead8df] p-2 shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
              <img
                src="/se-about.png"
                alt="Developer typing on a laptop with a glowing cloud circuit overlay"
                className="h-[260px] w-full rounded-2xl object-cover md:h-[320px]"
              />
            </div>
          </div>

          <div>
            <span
              className="mb-4 block h-[2px] w-5"
              style={{ background: "#a0124f" }}
            />
            <h2
              className="mb-5 font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[32px]"
              style={{ color: DARK }}
            >
              Building Better Software for a Connected World
            </h2>
            <p className="mb-5 text-[14px] leading-[1.75]">
              Every business has unique technology requirements. The right
              software can simplify complex processes, improve productivity, and
              create better digital experiences.
            </p>
            <p className="m-0 text-[14px] leading-[1.75]">
              At TechTorch Solutions, we combine engineering expertise with
              modern technologies to develop software aligned with your business
              objectives.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        className="w-full px-4 py-16 md:px-8 md:py-20"
        style={{ background: "#fafbff" }}
      >
        <Eyebrow>Our Software Engineering Services</Eyebrow>
        <h2
          className="mb-4 font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[32px]"
          style={{ color: DARK }}
        >
          Complete Engineering Capabilities for Your Business
        </h2>
        <p className="mb-10 max-w-[560px] text-[14px] leading-[1.7]">
          From development to deployment, we offer end-to-end engineering
          services to help you innovate and grow.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(115,0,66,0.06)]"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f8]"
                style={{ color: PLUM }}
              >
                <Icon size={16} strokeWidth={1.7} />
              </span>
              <h3
                className="m-0 flex-1 font-plus-jakarta text-[12.5px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {label}
              </h3>
              <ChevronRight size={14} className="shrink-0 text-gray-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section className="w-full px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.6fr]">
          <div>
            <Eyebrow>Why Choose TechTorch?</Eyebrow>
            <h2
              className="mb-4 font-plus-jakarta text-[24px] font-extrabold leading-[1.2] md:text-[28px]"
              style={{ color: DARK }}
            >
              Engineering Solutions Built Around Your Goals
            </h2>
            <p className="m-0 max-w-[340px] text-[14px] leading-[1.7]">
              Leverage our engineering expertise to build scalable, secure, and
              future-ready solutions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {why.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-between rounded-xl border border-gray-100 bg-[#fdfafc] px-3 py-6 text-center shadow-sm"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fdf2f8]"
                  style={{ color: PLUM }}
                >
                  <Icon size={15} strokeWidth={1.7} />
                </span>
                <h3
                  className="m-0 mt-5 font-plus-jakarta text-[11px] font-bold leading-[1.35]"
                  style={{ color: DARK }}
                >
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNER ECOSYSTEM ================= */}
      <section className="w-full bg-[#fafbff] px-4 py-12 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.6fr]">
          <div>
            <Eyebrow>Partner Ecosystem</Eyebrow>
            <h2
              className="m-0 max-w-[320px] font-plus-jakarta text-[20px] font-extrabold leading-[1.25]"
              style={{ color: DARK }}
            >
              Delivering Solutions Powered by Technology Partners
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-around gap-4">
            <PartnerChip>
              <span className="text-[20px] font-bold lowercase text-[#6b7280]">
                aws
              </span>
            </PartnerChip>
            <PartnerChip>
              <span className="text-[20px] font-semibold text-[#4285f4]">
                G<span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
              </span>
            </PartnerChip>
            <PartnerChip>
              <span className="flex gap-[2px]">
                <i className="block h-3 w-3 rounded-full bg-[#ea4335]" />
                <i className="block h-3 w-3 rounded-full bg-[#4285f4]" />
                <i className="block h-3 w-3 rounded-full bg-[#34a853]" />
              </span>
              <span className="text-[13px]">Cloud</span>
            </PartnerChip>
            <PartnerChip>
              <span className="text-[22px] font-extrabold lowercase text-[#5b2ec2]">
                nc
              </span>
            </PartnerChip>
            <PartnerChip>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0e7fc0] text-[9px] font-extrabold text-[#0e7fc0]">
                DELL
              </span>
            </PartnerChip>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full px-4 py-14 md:px-8">
        <div
          className="relative grid items-center gap-8 overflow-hidden rounded-3xl px-8 py-12 text-white shadow-[0_24px_50px_rgba(115,0,66,0.35)] md:px-14 lg:grid-cols-[1.4fr_1fr]"
          style={{
            background: "linear-gradient(120deg, #7a0a43 0%, #5c1a3a 100%)",
          }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-6 select-none font-plus-jakarta text-[120px] font-extrabold leading-none text-white/5"
          >
            &lt;/&gt;
          </span>

          <div className="relative">
            <h2 className="mb-4 max-w-[520px] font-plus-jakarta text-[26px] font-bold leading-[1.15] md:text-[32px]">
              Have a Software Idea? Let&rsquo;s Build It Together.
            </h2>
            <p className="m-0 max-w-[480px] text-[13.5px] leading-[1.7] text-white/90">
              Connect with TechTorch Solutions to explore software engineering
              services that align with your business goals.
            </p>
          </div>

          <div className="relative flex items-center gap-4 lg:justify-end lg:border-l lg:border-white/20 lg:pl-8">
            <Link
              to="/talk-to-expert"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12.5px] font-semibold no-underline transition-opacity hover:opacity-90"
              style={{ color: PLUM }}
            >
              Talk to Our Experts
              <ArrowRight size={14} />
            </Link>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-[13px] font-bold">
              &lt;/&gt;
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
