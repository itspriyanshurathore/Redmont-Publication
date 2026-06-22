import { motion } from "framer-motion";

const UpcomingJournals = () => {
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

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          {/* <h1 className="mt-4 text-3xl font-bold leading-[1.2] text-[#071739] lg:text-[36px]">
           
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
        Upcoming{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Journals
              </span>
            </h1>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="relative mt-14 overflow-hidden rounded-[36px] border border-black/5 bg-white p-8 shadow-sm lg:p-12"
        >
          {/* Glow */}
          <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative space-y-6">
            <h2 className="text-[25px] font-bold text-[#071739]">
              Upcoming Journals
            </h2>

            <p className="text-[15px] leading-[2.1] text-justify text-[#475569]">
              Redmont Publications is currently working on the development of
              multidisciplinary academic journals focused on ethical publishing
              practices, research quality, and scholarly communication.
            </p>

            <p className="text-[15px] leading-[2.1] text-justify text-[#475569]">
              Our upcoming journals are presently under editorial planning and
              infrastructural development. Detailed information regarding
              journal scope, editorial structure, submission process,
              publication frequency, and official launch announcements will be
              made available soon.
            </p>
          </div>
        </motion.div>

        {/* Research Areas Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
          className="relative mt-8 overflow-hidden rounded-[36px] border border-black/5 bg-white p-8 shadow-sm lg:p-12"
        >
          <div className="absolute left-0 top-0 h-36 w-36 rounded-full bg-red-100/30 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-blue-100/30 blur-3xl"></div>

          <div className="relative">
            <p className="text-[15px] leading-[2.1] text-justify text-[#475569]">
              The proposed journals are expected to support multidisciplinary
              research areas including management, commerce, social sciences,
              technology, and applied research domains.
            </p>
          </div>
        </motion.div>

        {/* Commitment Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="relative mt-8 overflow-hidden rounded-[36px] border border-black/5 bg-white p-8 shadow-sm lg:p-12"
        >
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative">
            <p className="text-[15px] leading-[2.1] text-justify text-[#475569]">
              Redmont Publications remains committed to building a professional
              and researcher-focused scholarly publishing ecosystem aligned with
              academic integrity and international publishing standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingJournals;
