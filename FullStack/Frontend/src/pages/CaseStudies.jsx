import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Code, Users, GraduationCap } from "lucide-react";

const MAROON = "#801336";
const NAVY = "#132144";

/* ---------- Content ---------- */
const workAreas = [
  {
    Icon: Layers,
    title: "Enterprise Resource Planning",
    text: "Business systems that bring essential functions such as finance, inventory, human resources, and supply chain management together.",
    to: "/explore-erp",
  },
  {
    Icon: Code,
    title: "Software Development",
    text: "Custom web applications, mobile applications, integrations, and application support aligned with business requirements.",
    to: "/explore-services",
  },
  {
    Icon: Users,
    title: "Customer Relationship Management",
    text: "Digital tools for organising customer information, managing sales activities, and supporting customer interactions.",
    to: "/digitalsolution",
  },
  {
    Icon: GraduationCap,
    title: "Education Management",
    text: "Education-focused software for managing institutional administration, student information, academic activities, and communication.",
    to: "/industries/education",
  },
];

/* Put the image files in /public with these names */
const caseStudies = [
  {
    no: 1,
    title: "Case Study 1: E-Commerce Transformation",
    image: "/case-study-1.png",
    challenge:
      "A retail client struggled with an outdated online store, leading to poor user experience, high cart abandonment rates, and stagnant sales growth. They needed a solution that would modernize their e-commerce platform and improve customer engagement.",
    solution:
      "TechTorch Solutions Private Limited implemented a state-of-the-art E-Commerce platform with enhanced UI/UX design, mobile responsiveness, and integrated marketing tools. We provided comprehensive training and ongoing support to ensure a smooth transition.",
    result: (
      <>
        The client saw a <b>50% decrease</b> in cart abandonment rates and a{" "}
        <b>40% increase</b> in online sales within the first six months
        post-implementation. Customer satisfaction ratings improved
        significantly, contributing to brand loyalty.
      </>
    ),
  },
  {
    no: 2,
    title: "Case Study 2: Streamlined Project Management",
    image: "/case-study-2.png",
    challenge:
      "An IT services company faced difficulties in managing multiple projects simultaneously, resulting in missed deadlines and resource conflicts. They required a more efficient way to monitor progress and collaborate across teams.",
    solution:
      "We introduced our Project Management solution, incorporating Gantt charts and Kanban boards for better visualization of workflows. The solution included task assignment features and realtime collaboration tools to enhance team communication.",
    result: (
      <>
        As a result, the client reported a <b>35% improvement</b> in project
        delivery times and a <b>25% increase</b> in team productivity. They were
        able to manage projects more effectively, leading to higher client
        satisfaction.
      </>
    ),
  },
  {
    no: 3,
    title: "Case Study 3: Enhanced Marketing ROI",
    image: "/case-study-3.png",
    challenge:
      "A marketing agency was struggling with low engagement rates in their campaigns and inefficient use of marketing resources. They needed a solution to streamline their marketing efforts and maximize ROI.",
    solution:
      "TechTorch implemented an integrated Marketing & Advertising platform that automated campaign management and audience segmentation. The agency received training on utilizing data analytics for targeted marketing strategies.",
    result: (
      <>
        Within three months, the agency experienced a <b>60% increase</b> in
        campaign engagement and a <b>50% rise</b> in leads generated. The
        improved analytics capabilities allowed for more informed
        decision-making, significantly enhancing marketing performance.
      </>
    ),
  },
  {
    no: 4,
    title: "Case Study 4: Operational Efficiency in Supply Chain",
    image: "/case-study-4.png",
    challenge:
      "A logistics company faced challenges in inventory management and delivery schedules, leading to increased costs and customer dissatisfaction. They needed a solution to optimize their supply chain processes.",
    solution:
      "We deployed our Supply Chain Management solution, which included real-time inventory tracking and predictive analytics for demand forecasting. Our team worked closely with theirs to integrate the new system with existing processes.",
    result: (
      <>
        Post-implementation, the company achieved a <b>30% reduction</b> in
        inventory holding costs and improved delivery times by <b>20%</b>.
        Customer satisfaction scores increased due to more reliable service and
        timely deliveries.
      </>
    ),
  },
];

const steps = [
  {
    no: "01",
    title: "Understand",
    text: "Establish the business context, requirements, and intended outcomes.",
  },
  {
    no: "02",
    title: "Plan",
    text: "Define the solution scope, technical approach, and implementation priorities.",
  },
  {
    no: "03",
    title: "Develop",
    text: "Build or configure the solution in line with agreed requirements.",
  },
  {
    no: "04",
    title: "Review",
    text: "Evaluate the delivered solution against the defined scope and document verified outcomes.",
  },
];

/* ---------- Small pieces ---------- */
const Eyebrow = ({ children, light = false }) => (
  <p
    className={`m-0 font-inter text-[11px] font-bold uppercase tracking-[0.14em] ${
      light ? "text-white/80" : ""
    }`}
    style={light ? undefined : { color: MAROON }}
  >
    {children}
  </p>
);

export default function CaseStudies() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#475569]">
      {/* ================= HERO ================= */}
      <section className="w-full border-b border-gray-100 px-4 py-14 md:px-6 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow>Case Studies</Eyebrow>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[36px] font-extrabold leading-[1.05] tracking-tight md:text-[48px]"
              style={{ color: NAVY }}
            >
              Solving Business Challenges Through Technology
            </h1>
            <p className="max-w-[520px] text-[16px] leading-[1.7] text-[#5b6577]">
              Every business has different operational needs. TechTorch
              Solutions works across software development, enterprise
              applications, and digital solutions to address specific technology
              requirements.
            </p>
          </div>

          <img
            src="/case-studies-hero.png"
            alt="Team reviewing a project on a laptop"
            className="h-auto w-full rounded-xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.18)]"
          />
        </div>
      </section>

      {/* ================= OUR WORK ================= */}
      <section className="w-full px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 md:items-start md:gap-10">
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <h2
              className="mt-3 font-plus-jakarta text-[28px] font-bold leading-[1.25] md:text-[32px]"
              style={{ color: NAVY }}
            >
              Technology Applied to Business Needs
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7]">
            Our capabilities span business applications, software engineering,
            and digital systems. Each project begins with understanding the
            requirements and identifying an appropriate solution.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workAreas.map(({ Icon, title, text, to }) => (
            <div key={title}>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf0f3]"
                style={{ color: MAROON }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[16px] font-bold leading-[1.35]"
                style={{ color: NAVY }}
              >
                {title}
              </h3>
              <p className="mb-5 text-[13.5px] leading-[1.7]">{text}</p>
              <Link
                to={to}
                aria-label={`Learn more about ${title}`}
                style={{ color: MAROON }}
                className="inline-flex"
              >
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR CASE STUDIES ================= */}
      <section className="w-full bg-[#f8fafc] px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 md:items-end md:gap-10">
          <div>
            <Eyebrow>Case Studies</Eyebrow>
            <h2
              className="mt-3 font-plus-jakarta text-[28px] font-bold md:text-[32px]"
              style={{ color: NAVY }}
            >
              Our Case Studies
            </h2>
          </div>
          <p className="text-[15px]">
            Driving Business Success Through Tailored Tech Solutions
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {caseStudies.map((c) => (
            <article
              key={c.no}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:flex-row"
            >
              <img
                src={c.image}
                alt=""
                className="h-[220px] w-full object-cover sm:h-auto sm:w-[200px] sm:shrink-0"
              />

              <div className="p-6">
                <Eyebrow>Case Study {c.no}</Eyebrow>
                <h3
                  className="mt-2 mb-4 font-plus-jakarta text-[17px] font-bold leading-[1.3]"
                  style={{ color: NAVY }}
                >
                  {c.title}
                </h3>

                <p className="mb-1 text-[13px] font-semibold text-[#1f2937]">
                  Client Challenges:
                </p>
                <p className="mb-4 text-[12.5px] leading-[1.65]">
                  {c.challenge}
                </p>

                <p className="mb-1 text-[13px] font-semibold text-[#1f2937]">
                  Solutions Implemented:
                </p>
                <p className="mb-4 text-[12.5px] leading-[1.65]">
                  {c.solution}
                </p>

                <div className="rounded-lg border border-[#f6dde3] bg-[#fdf6f8] p-4">
                  <p
                    className="mb-1 text-[13px] font-semibold"
                    style={{ color: MAROON }}
                  >
                    Results Achieved:
                  </p>
                  <p className="text-[12.5px] leading-[1.65] [&_b]:font-bold [&_b]:text-[#801336]">
                    {c.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="w-full px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Our Approach</Eyebrow>
            <h2
              className="mt-4 mb-4 font-plus-jakarta text-[28px] font-bold leading-[1.2] md:text-[32px]"
              style={{ color: NAVY }}
            >
              A Structured Approach to Every Requirement
            </h2>
            <p className="max-w-[380px] text-[15px] leading-[1.7]">
              We follow a clear and collaborative process to understand your
              needs, design the right solution, and deliver measurable results.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ no, title, text }) => (
              <div key={no}>
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ background: MAROON }}
                  >
                    {no}
                  </span>
                  <span className="hidden h-px flex-1 bg-gray-200 lg:block" />
                </div>
                <h3
                  className="mt-5 mb-2 font-plus-jakarta text-[15px] font-bold"
                  style={{ color: NAVY }}
                >
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.65]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="w-full px-4 py-14 text-white md:px-6"
        style={{
          background:
            "linear-gradient(20deg, #59071d 0%, #6b0a26 60%, #8c2442 100%)",
        }}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[620px]">
            <Eyebrow light>Have a Project in Mind?</Eyebrow>
            <h2 className="mt-3 mb-3 font-plus-jakarta text-[28px] font-bold md:text-[32px]">
              Let’s Discuss Your Business Requirements
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/85">
              Whether you are planning a new software application, improving an
              existing system, or exploring enterprise solutions, our team is
              here to help.
            </p>
          </div>

          <Link
            to="/talk-to-expert"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-[#801336] no-underline transition-opacity hover:opacity-90"
          >
            Talk to Our Experts
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
