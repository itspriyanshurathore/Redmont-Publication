import { motion } from "framer-motion";
import {
  BookMarked,
  FileCheck,
  BadgeCheck,
  BookOpen,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

const isbnSupport = [
  "ISBN Application Guidance",
  "Publication Metadata Preparation",
  "Book Information Structuring",
  "Barcode Guidance",
  "Print & Digital Publication Support",
  "Publication Documentation Assistance",
];

const benefits = [
  "Establish publication identity",
  "Improve discoverability",
  "Support library and catalog indexing",
  "Enhance publication professionalism",
  "Simplify book distribution and referencing",
];

const publications = [
  "Academic Books",
  "Research Publications",
  "Edited Volumes",
  "Conference Proceedings",
  "eBooks",
  "Educational Material",
  "Institutional Publications",
];

const requiredInfo = [
  "Book Title",
  "Author/Editor Details",
  "Book Category",
  "Language",
  "Edition Information",
  "Publication Format",
  "Cover Page",
  "Copyright Page Details",
];

const ISBNServices = () => {
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
          
        
{/* 
          <h1 className="mt-4 text-[42px] font-bold text-[#071739]">
            
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
           ISBN{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
               Services
              </span>
            </h1>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-14 rounded-xl border border-black/5 bg-white p-8 shadow-sm"
        >
          
          <div className="flex items-center gap-3">
            
            <BookMarked
              size={24}
              className="text-red-600"
            />

            <h2 className="text-3xl font-bold text-[#071739]">
              ISBN Services
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            Redmont Publications provides ISBN assistance and publication
            identification support for academic, educational, and
            professional publications.
          </p>

          <p className="mt-5 text-[15px] leading-[2] text-justify text-[#475569]">
            An ISBN (International Standard Book Number) is a globally
            recognized identifier assigned to books and similar
            publications to support cataloging, discoverability,
            metadata organization, and publication identification.
          </p>
        </motion.div>

        {/* ISBN Support */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Our ISBN Support Includes
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            
            {isbnSupport.map((item, index) => (
              
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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <FileCheck
                  size={20}
                  className="text-red-600"
                />

                <p className="mt-3 text-[#071739]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Benefits of ISBN
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            
            {benefits.map((item, index) => (
              
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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 text-center shadow-sm"
              >
                
                <BadgeCheck
                  size={22}
                  className="mx-auto text-green-600"
                />

                <p className="mt-3 text-sm font-medium text-[#071739]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Suitable Publications */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Suitable Publications
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {publications.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <BookOpen
                  size={20}
                  className="text-red-600"
                />

                <p className="mt-3 text-[#071739]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Required Information */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Information Required for ISBN Processing
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {requiredInfo.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <ClipboardList
                  size={20}
                  className="text-red-600"
                />

                <p className="mt-3 text-[#071739]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publication Standards */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-20 rounded-xl border border-black/5 bg-white p-8 shadow-sm"
        >
          
          <div className="flex items-center gap-3">
            
            <ShieldCheck
              size={24}
              className="text-red-600"
            />

            <h2 className="text-3xl font-bold text-[#071739]">
              Publication Standards
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            Redmont Publications encourages professionally structured
            and ethically prepared publications aligned with recognized
            academic and publishing standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ISBNServices;