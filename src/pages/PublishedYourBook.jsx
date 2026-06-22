import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import { BookOpen, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

const publishTypes = [
  "Academic Books",
  "Research Monographs",
  "Edited Volumes",
  "Conference Proceedings",
  "Educational Books",
  "Institutional Publications",
  "Thesis-to-Book Conversion",
  "Multidisciplinary Publications",
];

const processSteps = [
  {
    step: "Step 1",
    title: "Initial Consultation",
    content:
      "Authors may contact our editorial team to discuss publication requirements, manuscript scope, and publication objectives.",
  },
  {
    step: "Step 2",
    title: "Manuscript Submission",
    content:
      "Authors submit the manuscript along with required author and publication information for preliminary evaluation.",
  },
  {
    step: "Step 3",
    title: "Editorial & Technical Review",
    content:
      "The manuscript may undergo language review, formatting assessment, structural evaluation, and publication readiness checks.",
  },
  {
    step: "Step 4",
    title: "Design & Formatting",
    content:
      "Book layout formatting, cover design, metadata preparation, and publication structuring are completed.",
  },
  {
    step: "Step 5",
    title: "ISBN & Publication Preparation",
    content:
      "ISBN-related documentation and publication preparation processes are initiated where applicable.",
  },
  {
    step: "Step 6",
    title: "Final Publication",
    content:
      "The finalized publication files are prepared for print and/or digital release.",
  },
];

const documents = [
  "Final Manuscript File",
  "Author Details",
  "Institutional Affiliation",
  "Abstract/Summary",
  "Author Photograph (optional)",
  "Copyright Declaration",
  "Table of Contents",
  "References/Bibliography",
  "Cover Design Preferences (optional)",
];

const responsibilities = [
  "Originality of content",
  "Proper citation and referencing",
  "Ethical compliance",
  "Accuracy of submitted information",
  "Permission for copyrighted material where applicable",
];

const services = [
  "ISBN Assistance",
  "Cover Design",
  "Book Formatting",
  "Language Editing",
  "Proofreading",
  "eBook Preparation",
  "Print-Ready File Preparation",
  "Metadata Structuring",
];

const PublishYourBook = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Hero */}
        <div className="text-center">
         

          {/* <h1 className="mt-4 text-[42px] font-bold text-[#071739]">
            
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
         Publish Your{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Book
              </span>
            </h1>

          <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-[15px] leading-[2] text-justify text-[#475569]">
              Redmont Publications provides professional academic and
              research-oriented book publishing support for researchers, faculty
              members, institutions, scholars, editors, and independent authors.
            </p>

            <p className="mt-5 text-[15px] leading-[2] text-justify text-[#475569]">
              Our publishing workflow is designed to assist authors in
              transforming manuscripts into professionally structured
              publications aligned with academic publishing standards and
              scholarly communication practices.
            </p>
          </div>
        </div>

        {/* Who Can Publish */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Who Can Publish With Us?
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {publishTypes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <BookOpen size={20} className="text-red-600" />

                <p className="mt-4 font-medium text-[#071739]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publishing Process */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Publishing Process
          </h2>

          <div className="mx-auto mt-12 max-w-4xl space-y-5">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-red-600">
                    {item.step}
                  </span>

                  <span className="text-xs text-green-600">✓ Read</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-[#071739]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#475569]">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Required Submission Documents
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <FileText size={18} className="text-red-600" />

                <p className="mt-3 text-[#071739]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-20 rounded-xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Author Responsibilities
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {responsibilities.map((item, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 size={18} className="mt-1 text-green-600" />

                <p className="text-[#475569]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-[#071739]">
            Supported Publishing Services
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <p className="font-medium text-[#071739]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publication Ethics */}
        <div className="mt-20 rounded-xl border border-black/5 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-red-600" />

            <h2 className="text-3xl font-bold text-[#071739]">
              Publication Ethics
            </h2>
          </div>

          <p className="mt-6 text-[15px] leading-[2] text-justify text-[#475569]">
            Redmont Publications encourages ethical scholarly publishing
            practices and expects authors to avoid plagiarism, data
            manipulation, copyright violations, and unethical publication
            conduct.
          </p>
        </div>

        
        {/* CTA */}
        <div className="mt-20 rounded-xl border border-red-100 bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-[#071739]">Get Started</h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-[2] text-[#475569]">
            Authors interested in publishing with Redmont Publications may
            contact the editorial team for publication consultation and
            submission guidance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Contact Page */}
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
            >
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-medium text-white shadow-lg shadow-red-500/20"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* WhatsApp */}
           <motion.a
  href="https://wa.me/919999999999"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.04,
    y: -3,
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 18,
  }}
  className="group flex items-center gap-3 rounded-xl border border-green-600 bg-white px-6 py-3 font-medium text-green-600 shadow-sm transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-green-500/20"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="h-5 w-5 transition duration-300 group-hover:brightness-0 group-hover:invert"
  />

  WhatsApp

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishYourBook;
