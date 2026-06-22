import { motion } from "framer-motion";

const formattingBenefits = [
  "Readability",
  "Professional presentation",
  "Submission compliance",
  "Editorial acceptance readiness",
];

const formattingSupport = [
  "Journal Template Formatting",
  "Reference Styling",
  "Table & Figure Formatting",
  "Citation Alignment",
  "Heading Structuring",
  "Layout Standardization",
  "APA / MLA / IEEE / Chicago Formatting",
  "Submission File Preparation",
];

const supportedDocuments = [
  "Research Papers",
  "Review Articles",
  "Thesis & Dissertations",
  "Conference Papers",
  "Academic Books",
  "Book Chapters",
];

const ManuscriptFormatting = () => {
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

      <div className="relative mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="text-center">
          
         

          {/* <h1 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739] lg:text-[52px]">
            
             
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
          Manuscript{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Formatting Services
              </span>
            </h1>
        </div>

        {/* Intro Section */}
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
          className="relative mt-14 overflow-hidden rounded-[34px] border border-black/5 bg-white p-8 shadow-sm lg:p-10"
        >
          
          {/* Glow */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative">
            
            <h2 className="text-[34px] font-bold leading-[1.2] text-[#071739]">
              
              Manuscript Formatting Services
            </h2>

            <div className="mt-8 space-y-5">
              
              <p className="text-[15px] leading-[2] text-justify text-[#475569]">
                Redmont Publications provides professional manuscript
                formatting services to help researchers prepare
                publication-ready academic documents according to
                journal, conference, university, and publisher
                guidelines.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="mt-20">
          
          <div className="text-center">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Proper Formatting Improves
            </p>

            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              
              Formatting Benefits
            </h2>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            
            {formattingBenefits.map((item, index) => (
              
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                
                {/* Glow */}
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-red-100/30 blur-3xl"></div>

                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-blue-100/30 blur-3xl"></div>

                <div className="relative">
                  
                  <div className="h-[4px] w-14 rounded-full bg-gradient-to-r from-red-500 to-blue-700"></div>

                  <h3 className="mt-6 text-[22px] font-bold leading-[1.4] text-[#071739]">
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formatting Support */}
        <div className="mt-20">
          
          <div className="text-center">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Formatting Support Includes
            </p>

            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              
              Formatting Support Includes
            </h2>
          </div>

          {/* Support Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            
            {formattingSupport.map((item, index) => (
              
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                
                {/* Glow */}
                <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-red-100/30 blur-3xl"></div>

                <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-blue-100/30 blur-3xl"></div>

                <div className="relative">
                  
                  <div className="h-[4px] w-16 rounded-full bg-gradient-to-r from-red-500 to-blue-700"></div>

                  <h3 className="mt-6 text-[20px] font-bold leading-[1.4] text-[#071739]">
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supported Documents */}
        <div className="mt-20">
          
          <div className="text-center">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
              Supported Documents
            </p>

            <h2 className="mt-4 text-[40px] font-bold leading-[1.15] text-[#071739]">
              
              Supported Documents
            </h2>
          </div>

          {/* Documents Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            
            {supportedDocuments.map((item, index) => (
              
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                
                {/* Glow */}
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-red-100/30 blur-3xl"></div>

                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-blue-100/30 blur-3xl"></div>

                <div className="relative">
                  
                  <div className="h-[4px] w-14 rounded-full bg-gradient-to-r from-red-500 to-blue-700"></div>

                  <h3 className="mt-6 text-[22px] font-bold leading-[1.4] text-[#071739]">
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManuscriptFormatting;