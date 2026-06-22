import { motion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  FileSearch,
} from "lucide-react";

import { Link } from "react-router-dom";

const articles = [
  {
    title: "How to Select the Right Academic Journal",
    description:
      "Key factors researchers should evaluate before selecting journals for publication.",
    icon: FileSearch,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    category: "Journal Selection",
  },

  {
    title: "Understanding Publication Ethics in Research",
    description:
      "Best ethical practices for academic publishing and scholarly communication.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "Publication Ethics",
  },

  {
    title: "Scopus vs Web of Science: Key Differences",
    description:
      "Comparing major indexing databases for global academic visibility.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "Research Insights",
  },

  // {
  //   title: "Manuscript Preparation Guidelines for Authors",
  //   description:
  //     "Professional formatting and preparation practices before submission.",
  //   icon: FileText,
  //   image:
  //     "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
  //   category: "Author Guidelines",
  // },
];

const BlogInsightsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fcfcfd] py-12 sm:py-16">
      <div className="pointer-events-none absolute left-4 top-4 h-28 w-28 rounded-full bg-red-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-4 bottom-4 h-28 w-28 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Blog & Research Insights
          </p>
          <h2 className="mt-3 text-[30px] font-bold leading-[1.2] text-[#071739] lg:text-[38px]">
            Academic{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Insights & Resources
            </span>
          </h2>
          <p className="mt-4 text-[14px] leading-7 text-[#475569]">
            Research insights, publication guidance and academic resources
            designed to support researchers, scholars and institutions.
          </p>
        </div>

        <div className="mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => {
            const Icon = article.icon;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl"
              >
                <Link to="/blog" className="block overflow-hidden">
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-900 shadow-sm">
                      <Icon size={14} className="text-slate-900" />
                      <span>{article.category}</span>
                    </div>
                  </div>
                </Link>

                <div className="px-6 py-6">
                  <h3 className="text-[20px] font-semibold leading-8 text-slate-900 transition duration-300 group-hover:text-red-600">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-slate-600">
                    {article.description}
                  </p>
                  <div className="mt-6 text-right">
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition duration-300 hover:text-red-700"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-red-500/10 transition duration-300 hover:scale-[1.03]"
          >
            More Blogs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;
