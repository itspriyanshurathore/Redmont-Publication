import { motion } from "framer-motion";

import {
  ShieldCheck,
  FileCheck,
  Lock,
  Scale,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";

const ethicsData = [
  {
    title: "Originality and Plagiarism",

    icon: FileCheck,

    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",

    content:
      "Authors must ensure that submitted work is original and properly cites all sources, references, and contributions. Plagiarism, data fabrication, falsification, and unethical research practices are strictly prohibited.",
  },

  {
    title: "Authorship Responsibility",

    icon: BadgeCheck,

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

    content:
      "All listed authors must have made significant academic contributions to the research work. Submission of manuscripts without the consent of co-authors is considered unethical.",
  },

  {
    title: "Confidentiality",

    icon: Lock,

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    content:
      "Manuscripts, research data, reviewer comments, and editorial communications are treated confidentially throughout the review and publication process.",
  },

  {
    title: "Conflict of Interest",

    icon: AlertTriangle,

    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",

    content:
      "Authors, reviewers, and editors are expected to disclose any potential conflicts of interest that may influence academic judgment or publication decisions.",
  },

  {
    title: "Research Integrity",

    icon: Scale,

    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",

    content:
      "Research involving human participants, institutions, or sensitive data must comply with applicable ethical guidelines and institutional requirements.",
  },

  {
    title: "Editorial Independence",

    icon: ShieldCheck,

    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",

    content:
      "Editorial decisions are based on academic merit, originality, relevance, clarity, and research quality without discrimination based on nationality, gender, institutional affiliation, or personal beliefs.",
  },
];

const PublishingEthics = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] pt-24 pb-16">
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
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          {/* <h1 className="mt-4 text-[42px] font-bold leading-[1.15] text-[#071739] lg:text-[56px]">
             
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
         Publishing{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
            Ethics Statement
              </span>
            </h1>

          <div className="mx-auto mt-8 rounded-[32px] border border-red-100 bg-white p-6 shadow-lg">
            <div className="space-y-4 text-[15px] leading-7 text-justify text-[#475569]">
              <p>
                Redmont Publications is committed to maintaining the highest
                standards of publication ethics and academic integrity. We
                strongly support ethical scholarly communication and follow
                responsible publishing practices designed to ensure
                transparency, originality, credibility, and professionalism in
                all academic and research-related activities.
              </p>

              <p>
                We expect authors, editors, reviewers, and collaborators
                associated with our platform to adhere to ethical research and
                publication standards.
              </p>
            </div>
          </div>
        </div>

        {/* Ethical Principles */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Ethical Principles
            </p>

            <h2 className="mt-3 text-[38px] font-bold text-[#071739]">
              Ethical Principles
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ethicsData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-red-100 bg-white shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[#071739]/85"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-5">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-blue-700 shadow-lg shadow-red-500/10 transition-all duration-500 group-hover:bg-white">
                      <Icon
                        size={26}
                        className="text-white transition-all duration-500 group-hover:text-[#071739]"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-[22px] font-semibold leading-[1.25] text-[#071739] transition-all duration-500 group-hover:text-white">
                      {item.title}
                    </h3>

                    {/* Divider */}
                    <div className="mt-3 h-[3px] w-14 rounded-full bg-gradient-to-r from-red-500 to-blue-700 transition-all duration-500 group-hover:bg-white"></div>

                    {/* Content */}
                    <p className="mt-4 text-[14px] leading-7 text-justify text-[#475569] transition-all duration-500 group-hover:text-white/90">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Section */}
        <div className="mt-16">
          <div className="rounded-[32px] border border-red-100 bg-white p-6 shadow-lg">
            {/* Heading */}
            <h2 className="text-[34px] font-bold leading-[1.2] text-[#071739]">
              Ethical Corrections and Retractions
            </h2>

            {/* Divider */}
            <div className="mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r from-red-500 to-blue-700"></div>

            {/* Content */}
            <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
              In cases involving major ethical concerns, plagiarism, or
              significant errors, appropriate corrections, clarifications, or
              retractions may be issued in accordance with responsible
              publishing practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishingEthics;
