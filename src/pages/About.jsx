import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  BookOpen,
  Users,
  Globe,
  ShieldCheck,
  Award,
  BadgeCheck,
} from "lucide-react";

// const floatingBooks = [
//   {
//     id: 1,
//     image:
//       "https://plus.unsplash.com/premium_vector-1749471913339-589bf7b08b58?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rotate: "-6deg",
//   },

//   {
//     id: 2,
//     image:
//       "https://plus.unsplash.com/premium_vector-1732704035816-d123bef18b57?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rotate: "8deg",
//   },

//   {
//     id: 3,
//     image:
//       "https://plus.unsplash.com/premium_vector-1718307940466-f05782563d3d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rotate: "-10deg",
//   },

//   {
//     id: 4,
//     image:
//       "https://plus.unsplash.com/premium_vector-1736958202555-066746e464a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rotate: "7deg",
//   },
// ];

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-4 pt-24 pb-12 font-sans sm:px-6 sm:pt-28 sm:pb-14">
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-red-100/50 blur-3xl"></div>

      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-red-50/70 blur-3xl"></div>

      {/* Ocean Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[260px] w-[200%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fee2e2"
            fillOpacity="0.7"
            d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,224C672,235,768,213,864,192C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"
          ></path>

          <path
            fill="#fecaca"
            fillOpacity="0.6"
            d="M0,256L60,229.3C120,203,240,149,360,149.3C480,149,600,203,720,224C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Hero */}
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div className="lg:pr-8">
            <p className="text-sm uppercase tracking-[0.25em] text-red-700">
              About Us
            </p>

            {/* <h1 className="mt-4 text-4xl font-bold leading-tight text-[#071739]">
              About Redmont Publications
            </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
              About{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Redmont Publications
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#475569] text-justify">
              Redmont Publications is an emerging academic publishing and
              research support organization committed to advancing scholarly
              communication, academic excellence, and global research
              accessibility. We work with researchers, faculty members,
              scholars, institutions, and professionals across multidisciplinary
              domains to support the development, refinement, publication, and
              dissemination of quality academic work.
            </p>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 max-w-xl space-y-4 text-[15px] leading-7 text-[#475569] text-justify">
                    <p>
                      Our organization was established with the vision of
                      creating a professional and ethical research ecosystem
                      that bridges the gap between researchers and high-quality
                      scholarly publishing standards. From manuscript
                      preparation and editorial assistance to book publishing,
                      conference proceedings, DOI services, and academic
                      consultancy, we provide comprehensive support tailored to
                      the evolving needs of the academic community.
                    </p>

                    <p>
                      At Redmont Publications, we believe that research has the
                      power to create knowledge, innovation, and societal
                      impact. Our objective is not only to assist researchers in
                      publishing their work but also to promote research
                      integrity, academic transparency, and professional
                      publishing practices aligned with international standards.
                    </p>

                    <p>
                      We continuously strive to build a credible and
                      researcher-focused platform that supports intellectual
                      growth, interdisciplinary collaboration, and scholarly
                      advancement on both national and international levels.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setShowMore(!showMore)}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="group mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/10"
            >
              {showMore ? "Read Less" : "Read More"}

              <motion.span
                animate={{
                  rotate: showMore ? 180 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                ↓
              </motion.span>
            </motion.button>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <h3 className="text-2xl font-bold text-red-700">250+</h3>

                <p className="mt-1 text-sm text-[#475569]">Published Books</p>
              </div>

              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <h3 className="text-2xl font-bold text-red-700">120+</h3>

                <p className="mt-1 text-sm text-[#475569]">Research Journals</p>
              </div>

              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <h3 className="text-2xl font-bold text-red-700">40K+</h3>

                <p className="mt-1 text-sm text-[#475569]">Global Readers</p>
              </div>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[340px] lg:max-w-[360px]">
            <div className="relative overflow-hidden rounded-[32px] border border-red-100  p-3 shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
              <div className="relative h-[330px] w-full sm:h-[350px] lg:h-[360px]">
                <div className="absolute left-0 top-0 z-20 h-[110px] w-[110px] overflow-hidden rounded-[26px] border border-white shadow-lg sm:h-[120px] sm:w-[120px]">
                  <img
                    src="https://plus.unsplash.com/premium_vector-1749471913339-589bf7b08b58?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Library shelves"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute left-1/2 top-1/2 z-30 h-[280px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border border-slate-200  shadow-2xl sm:h-[190px] sm:w-[190px]">
                  <img
                    src="https://plus.unsplash.com/premium_vector-1732704035816-d123bef18b57?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Academic illustration"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute right-0 bottom-0 z-20 h-[215px] w-[270px] overflow-hidden rounded-[26px] border border-white shadow-lg sm:h-[125px] sm:w-[125px]">
                  <img
                    src="https://plus.unsplash.com/premium_vector-1718307940466-f05782563d3d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Books stack"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-20">
          {/* Heading */}
          <div className="text-center">
           

            {/* <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#475569]">
              Driven by ethical scholarly communication, global research
              accessibility and professional academic publishing support.
            </p> */}
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {/* Vision Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-red-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-red-100/40"
            >
              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-100/40 blur-3xl transition-all duration-500 group-hover:bg-red-200/50"></div>

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/20">
                <Globe size={32} className="text-white" />
              </div>

              {/* Heading */}
              <h3 className="relative mt-6 text-[32px] font-bold text-[#071739]">
                Our Vision
              </h3>

              {/* Divider */}
              <div className="mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-700"></div>

              {/* Content */}
              <p className="relative mt-5 text-[15px] leading-[2] text-justify text-[#475569]">
                To become a globally recognized academic publishing and research
                support organization dedicated to promoting ethical scholarly
                communication, research excellence, innovation and accessible
                knowledge dissemination across multidisciplinary fields.
              </p>

              {/* Bottom Glow */}
              <div className="absolute -bottom-16 left-10 h-32 w-32 rounded-full bg-blue-100/30 blur-3xl"></div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-blue-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/40"
            >
              {/* Glow */}
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl transition-all duration-500 group-hover:bg-blue-200/50"></div>

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-[#071739] shadow-lg shadow-blue-500/20">
                <ShieldCheck size={32} className="text-white" />
              </div>

              {/* Heading */}
              <h3 className="relative mt-6 text-[32px] font-bold text-[#071739]">
                Our Mission
              </h3>

              {/* Divider */}
              <div className="mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-600"></div>

              {/* List */}
              <div className="relative mt-5 space-y-3">
                {[
                  "Support researchers, scholars and institutions through professional publishing services.",

                  "Promote ethical and transparent academic publishing practices.",

                  "Facilitate high-quality research dissemination on national and international platforms.",

                  "Provide publication support, DOI services and academic consultancy.",

                  "Encourage multidisciplinary research, innovation and collaboration.",

                  "Build a sustainable and credible scholarly publishing ecosystem.",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="flex items-start gap-2"
                  >
                    {/* Dot */}
                    <div className="mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>

                    {/* Text */}
                    <p className="text-[14px] leading-7 text-[#475569]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-16 right-10 h-32 w-32 rounded-full bg-red-100/30 blur-3xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#071739]">
              Why Scholars Trust Us
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#475569]">
              We maintain professional publication standards, trusted
              peer-review systems and global accessibility for researchers.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {/* Card */}
            <div className="rounded-3xl border border-red-100 bg-white p-4 shadow-sm transition hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                <ShieldCheck size={24} className="text-red-700" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#071739]">
                Peer Reviewed
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#475569]">
                Every publication passes professional scholarly review
                standards.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-red-100 bg-white p-4 shadow-sm transition hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                <Globe size={24} className="text-red-700" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#071739]">
                Global Access
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#475569]">
                Publications are accessible worldwide for institutions and
                readers.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-red-100 bg-white p-4 shadow-sm transition hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                <Award size={24} className="text-red-700" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#071739]">
                Quality Standards
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#475569]">
                We maintain high academic and publication quality assurance.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-red-100 bg-white p-4 shadow-sm transition hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                <BadgeCheck size={24} className="text-red-700" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#071739]">
                Trusted Platform
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#475569]">
                Trusted by universities, researchers and scholarly institutions.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 grid items-center gap-8 rounded-[32px] border border-red-100 bg-white p-6 shadow-sm lg:grid-cols-[1fr_420px]">
          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-red-700">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071739]">
              Supporting Modern Academic Communication
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#475569]">
              We aim to simplify academic publishing through reliable journal
              systems, ethical publication standards and accessible digital
              research platforms for scholars worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-full border border-red-100 bg-red-50 px-4 py-2">
                <BookOpen size={18} className="text-red-700" />

                <p className="text-sm font-medium text-[#071739]">
                  Academic Publishing
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-red-100 bg-red-50 px-4 py-2">
                <Users size={18} className="text-red-700" />

                <p className="text-sm font-medium text-[#071739]">
                  Scholar Community
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-red-100/60 blur-3xl"></div>

            <img
              src="https://plus.unsplash.com/premium_vector-1749471913339-589bf7b08b58?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission"
              className="relative rounded-[28px] border border-red-100 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
