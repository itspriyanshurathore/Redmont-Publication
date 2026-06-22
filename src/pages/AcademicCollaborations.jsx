import { motion } from "framer-motion";
import {
  Handshake,
  Network,
  Target,
  Users,
} from "lucide-react";

const collaborationAreas = [
  "Conference Proceedings Publication",
  "Academic Events & Seminars",
  "Research Projects",
  "Editorial Partnerships",
  "Institutional Publications",
  "Book Publishing Initiatives",
  "Research Awareness Programs",
  "Scholarly Communication Activities",
];

const objectives = [
  "Promote quality research dissemination",
  "Support academic networking",
  "Encourage multidisciplinary engagement",
  "Strengthen research visibility",
  "Develop ethical scholarly publishing practices",
];

const collaborators = [
  "Universities & Colleges",
  "Research Organizations",
  "Academic Departments",
  "Conference Committees",
  "Independent Scholars",
  "Editorial Boards",
  "Professional Associations",
];

const AcademicCollaborations = () => {
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
              Academic{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
               Collaborations
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
          className="mt-14 rounded-xl border border-black/5 bg-white p-8 shadow-sm"
        >
          
          <div className="flex items-center gap-3">
            
            <Handshake
              size={24}
              className="text-red-600"
            />

            <h2 className="text-3xl font-bold text-[#071739]">
              Academic Collaborations
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            Redmont Publications welcomes academic collaborations with
            universities, colleges, research institutions, conference
            organizers, scholarly associations, editorial teams, and
            academic professionals.
          </p>

          <p className="mt-5 text-[15px] leading-[2] text-justify text-[#475569]">
            Our collaboration initiatives are focused on strengthening
            scholarly communication, promoting interdisciplinary
            research, and supporting academic publishing and research
            development activities.
          </p>
        </motion.div>

        {/* Areas of Collaboration */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Areas of Collaboration
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {collaborationAreas.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <Network
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

        {/* Objectives */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Collaboration Objectives
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            
            {objectives.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 text-center shadow-sm"
              >
                
                <Target
                  size={22}
                  className="mx-auto text-red-600"
                />

                <p className="mt-3 text-sm font-medium text-[#071739]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who Can Collaborate */}
        <div className="mt-20">
          
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Who Can Collaborate?
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {collaborators.map((item, index) => (
              
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                
                <Users
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
      </div>
    </section>
  );
};

export default AcademicCollaborations;