import { motion } from "framer-motion";

import {
  BookOpen,
  Library,
  GraduationCap,
  FileText,
  Building2,
  BookMarked,
  Palette,
  PenTool,
  FileCheck,
  Smartphone,
} from "lucide-react";

const publicationTypes = [
  {
    title: "Academic Books",
    icon: BookOpen,
  },

  {
    title: "Edited Volumes",
    icon: Library,
  },

  {
    title: "Research Books",
    icon: GraduationCap,
  },

  {
    title: "Conference Books",
    icon: FileText,
  },

  {
    title: "Thesis-to-book Conversion",
    icon: BookMarked,
  },

  {
    title: "Educational Publications",
    icon: PenTool,
  },

  {
    title: "Institutional Publications",
    icon: Building2,
  },
];

const publishingServices = [
  {
    title: "ISBN Assistance",
    icon: FileCheck,
  },

  {
    title: "Cover Design",
    icon: Palette,
  },

  {
    title: "Interior Formatting",
    icon: BookOpen,
  },

  {
    title: "Editing & Proofreading",
    icon: PenTool,
  },

  {
    title: "eBook Preparation",
    icon: Smartphone,
  },

  {
    title: "Print-Ready File Preparation",
    icon: FileText,
  },

  {
    title: "Academic Book Publishing",
    icon: GraduationCap,
  },

  {
    title: "Conference Volume Publishing",
    icon: Library,
  },
];

const BookPublishing = () => {
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
          {/* <h1 className="mt-3 text-2xl font-semibold leading-[1.2] text-[#071739] lg:text-[40px]">
            
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
               Book{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Publishing
              </span>
            </h1>
        </div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid gap-4 lg:grid-cols-[0.45fr_0.55fr]">
            {/* Left Image */}
            <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-[320px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1725408045441-caab8be43801?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Book Publishing"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-red-900/35 via-transparent to-blue-900/45"></div>
            </div>

            {/* Right Content */}
            <div className="relative overflow-hidden p-5 sm:p-7 lg:p-8">
              <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-red-100/40 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-blue-100/40 blur-3xl"></div>

              <div className="relative space-y-3">
                <h2 className="text-[18px] font-semibold leading-[1.3] text-[#071739]">
                  Book Publishing
                </h2>

                <p className="text-sm leading-[1.8] text-[#475569]">
                  Redmont Publications offers comprehensive academic and
                  professional book publishing services for authors,
                  researchers, educators, institutions, and professionals
                  seeking high-quality publishing solutions.
                </p>

                <p className="text-sm leading-[1.8] text-[#475569]">
                  Our publishing workflow combines editorial support,
                  professional design, formatting, ISBN assistance, and
                  publication management to ensure a polished and professional
                  final publication.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publication Types */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              We Support The Publication Of
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-[1.2] text-[#071739]">
              Publication Types
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {publicationTypes.map((item, index) => {
              const Icon = item.icon;

              return (
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-blue-700 text-white">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-[15px] font-semibold leading-[1.4] text-[#071739]">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Publishing Services */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Publishing Services Include
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-[1.2] text-[#071739]">
              Publishing Services Include
            </h2>
          </div>

          {/* Services Grid */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {publishingServices.map((item, index) => {
              const Icon = item.icon;

              return (
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-blue-700 text-white">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-[15px] font-semibold leading-[1.4] text-[#071739]">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Goal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr]">
            {/* Left */}
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              {/* Glow */}
              <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-red-100/40 blur-3xl"></div>

              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl"></div>

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
                  Our Goal
                </p>

                <h2 className="mt-3 text-[20px] font-semibold leading-[1.25] text-[#071739]">
                  Our Goal
                </h2>

                <p className="mt-4 text-sm leading-[1.8] text-justify text-[#475569]">
                  We aim to provide a professional publishing experience that
                  supports authors in transforming their ideas, research, and
                  academic contributions into high-quality published works.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-[320px]">
              <img
                src="https://plus.unsplash.com/premium_vector-1682298733507-e1988018a5e1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Goal"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-red-900/35 via-transparent to-blue-900/45"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookPublishing;
