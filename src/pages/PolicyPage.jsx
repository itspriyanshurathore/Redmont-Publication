import { useParams } from "react-router-dom";
import { policies } from "@/data/PolicyData";

const PolicyPage = () => {
  const { slug } = useParams();

  const page = policies[slug];

  if (!page) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#071739]">
          Page Not Found
        </h2>
      </div>
    );
  }

  return (
  <section className="bg-white py-30">
  <div className="mx-auto max-w-5xl px-4">

    {/* Header */}
   <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-red-50 via-white to-blue-50 p-6 lg:py-24">
     {/* <h1 className="text-3xl font-bold leading-tight text-[#071739] lg:text-5xl">
       
      </h1> */}
         <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
          {/* Patent{" "} */}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              {page.title}
              </span>
            </h1>

    </div>

   
<article className="mt-6">

  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6">

   <div
  className="
    policy-content
    text-[15px]
    leading-7
    text-slate-600
  "
>
      {page.content.split("\n").map((line, index) => {
        const trimmed = line.trim();

        // Main Section Heading
        if (/^\d+\./.test(trimmed)) {
          return (
            <h2
              key={index}
          className="mt-6 mb-2 text-[22px] font-bold text-[#071739]"
            >
              {trimmed}
            </h2>
          );
        }

        // Bullet Point
        if (trimmed.startsWith("•")) {
          return (
            <div
              key={index}
           className="ml-4 flex items-start gap-2 py-0.5"
            >
            <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-red-500"></span>

              <p>{trimmed.replace("•", "")}</p>
            </div>
          );
        }

        // Sub Heading
        if (
          trimmed.length > 0 &&
          trimmed.length < 35 &&
          !trimmed.includes(".")
        ) {
          return (
            <h3
              key={index}
             className="mt-3 mb-1 text-lg font-semibold text-[#071739]"
            >
              {trimmed}
            </h3>
          );
        }

        // Normal Paragraph
        return trimmed ? (
          <p
            key={index}
            className="mb-2"
          >
            {trimmed}
          </p>
        ) : (
        <div key={index} className="h-1" />
        );
      })}
    </div>

  </div>
<div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-red-600 to-blue-700"></div>
</article>

  </div>
  
</section>
  );
};

export default PolicyPage;