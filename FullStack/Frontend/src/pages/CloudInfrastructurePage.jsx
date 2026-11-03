import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Cloud,
  Settings,
  ShieldCheck,
  Zap,
  Server,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#1a1226";

/* ---------- Content ---------- */
const services = [
  {
    Icon: TrendingUp,
    title: "Scalable Infrastructure",
    text: "Adapt computing, storage, and networking resources.",
  },
  {
    Icon: Cloud,
    title: "Flexible Cloud Environments",
    text: "Explore cloud architecture options.",
  },
  {
    Icon: Settings,
    title: "Improved Resource Management",
    text: "Monitor usage and optimize performance.",
  },
  {
    Icon: ShieldCheck,
    title: "Security-Focused Approach",
    text: "Strengthen data protection and access control.",
  },
  {
    Icon: Zap,
    title: "Ongoing Optimization",
    text: "Identify opportunities for better performance.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;

const Eyebrow = ({ children, light = false }) => (
  <div
    className="mb-4 flex items-center gap-2.5 font-inter text-[10.5px] font-semibold uppercase tracking-[0.04em]"
    style={{ color: light ? "#ffffff" : "#c01b5a" }}
  >
    <span
      className="block h-[2px] w-5"
      style={{ background: light ? "#ffffff" : "#c01b5a" }}
    />
    {children}
  </div>
);

const ServiceCard = ({ Icon, title, text, onDark = false }) => (
  <div
    className={`rounded-xl bg-white px-5 py-7 text-center ${
      onDark
        ? "shadow-lg"
        : "border border-gray-100 shadow-[0_6px_20px_rgba(115,0,66,0.06)]"
    }`}
  >
    <span
      className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf2f8]"
      style={{ color: PLUM }}
    >
      <Icon size={16} strokeWidth={1.7} />
    </span>
    <h3
      className="mt-4 mb-2 font-plus-jakarta text-[13.5px] font-bold leading-[1.35]"
      style={{ color: DARK }}
    >
      {title}
    </h3>
    <p className="m-0 text-[12px] leading-[1.6] text-[#6b7280]">{text}</p>
  </div>
);

/* Partner chips drawn in code (sharp at any size). Swap for <img> logos later. */
const PartnerChip = ({ children }) => (
  <span className="flex h-12 min-w-[110px] items-center justify-center gap-2 px-4 text-[13px] font-semibold text-[#374151]">
    {children}
  </span>
);

export default function CloudInfrastructurePage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section
        className="w-full px-4 py-14 md:px-8 md:py-16"
        style={{
          background: "linear-gradient(180deg, #fdf6fa 0%, #ffffff 70%)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Cloud Infrastructure</Eyebrow>
            <h1
              className="mb-6 font-plus-jakarta text-[38px] font-extrabold leading-[1.02] tracking-tight md:text-[50px]"
              style={{ color: DARK }}
            >
              Empower Your Business with{" "}
              <Plum>Scalable Cloud Infrastructure</Plum>
            </h1>
            <p className="max-w-[500px] text-[15px] leading-[1.75]">
              Build a flexible, reliable, and future-ready technology
              environment with cloud solutions designed around your business
              needs. TechTorch Solutions helps organizations modernize their IT
              infrastructure, optimize resources, and manage workloads through
              scalable cloud technologies.
            </p>
            <Link
              to="/talk-to-expert"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: PLUM }}
            >
              Talk to Our Cloud Experts
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] pb-4 pt-4">
            <div
              className="absolute -left-6 bottom-0 h-[78%] w-[60%] rounded-bl-2xl"
              style={{
                background: PLUM,
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            <img
              src="/cloud-hero.png"
              alt="Data center with glowing cloud computing hologram"
              className="relative h-[300px] w-full rounded-2xl object-cover shadow-[0_24px_50px_rgba(15,23,42,0.28)] md:h-[340px]"
            />
          </div>
        </div>
      </section>

      {/* ================= DIGITAL FOUNDATION ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[560px]">
            <img
              src="/cloud-about.png"
              alt="Hand touching a glowing cloud with connected devices"
              className="h-[260px] w-full rounded-2xl border-[3px] object-cover shadow-[0_20px_40px_rgba(15,23,42,0.25)] md:h-[320px]"
              style={{ borderColor: "#9b0f4f" }}
            />
          </div>

          <div>
            <span
              className="mb-4 block h-[2px] w-5"
              style={{ background: "#c01b5a" }}
            />
            <h2
              className="mb-5 font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[32px]"
              style={{ color: DARK }}
            >
              Build a Stronger Digital Foundation with Cloud Technology
            </h2>
            <p className="mb-5 text-[14px] leading-[1.75]">
              As businesses grow, traditional IT infrastructure can become
              difficult to scale, manage, and maintain. Cloud technology offers
              a more flexible approach, helping organizations access computing
              resources, storage, and networking capabilities without depending
              entirely on physical hardware.
            </p>
            <p className="m-0 text-[14px] leading-[1.75]">
              At TechTorch Solutions, we help businesses plan, adopt, and manage
              cloud infrastructure through Infrastructure as a Service (IaaS)
              and related services. From cloud architecture and migration to
              security, monitoring, and optimization, we help organizations
              build an adaptable technology foundation that supports business
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLOUD INFRASTRUCTURE SERVICES ================= */}
      <section
        className="w-full px-4 py-16 md:px-8 md:py-20"
        style={{
          background: "linear-gradient(180deg, #fbf5f9 0%, #fdf8fb 100%)",
        }}
      >
        <Eyebrow>Cloud Infrastructure Services</Eyebrow>
        <h2
          className="mb-4 max-w-[560px] font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[32px]"
          style={{ color: DARK }}
        >
          Complete Cloud Solutions for Modern Business Needs
        </h2>
        <p className="mb-10 max-w-[620px] text-[14px] leading-[1.7]">
          We provide cloud infrastructure services that help organizations
          improve flexibility, manage resources, and support evolving technology
          requirements.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section
        className="w-full px-4 py-16 md:px-8 md:py-20"
        style={{ background: PLUM }}
      >
        <Eyebrow light>Why Choose TechTorch?</Eyebrow>
        <h2 className="mb-10 font-plus-jakarta text-[26px] font-extrabold leading-[1.15] text-white md:text-[32px]">
          Cloud Infrastructure That Supports Your Business Goals
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} onDark />
          ))}
        </div>
      </section>

      {/* ================= POWERED BY ================= */}
      <section className="w-full px-4 py-12 md:px-8">
        <div className="mb-6 flex items-center gap-2.5 font-inter text-[10.5px] font-semibold uppercase tracking-[0.04em] text-[#374151]">
          <span className="block h-[2px] w-5 bg-[#c01b5a]" />
          Delivering Solutions Powered By
        </div>

        <div className="flex flex-wrap items-center justify-around gap-4">
          <PartnerChip>
            <span className="text-[20px] font-extrabold lowercase text-[#252f3e]">
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
            <span className="flex h-7 w-10 items-center justify-center rounded-full border-2 border-[#3b82f6] bg-[#e0f0ff]">
              <Cloud size={14} color="#3b82f6" fill="#3b82f6" />
            </span>
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
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full px-4 pb-14 pt-4 md:px-8">
        <div
          className="grid items-center gap-8 rounded-3xl px-8 py-12 text-white shadow-[0_24px_50px_rgba(115,0,66,0.35)] md:px-14 lg:grid-cols-2"
          style={{
            background: "linear-gradient(120deg, #5c0030 0%, #7a0043 100%)",
          }}
        >
          <div>
            <span className="mb-5 block h-[3px] w-6 bg-white" />
            <h2 className="mb-4 max-w-[440px] font-plus-jakarta text-[26px] font-bold leading-[1.15] md:text-[32px]">
              Ready to Move Your Business to the Cloud?
            </h2>
            <p className="mb-7 max-w-[480px] text-[13.5px] leading-[1.7] text-white/90">
              Let&rsquo;s explore how the right cloud infrastructure can help
              your organization improve flexibility, optimize resources, and
              prepare for future growth.
            </p>
            <Link
              to="/talk-to-expert"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12.5px] font-semibold no-underline transition-opacity hover:opacity-90"
              style={{ color: PLUM }}
            >
              Talk to Our Cloud Experts
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cloud + server illustration drawn in code (no image needed) */}
          <div className="relative mx-auto flex h-[180px] w-full max-w-[320px] items-center justify-center">
            <Cloud size={110} color="#4fb3c8" strokeWidth={3} />
            <div className="absolute bottom-3 right-12 flex gap-2">
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className="flex h-14 w-9 items-center justify-center rounded-md border border-[#4fb3c8]/60 bg-[#1b0f3a]/80"
                >
                  <Server size={18} color="#4fb3c8" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
