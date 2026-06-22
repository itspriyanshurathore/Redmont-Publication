import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Layers,
  ClipboardCheck,
  Calendar,
  FileCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Proceedings Compilation",
    icon: BookOpen,
    bg: "bg-sky-50 text-sky-700",
  },
  {
    title: "ISBN/DOI Assistance",
    icon: FileText,
    bg: "bg-rose-50 text-rose-700",
  },
  {
    title: "Formatting & Typesetting",
    icon: Layers,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Editorial Support",
    icon: ClipboardCheck,
    bg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Peer Review Coordination",
    icon: Calendar,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Abstract Book Preparation",
    icon: FileCheck,
    bg: "bg-violet-50 text-violet-700",
  },
  {
    title: "Conference Book Publishing",
    icon: ShieldCheck,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Digital Publication Support",
    icon: Sparkles,
    bg: "bg-cyan-50 text-cyan-700",
  },
];

const ConferenceProceedings = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
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
          

          {/* <h1 className="mt-3 text-3xl font-bold leading-[1.25] text-[#071739] lg:text-[36px]">
            
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
              Conference Proceedings{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Publishing
              </span>
            </h1>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <div>
              <h2 className="text-[20px] font-semibold leading-[1.3] text-[#071739]">
                Conference Proceedings Publishing
              </h2>

              <div className="mt-5 space-y-3 text-sm leading-[1.8] text-[#475569]">
                <p>
                  Redmont Publications supports the publication and management
                  of conference proceedings for academic conferences, seminars,
                  workshops, symposiums, and scholarly events.
                </p>

                <p>
                  We assist institutions, organizers, and academic bodies in
                  professionally compiling and publishing conference papers and
                  proceedings in a structured academic format.
                </p>
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
              <div className="flex flex-col gap-3">
                {services.slice(0, 3).map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
                  >
                    <div
                      className={`${service.bg} flex h-10 w-10 items-center justify-center rounded-2xl`}
                    >
                      <service.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium text-slate-900">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Services Include
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-[1.2] text-[#071739]">
              Services Include
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`${item.bg} flex h-11 w-11 items-center justify-center rounded-2xl`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[1.4] text-[#071739]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Objective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
        >
          {/* Glow */}
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Our Objective
            </p>

            <h2 className="mt-3 text-[20px] font-semibold leading-[1.25] text-[#071739]">
              Our Objective
            </h2>

            <p className="mt-5 text-sm leading-[1.8] text-justify text-[#475569]">
              To support academic conferences and scholarly events through
              organized, ethical, and professional publication solutions that
              enhance research visibility and academic dissemination.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConferenceProceedings;
