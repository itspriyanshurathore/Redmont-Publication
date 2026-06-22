import { Link } from "react-router-dom";
import { BookOpen, FileText, GraduationCap } from "lucide-react";

const publications = [
  {
    title: "Advanced Research Methodologies",
   
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    link: "https://drive.google.com",
  },
  {
    title: "International AI Conference 2026",
   
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    link: "https://drive.google.com",
  },
  {
    title: "Modern Scientific Discoveries",
   
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    link: "https://drive.google.com",
  },
  {
    title: "Journal of Academic Innovation",
   
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop",
    link: "https://drive.google.com",
  },
  // {
  //   title: "Data Science & Analytics",
  //   category: "Published Book",
  //   icon: BookOpen,
  //   image:
  //     "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
  //   link: "https://drive.google.com",
  // },
];

const OurBookSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fcfcfd] py-12 md:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between opacity-20">
        <div className="h-40 w-40 rounded-full bg-red-100 blur-3xl md:h-52 md:w-52"></div>
        <div className="h-40 w-40 rounded-full bg-blue-100 blur-3xl md:h-52 md:w-52"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Featured Publications
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Explore Our
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Academic Publications
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Discover published books, conference proceedings, and research works
            crafted for global academic audiences.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {publications.map((item, index) => {
            return (
              <article
                key={index}
                className="mx-auto max-w-[300px] overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden"
                >
                  <div className="relative h-[300px] overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/95" />

                    <div className="absolute inset-x-0 bottom-0 px-4 pb-6">
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-200/80">
                        Publication
                      </p>
                      <h3 className="mt-3 text-lg font-bold leading-7 text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </a>
                {/* <div className="px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-sm leading-6 text-slate-600">
                    Click the image to view the published document in Drive.
                  </p>
                </div> */}
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/books"
            className="rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-red-500/10 transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/20"
          >
            Explore More Publications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBookSection;
