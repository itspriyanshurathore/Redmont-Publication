import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Upload,
  FileSearch,
  FileCheck2,
  GraduationCap,
  BadgeCheck,
  ShieldCheck,
  Users,
  Clock3,
  Compass,
  Rocket,
} from "lucide-react";

const trustItems = [
  {
    title: "Transparent Process",
    desc: "Clear communication and complete transparency at every stage.",
    icon: ShieldCheck,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Dedicated Support",
    desc: "Professional guidance throughout the publication journey.",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "Quality Assurance",
    desc: "Structured quality checks to maintain publication standards.",
    icon: BadgeCheck,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Timely Communication",
    desc: "Regular updates and responsive support.",
    icon: Clock3,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    title: "Publication Guidance",
    desc: "Expert assistance from submission to publication.",
    icon: Compass,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

const steps = [
  {
    title: "Manuscript Submission",
    short: "Submit your manuscript or publication request.",
    icon: Upload,
    color: "#ef4444",
  },

  {
    title: "Initial Editorial Review",
    short: "Editorial screening and preliminary assessment.",
    icon: FileSearch,
    color: "#9333ea",
  },

  {
    title: "Editing & Quality Enhancement",
    short: "Quality checks, editing and formatting support.",
    icon: FileCheck2,
    color: "#2563eb",
  },

  {
    title: "Publication Processing",
    short: "DOI, metadata and publication preparation.",
    icon: GraduationCap,
    color: "#16a34a",
  },

  {
    title: "Publication & Dissemination",
    short: "Publication, visibility and dissemination.",
    icon: BadgeCheck,
    color: "#ea580c",
  },
];

const WorkflowSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-100/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl"></div>

      {/* Background Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-10 left-[18%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[52%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Research Workflow
          </p>

          <h2 className="mt-3 text-[30px] font-bold leading-[1.2] text-[#071739] lg:text-[38px]">
            Simple & Transparent{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Publication Process
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-[#475569]">
            Structured academic publishing workflow designed to provide clarity,
            quality assurance and smooth publication support for researchers and
            institutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Desktop Workflow */}
          <div className="hidden lg:block">
            {/* Cards */}
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                const colors = [
                  {
                    bg: "bg-red-50",
                    text: "text-red-500",
                    border: "border-red-200",
                  },
                  {
                    bg: "bg-purple-50",
                    text: "text-purple-500",
                    border: "border-purple-200",
                  },
                  {
                    bg: "bg-blue-50",
                    text: "text-blue-500",
                    border: "border-blue-200",
                  },
                  {
                    bg: "bg-green-50",
                    text: "text-green-500",
                    border: "border-green-200",
                  },
                  {
                    bg: "bg-orange-50",
                    text: "text-orange-500",
                    border: "border-orange-200",
                  },
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="rounded-[28px] border border-slate-100 bg-white p-6 text-center shadow-lg"
                  >
                    <div
                      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg ${colors[index].bg}`}
                    >
                      <Icon size={28} className={colors[index].text} />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-8 text-[#071739]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.short}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Step Numbers with Wave */}
            <div className="relative mt-12">
              <svg
                viewBox="0 0 1000 80"
                className="absolute inset-x-0 top-0 h-24 w-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="workflow-wave"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="20%" stopColor="#fbbf24" />
                    <stop offset="35%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="70%" stopColor="#8b5cf6" />
                    <stop offset="85%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
                <path
                  d="M 40 30 Q 160 5 296 30 Q 390 60 480 30 Q 550 15 650 20 Q 790 30 860 30 Q 890 40 999 20"
                  fill="none"
                  stroke="url(#workflow-wave)"
                  strokeWidth="1"
                  strokeDasharray="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative z-20 flex justify-between px-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-red-200 bg-white text-xl font-bold text-red-500 shadow-lg">
                  1
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-yellow-200 bg-white text-xl font-bold text-yellow-500 shadow-lg">
                  2
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-200 bg-white text-xl font-bold text-blue-500 shadow-lg">
                  3
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-green-200 bg-white text-xl font-bold text-green-500 shadow-lg">
                  4
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-orange-200 bg-white text-xl font-bold text-orange-500 shadow-lg">
                  5
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="space-y-4 lg:hidden">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50">
                    <Icon size={22} className="text-red-600" />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-red-500">
                      STEP {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 font-semibold text-[#071739]">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {step.short}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Trust Strip */}
        <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="flex items-start gap-4 border-b border-slate-100 p-5 transition-all duration-300 hover:bg-slate-50 xl:border-b-0 xl:border-r"
                >
                  {/* Icon */}

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.bg}`}
                  >
                    <Icon size={20} className={item.color} />
                  </div>

                  {/* Content */}

                  <div>
                    <h4 className="text-sm font-semibold text-[#071739]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* CTA SECTION */}

        <div className="mt-12 overflow-hidden rounded-[32px] border border-red-100 bg-gradient-to-r from-[#fff1f2] via-[#faf5ff] to-[#eef2ff] shadow-sm">
          <div className="grid items-center gap-6 px-6 py-5 lg:grid-cols-[1fr_auto] lg:px-8">
            {/* Left Side */}

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              {/* Icon */}

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                  <Rocket size={28} className="text-red-600" />
                </div>
              </div>

              {/* Content */}

              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-[#071739]">
                  Ready to Begin Your Publishing Journey?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Connect with our team for publication guidance, editorial
                  support and research assistance.
                </p>
              </div>
            </div>

            {/* Right Side */}

            <div className="flex flex-wrap items-center justify-center gap-3 lg:border-l lg:border-slate-200 lg:pl-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/20"
                >
                  <Rocket size={16} />
                  Submit Manuscript
                </motion.button>
              </Link>

              {/* <Link to="/contact">

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-3 text-sm font-medium text-red-600 transition-all duration-300 hover:bg-red-50"
        >
          <Phone size={16} />
          Contact Our Team
        </motion.button>

      </Link> */}
            </div>
          </div>

          {/* Decorative Dots */}

          <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="grid grid-cols-7 gap-2 opacity-30">
              {Array.from({ length: 42 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-red-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
