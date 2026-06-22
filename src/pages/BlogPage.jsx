import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const blogCategories = [
  "Publishing",
  "Research Writing",
  "Academic Guidance",
  "Journals",
  "Conferences",
  "Thesis Support",
  "Research Ethics",
];

const blogs = [
  {
    id: 1,
      slug: "select-right-journal-for-publication",
    title: "How to Select the Right Journal for Research Publication",
    description:
      "A practical guide for researchers to evaluate journal scope, indexing, publication ethics, review process, and publication requirements before manuscript submission.",
    category: "Journals",
    date: "15 June 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
     slug: "difference-between-scopus-and-web-of-science",
    title: "Difference Between Scopus and Web of Science",
    description:
      "Understand the key differences between Scopus and Web of Science including coverage, citation metrics, journal selection criteria, and research visibility.",
    category: "Publishing",
    date: "18 June 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Publication Ethics in Academic Research",
      slug: "publication-ethics-in-academic-research",
    description:
      "Learn the importance of originality, proper citation practices, ethical compliance, transparency, and responsible scholarly communication.",
    category: "Research Ethics",
    date: "22 June 2026",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Preparing a Thesis for Academic Publication",
     slug: "preparing-a-thesis-for-academic-publication",
    description:
      "Key considerations for converting thesis work into publication-ready academic manuscripts while maintaining research quality and structure.",
    category: "Thesis Support",
    date: "25 June 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Conference Proceedings Publication: A Complete Overview",
    slug: "conference-proceedings-publication-overview",
    description:
      "Understand proceedings publication workflows, documentation requirements, editorial processes, and academic dissemination practices.",
    category: "Conferences",
    date: "29 June 2026",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Academic Writing Best Practices for Researchers",
    slug: "academic-writing-best-practices",
    description:
      "Essential writing practices that improve clarity, structure, readability, and scholarly communication in academic manuscripts.",
    category: "Research Writing",
    date: "02 July 2026",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
  },
];

const BlogPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="text-center">
          
         

          {/* <h1 className="mt-4 text-5xl font-bold text-[#071739]">
           
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
               Academic Blogs{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                & Research Insights
              </span>
            </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#64748b]">
            Explore articles related to academic publishing, research
            writing, journals, conferences, publication ethics and
            scholarly communication.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          
          {blogCategories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-red-100 bg-white px-5 py-2 text-sm font-medium text-[#071739] transition hover:border-red-200 hover:bg-red-50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                
                {/* Category */}
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                  {blog.category}
                </span>

                {/* Date */}
                <div className="mt-4 flex items-center gap-2 text-sm text-[#64748b]">
                  
                  <Calendar size={14} />

                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-xl font-semibold leading-8 text-[#071739]">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-[#64748b]">
                  {blog.description}
                </p>

                {/* Read More */}
           <Link
  to={`/blog/${blog.slug}`}
  className="mt-6 flex items-center gap-2 font-medium text-red-600 transition hover:gap-3"
>
  Read More
  <ArrowRight size={16} />
</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;