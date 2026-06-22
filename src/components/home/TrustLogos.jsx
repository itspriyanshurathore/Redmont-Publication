const logos = [
  {
    id: 1,
    name: "Harvard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg",
  },

  {
    id: 2,
    name: "Oxford",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg",
  },

  {
    id: 3,
    name: "MIT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
  },

  {
    id: 4,
    name: "Stanford",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
  },

  {
    id: 5,
    name: "Cambridge",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/University_of_Cambridge_coat_of_arms.svg",
  },

  {
    id: 6,
    name: "Elsevier",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Elsevier_logo.svg",
  },

  {
    id: 7,
    name: "Springer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Springer_Nature_Logo.svg",
  },

  {
    id: 8,
    name: "IEEE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/IEEE_logo.svg",
  },

  {
    id: 9,
    name: "Scopus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Scopus_logo.svg",
  },

  {
    id: 10,
    name: "ACM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Association_for_Computing_Machinery_logo.svg",
  },

  {
    id: 11,
    name: "Nature",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Nature_journal_logo.svg",
  },

  {
    id: 12,
    name: "ScienceDirect",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/ScienceDirect_logo.svg",
  },
];

const TrustLogos = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-100/40 blur-3xl"></div>

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl"></div>

      {/* Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        
        <div className="absolute -top-10 left-[18%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[52%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Trusted Worldwide
          </p>

          <h2 className="mt-3 text-[30px] font-bold text-[#071739] lg:text-[38px]">
            
            Trusted By{" "}

            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Global Institutions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#475569]">
            Recognized by universities, publishers and scholarly
            organizations across global academic communities.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
          
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="group flex flex-col items-center justify-center rounded-[24px] border border-red-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-100/30"
            >
              
              {/* Logo */}
              <div className="flex h-24 items-center justify-center">
                
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-16 w-auto object-contain grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Name */}
              <p className="mt-4 text-sm font-semibold text-[#071739]">
                {logo.name}
              </p>

              {/* Bottom Line */}
              <div className="mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-red-500 to-blue-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;