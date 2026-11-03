import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Zap,
  ShieldCheck,
  User,
  Users,
  Box,
  DollarSign,
  FlaskConical,
  Monitor,
  Activity,
  Briefcase,
  TrendingUp,
  Building2,
  Smile,
  Lock,
  RefreshCw,
} from "lucide-react";

/* ---------- Colors (from the design) ---------- */
const PLUM = "#730042";
const DARK = "#0f172a";

/* ---------- Content ---------- */
const heroChecks = [
  "Patient Management",
  "Clinical Workflows",
  "Staff Operations",
  "Inventory & Billing",
  "Healthcare Analytics",
];

const patientRecords = [
  "Medical History",
  "Lab Reports",
  "Prescriptions",
  "Appointments",
];

const ecosystemChips = [
  { Icon: Heart, label: "Quality Care" },
  { Icon: Zap, label: "Operational Efficiency" },
  { Icon: ShieldCheck, label: "Secure & Compliant" },
];

const solutions = [
  {
    Icon: Users,
    title: "Patient Management & EMR",
    text: "Centralized registration, medical records, appointment scheduling, medical history and queue management.",
  },
  {
    Icon: User,
    title: "Staff & Operations Management",
    text: "HR, payroll, duty rosters, shift scheduling, performance monitoring and resource allocation.",
  },
  {
    Icon: Box,
    title: "Medical Inventory & Supply Chain",
    text: "Real-time tracking, equipment management, restocking alerts, vendor management and procurement.",
  },
  {
    Icon: DollarSign,
    title: "Billing & Financial Management",
    text: "Patient billing, insurance integration, multiple payment options, financial tracking and operational reporting.",
  },
  {
    Icon: FlaskConical,
    title: "Clinical & Laboratory Management",
    text: "LIMS, diagnostic workflows, laboratory reports and integration with radiology, pharmacy and pathology systems.",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance & Data Security",
    text: "Role-based access, data encryption, audit trails and support for applicable healthcare compliance requirements.",
  },
  {
    Icon: Monitor,
    title: "Telemedicine & Patient Engagement",
    text: "Virtual consultations, patient portals, digital prescriptions, appointment reminders and automated follow-ups.",
  },
  {
    Icon: Activity,
    title: "Healthcare Analytics & Insights",
    text: "KPI dashboards, patient trend analysis, resource utilization, predictive analytics and customized reporting.",
  },
];

const benefits = [
  {
    Icon: Briefcase,
    title: "Integrated Healthcare Operations",
    text: "Connect essential functions through a centralized digital ecosystem.",
  },
  {
    Icon: TrendingUp,
    title: "Improved Operational Efficiency",
    text: "Simplify workflows and reduce manual processes.",
  },
  {
    Icon: Building2,
    title: "Better Resource Management",
    text: "Manage staff, supplies, equipment and operational resources effectively.",
  },
  {
    Icon: Smile,
    title: "Enhanced Patient Experience",
    text: "Support convenient appointments, records, virtual consultations and follow-ups.",
  },
  {
    Icon: Lock,
    title: "Security-Focused Solutions",
    text: "Implement secure data management, controlled access and audit capabilities.",
  },
  {
    Icon: RefreshCw,
    title: "Scalable Technology",
    text: "Build flexible solutions that adapt to changing healthcare requirements.",
  },
];

/* ---------- Small reusable pieces ---------- */
const Pill = ({ children }) => (
  <span
    className="inline-block rounded-full bg-[#fdf0f6] px-3.5 py-1.5 font-inter text-[10.5px] font-bold uppercase tracking-[0.08em]"
    style={{ color: PLUM }}
  >
    {children}
  </span>
);

const Plum = ({ children }) => <span style={{ color: PLUM }}>{children}</span>;

const PinkIcon = ({ Icon, size = 20 }) => (
  <div
    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf0f6]"
    style={{ color: PLUM }}
  >
    <Icon size={size} strokeWidth={1.7} />
  </div>
);

export default function HealthcareHospitalManagementPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-inter text-[#5b6577]">
      {/* ================= HERO ================= */}
      <section className="w-full bg-[#fbfcfe] px-4 py-14 md:px-8 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Pill>Healthcare &amp; Hospital Management</Pill>
            <h1
              className="mt-6 mb-6 font-plus-jakarta text-[38px] font-extrabold leading-[1.05] tracking-tight md:text-[50px]"
              style={{ color: DARK }}
            >
              Transforming Healthcare Through Smart Digital Solutions
            </h1>
            <p className="max-w-[480px] text-[15px] leading-[1.7]">
              Empowering hospitals, clinics, and healthcare providers with
              integrated digital solutions that simplify hospital operations,
              streamline patient management, and improve healthcare service
              delivery.
            </p>

            <ul className="m-0 mt-7 grid max-w-[520px] list-none grid-cols-2 gap-x-6 gap-y-3 p-0 sm:grid-cols-3">
              {heroChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[12.5px] font-semibold"
                  style={{ color: DARK }}
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: PLUM }}
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/explore-solutions"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
                style={{ background: PLUM }}
              >
                Explore Solutions
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/start-conversation"
                className="inline-flex items-center rounded-full border bg-white px-7 py-3.5 text-[13px] font-semibold no-underline transition-colors hover:bg-[#730042] hover:text-white"
                style={{ borderColor: PLUM, color: PLUM }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[470px] pb-6 pl-0 sm:pl-14">
            <img
              src="/healthcare-hero.png"
              alt="Doctor holding a tablet in a hospital corridor"
              className="h-[420px] w-full rounded-3xl object-cover shadow-[0_24px_50px_rgba(15,23,42,0.22)] md:h-[480px]"
            />

            <div
              className="absolute right-3 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-lg"
              style={{ background: PLUM }}
            >
              <Heart size={16} />
            </div>

            <div className="absolute left-0 top-6 hidden w-[185px] rounded-2xl bg-white px-4 py-4 shadow-xl sm:block">
              <div className="mb-3 flex items-center gap-2.5 border-b border-gray-100 pb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <User size={14} />
                </span>
                <div className="leading-tight">
                  <p
                    className="m-0 text-[11px] font-bold"
                    style={{ color: DARK }}
                  >
                    Patient Records
                  </p>
                  <p className="m-0 text-[9px] text-gray-400">ID: #45872</p>
                </div>
              </div>
              {patientRecords.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-1.5 text-[10px]"
                >
                  <span>{item}</span>
                  <ChevronRight size={10} className="text-gray-300" />
                </div>
              ))}
            </div>

            <div className="absolute -bottom-2 right-0 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl">
              <span style={{ color: PLUM }}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M5 20V12M12 20V5M19 20V9" />
                </svg>
              </span>
              <p
                className="m-0 text-[10px] font-bold leading-tight"
                style={{ color: DARK }}
              >
                Better Care
                <br />
                Through
                <br />
                Technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT OUR HEALTHCARE SOLUTIONS ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[480px] pl-0 sm:pl-24">
            <div
              className="absolute -left-2 -top-4 hidden h-24 w-[55%] rounded-t-3xl sm:block"
              style={{ background: PLUM }}
            />
            <img
              src="/healthcare-ecosystem.png"
              alt="Nurses caring for a patient in a hospital room"
              className="relative h-[340px] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.2)] md:h-[380px]"
            />
            <div className="absolute left-0 top-[28%] hidden flex-col gap-3 sm:flex">
              {ecosystemChips.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-full bg-white py-2.5 pl-3 pr-6 text-[12px] font-bold shadow-lg"
                  style={{ color: DARK }}
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fdf0f6]"
                    style={{ color: PLUM }}
                  >
                    <Icon size={13} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Pill>About Our Healthcare Solutions</Pill>
            <h2
              className="mt-5 mb-6 font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
              style={{ color: DARK }}
            >
              Building a Smarter and More Connected{" "}
              <Plum>Healthcare Ecosystem</Plum>
            </h2>
            <p className="mb-5 text-[14.5px] leading-[1.75]">
              The healthcare industry requires efficient coordination between
              medical professionals, administrative teams, patients, and
              healthcare facilities. Managing these interconnected operations
              can become complex without the right technology.
            </p>
            <p className="mb-5 text-[14.5px] leading-[1.75]">
              At TechTorch, we provide comprehensive Healthcare and Hospital
              Management Solutions designed to simplify these challenges through
              integrated digital systems. Our solutions help healthcare
              organizations manage their daily operations, centralize critical
              information, and improve coordination across different
              departments.
            </p>
            <p className="m-0 text-[14.5px] leading-[1.75]">
              From patient registration and Electronic Medical Records (EMR) to
              staff scheduling, inventory management, billing, laboratory
              operations, and telemedicine, we bring essential healthcare
              functions into a connected digital environment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= KEY HEALTHCARE SOLUTIONS ================= */}
      <section className="w-full bg-[#fbfcfe] px-4 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <Pill>Our Key Healthcare Solutions</Pill>
          <h2
            className="mx-auto mt-5 mb-12 max-w-[760px] font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
            style={{ color: DARK }}
          >
            Complete Digital Solutions for Modern{" "}
            <Plum>Healthcare Management</Plum>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <PinkIcon Icon={Icon} />
              <h3
                className="mt-6 mb-3 font-plus-jakarta text-[15px] font-bold leading-[1.35]"
                style={{ color: DARK }}
              >
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE TECHTORCH ================= */}
      <section className="w-full bg-[#f9f8f2] px-4 py-16 md:px-8 md:py-20">
        <Pill>Why Choose TechTorch</Pill>
        <h2
          className="mt-5 mb-12 max-w-[640px] font-plus-jakarta text-[28px] font-extrabold leading-[1.15] md:text-[36px]"
          style={{ color: DARK }}
        >
          Technology That Makes Healthcare Management{" "}
          <Plum>More Efficient</Plum>
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {benefits.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ background: PLUM }}
                >
                  <Icon size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <h3
                    className="m-0 font-plus-jakarta text-[13.5px] font-bold leading-[1.3]"
                    style={{ color: DARK }}
                  >
                    {title}
                  </h3>
                  <p className="m-0 mt-1.5 text-[12.5px] leading-[1.6]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              className="absolute -bottom-4 -left-4 hidden h-[60%] w-[65%] rounded-2xl sm:block"
              style={{ background: PLUM }}
            />
            <img
              src="/healthcare-portal.png"
              alt="Nurse using a tablet with a patient"
              className="relative h-[380px] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.2)] md:h-[420px]"
            />
            <div className="absolute right-3 top-3 w-[130px] rounded-xl bg-white px-3 py-2.5 shadow-lg">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fdf0f6] text-[8px] font-bold"
                  style={{ color: PLUM }}
                >
                  DR
                </span>
                <span className="text-[10px] font-bold" style={{ color: DARK }}>
                  Doctor Portal
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded bg-[#fbd5e6]" />
              <div className="mt-1.5 h-1.5 w-2/3 rounded bg-[#e5e7eb]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
