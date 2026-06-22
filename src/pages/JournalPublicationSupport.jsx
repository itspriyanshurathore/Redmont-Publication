import { motion } from "framer-motion";

import {
  FileCheck,
  Globe,
  BookOpen,
  Languages,
  ShieldCheck,
  FileText,
  MessageSquareMore,
  Database,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const supportItems = [
  {
    title: "Manuscript Evaluation and Readiness Assessment",
    icon: FileCheck,
    bg: "bg-red-50 text-red-700",
  },
  {
    title: "Journal Identification and Suitability Assessment",
    icon: Globe,
    bg: "bg-sky-50 text-sky-700",
  },
  {
    title: "Formatting and Reference Style Compliance",
    icon: BookOpen,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Language and Grammar Improvement",
    icon: Languages,
    bg: "bg-violet-50 text-violet-700",
  },
  {
    title: "Manuscript Originality and Similarity Guidance",
    icon: ShieldCheck,
    bg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Submission Documentation Assistance",
    icon: FileText,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Reviewer Comment Response Assistance",
    icon: MessageSquareMore,
    bg: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    title: "Publication Workflow Consultation",
    icon: GraduationCap,
    bg: "bg-lime-50 text-lime-700",
  },
  {
    title: "Publication Metadata and DOI Support",
    icon: Database,
    bg: "bg-cyan-50 text-cyan-700",
  },
];

const researchAreas = [
  {
    title: "Our Support Includes",
    icon: FileText,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Manuscript Evaluation and Readiness Assessment",
    icon: FileCheck,
    bg: "bg-red-50 text-red-700",
  },
  {
    title: "Journal Identification and Suitability Assessment",
    icon: Globe,
    bg: "bg-sky-50 text-sky-700",
  },
  {
    title: "Formatting and Reference Style Compliance",
    icon: BookOpen,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Language and Grammar Improvement",
    icon: Languages,
    bg: "bg-violet-50 text-violet-700",
  },
  {
    title: "Manuscript Originality and Similarity Guidance",
    icon: ShieldCheck,
    bg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Submission Documentation Assistance",
    icon: FileText,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Reviewer Comment Response Assistance",
    icon: MessageSquareMore,
    bg: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    title: "Publication Workflow Consultation",
    icon: GraduationCap,
    bg: "bg-lime-50 text-lime-700",
  },
  {
    title: "Publication Metadata and DOI Support",
    icon: Database,
    bg: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Research Areas Supported",
    icon: CheckCircle2,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Management & Commerce",
    icon: Globe,
    bg: "bg-amber-50 text-amber-700",
  },
];

const JournalPublicationSupport = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-30">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>

      {/* Background Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-10 left-[18%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[52%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          {/* <h1 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739] lg:text-[52px]">
             
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
           Journal{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Publication Support
              </span>
            </h1>
        </div>

        {/* Intro */}
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
          className="mt-14 overflow-hidden rounded-[34px] border border-black/5 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-[0.38fr_1fr]">
            {/* Left Image */}
            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1662568769733-e88566751dfd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Journal Publication"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/45 via-transparent to-blue-900/55"></div>
            </div>

            {/* Right Content */}
            <div className="relative overflow-hidden p-8 lg:p-4">
              {/* Glow */}
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

              <div className="relative space-y-5">
                <h2 className="text-[25px] font-bold leading-[1.2] text-red-800">
                  Journal Publication Support
                </h2>

                <p className="text-[15px] leading-[2] text-justify text-[#475569]">
                  Redmont Publications provides comprehensive journal
                  publication support services for researchers, academicians,
                  faculty members, scholars, research professionals, and
                  institutions seeking to publish high-quality scholarly work in
                  reputable academic journals.
                </p>

                <p className="text-[15px] leading-[2] text-justify text-[#475569]">
                  Our services are designed to assist authors in preparing
                  publication-ready manuscripts through professional guidance,
                  technical support, formatting assistance, documentation
                  review, and publication workflow consultation. We focus on
                  improving manuscript presentation, compliance with journal
                  requirements, and overall publication readiness while
                  maintaining the highest standards of academic integrity and
                  ethical publishing.
                </p>

                <p className="text-[15px] leading-[2] text-justify text-[#475569]">
                  Whether you are preparing your first research paper or
                  managing multiple scholarly submissions, our team supports
                  authors throughout various stages of the publication process
                  to help ensure a smooth and professional publication
                  experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Includes */}
        <div className="mt-20">
          <div className="text-center">
            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              Our Support Includes
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {supportItems.map((item, index) => {
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
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-md"
                >
                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`${item.bg} flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm`}
                    >
                      <Icon size={22} className="" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-[20px] font-semibold leading-[1.35] text-[#071739]">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Research Areas Supported
            </p>

            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              Research Areas Supported
            </h2>
          </div>

          {/* Areas */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((item, index) => {
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
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-md"
                >
                  <div className="relative">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.bg} shadow-sm`}
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 text-[20px] font-semibold leading-[1.35] text-[#071739]">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Our Commitment */}
          <div className="mt-20 rounded-[34px] border border-black/5 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Our Commitment
            </p>

            <h2 className="mt-4 text-[36px] font-bold text-[#071739]">
              Our Commitment
            </h2>

            <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
              Redmont Publications is committed to supporting researchers
              through a professional, transparent, and ethical publication
              support process. Our goal is to help authors enhance the quality,
              presentation, and publication readiness of their scholarly work
              while respecting academic standards, research integrity, and
              responsible publishing practices.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-[28px] border border-red-100 bg-red-50 p-6">
            <h3 className="text-lg font-semibold text-[#071739]">Disclaimer</h3>

            <p className="mt-3 text-[14px] leading-7 text-justify text-[#475569]">
              Redmont Publications provides publication support and consultancy
              services. Editorial decisions, peer-review outcomes, manuscript
              acceptance, and indexing decisions remain solely under the
              authority of the respective journals, publishers, and indexing
              agencies. Publication support services do not guarantee manuscript
              acceptance or publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalPublicationSupport;
