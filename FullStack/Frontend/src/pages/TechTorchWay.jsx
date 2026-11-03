import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Code,
  Box,
  Users,
  SlidersVertical,
} from "lucide-react";

/* ---------- Colors (taken from the design) ---------- */
const MAROON = "#801336";
const NAVY = "#132144";

/* ---------- Content ---------- */
const philosophy = [
  {
    Icon: Target,
    title: "Start with the Business Need",
    text: "We take time to understand your objectives, challenges and operational needs to set the right direction for every solution.",
  },
  {
    Icon: Lightbulb,
    title: "Keep Solutions Relevant",
    text: "We design technology that fits your workflows today and supports your future goals.",
  },
  {
    Icon: ShieldCheck,
    title: "Focus on Quality",
    text: "Through structured development, testing and review, we ensure solutions meet your expectations and standards.",
  },
  {
    Icon: TrendingUp,
    title: "Evolve with Changing Needs",
    text: "As your business grows, we're here to support updates, improvements and new opportunities.",
  },
];

const steps = [
  {
    no: "01",
    title: "Understand",
    text: "We discuss your objectives, assess your requirements and identify the key challenges.",
  },
  {
    no: "02",
    title: "Define",
    text: "We establish the project scope, priorities and technical direction based on your needs.",
  },
  {
    no: "03",
    title: "Develop",
    text: "We design, develop or configure the solution according to the agreed scope.",
  },
  {
    no: "04",
    title: "Test & Refine",
    text: "We review functionality, validate against requirements and address improvements.",
  },
];

const capabilities = [
  {
    Icon: Code,
    title: "ERP",
    text: "Integrate your core business functions for better control and visibility.",
  },
  {
    Icon: Box,
    title: "Supply Chain Management",
    text: "Improve efficiency and visibility across your supply chain.",
  },
  {
    Icon: Users,
    title: "CRM",
    text: "Build stronger customer relationships and streamline sales processes.",
  },
  {
    Icon: SlidersVertical,
    title: "Software Development",
    text: "Build custom applications and extend your existing systems.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Eyebrow = ({ children, light = false }) => (
  <p
    className={`font-inter text-[11px] font-bold uppercase tracking-[0.14em] m-0 ${
      light ? "text-white/80" : ""
    }`}
    style={light ? undefined : { color: MAROON }}
  >
    {children}
  </p>
);

const IconBox = ({ Icon, size = "md" }) => (
  <div
    className={`flex items-center justify-center rounded-lg bg-[#fdf0f3] ${
      size === "md" ? "h-12 w-12" : "h-10 w-10"
    }`}
    style={{ color: MAROON }}
  >
    <Icon size={size === "md" ? 20 : 18} strokeWidth={1.8} />
  </div>
);

const PrimaryBtn = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-[13px] font-semibold font-inter text-white no-underline transition-opacity hover:opacity-90"
    style={{ background: MAROON }}
  >
    {children}
    <ArrowRight size={15} />
  </Link>
);

export default function TechTorchWay() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#475569]">
      {/* ================= HERO ================= */}
      <section className="w-full border-b border-gray-100 px-4 py-14 md:px-6 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow>The TechTorch Way</Eyebrow>
            <h1
              className="mt-8 mb-6 font-plus-jakarta text-[36px] font-extrabold leading-[1.05] tracking-tight md:text-[48px]"
              style={{ color: NAVY }}
            >
              Technology with Purpose.
              <br />
              Solutions with Impact.
            </h1>
            <p className="max-w-[560px] text-[17px] leading-[1.7] text-[#5b6577]">
              At TechTorch Solutions, we believe that great technology starts
              with understanding your business. We bring together business
              insight and technical expertise to build digital solutions that
              align with your goals and drive meaningful outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryBtn to="/explore-services">
                Explore Our Services
              </PrimaryBtn>
              <Link
                to="/talk-to-expert"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-[13px] font-semibold text-[#132144] no-underline transition-colors hover:border-[#801336] hover:text-[#801336]"
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>

          <img
            src="/techtorch-way-hero.png"
            alt="TechTorch team collaborating around a digital display"
            className="h-auto w-full rounded-xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)]"
          />
        </div>
      </section>

      {/* ================= OUR PHILOSOPHY ================= */}
      <section className="w-full px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 md:items-end md:gap-10">
          <div>
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2
              className="mt-3 font-plus-jakarta text-[28px] font-bold md:text-[32px]"
              style={{ color: NAVY }}
            >
              Built on Better Thinking
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7]">
            We focus on what matters — your business. Our approach is rooted in
            collaboration, clarity and a commitment to deliver solutions that
            create long-term value.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm"
              style={{ borderTop: `3px solid ${MAROON}` }}
            >
              <IconBox Icon={Icon} />
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[17px] font-bold"
                style={{ color: NAVY }}
              >
                {title}
              </h3>
              <p className="text-[13.5px] leading-[1.7]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="w-full bg-[#f8fafc] px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 md:items-start md:gap-10">
          <div>
            <Eyebrow>How We Work</Eyebrow>
            <h2
              className="mt-3 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[32px]"
              style={{ color: NAVY }}
            >
              From Requirements to
              <br />
              Implementation
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7]">
            Our process is simple, structured and transparent. We work closely
            with you at every stage to turn your ideas into practical, scalable
            solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ no, title, text }) => (
            <div key={no}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  style={{ background: MAROON }}
                >
                  {no}
                </span>
                <span className="hidden h-px flex-1 bg-gray-300 lg:block" />
                <ArrowRight
                  size={12}
                  className="hidden text-gray-400 lg:block"
                />
              </div>
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[17px] font-bold"
                style={{ color: NAVY }}
              >
                {title}
              </h3>
              <p className="text-[13.5px] leading-[1.7]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR CAPABILITIES ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Eyebrow>Our Capabilities</Eyebrow>
            <h2
              className="mt-5 mb-5 font-plus-jakarta text-[32px] font-extrabold leading-[1.15] md:text-[38px]"
              style={{ color: NAVY }}
            >
              Technology That Supports Business
            </h2>
            <p className="mb-8 max-w-[520px] text-[15px] leading-[1.7]">
              Our expertise spans across enterprise resource planning, supply
              chain management, customer relationship management and custom
              software development.
            </p>
            <PrimaryBtn to="/explore-solutions">
              Explore Our Solutions
            </PrimaryBtn>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {capabilities.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <IconBox Icon={Icon} size="sm" />
                <div>
                  <h3
                    className="mb-1.5 font-plus-jakarta text-[15px] font-bold"
                    style={{ color: NAVY }}
                  >
                    {title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COLLABORATION ================= */}
      <section className="w-full px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
            <img
              src="/desktop.png"
              alt=""
              className="h-[300px] w-full object-cover md:h-[370px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2a1030]/60 text-center text-white">
              <span className="font-plus-jakarta text-[22px] font-semibold">
                Better Technology
              </span>
              <span className="mt-1 font-plus-jakarta text-[20px] font-normal text-white/85">
                Stronger Business
              </span>
            </div>
          </div>

          <div>
            <Eyebrow>Collaboration</Eyebrow>
            <h2
              className="mt-5 mb-6 font-plus-jakarta text-[28px] font-bold md:text-[32px]"
              style={{ color: NAVY }}
            >
              Together at Every Stage
            </h2>
            <p
              className="border-l-2 pl-5 text-[15px] leading-[1.8]"
              style={{ borderColor: MAROON }}
            >
              We believe in open communication, shared understanding and close
              collaboration. By keeping your business priorities at the centre,
              we ensure the right decisions and smooth execution at every step.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="w-full px-4 py-14 text-white md:px-6"
        style={{
          background:
            "linear-gradient(20deg, #59071d 0%, #7a0f2e 55%, #9c3b54 100%)",
        }}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[620px]">
            <Eyebrow light>Let’s Move Ahead</Eyebrow>
            <h2 className="mt-3 mb-3 font-plus-jakarta text-[28px] font-bold md:text-[32px]">
              Let’s Discuss Your Next Step
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/85">
              Whether you’re planning a new digital solution or reviewing an
              existing system, our team is ready to understand your requirements
              and explore the right approach.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/talk-to-expert"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-[13px] font-semibold text-[#801336] no-underline transition-opacity hover:opacity-90"
            >
              Talk to Our Experts
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/start-conversation"
              className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 text-[13px] font-semibold text-white no-underline transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
