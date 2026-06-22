import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  Languages,
  PenTool,
  GraduationCap,
  ScrollText,
  Search,
  ClipboardCheck,
  // UserCheck,
  // FileCheck,
  // Library,
  // Award,
} from "lucide-react";
const editingIcons = [
  FileText,
  Languages,
  PenTool,
  BookOpen,
  Search,
  ClipboardCheck,
  GraduationCap,
  ScrollText,
];

const editingColors = [
  "bg-red-50 text-red-600",
  "bg-blue-50 text-blue-600",
  "bg-green-50 text-green-600",
  "bg-purple-50 text-purple-600",
  "bg-amber-50 text-amber-600",
  "bg-cyan-50 text-cyan-600",
  "bg-pink-50 text-pink-600",
  "bg-indigo-50 text-indigo-600",
];

// const suitableIcons = [
//   UserCheck,
//   FileCheck,
//   Library,
//   Award,
//   GraduationCap,
//   BookOpen,
// ];

const editingAreas = [
  "Grammar Correction",
  "Sentence Refinement",
  "Academic Tone Enhancement",
  "Clarity Improvement",
  "Vocabulary Enhancement",
  "Technical Language Editing",
  "Proofreading & Consistency Checks",
];

const suitableFor = [
  "Research Papers",
  "Thesis & Dissertations",
  "Journal Articles",
  "Academic Books",
  "Conference Papers",
  "Research Proposals",
];

const LanguageEditing = () => {
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

    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          
         

          {/* <h1 className="mt-4 text-3xl font-bold leading-[1.2] text-[#071739] lg:text-[36px]">
            
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
           Language{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Editing Services
              </span>
            </h1>
        </div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
         className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-10"
        >
          
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>

          <div className="relative">
            
            <h2 className="text-[25px] font-bold leading-[1.2] text-[#071739]">
              Language Editing Services
            </h2>

            <div className="mt-8 space-y-5">
              
              <p className="text-[15px] leading-[2] text-justify text-[#475569]">
                Redmont Publications offers professional language
                editing and academic proofreading services aimed at
                improving the clarity, readability, and linguistic
                quality of scholarly manuscripts.
              </p>

              <p className="text-[15px] leading-[2] text-justify text-[#475569]">
                Our editing process focuses on preserving the author’s
                original research intent while enhancing academic
                communication standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Editing Areas */}
        <div className="mt-20">
          
          <div className="text-center">
            
           

           <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071739] md:text-4xl">
              Editing Areas
            </h2>
          </div>

         <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {editingAreas.map((item, index) => {
    const Icon = editingIcons[index % editingAreas.length];

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
        }}
        whileHover={{
          y: -5,
        }}
        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            editingColors[index % editingColors.length]
          }`}
        >
          <Icon size={22} />
        </div>

        <h3 className="mt-4 text-[16px] font-semibold leading-relaxed text-[#071739]">
          {item}
        </h3>
      </motion.div>
    );
  })}
</div>
        </div>

        {/* Suitable For */}
        <div className="mt-20">
          
          <div className="text-center">
            
           

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071739] md:text-4xl">
              Suitable For
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            
            {suitableFor.map((item, index) => (
              
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                
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

export default LanguageEditing;