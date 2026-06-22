import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Layers,
  FileText,
  ClipboardCheck,
  Calendar,
  MessageSquare,
  Users,
} from "lucide-react";

const consultancyAreas = [
  {
    title: "Research Planning Guidance",
    icon: BookOpen,
    bg: "bg-sky-50 text-sky-700",
  },
  {
    title: "Literature Review Support",
    icon: Search,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Research Structuring",
    icon: Layers,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Publication Readiness Consultation",
    icon: FileText,
    bg: "bg-rose-50 text-rose-700",
  },
  {
    title: "Academic Documentation Support",
    icon: ClipboardCheck,
    bg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Research Workflow Guidance",
    icon: Calendar,
    bg: "bg-violet-50 text-violet-700",
  },
  {
    title: "Conference Publication Consultation",
    icon: MessageSquare,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Scholarly Communication Support",
    icon: Users,
    bg: "bg-cyan-50 text-cyan-700",
  },
];

const ResearchConsultancy = () => {
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
          {/* <h1 className="mt-4 text-[40px] font-bold text-[#071739]">
            
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
         Research{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Consultancy
              </span>
            </h1>
        </div>

        {/* Intro Card (compact, two-column) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-14 overflow-hidden rounded-[24px] border border-black/5 bg-white p-6 shadow-sm lg:p-8"
        >
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-[20px] font-semibold leading-[1.25] text-[#071739]">
                Research Consultancy
              </h2>

              <div className="mt-4 space-y-3">
                <p className="text-sm leading-[1.8] text-justify text-[#475569]">
                  Redmont Publications provides research consultancy and
                  academic support services for scholars, faculty members,
                  institutions, and professionals across multidisciplinary
                  domains.
                </p>

                <p className="text-sm leading-[1.8] text-justify text-[#475569]">
                  Our consultancy services are designed to support various
                  stages of academic and research development while promoting
                  ethical research practices and scholarly excellence.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="space-y-2">
                  {consultancyAreas.slice(0, 3).map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-slate-100 bg-gray-50 px-3 py-2 shadow-sm"
                    >
                      <div
                        className={`${c.bg} flex h-8 w-8 items-center justify-center rounded-md`}
                      >
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          {c.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Consultancy Areas */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Consultancy Areas
            </p>

            <h2 className="mt-4 text-[40px] font-bold text-[#071739]">
              Consultancy Areas
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {consultancyAreas.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ y: -2 }}
                className="group relative rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`${c.bg} flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl`}
                  >
                    <c.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold text-slate-900">
                      {c.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-16 overflow-hidden rounded-[24px] border border-black/5 bg-white px-6 py-8 shadow-sm lg:px-10"
        >
          <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Our Approach
            </p>

            <h2 className="mt-3 text-[20px] font-semibold text-[#071739]">
              Our Approach
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-sm leading-[1.8] text-justify text-[#475569]">
              We aim to create a professional research support ecosystem that
              encourages academic quality, responsible publishing practices,
              interdisciplinary collaboration, and global scholarly engagement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchConsultancy;
