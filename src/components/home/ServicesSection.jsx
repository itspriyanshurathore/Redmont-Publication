import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Presentation,
  ShieldCheck,
  Link2,
  FileEdit,
  Languages,
  Users,
  Clipboard,
  FileCheck,
  Compass,
  Globe,
  Layers,
  Sparkles,
  // FaWhatsapp,
} from "lucide-react";

const services = [
  {
    title: "Journal Publication Support",
    description:
      "End-to-end support for publishing research articles in reputable national and international journals through structured editorial and publication guidance.",
    icon: FileText,
    path: "/services/journal-publication",
  },
  {
    title: "Journal Development Support",
    description:
      "Complete assistance for launching academic journals, including ISSN guidance, editorial workflow, policies and website setup.",
    icon: Clipboard,
    path: "/services/isbn-services",
  },
  {
    title: "Book Publication",
    description:
      "Academic, professional and edited book publishing solutions with ISBN support, formatting and global distribution assistance.",
    icon: BookOpen,
    path: "/services/book-publishing",
  },
  {
    title: "Conference Proceedings",
    description:
      "Publication support for conferences, seminars and academic events, including ISBN, DOI and proceedings preparation.",
    icon: Presentation,
    path: "/services/conference-proceedings",
  },
  {
    title: "Patent Assistance",
    description:
      "Support for patent search, drafting, documentation and filing guidance for researchers, innovators and institutions.",
    icon: ShieldCheck,
    path: "/services/patent-assistance",
  },
  {
    title: "DOI Services",
    description:
      "Crossref DOI registration, metadata submission and citation linking services for scholarly publications.",
    icon: Link2,
    path: "/services/doi-services",
  },
  {
    title: "Manuscript Formatting",
    description:
      "Professional formatting according to journal guidelines including APA, MLA, IEEE, Chicago and publisher-specific standards.",
    icon: FileEdit,
    path: "/services/manuscript-formatting",
  },
  {
    title: "Language Editing",
    description:
      "Academic language editing to improve grammar, clarity, readability and overall manuscript quality.",
    icon: Languages,
    path: "/services/language-editing",
  },
  {
    title: "Copyright Services",
    description:
      "Copyright registration guidance and intellectual property support for books, research works and academic content.",
    icon: ShieldCheck,
    path: "/services/copyright-services",
  },
  {
    title: "Writing & Plagiarism Support",
    description:
      "Research writing assistance, plagiarism assessment and manuscript improvement support for scholarly publications.",
    icon: FileCheck,
    path: "/services/writing-plagiarism-support",
  },
  {
    title: "Thesis Editing Support",
    description:
      "Professional editing, proofreading and formatting support for PhD, MPhil, Master's and dissertation manuscripts.",
    icon: GraduationCap,
    path: "/services/thesis-editing",
  },
  {
    title: "Research Paper Editing",
    description:
      "Technical editing, content refinement and quality enhancement to strengthen research manuscripts before submission.",
    icon: FileCheck,
    path: "/services/research-paper-editing",
  },
  {
    title: "Indexing & Abstracting Support",
    description:
      "Guidance for journal indexing preparation, metadata optimization and abstracting database compliance.",
    icon: Layers,
    path: "/services/indexing-abstracting-support",
  },
  {
    title: "Editorial & Peer Review Support",
    description:
      "Editorial workflow management and peer-review coordination services for journals and conference publications.",
    icon: Users,
    path: "/services/editorial-peer-review-support",
  },
  {
    title: "Publication Consultancy",
    description:
      "Strategic guidance on journal selection, publication planning and scholarly communication practices.",
    icon: Compass,
    path: "/services/publication-consultancy",
  },
  {
    title: "Research Consultancy",
    description:
      "Expert support for research planning, academic documentation and publication-oriented research development.",
    icon: Globe,
    path: "/services/research-consultancy",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Core Services
          </p>

          {/* <h2 className="mt-3 text-3xl font-bold leading-tight text-[#071739] sm:text-4xl">
             
          </h2> */}
           {/* Heading */}
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#071739] sm:text-4xl">
            Academic Publishing{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Research
            </span>{" "}
            &  Solutions
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#475569]">
            Comprehensive publishing, editorial and research support services
            designed for authors, researchers, institutions, journals and
            academic organizations worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const iconStyle = [
              "bg-red-50 text-red-600",
              "bg-amber-50 text-amber-600",
              "bg-sky-50 text-sky-600",
              "bg-violet-50 text-violet-600",
              "bg-emerald-50 text-emerald-600",
              "bg-fuchsia-50 text-fuchsia-600",
              "bg-orange-50 text-orange-600",
              "bg-slate-50 text-slate-600",
            ][index % 8];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${iconStyle} shadow-sm`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-semibold leading-6 text-slate-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to={service.path}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-red-100 bg-gradient-to-r from-red-50 via-white to-white shadow-sm">
          <div className="grid items-start gap-5 px-6 py-5 lg:grid-cols-[1.8fr_auto] lg:px-8 lg:py-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-100">
                <Sparkles size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#071739]">
                  Need Help Choosing the Right Publishing Solution?
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Our experts are available to guide you through every stage of
                  your research and publication journey.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=info@redmontpublications.com">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/20"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-medium text-red-600 transition-all duration-300 hover:bg-red-50"
                >
                  Contact Us
                </motion.button>
              </Link>
              <a
                href="https://wa.me/+919711052076"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FaWhatsapp size={16} /> */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-green-200 bg-white px-5 py-3 text-sm font-medium text-green-600 transition-all duration-300 hover:bg-green-50"
                >
                  WhatsApp Support
                </motion.button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
