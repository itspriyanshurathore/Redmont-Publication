import { motion } from "framer-motion";
import {
  Link2,
  BookOpen,
  Globe2,
  BarChart3,
  Eye,
  ShieldCheck,
  FileText,
  Layers,
} from "lucide-react";

const doiBenefits = [
  {
    title: "Research Accessibility",
    icon: Link2,
    bg: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Citation Tracking",
    icon: BarChart3,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Digital Identification",
    icon: Globe2,
    bg: "bg-sky-50 text-sky-700",
  },
  { title: "Discoverability", icon: Eye, bg: "bg-emerald-50 text-emerald-700" },
  {
    title: "Scholarly Visibility",
    icon: ShieldCheck,
    bg: "bg-violet-50 text-violet-700",
  },
];

const doiSupport = [
  {
    title: "DOI Registration Assistance",
    icon: FileText,
    bg: "bg-slate-50 text-slate-700",
  },
  {
    title: "Metadata Preparation",
    icon: Layers,
    bg: "bg-rose-50 text-rose-700",
  },
  {
    title: "DOI Assignment Guidance",
    icon: BookOpen,
    bg: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Article Linking Support",
    icon: Link2,
    bg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Record Management",
    icon: ShieldCheck,
    bg: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Publication Metadata Structuring",
    icon: Globe2,
    bg: "bg-slate-50 text-slate-700",
  },
];

const DOIServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
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
          {/* <h1 className="mt-3 text-3xl font-bold leading-[1.2] text-[#071739] lg:text-[36px]">
             
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
             DOI{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                 Services
              </span>
            </h1>
        </div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
        >
          {/* Glow */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <div>
              <h2 className="text-[18px] font-semibold leading-[1.3] text-[#071739]">
                DOI Services
              </h2>

              <p className="mt-4 text-sm leading-[1.8] text-[#475569]">
                Redmont Publications provides DOI support for academic
                publications, conference papers, books, chapters, and scholarly
                content.
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5">
              {doiBenefits.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm text-slate-900 shadow-sm"
                >
                  <div
                    className={`${item.bg} flex h-10 w-10 items-center justify-center rounded-2xl`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              DOIs Help Improve
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-[1.2] text-[#071739]">
              DOI Benefits
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {doiBenefits.map((item, index) => (
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

        {/* Support Includes */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              DOI Support Includes
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-[1.2] text-[#071739]">
              DOI Support Includes
            </h2>
          </div>

          {/* Support Grid */}
          <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {doiSupport.map((item, index) => (
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

        {/* Importance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
        >
          {/* Glow */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Importance of DOI
            </p>

            <h2 className="mt-3 text-[20px] font-semibold leading-[1.25] text-[#071739]">
              Importance of DOI
            </h2>

            <p className="mt-5 text-sm leading-[1.8] text-justify text-[#475569]">
              Digital Object Identifiers play an important role in modern
              scholarly communication by ensuring persistent identification and
              accessibility of academic content across digital platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DOIServices;
