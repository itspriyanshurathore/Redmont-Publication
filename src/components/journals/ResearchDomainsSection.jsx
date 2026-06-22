import { motion } from "framer-motion";

import {
  Briefcase,
  Cpu,
  HeartPulse,
  Users,
  Laptop,
  Globe2,
  BookOpen,
  Layers,
} from "lucide-react";

const domains = [
  {
    title: "Management",
    icon: Briefcase,
    color: "from-red-50 to-red-100",
    iconColor: "text-red-600",
  },

  {
    title: "Engineering",
    icon: Cpu,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-700",
  },

  {
    title: "Medical Sciences",
    icon: HeartPulse,
    color: "from-rose-50 to-slate-50",
    iconColor: "text-rose-700",
  },

  {
    title: "Social Sciences",
    icon: Users,
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-700",
  },

  {
    title: "Computer Science",
    icon: Laptop,
    color: "from-sky-50 to-slate-50",
    iconColor: "text-sky-700",
  },

  {
    title: "Multidisciplinary Research",
    icon: Globe2,
    color: "from-violet-50 to-indigo-100",
    iconColor: "text-violet-700",
  },

  {
    title: "Education",
    icon: BookOpen,
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-700",
  },

  {
    title: "Environmental Studies",
    icon: Layers,
    color: "from-lime-50 to-green-100",
    iconColor: "text-emerald-900",
  },
];

const ResearchDomainsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl"></div>

      {/* Background Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-10 left-[18%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[52%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            International Research Domains
          </p>

          <h2 className="mt-3 text-[30px] font-bold leading-[1.2] text-[#071739] lg:text-[38px]">
            Supporting Global{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Academic Disciplines
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-[#475569]">
            Supporting multidisciplinary academic and scholarly research across
            global publication domains and research communities.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {domains.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group flex min-h-[160px] flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition duration-300 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color}`}
                >
                  <Icon size={20} className={item.iconColor} />
                </div>
                <h3 className="text-base font-semibold leading-6 text-slate-900">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchDomainsSection;
