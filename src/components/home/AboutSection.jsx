import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Users,
  Globe,
  Clock3,
  Handshake,
  Award,
  Compass,
  FileCheck,
} from "lucide-react";
const bottomHighlights = [
  {
    title: "Commitment to Quality",
    desc: "Delivering reliable and high-quality publishing support.",
    icon: ShieldCheck,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    title: "Experienced Team",
    desc: "Academic and publishing professionals focused on excellence.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Wide Subject Coverage",
    desc: "Supporting multidisciplinary research and scholarly communities.",
    icon: Globe,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Timely & Efficient Services",
    desc: "Structured workflows designed for smooth project execution.",
    icon: Clock3,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Long-Term Partnerships",
    desc: "Building lasting relationships with authors and institutions.",
    icon: Handshake,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Research Excellence",
    desc: "Promoting impactful and credible scholarly communication.",
    icon: Award,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];
const AboutSnapshot = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-red-100/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-100/30 blur-3xl"></div>

      {/* Background Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-10 left-[22%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[62%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-6 px-6 lg:grid-cols-2">
        {/* LEFT IMAGE */}
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
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="relative flex h-full w-full"
        >
          {/* Main Image */}
          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative overflow-hidden rounded-[20px] border border-red-100 bg-white p-2 shadow-xl h-full lg:aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Academic Publication"
              className="w-full h-full rounded-[16px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071739]/15 via-transparent to-red-500/10"></div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="hidden sm:flex absolute -bottom-5 -right-4 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <Users size={20} className="text-red-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071739]">1000+</h3>
                <p className="text-xs text-slate-500">Authors Worked With</p>
                <p className="text-[11px] text-slate-400">
                  Across different disciplines
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
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
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-full flex flex-col justify-center h-full px-2 lg:px-6"
        >
          {/* Label */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            ABOUT REDMONT PUBLICATIONS
          </p>

          {/* Heading */}
          <h2 className="mt-3 text-3xl font-bold leading-[1.12] text-[#071739] lg:text-[40px]">
            Empowering Scholars{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Elevating
            </span>{" "}
            Research Impact
          </h2>
          {/* <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-red-600 to-red-400"></div> */}
          {/* Description */}
          <p className="mt-4 text-sm leading-7 text-[#475569] text-justify">
            Redmont Publications is committed to supporting researchers,
            authors, academic institutions and scholarly communities through
            ethical publishing practices and professional research support. We
            focus on improving the quality, visibility and accessibility of
            scholarly work while maintaining transparency, integrity and
            academic excellence throughout the publication journey.
          </p>

          {/* FEATURES */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {/* Research Quality */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-sm transition duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <FileCheck size={20} className="text-red-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#071739]">
                  Research Quality
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#64748b]">
                  We help researchers strengthen the quality, structure and
                  presentation of their scholarly work.
                </p>
              </div>
            </motion.div>

            {/* Publication Guidance */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-sm transition duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <Compass size={20} className="text-blue-700" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#071739]">
                  Publication Guidance
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#64748b]">
                  Clear guidance and support throughout the academic publication
                  process.
                </p>
              </div>
            </motion.div>

            {/* Ethical Standards */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-sm transition duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-50 to-blue-50">
                <ShieldCheck size={20} className="text-[#071739]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#071739]">
                  Ethical Standards
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#64748b]">
                  Commitment to publication ethics, transparency and responsible
                  scholarly communication.
                </p>
              </div>
            </motion.div>

            {/* Author Support */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-sm transition duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <Users size={20} className="text-blue-700" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#071739]">
                  Author Support
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#64748b]">
                  Dedicated assistance for authors at every stage of their
                  publishing journey.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-500/10"
              >
                Read More About Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="mx-auto mt-6 w-full max-w-8xl px-6 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 sm:divide-x md:grid-cols-3 xl:grid-cols-6">
            {bottomHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-start gap-3 p-4 hover:bg-slate-50"
                >
                  <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${item.bg}`}
                  >
                    <Icon size={16} className={item.color} />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#071739]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
