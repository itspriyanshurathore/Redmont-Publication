import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "@/data/Blogs";


const blogCategories = [
  "Publishing",
  "Research Writing",
  "Academic Guidance",
  "Journals",
  "Conferences",
  "Thesis Support",
  "Research Ethics",
];


const BlogPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>

    <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          
         

          {/* <h1 className="mt-4 text-5xl font-bold text-[#071739]">
           
          </h1> */}
          <h1 className="mt-3 text-3xl font-bold leading-tight text-[#071739] sm:text-4xl lg:text-5xl">
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
            className="rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-medium text-[#071739] transition hover:border-red-200 hover:bg-red-50 sm:px-5 sm:text-sm font-medium text-[#071739] transition hover:border-red-200 hover:bg-red-50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
       <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
  {blogs.map((blog) => (
    <Link
      key={blog.id}
      to={`/blog/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-5">

        {/* Category + Date */}

        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-600">
            {blog.category}
          </span>

          <div className="flex shrink-0 items-center gap-1 text-xs text-slate-500">
            <Calendar size={12} />
            {blog.date}
          </div>
        </div>

        {/* Title */}

        <h2 className="mt-4 line-clamp-2 text-lg font-bold leading-7 text-[#071739] transition-colors duration-300 group-hover:text-red-600">
          {blog.title}
        </h2>

        {/* Description */}

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
          {blog.description}
        </p>

        {/* Footer */}

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-red-600">
          Read Article

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
};

export default BlogPage;