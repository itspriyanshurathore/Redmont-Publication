import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import NewJournal from "@/data/NewJournal";

import {
  BookOpen,
  Globe,
  ShieldCheck,
  Sparkles,
  CalendarDays,
} from "lucide-react";

import { HeroHighlight } from "../ui/hero-highlight";

/*
|--------------------------------------------------------------------------
| FUTURE READY JOURNALS DATA
|--------------------------------------------------------------------------
| Later you can move this into:
| src/data/newJournalsDetails.js
|--------------------------------------------------------------------------
*/

// const journals = [
//   {
//     title:
//       "Redmont Journal of Management Studies",

//     focus:
//       "Management, Business, Economics & Related Fields",

//     status:
//       "Coming Soon",
//   },

//   {
//     title:
//       "Redmont Journal of Multidisciplinary Research",

//     focus:
//       "Multidisciplinary Research Across All Fields",

//     status:
//       "Coming Soon",
//   },
// ];

const JournalsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-red-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-100/30 blur-3xl" />

      {/* Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-10 left-[18%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]" />
        <div className="absolute -top-10 left-[52%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]" />
        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.45fr]">
        {/* LEFT CONTENT */}
        <div className="max-w-[380px] sm:max-w-full">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Upcoming Journals
          </p>

          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] text-[#071739] sm:text-[30px]">
            Launching{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Soon
            </span>
          </h2>

          <p className="mt-3 text-[14px] leading-7 text-[#475569] text-justify">
            We are launching high-quality peer-reviewed journals focused on
            multidisciplinary research, management, editorial excellence and
            open-access publishing goals.
          </p>

          {/* Mini Features */}
          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50">
                <Globe size={17} className="text-red-600" />
              </div>

              <p className="text-sm font-medium text-[#071739]">
                Research Domains
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck size={17} className="text-blue-700" />
              </div>

              <p className="text-sm font-medium text-[#071739]">
                Editorial Vision
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-blue-50">
                <Sparkles size={17} className="text-[#071739]" />
              </div>

              <p className="text-sm font-medium text-[#071739]">
                Open Access Goals
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link to="journals/upcoming">
              <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 px-6 py-2.5 text-sm font-medium text-white shadow-xl shadow-red-500/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/10"></div>
                <span className="relative">Explore Upcoming Journals</span>
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT JOURNAL CARDS */}
        <div className="grid gap-4 md:grid-cols-2">
          {NewJournal.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <HeroHighlight
                containerClassName="h-full rounded-[24px] border border-red-100 bg-white shadow-lg"
                className="h-full w-full"
              >
                <div className="relative h-full rounded-[24px] p-5 sm:p-5">
                  {/* Top Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1.5">
                    <BookOpen size={14} className="text-red-600" />
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-red-600">
                      Launching Soon
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold leading-8 text-[#071739]">
                    {item.title}
                  </h3>

                  {/* Focus */}
                  <p className="mt-4 text-sm leading-6 text-[#475569]">
                    <span className="font-semibold text-[#071739]">Focus:</span>{" "}
                    {item.focus}
                  </p>

                  {/* Bottom */}
                  <div className="mt-4 flex items-center gap-2">
                    <CalendarDays size={16} className="text-blue-700" />
                    <p className="text-sm font-medium text-[#071739]">
                      {item.status}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-red-500 to-blue-600"></div>
                </div>
              </HeroHighlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalsSection;
