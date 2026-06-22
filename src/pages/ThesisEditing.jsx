import { motion } from "framer-motion";
import {
  FileText,
  Type,
  AlignLeft,
  PenTool,
  BookOpen,
  ClipboardCheck,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const editingFocus = [
  {
    title: "Language Clarity",
    description:
      "Enhancing readability, sentence structure, and overall communication of research findings.",
    icon: Type,
    bg: "bg-sky-50 text-sky-700",
  },
  {
    title: "Academic Structure",
    description:
      "Ensuring logical organization, chapter flow, and consistency throughout the document.",
    icon: AlignLeft,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Grammar and Readability",
    description:
      "Correcting grammatical errors, punctuation issues, and language inconsistencies.",
    icon: PenTool,
    bg: "bg-lime-50 text-lime-700",
  },
  {
    title: "Referencing Accuracy",
    description:
      "Reviewing citations and references for consistency and compliance with required citation styles.",
    icon: ClipboardCheck,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Formatting Consistency",
    description:
      "Aligning documents with university, institutional, or publication formatting requirements.",
    icon: FileText,
    bg: "bg-violet-50 text-violet-700",
  },
  {
    title: "Scholarly Presentation",
    description:
      "Improving the professional appearance and academic quality of the manuscript.",
    icon: BookOpen,
    bg: "bg-rose-50 text-rose-700",
  },
];

const editingSupport = [
  {
    title: "Grammar and Language Editing",
    icon: PenTool,
    bg: "bg-sky-50 text-sky-700",
  },
  {
    title: "Academic Proofreading",
    icon: CheckCircle2,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Formatting Review and Correction",
    icon: AlignLeft,
    bg: "bg-violet-50 text-violet-700",
  },
  {
    title: "Citation and Reference Verification",
    icon: ClipboardCheck,
    bg: "bg-lime-50 text-lime-700",
  },
  {
    title: "Chapter Structure Review",
    icon: BookOpen,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Table and Figure Formatting",
    icon: FileText,
    bg: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Similarity Assessment and Originality Guidance",
    icon: ShieldCheck,
    bg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Research Presentation Enhancement",
    icon: Sparkles,
    bg: "bg-pink-50 text-pink-700",
  },
  {
    title: "Consistency and Style Review",
    icon: CheckCircle2,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Thesis Submission Readiness Assessment",
    icon: GraduationCap,
    bg: "bg-amber-50 text-amber-700",
  },
];

const beneficiaries = [
  "Master's Students",
  "PhD Scholars",
  "Research Fellows",
  "University Faculty Members",
  "Independent Researchers",
  "Academic Professionals",
];

const ThesisEditing = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Background Glow */}
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
        Thesis{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
            Editing Services
              </span>
            </h1>
        </div>

        {/* Intro Section */}
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
          className="relative mt-16 overflow-hidden rounded-[34px] border border-black/5 bg-white p-8 shadow-sm lg:p-10"
        >
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative grid gap-5 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-[34px] font-bold leading-[1.1] text-[#071739]">
                Thesis Editing Services
              </h2>

              <div className="mt-8 space-y-2 text-[15px] leading-8 text-[#475569]">
                <p className="text-justify">
                  Redmont Publications provides professional thesis editing and
                  academic refinement services for postgraduate students,
                  doctoral researchers, academicians, and research
                  professionals.
                </p>

                <p className="text-justify">
                  Our services are designed to enhance the clarity, structure,
                  accuracy, and overall presentation of theses, dissertations,
                  research reports, and academic manuscripts while ensuring
                  compliance with institutional and academic standards.
                </p>

                <p className="text-justify">
                  We assist researchers in preparing well-organized,
                  publication-ready academic documents through detailed language
                  review, formatting support, citation verification, and
                  scholarly presentation enhancement. Our objective is to help
                  authors communicate their research effectively while
                  maintaining academic integrity and professional quality.
                </p>
              </div>
            </div>

            <div className="relative mx-auto max-w-md">
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="absolute -left-8 top-4 h-24 w-24 rounded-full bg-sky-100 blur-3xl"></div>
                <div className="absolute -right-8 bottom-6 h-24 w-24 rounded-full bg-rose-100 blur-3xl"></div>

                <div className="relative flex flex-col gap-5">
                  <div className="rounded-[26px] bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Document review
                        </p>
                        <p className="text-xs text-slate-500">
                          Focused on structure, clarity and style.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[26px] bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                          <Type className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            Language clarity
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[26px] bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100 text-pink-700">
                          <PenTool className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            Precision editing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-700">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Professional presentation
                        </p>
                        <p className="text-xs text-slate-500">
                          Clean academic formatting and polished output.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Focus Section */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Our Thesis Editing Process Focuses On Improving
            </p>

            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              Editing Focus Areas
            </h2>
          </div>

          {/* Focus Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {editingFocus.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-3xl ${item.bg}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#64748b]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Who Can Benefit */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Who Can Benefit?
            </p>

            <h2 className="mt-4 text-[40px] font-bold text-[#071739]">
              Who Can Benefit?
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {beneficiaries.map((item) => (
              <div
                key={item}
                className="rounded-full border border-red-100 bg-white px-5 py-3 text-sm font-medium text-[#071739] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Editing Support */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Editing Support Includes
            </p>

            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              Editing Support Includes
            </h2>
          </div>

          {/* Support Layout */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {editingSupport.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-3xl ${item.bg}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Our Commitment */}
          <div className="mt-20 rounded-[30px] border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Our Commitment
            </p>

            <h2 className="mt-4 text-[34px] font-bold text-[#071739]">
              Our Commitment
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-justify text-[#475569]">
              Redmont Publications is committed to providing professional,
              confidential, and ethical thesis editing support. We help
              researchers improve the quality and presentation of their academic
              work while preserving the originality, authorship, and
              intellectual contribution of the researcher.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-[24px] border border-red-100 bg-red-50 p-6">
            <h3 className="text-lg font-semibold text-[#071739]">Disclaimer</h3>

            <p className="mt-3 text-[14px] leading-7 text-justify text-[#475569]">
              Thesis editing services are intended to improve language,
              structure, formatting, and presentation. Redmont Publications does
              not alter research findings, guarantee academic approval, or
              provide thesis writing services. Authors remain fully responsible
              for the originality, accuracy, and integrity of their work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisEditing;
