import { motion } from "framer-motion";

import {
  ShieldCheck,
  Globe2,
  Workflow,
  FileCheck2,
  Sparkles,
  BookOpenCheck,
} from "lucide-react";

const features = [
  {
    title: "Ethical Publishing Practices",
    description:
      "Transparent and responsible academic publishing standards focused on research integrity.",
    icon: ShieldCheck,
    color: "from-red-50 to-red-100",
    iconColor: "text-red-600",
  },

  {
    title: "Research-Oriented Editorial Support",
    description:
      "Professional editorial guidance designed to improve scholarly communication quality.",
    icon: FileCheck2,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-700",
  },

  {
    title: "Global Academic Standards",
    description:
      "Publication workflows aligned with international academic and editorial expectations.",
    icon: Globe2,
    color: "from-red-50 to-blue-50",
    iconColor: "text-[#071739]",
  },

  {
    title: "End-to-End Assistance",
    description:
      "Comprehensive support from manuscript preparation to publication and dissemination.",
    icon: Workflow,
    color: "from-red-50 to-red-100",
    iconColor: "text-red-600",
  },

  {
    title: "Professional Publishing Workflow",
    description:
      "Structured publication process ensuring quality, efficiency and transparency.",
    icon: Sparkles,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-700",
  },

  {
    title: "Multidisciplinary Expertise",
    description:
      "Supporting diverse academic disciplines through specialized publishing solutions.",
    icon: BookOpenCheck,
    color: "from-red-50 to-blue-50",
    iconColor: "text-[#071739]",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#fcfcfd] py-16">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-[30px] font-bold leading-[1.2] text-[#071739] lg:text-[38px]">
            Trusted Academic{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Publishing Support
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-[#475569]">
            Supporting researchers, institutions and scholars with professional
            publishing, editorial and academic consultancy services designed for
            quality and transparency.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const iconStyle = [
              "bg-red-50 text-red-600",
              "bg-amber-50 text-amber-600",
              "bg-sky-50 text-sky-600",
              "bg-violet-50 text-violet-600",
              "bg-emerald-50 text-emerald-600",
              "bg-fuchsia-50 text-fuchsia-600",
            ][index % 6];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${iconStyle} shadow-sm`}
                  >
                    <Icon size={30} className={feature.iconColor} />
                  </div>
                  {/* <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Scholar Focus
                  </span> */}
                </div>

                <h3 className="mt-4 text-base font-semibold tracking-tight text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 text-justify">
                  {feature.description}
                </p>

                {/* <div className="mt-5 flex items-center gap-2">
                  <span className="block h-0.5 w-10 rounded-full bg-gradient-to-r from-red-500 to-blue-600"></span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Research grade
                  </span>
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
