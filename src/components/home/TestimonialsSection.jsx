import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The publication process was smooth and professionally managed with proper editorial guidance.",
    name: "Dr. Rajesh Sharma",
    title: "Professor of Computer Science",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    quote:
      "A reliable platform for scholarly publication support and academic consultancy services.",
    name: "Prof. Ananya Verma",
    title: "Research Scholar",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },

  {
    quote:
      "The editorial workflow and publication support were transparent and highly structured.",
    name: "Dr. Arvind Mehta",
    title: "Academic Researcher",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    quote:
      "Their publication quality and research support helped improve our institutional visibility.",
    name: "Dr. Priya Nair",
    title: "Journal Author",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },

  {
    quote:
      "Professional publishing standards with responsive communication throughout the process.",
    name: "Prof. Vivek Kulkarni",
    title: "University Faculty",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl"></div>

      {/* Background Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        
        <div className="absolute -top-10 left-[18%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[52%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>

        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-[#071739]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        
        {/* Floating Profile Images */}
        <div className="pointer-events-none absolute left-6 top-0 hidden lg:block">
          
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-2xl"
          />
        </div>

        <div className="pointer-events-none absolute right-8 top-4 hidden lg:block">
          
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
            className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-2xl"
          />
        </div>

        <div className="pointer-events-none absolute left-[18%] top-24 hidden lg:block">
          
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
            className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-xl"
          />
        </div>

        <div className="pointer-events-none absolute right-[18%] top-28 hidden lg:block">
          
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
            className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-xl"
          />
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-[30px] font-bold leading-[1.2] text-[#071739] lg:text-[38px]">
            
            Trusted By{" "}

            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Researchers & Scholars
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#475569]">
            Researchers, faculty members and institutions trust our
            academic publishing and editorial support services.
          </p>
        </div>

        {/* Moving Cards */}
        <div className="mt-12">
          
          <InfiniteMovingCards
            items={testimonials.map((item) => ({
              quote: item.quote,
              name: item.name,
              title: item.title,
              image: item.image,
            }))}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-4"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;