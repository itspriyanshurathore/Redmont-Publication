import { motion } from "framer-motion";
import {
  FileText,
  PenTool,
  Search,
  Layers,
  Lightbulb,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

const assistanceAreas = [
  {
    title: "Patent Documentation Support",
    icon: FileText,
    bg: "bg-sky-50 text-sky-700",
  },
  {
    title: "Patent Drafting Assistance",
    icon: PenTool,
    bg: "bg-rose-50 text-rose-700",
  },
  {
    title: "Technical Description Structuring",
    icon: Layers,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Prior Art Research Guidance",
    icon: Search,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Innovation Documentation",
    icon: Lightbulb,
    bg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Research-Based Patent Consultation",
    icon: ClipboardCheck,
    bg: "bg-violet-50 text-violet-700",
  },
  {
    title: "Academic Innovation Support",
    icon: CheckCircle2,
    bg: "bg-slate-50 text-slate-700",
  },
];

const PatentAssistance = () => {
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
          {/* <h1 className="mt-4 text-2xl font-semibold leading-[1.2] text-[#071739] lg:text-3xl">
            
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
          Patent{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Assistance
              </span>
            </h1>
        </div>

        {/* Intro Section (two-column for text + visual) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-[24px] border border-black/5 bg-white p-6 shadow-sm lg:p-8"
        >
          {/* Glow */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-[20px] font-semibold leading-[1.25] text-[#071739]">
                Patent Assistance
              </h2>

              <div className="mt-6 space-y-4">
                <p className="text-sm leading-[1.8] text-justify text-[#475569]">
                  Redmont Publications offers professional guidance and support
                  services related to patent documentation and intellectual
                  property assistance for innovators, researchers, startups, and
                  academic professionals.
                </p>

                <p className="text-sm leading-[1.8] text-justify text-[#475569]">
                  We assist in preparing and organizing patent-related
                  documentation while supporting inventors in understanding
                  procedural and technical aspects associated with intellectual
                  property submissions.
                </p>
              </div>
            </div>

            {/* Visual column: small stacked cards to represent services */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="space-y-3">
                  {assistanceAreas.slice(0, 3).map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-slate-100 bg-gray-50 px-3 py-2 shadow-sm"
                    >
                      <div
                        className={`${a.bg} flex h-8 w-8 items-center justify-center rounded-md`}
                      >
                        <a.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          {a.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Assistance Areas */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Assistance Areas
            </p>

            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              Assistance Areas
            </h2>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {assistanceAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="group relative rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${item.bg}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {/* small supporting text can go here if needed */}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <motion.div
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
          }}
          viewport={{
            once: true,
          }}
          className="relative mt-20 overflow-hidden rounded-[34px] border border-black/5 bg-white p-8 shadow-sm lg:p-10"
        >
          {/* Glow */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Focus Areas
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.2] text-[#071739]">
              Focus Areas
            </h2>

            <p className="mt-8 text-[15px] leading-[2] text-justify text-[#475569]">
              Our services are designed to support innovation, research
              commercialization, and academic intellectual property development
              through structured professional assistance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatentAssistance;
