import { useParams } from "react-router-dom";
import { blogs } from "@/data/Blogs";


const BlogDetails = () => {
 const { slug } = useParams();

console.log(slug);

  const blog = blogs.find(
    (item) => item.slug === slug
  );
  

  if (!blog) {
    return (
      <div className="py-20 text-center">
        Blog not found
      </div>
    );
  }

  return (
    <section className="py-30">

      <div className="mx-auto max-w-5xl px-6">

        {/* Category */}

        <span className="rounded-full bg-red-50 px-4 py-2 text-sm text-red-600">
          {blog.category}
        </span>

        {/* Title */}

        <h1 className="mt-6 text-4xl font-bold text-[#071739] lg:text-5xl">
          {blog.title}
        </h1>

        {/* Date */}

        <p className="mt-4 text-slate-500">
          {blog.date}
        </p>

        {/* Image */}

        <div className="mt-10 overflow-hidden rounded-[32px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[300px] w-full object-cover lg:h-[500px]"
          />
        </div>

        {/* Intro */}

        <p className="mt-10 text-lg leading-9 text-slate-600">
          {blog.introduction}
        </p>

        {/* Sections */}

        <div className="mt-10 space-y-10">

          {blog.sections.map((section, index) => (

            <div key={index}>

              <h2 className="text-2xl font-bold text-[#071739]">
                {section.heading}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {section.content}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
    
  );
};

export default BlogDetails;