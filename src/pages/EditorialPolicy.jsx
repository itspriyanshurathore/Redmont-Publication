import { motion } from "framer-motion";

import {
  FileSearch,
  ClipboardCheck,
  Scale,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  FileText,
  Edit3,
  CalendarDays,
  Layers,
  PenTool,
  Globe,
} from "lucide-react";

const standards = [
  "Academic relevance",
  "Originality",
  "Clarity and structure",
  "Research methodology",
  "Ethical compliance",
  "Scholarly contribution",
];

const screening = [
  "Scope suitability",
  "Formatting compliance",
  "Language clarity",
  "Ethical considerations",
  "Similarity/plagiarism assessment",
];

const responsibilities = [
  "Submit original work",
  "Follow ethical research practices",
  "Provide accurate data and citations",
  "Cooperate during editorial revisions",
  "Disclose conflicts of interest where necessary",
];

const editorialRights = [
  "Accept or decline submissions",
  "Request revisions",
  "Edit content for clarity and formatting",
  "Remove unethical or inappropriate content",
];

const services = [
  {
    title: "Journal Publication Support",
    icon: FileText,
    bg: "bg-red-50 text-red-700",
  },
  {
    title: "Book Publishing",
    icon: BookOpen,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Thesis Editing",
    icon: Edit3,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Conference Proceedings",
    icon: CalendarDays,
    bg: "bg-blue-50 text-blue-700",
  },
  {
    title: "Patent Assistance",
    icon: ShieldCheck,
    bg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "DOI Services",
    icon: Layers,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Manuscript Formatting",
    icon: PenTool,
    bg: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    title: "Language Editing",
    icon: Globe,
    bg: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Research Consultancy",
    icon: CheckCircle2,
    bg: "bg-rose-50 text-rose-700",
  },
];

const EditorialPolicy = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] pt-24 pb-16">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>

      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-10 left-[20%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[55%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Hero */}
        <div className="mx-auto max-w-6xl text-center">
          {/* <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
            Editorial Policy
          </p> */}

          {/* <h1 className="mt-4 text-[42px] font-bold leading-[1.15] text-[#071739] lg:text-[56px]">
             
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
            Editorial{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
               Policy
              </span>
            </h1>

          <div className="mx-auto mt-8 max-w-5xl rounded-[28px] border border-red-100 bg-white p-6 shadow-lg">
            <div className="space-y-4 text-[15px] leading-7 text-justify text-[#475569]">
              <p>
                Redmont Publications follows a structured editorial process
                designed to ensure quality, accuracy, integrity, and
                professional scholarly communication.
              </p>

              <p>
                Our editorial workflow aims to maintain high academic standards
                while providing a transparent and ethical publication
                environment for researchers and authors.
              </p>
            </div>
          </div>
        </div>

        {/* Scope Section */}
        <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[28px] border border-red-100 bg-white p-6 shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-blue-700">
              <BookOpen size={30} className="text-white" />
            </div>

            <h2 className="mt-4 text-[30px] font-bold text-[#071739]">
              Scope and Editorial Standards
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-justify text-[#475569]">
              We welcome multidisciplinary academic and research contributions
              including original research papers, review articles, conference
              proceedings, book chapters, case studies, and scholarly
              manuscripts across various fields of study.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {standards.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-red-100 bg-[#fcfcfd] px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-blue-700">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>

                  <p className="text-[14px] font-medium text-[#071739]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-lg"
          >
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
                alt="Editorial"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071739]/95 via-[#071739]/40 to-transparent"></div>

              <div className="absolute bottom-0 p-8">
                <h3 className="text-[32px] font-bold leading-[1.2] text-white">
                  Editorial Standards
                </h3>

                <p className="mt-5 text-[14px] leading-8 text-white/90 text-justify">
                  All submissions are evaluated on the basis of academic
                  relevance, originality, clarity, methodology, ethical
                  compliance, and scholarly contribution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Screening + Peer Review */}
        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {/* Screening */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[28px] border border-red-100 bg-white p-6 shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-red-50">
              <FileSearch size={28} className="text-red-700" />
            </div>

            <h2 className="mt-4 text-[30px] font-bold text-[#071739]">
              Manuscript Screening
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-justify text-[#475569]">
              Submitted manuscripts may undergo preliminary editorial screening
              to evaluate:
            </p>

            <div className="mt-6 space-y-3">
              {screening.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-red-100 bg-[#fcfcfd] px-4 py-3"
                >
                  <p className="text-[14px] font-medium text-[#071739] leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Peer Review */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50">
              <ShieldCheck size={28} className="text-blue-700" />
            </div>

            <h2 className="mt-4 text-[30px] font-bold text-[#071739]">
              Peer Review Process
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-justify text-[#475569]">
              Where applicable, manuscripts may be reviewed by subject experts
              or editorial reviewers to assess academic quality, validity, and
              relevance. The review process aims to support constructive
              scholarly improvement and publication quality.
            </p>
          </motion.div>
        </div>

        {/* Responsibilities + Rights */}
        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {/* Responsibilities */}
          <div className="rounded-[28px] border border-red-100 bg-white p-6 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50">
              <ClipboardCheck size={28} className="text-blue-700" />
            </div>

            <h2 className="mt-4 text-[30px] font-bold text-[#071739]">
              Author Responsibilities
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-justify text-[#475569]">
              Authors are expected to:
            </p>

            <div className="mt-6 space-y-3">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-red-100 bg-[#fcfcfd] px-4 py-3"
                >
                  <p className="text-[14px] font-medium text-[#071739] leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Rights */}
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-red-50">
              <Scale size={28} className="text-red-700" />
            </div>

            <h2 className="mt-4 text-[30px] font-bold text-[#071739]">
              Editorial Rights
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-justify text-[#475569]">
              The editorial team reserves the right to:
            </p>

            <div className="mt-6 space-y-3">
              {editorialRights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-[#fcfcfd] px-4 py-3"
                >
                  <p className="text-[14px] font-medium text-[#071739] leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {/* Copyright */}
          <div className="rounded-[28px] border border-red-100 bg-white p-6 shadow-lg">
            <h2 className="text-[30px] font-bold text-[#071739]">
              Copyright and Usage
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-justify text-[#475569]">
              Authors retain responsibility for the originality and authenticity
              of submitted content. Copyright, licensing, and usage terms may
              vary depending on publication type and agreement terms.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-lg">
            <h2 className="text-[30px] font-bold text-[#071739]">
              Policy Updates
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-justify text-[#475569]">
              Redmont Publications reserves the right to update editorial and
              publication policies periodically in accordance with evolving
              academic standards and publishing requirements.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-14">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-red-600">
              Services
            </p>

            <h2 className="mt-3 text-[38px] font-bold text-[#071739]">
              Services
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                  }}
                  className="group rounded-[24px] border border-slate-200 bg-white p-4 shadow transition-all duration-500 hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg}`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-3 text-[18px] font-semibold leading-[1.3] text-[#071739]">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialPolicy;
