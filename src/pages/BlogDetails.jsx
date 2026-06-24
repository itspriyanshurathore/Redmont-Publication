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

      <div className="mt-12 space-y-6">
  {Array.isArray(blog.introduction) ? (
    blog.introduction.map((item, index) => (
      <p
        key={index}
        className="text-lg leading-9 text-slate-600"
      >
        {item}
      </p>
    ))
  ) : (
    <p className="text-lg leading-9 text-slate-600">
      {blog.introduction}
    </p>
  )}
</div>

        {/* Sections */}
<div className="mt-16 space-y-16">
  {blog.sections?.map((section, index) => (
    <div key={index}>

      <h2 className="text-3xl font-bold text-[#071739]">
        {section.heading}
      </h2>

      {/* Content */}

      {section.content && (
        <div className="mt-6 space-y-4">
          {Array.isArray(section.content)
            ? section.content.map((text, i) => (
                <p
                  key={i}
                  className="leading-8 text-slate-600"
                >
                  {text}
                </p>
              ))
            : (
              <p className="leading-8 text-slate-600">
                {section.content}
              </p>
            )}
        </div>
      )}

      {/* Main Points */}

      {section.points && (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {section.points.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              ✓ {point}
            </div>
          ))}
        </div>
      )}

      {/* Additional Content */}

      {section.additionalContent && (
        <div className="mt-8 space-y-3">
          {section.additionalContent.map((item, i) => (
            <p
              key={i}
              className="font-medium text-[#071739]"
            >
              {item}
            </p>
          ))}
        </div>
      )}

      {/* Additional Points */}

      {section.additionalPoints && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {section.additionalPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-50 p-5"
            >
              • {item}
            </div>
          ))}
        </div>
      )}

      {/* Numbered Points */}

      {section.numberedPoints && (
        <div className="mt-8 space-y-3">
          {section.numberedPoints.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-2xl border p-4"
            >
              <span className="font-bold text-red-600">
                {i + 1}.
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Highlighted Points */}

      {section.highlightedPoints && (
        <div className="mt-6 flex flex-wrap gap-3">
          {section.highlightedPoints.map((item, i) => (
            <span
              key={i}
              className="rounded-full bg-red-50 px-4 py-2 text-red-600"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Subsections */}

      {section.subsections && (
        <div className="mt-10 space-y-8">
          {section.subsections.map((sub, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <h3 className="text-xl font-semibold text-[#071739]">
                {sub.title}
              </h3>

              {sub.content?.map((text, i) => (
                <p
                  key={i}
                  className="mt-3 text-slate-600"
                >
                  {text}
                </p>
              ))}

              {sub.points && (
                <ul className="mt-4 list-disc pl-6">
                  {sub.points.map((item, i) => (
                    <li key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {sub.example && (
                <div className="mt-4 rounded-xl bg-slate-50 p-4 italic">
                  {sub.example}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Timeline */}

      {section.timeline && (
        <div className="mt-10 space-y-8">
          {section.timeline.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-l-4 border-red-600 bg-white p-6"
            >
              <h3 className="font-bold text-[#071739]">
                {item.step}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.description}
              </p>

              {item.points && (
                <ul className="mt-4 list-disc pl-6">
                  {item.points.map((point, i) => (
                    <li key={i}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Comparison */}

      {section.comparison && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {Object.entries(section.comparison).map(
            ([title, values]) => (
              <div
                key={title}
                className="rounded-3xl border p-6"
              >
                <h3 className="mb-4 text-xl font-bold capitalize">
                  {title}
                </h3>

                <ul className="space-y-2">
                  {Array.isArray(values)
                    ? values.map((v, i) => (
                        <li key={i}>
                          • {v}
                        </li>
                      ))
                    : (
                      <li>{values}</li>
                    )}
                </ul>
              </div>
            )
          )}
        </div>
      )}

      {/* Example Block */}

      {section.exampleBlock && (
        <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white">
          <pre className="overflow-auto whitespace-pre-wrap">
            {JSON.stringify(
              section.exampleBlock,
              null,
              2
            )}
          </pre>
        </div>
      )}

      {/* Conclusion */}

      {section.conclusion && (
        <div className="mt-8 rounded-2xl bg-blue-50 p-6">
          <p className="text-blue-900">
            {section.conclusion}
          </p>
        </div>
      )}

    </div>
  ))}
  

</div>



      </div>
      

    </section>
    
  );
};

export default BlogDetails;