import { motion } from "framer-motion";

const missionItems = [
  {
    title: "Professional Publishing & Editorial Services",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

    content:
      "To support researchers, scholars, and institutions through professional publishing and editorial services.",
  },

  {
    title: "Ethical Academic Publishing Practices",

    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",

    content:
      "To promote ethical and transparent academic publishing practices.",
  },

  {
    title: "Research Dissemination",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    content:
      "To facilitate high-quality research dissemination on national and international platforms.",
  },

  {
    title: "Research Assistance & Consultancy",

    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",

    content:
      "To provide comprehensive research assistance including publication support, book publishing, conference proceedings, DOI services, and academic consultancy.",
  },

  {
    title: "Research & Collaboration",

    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",

    content:
      "To contribute toward the advancement of multidisciplinary research, innovation, and academic collaboration.",
  },

  {
    title: "Credible Research Ecosystem",

    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",

    content:
      "To build a sustainable and credible research ecosystem focused on integrity, quality, and scholarly impact.",
  },
];

const VisionMission = () => {
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
        {/* Heading */}
        <div className="text-center">
          {/* <h1 className="mt-4 text-[42px] font-bold leading-[1.15] text-[#071739] lg:text-[56px]">
             & 
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
              Vision{" "} 
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              &  Mission
              </span>
            </h1>
        </div>

        {/* Vision */}
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
          className="mt-12 overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-lg"
        >
          <div className="grid lg:grid-cols-[0.42fr_1fr]">
            {/* Left Image */}
            <div className="relative min-h-[280px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Vision"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-transparent to-blue-900/60"></div>

              {/* Small Floating Image */}
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop"
                alt="Corner"
                className="absolute bottom-6 right-6 h-24 w-24 rounded-[22px] border border-white/20 object-cover shadow-2xl"
              />
            </div>

            {/* Right Content */}
            <div className="relative overflow-hidden p-8">
              {/* Dual Tone Glow */}
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
                  Our Vision
                </p>

                <h2 className="mt-4 text-[38px] font-bold leading-[1.2] text-[#071739]">
                  Our Vision
                </h2>

                <p className="mt-8 text-[15px] leading-[2.1] text-justify text-[#475569]">
                  To become a globally recognized academic publishing and
                  research support organization dedicated to promoting ethical
                  scholarly communication, research excellence, innovation, and
                  accessible knowledge dissemination across multidisciplinary
                  fields.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Our Mission
            </p>

           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
              Our{" "} 
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
               Mission
              </span>
            </h1>
          </div>

          {/* Mission Cards */}
          <div className="mt-10 space-y-4">
            {missionItems.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  <div className="grid gap-4 lg:grid-cols-[0.32fr_1fr]">
                    {/* Left Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full min-h-[220px] w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-900/45 via-transparent to-blue-900/55"></div>

                      {/* Floating Small Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute bottom-5 right-5 h-20 w-20 rounded-[20px] border border-white/20 object-cover shadow-2xl"
                      />
                    </div>

                    {/* Right */}
                    <div className="relative overflow-hidden p-6">
                      {/* Dual Tone Glow */}
                      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

                      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

                      <div className="relative">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
                          Mission
                        </p>

                        <h3 className="mt-4 text-[28px] font-bold leading-[1.25] text-[#071739]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[15px] leading-[1.9] text-justify text-[#475569]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
