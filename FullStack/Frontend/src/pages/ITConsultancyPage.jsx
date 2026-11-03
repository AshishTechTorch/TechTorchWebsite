import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Search,
  FileText,
  Rocket,
  TrendingUp,
  Lightbulb,
  BarChart3,
  ShieldCheck,
  Settings,
  UserCog,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#14193a";

/* ---------- Content ---------- */
const steps = [
  {
    Icon: Search,
    title: "01. Research & Assessment",
    text: "Understand your business needs and assess your IT environment.",
  },
  {
    Icon: FileText,
    title: "02. Strategic Planning",
    text: "Develop practical technology strategies tailored to corporate goals.",
  },
  {
    Icon: Rocket,
    title: "03. Implementation Support",
    text: "Guide technology improvements through hands-on technical execution.",
  },
  {
    Icon: TrendingUp,
    title: "04. Continuous Growth",
    text: "Identify new opportunities for ongoing platform optimization.",
  },
];

const values = [
  {
    Icon: Lightbulb,
    title: "Innovative Solutions",
    text: "Explore practical technology approaches.",
  },
  {
    Icon: BarChart3,
    title: "Strategic Growth",
    text: "Align technology decisions with goals.",
  },
  {
    Icon: ShieldCheck,
    title: "Sustainable Progress",
    text: "Build a future-ready technology foundation.",
  },
  {
    Icon: Settings,
    title: "Enhanced Efficiency",
    text: "Optimize operations with smart solutions.",
  },
  {
    Icon: UserCog,
    title: "Technology Expertise",
    text: "Get expert guidance for better decisions.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Eyebrow = ({ children, light = false }) => (
  <div
    className="mb-4 flex items-center gap-2.5 font-inter text-[10.5px] font-bold uppercase tracking-[0.06em]"
    style={{ color: light ? "#ffffff" : PLUM }}
  >
    <span
      className="block h-[2px] w-4"
      style={{ background: light ? "#ffffff" : PLUM }}
    />
    {children}
  </div>
);

const IconBubble = ({ Icon, size = 16 }) => (
  <span
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecf1]"
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.8} />
  </span>
);

/* Partner chips drawn in code. Swap for <img> official logos later. */
const PartnerChip = ({ children }) => (
  <span className="flex h-12 flex-1 items-center justify-center px-4 text-[13px] font-semibold text-[#6b7280] md:border-l md:border-gray-200 first:md:border-l-0">
    {children}
  </span>
);

export default function ITConsultancyPage() {
  return (
    <div className="w-full overflow-hidden bg-[#fbfbfb] font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full bg-white px-4 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>IT Consultancy</Eyebrow>
            <h1
              className="mb-6 font-plus-jakarta text-[38px] font-extrabold leading-[1.02] tracking-tight md:text-[50px]"
              style={{ color: DARK }}
            >
              Navigate Digital Transformation with the Right IT Strategy
            </h1>
            <p className="max-w-[500px] text-[15px] leading-[1.75]">
              Technology is constantly evolving, and businesses need the right
              guidance to keep pace. TechTorch Solutions helps organizations
              modernize their technology environment through strategic IT
              consulting, structured assessments, and practical recommendations.
            </p>
            <Link
              to="/talk-to-expert"
              className="mt-8 inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2.5 text-[13px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: PLUM }}
            >
              Talk to Our Experts
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] px-3 py-3">
            {/* plum side accents */}
            <span
              className="absolute -left-1 top-5 bottom-5 w-3 rounded-l-xl"
              style={{ background: PLUM }}
            />
            <span
              className="absolute -right-1 top-8 bottom-12 w-3 rounded-r-xl"
              style={{ background: PLUM }}
            />
            <img
              src="/it-consultancy-hero.png"
              alt="Business leader presenting a cloud ecosystem and digital transformation"
              className="relative h-[300px] w-full rounded-2xl border-4 border-white object-cover shadow-[0_24px_50px_rgba(15,23,42,0.28)] md:h-[340px]"
            />
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC CAPABILITIES ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[560px] px-2 py-2">
            {/* plum corner accents */}
            <span
              className="absolute -left-2 top-0 h-12 w-12 rounded-tl-2xl"
              style={{ background: PLUM }}
            />
            <span
              className="absolute -right-2 bottom-0 h-10 w-24 rounded-br-2xl"
              style={{ background: PLUM }}
            />
            <img
              src="/it-consultancy-about.png"
              alt="Laptop showing a global technology infrastructure map"
              className="relative h-[260px] w-full rounded-2xl border-2 border-white object-cover shadow-[0_20px_40px_rgba(15,23,42,0.25)] md:h-[320px]"
            />
          </div>

          <div>
            <Eyebrow>Strategic Capabilities</Eyebrow>
            <h2
              className="mb-5 font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[32px]"
              style={{ color: DARK }}
            >
              Building Smarter IT Foundations for Business Growth
            </h2>
            <p className="mb-5 text-[14px] leading-[1.75]">
              A reliable technology foundation is essential for business
              efficiency, security, and long-term growth. However, outdated
              systems, infrastructure gaps, and inefficient processes can make
              digital transformation challenging.
            </p>
            <p className="m-0 text-[14px] leading-[1.75]">
              TechTorch Solutions works with businesses to evaluate their
              existing IT environment, identify potential vulnerabilities, and
              uncover opportunities for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW WE DELIVER ================= */}
      <section className="w-full bg-[#fbfbfb] px-4 py-16 md:px-8 md:py-20">
        <Eyebrow>How We Deliver</Eyebrow>
        <h2
          className="mb-10 max-w-[560px] font-plus-jakarta text-[26px] font-extrabold leading-[1.15] md:text-[32px]"
          style={{ color: DARK }}
        >
          A Structured Approach to Smarter IT Decisions
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="relative rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-[0_6px_20px_rgba(20,25,58,0.05)]"
            >
              <IconBubble Icon={Icon} />
              <h3
                className="mb-2 mt-7 font-plus-jakarta text-[14px] font-bold leading-[1.3]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[12.5px] leading-[1.6] text-[#6b7280]">
                {text}
              </p>
              {i < steps.length - 1 && (
                <ChevronRight
                  size={14}
                  className="absolute -right-[17px] top-[42px] hidden text-gray-300 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= THE VALUE WE BRING ================= */}
      <section
        className="w-full px-4 py-16 md:px-8 md:py-20"
        style={{ background: PLUM }}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.7fr]">
          <div>
            <Eyebrow light>The Value We Bring</Eyebrow>
            <h2 className="mb-5 max-w-[320px] font-plus-jakarta text-[26px] font-extrabold leading-[1.15] text-white md:text-[32px]">
              Technology Guidance That Moves Your Business Forward
            </h2>
            <p className="m-0 max-w-[320px] text-[13.5px] leading-[1.7] text-white/80">
              Our IT consultancy services help you leverage technology for
              greater efficiency, innovation, and long-term success.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {values.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl bg-white px-4 py-6 text-center shadow-lg"
              >
                <span
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#fdecf1]"
                  style={{ color: PLUM }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <h3
                  className="mb-2 mt-4 font-plus-jakarta text-[12.5px] font-bold leading-[1.3]"
                  style={{ color: DARK }}
                >
                  {title}
                </h3>
                <p className="m-0 text-[11.5px] leading-[1.55] text-[#6b7280]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNER ECOSYSTEM ================= */}
      <section className="w-full bg-[#fbfbfb] px-4 py-14 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <Eyebrow>Partner Ecosystem</Eyebrow>
            <h2
              className="mb-3 max-w-[380px] font-plus-jakarta text-[24px] font-extrabold leading-[1.2] md:text-[28px]"
              style={{ color: DARK }}
            >
              Technology Partnerships That Support Better Solutions
            </h2>
            <p className="m-0 max-w-[380px] text-[13.5px] leading-[1.7]">
              We work with established technology partners to support business
              requirements and deliver effective technology solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center md:flex-nowrap">
            <PartnerChip>
              <span className="text-[20px] font-bold lowercase text-[#4b5563]">
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
              <span className="h-4 w-6 rounded-full bg-[#4caf72]" />
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
      <section className="w-full px-4 pb-14 pt-4 md:px-8">
        <div
          className="grid items-center gap-8 rounded-3xl px-8 py-12 text-white shadow-[0_24px_50px_rgba(115,0,66,0.35)] md:px-14 lg:grid-cols-[1.6fr_1fr]"
          style={{
            background: "linear-gradient(120deg, #8a1048 0%, #5c0a2e 100%)",
          }}
        >
          <div>
            <h2 className="mb-4 max-w-[520px] font-plus-jakarta text-[26px] font-bold leading-[1.15] md:text-[32px]">
              Move Your Business Forward with the Right IT Strategy
            </h2>
            <p className="m-0 max-w-[480px] text-[13.5px] leading-[1.7] text-white/90">
              Let&rsquo;s understand your technology challenges and explore
              practical ways to improve your IT environment.
            </p>
          </div>

          <div className="flex lg:justify-end">
            <Link
              to="/talk-to-expert"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12.5px] font-semibold no-underline transition-opacity hover:opacity-90"
              style={{ color: PLUM }}
            >
              Talk to Our Experts
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
