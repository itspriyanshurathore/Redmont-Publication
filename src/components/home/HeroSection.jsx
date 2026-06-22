import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <HeroHighlight
      className="w-full"
      containerClassName="px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div className="mx-auto w-full max-w-[560px] text-center md:mx-0 md:text-left">
          {/* Top Label */}
          <p className="inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-medium text-red-600">
           Academic Publishing & Research Support
          </p>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-wide text-slate-900 sm:text-5xl lg:text-[38px]">
           Advancing Research Through  <Highlight>Ethical Publishing</Highlight>{" "} and Scholarly Communication
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-8 text-slate-600 lg:text-lg text-justify">
            Redmont Publications provides academic publishing, editorial support, book publishing, conference proceedings, DOI registration, manuscript preparation and research support services for researchers, institutions and scholarly communities worldwide.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
            <Link to="/policies/submit-manuscript">
              <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/10 transition-all duration-300 hover:bg-red-700">
                Publish With Us
              </button>
            </Link>

            <Link to="/books">
              <button className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/40">
                Explore Publications
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative hidden h-[560px] w-full max-w-[650px] justify-self-center lg:block">
          {/* CENTER IMAGE */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] border border-white bg-white p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Center Book"
              className="h-[220px] w-[260px] rounded-[26px] object-cover"
            />
          </div>

          {/* TOP LEFT */}
          <div className="absolute left-22 top-18 overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Top Left"
              className="aspect-square w-[200px] rounded-[22px] object-cover"
            />
          </div>

          {/* TOP RIGHT */}
          <div className="absolute right-22 top-18 overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1694730750153-8b66cf3dd014?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Top Right"
              className="aspect-square w-[200px] rounded-[22px] object-cover"
            />
          </div>

          {/* BOTTOM LEFT */}
          <div className="absolute bottom-10 left-22 overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bottom Left"
              className="aspect-square w-[200px] rounded-[22px] object-cover"
            />
          </div>

          {/* BOTTOM RIGHT */}
          <div className="absolute bottom-10 right-22 overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bottom Right"
              className="aspect-square w-[200px] rounded-[22px] object-cover"
            />
          </div>

          {/* Red Glow */}
          <div className="absolute right-20 top-20 h-52 w-52 rounded-full bg-red-200/40 blur-3xl"></div>

          {/* Blue Glow */}
          <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl"></div>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default HeroSection;
