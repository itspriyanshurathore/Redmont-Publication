import { motion } from "framer-motion";
import {
  Presentation,
  FileStack,
  ClipboardCheck,
  Workflow,
  FileText,
  Target,
} from "lucide-react";

const scopeSupport = [
  "National Conferences",
  "International Conferences",
  "Seminars & Workshops",
  "Academic Symposiums",
  "FDP & Research Events",
  "Institutional Conferences",
  "Multidisciplinary Research Events",
];

const services = [
  "Proceedings Compilation",
  "Editorial Coordination",
  "ISBN Assistance",
  "DOI Assistance",
  "Formatting & Typesetting",
  "Abstract Book Preparation",
  "Cover Design",
  "Digital Publication Support",
  "Print-Ready Proceedings Preparation",
];

const workflow = [
  {
    step: "Step 1",
    title: "Conference Consultation",
    description:
      "Discussion regarding conference scope, publication requirements, timelines, and proceedings structure.",
  },
  {
    step: "Step 2",
    title: "Paper Collection & Screening",
    description:
      "Compilation of accepted papers and verification of formatting and documentation requirements.",
  },
  {
    step: "Step 3",
    title: "Editorial & Formatting Process",
    description:
      "Formatting, layout structuring, metadata preparation, and proceedings organization.",
  },
  {
    step: "Step 4",
    title: "Publication Preparation",
    description:
      "Preparation of final publication files for print and/or digital release.",
  },
];

const requiredInfo = [
  "Conference Title",
  "Organizer Details",
  "Conference Brochure",
  "Accepted Papers",
  "Editorial Committee Information",
  "Conference Dates",
  "ISBN/DOI Requirements",
  "Publication Preferences",
];

const Proceedings = () => {
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
         Proceedings{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Publication
              </span>
            </h1>
        </div>

        {/* Intro */}
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
              Proceedings Publication
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            Redmont Publications provides professional conference
            proceedings publication support for academic conferences,
            seminars, workshops, symposiums, faculty development
            programs, and scholarly events across multidisciplinary
            domains.
          </p>

          <p className="mt-5 text-[15px] leading-[2] text-justify text-[#475569]">
            Our proceedings publication services are designed to assist
            institutions, conference organizers, academic bodies, and
            research groups in professionally compiling and publishing
            conference papers and scholarly contributions in a
            structured academic format.
          </p>
        </motion.div>

        {/* Scope */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Scope of Proceedings Support
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {scopeSupport.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <FileStack
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

        {/* Services */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Proceedings Services Include
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            
            {services.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <ClipboardCheck
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

        {/* Workflow */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Publication Workflow
          </h2>

          <div className="mx-auto mt-12 max-w-5xl">
            
            {workflow.map((item, index) => (
              
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="relative mb-6 rounded-xl border border-black/5 bg-white p-6 shadow-sm"
              >
                
                <div className="flex items-center gap-3">
                  
                  <Workflow
                    size={20}
                    className="text-red-600"
                  />

                  <span className="text-sm font-semibold text-red-600">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[#071739]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[2] text-[#475569]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Required Information */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Required Information
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {requiredInfo.map((item, index) => (
              
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

        {/* Objective */}
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
          className="mt-20 rounded-xl border border-black/5 bg-white p-8 shadow-sm"
        >
          
          <div className="flex items-center gap-3">
            
            <Target
              size={24}
              className="text-red-600"
            />

            <h2 className="text-3xl font-bold text-[#071739]">
              Our Objective
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            We aim to support academic conferences through professional
            publication solutions that encourage scholarly
            communication, research dissemination, and academic
            visibility.
          </p>
        </motion.div>
        {/* Who Can Benefit */}
{/* Required Information */}
<div className="mt-20">

  <div className="text-center">

    <h2 className="text-[38px] font-bold text-[#071739]">
      Required Information
    </h2>

    <p className="mt-3 text-[#64748b]">
      To initiate proceedings publication support, organizers may provide:
    </p>

  </div>

  <div className="mt-8 flex flex-wrap justify-center gap-3">

    {[
      "Conference Title",
      "Organizer Information",
      "Conference Brochure",
      "Accepted Papers",
      "Editorial Committee Details",
      "Conference Dates",
      "ISBN & DOI Requirements",
      "Publication Preferences",
      "Publication Timeline",
    ].map((item) => (
      <span
        key={item}
        className="rounded-full border border-red-100 bg-white px-5 py-3 text-sm font-medium text-[#071739] shadow-sm"
      >
        {item}
      </span>
    ))}

  </div>

</div>
<div className="mt-20 rounded-[30px] border border-black/5 bg-white p-8 shadow-sm">

  <h2 className="text-[34px] font-bold text-[#071739]">
    Our Commitment
  </h2>

  <p className="mt-5 text-[15px] leading-8 text-justify text-[#475569]">
    Redmont Publications is committed to supporting scholarly events through professional proceedings publication services that enhance research dissemination, academic visibility, and long-term accessibility of conference outputs.
  </p>

</div>

<div className="mt-8 rounded-[24px] border border-red-100 bg-red-50 p-6">

  <h3 className="text-lg font-semibold text-[#071739]">
    Disclaimer
  </h3>

  <p className="mt-3 text-[14px] leading-7 text-justify text-[#475569]">
    Redmont Publications provides proceedings publication and editorial support services. Acceptance of conference papers, peer-review decisions, indexing outcomes, and academic evaluations remain the responsibility of the respective conference organizers, editorial committees, and associated academic bodies.
  </p>

</div>
      </div>
      
    </section>
  );
};

export default Proceedings;