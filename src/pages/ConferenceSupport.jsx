import { motion } from "framer-motion";
import {
  Presentation,
  FileText,
  Users,
  CalendarDays,
  Target,
} from "lucide-react";

const conferenceServices = [
  "Proceedings Publication",
  "Abstract Book Preparation",
  "ISBN & DOI Assistance",
  "Editorial Coordination",
  "Paper Formatting",
  "Certificate Design Support",
  "Publication Documentation",
  "Digital Proceedings Preparation",
  "Research Paper Compilation",
];

const authorSupport = [
  "Paper Formatting",
  "Language Editing",
  "Reference Structuring",
  "Submission Preparation",
  "Publication Documentation",
];

const suitableEvents = [
  "National Conferences",
  "International Conferences",
  "Institutional Seminars",
  "Academic Workshops",
  "Research Symposiums",
  "Faculty Development Programs",
];

const ConferenceSupport = () => {
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
          
        

          {/* <h1 className="mt-4 text-[42px] font-bold text-[#071739]">
           
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
              Conference{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                 Support
              </span>
            </h1>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-xl border border-black/5 bg-white p-8 shadow-sm"
        >
          
          <div className="flex items-center gap-3">
            
            <Presentation
              size={24}
              className="text-red-600"
            />

            <h2 className="text-3xl font-bold text-[#071739]">
              Conference Support
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            Redmont Publications provides academic and publication-related
            support services for conferences, seminars, workshops,
            symposiums, and scholarly events.
          </p>

          <p className="mt-5 text-[15px] leading-[2] text-justify text-[#475569]">
            Our conference support services are designed to assist
            organizers in managing publication-related processes
            professionally while improving academic presentation,
            documentation quality, and research dissemination.
          </p>
        </motion.div>

        {/* Conference Support Services */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Conference Support Services
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            
            {conferenceServices.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <FileText
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

        {/* Support For Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-xl border border-black/5 bg-white p-8 shadow-sm"
        >
          
          <div className="flex items-center gap-3">
            
            <Users
              size={24}
              className="text-red-600"
            />

            <h2 className="text-3xl font-bold text-[#071739]">
              Support for Organizers
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            We assist conference organizers in streamlining publication
            workflows and maintaining professional academic presentation
            standards for scholarly events.
          </p>
        </motion.div>

        {/* Support For Authors */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Support for Authors
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            
            {authorSupport.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-black/5 bg-white p-5 text-center shadow-sm"
              >
                
                <FileText
                  size={20}
                  className="mx-auto text-red-600"
                />

                <p className="mt-3 text-sm font-medium text-[#071739]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Suitable Events */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Suitable Events
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            
            {suitableEvents.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <CalendarDays
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

        {/* Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-xl border border-black/5 bg-white p-8 shadow-sm"
        >
          
          <div className="flex items-center gap-3">
            
            <Target
              size={24}
              className="text-red-600"
            />

            <h2 className="text-3xl font-bold text-[#071739]">
              Our Vision
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            We aim to support academic events through structured
            publication assistance and scholarly communication services
            that contribute to professional research dissemination and
            academic engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConferenceSupport;