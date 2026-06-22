import { useState } from "react";

import { useParams } from "react-router-dom";

import booksData from "../data/BookData";

import { Star, FileText, ShoppingCart } from "lucide-react";

const BookDetails = () => {
  const { id } = useParams();

  const [showBack, setShowBack] = useState(false);

  const [activeTab, setActiveTab] = useState("about");

  // Find Current Book
  const book = booksData.find((item) => item.id === Number(id));

  // Book Not Found
  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f7]">
        <h1 className="text-3xl font-bold text-red-700">Book Not Found</h1>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-4 py-27 font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl animate-pulse"></div>

        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-red-50/70 blur-3xl animate-pulse"></div>

        {/* Ocean Waves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-[320px] w-[200%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            {/* Back Wave */}
            <path
              fill="#fee2e2"
              fillOpacity="0.7"
              d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,224C672,235,768,213,864,192C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"
            ></path>

            {/* Middle Wave */}
            <path
              fill="#fecaca"
              fillOpacity="0.6"
              d="M0,256L60,229.3C120,203,240,149,360,149.3C480,149,600,203,720,224C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
            ></path>

            {/* Front Wave */}
            <path
              fill="#fca5a5"
              fillOpacity="0.5"
              d="M0,224L40,202.7C80,181,160,139,240,122.7C320,107,400,117,480,144C560,171,640,213,720,224C800,235,880,213,960,186.7C1040,160,1120,128,1200,133.3C1280,139,1360,181,1400,202.7L1440,224L1440,320L0,320Z"
            ></path>
          </svg>

          {/* Gradient Blend */}
          <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-red-100/80 to-transparent"></div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        {/* <div className="text-center">
          <h1 className="text-3xl font-bold text-[#071739]">Book Details</h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#475569]">
            Explore complete academic publication details, author insights and
            scholarly information.
          </p>
        </div> */}

        {/* TOP SECTION */}
       <div className="mt-6 grid gap-6 lg:grid-cols-[340px_1fr]">
          {/* LEFT IMAGE SECTION */}
          <div>
           <div className="group relative mx-auto h-[460px] w-full max-w-[320px] [perspective:1200px]">
              <div
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  showBack ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl border border-red-200 bg-white shadow-xl [backface-visibility:hidden]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl border border-red-200 bg-[#071739] shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={book.backImage}
                    alt={book.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-20"
                  />

                  <div className="absolute inset-0 bg-[#071739]/85"></div>

                  <div className="relative flex h-full flex-col justify-end p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                      Back Cover
                    </p>

                    <h3 className="mt-4 text-3xl font-bold text-white">
                      {book.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                      {book.about}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Images */}
            <div className="mt-5 flex justify-center gap-4">
              <button
                onClick={() => setShowBack(false)}
                className="overflow-hidden rounded-xl border border-red-200"
              >
                <img
                  src={book.image}
                  alt=""
                  className="h-20 w-16 object-cover"
                />
              </button>

              <button
                onClick={() => setShowBack(true)}
                className="overflow-hidden rounded-xl border border-red-200"
              >
                <img
                  src={book.backImage}
                  alt=""
                  className="h-20 w-16 object-cover"
                />
              </button>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div>
            {/* <p className="text-sm uppercase tracking-[0.3em] text-red-700">
              Academic Publication
            </p> */}

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#071739]">
              {book.title}
            </h2>

          <div className="mt-5 rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
             <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Author</p>

                  <h3 className="mt-1 font-semibold text-[#071739]">
                    {book.author}
                  </h3>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">ISBN</p>

                  <h3 className="mt-1 font-semibold text-[#071739]">
                    {book.isbn}
                  </h3>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">DOI</p>

                  <h3 className="mt-1 font-semibold text-[#071739]">
                    {book.doi || "N/A"}
                  </h3>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Price</p>

                  <h3 className="mt-1 text-xl font-bold text-red-700">
                    ₹{book.price}
                  </h3>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Review</p>

                  <div className="mt-1 flex items-center gap-2">
                    <Star size={18} className="fill-red-500 text-red-500" />

                    <span className="font-semibold text-[#071739]">
                      {book.rating}/5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
           <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-xl bg-red-700 px-5 py-2.5text-sm font-medium text-white transition hover:bg-red-800">
                Buy Now
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-2.5 text-sm font-medium text-[#071739] transition hover:bg-red-50">
                <ShoppingCart size={18} />
                Add To Cart
              </button>

              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-3 text-sm font-medium text-[#071739] transition hover:bg-red-50"
              >
                <FileText size={18} className="text-red-700" />
                View PDF
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex justify-center">
          <div className="flex overflow-hidden rounded-full border border-red-200 bg-white shadow-sm">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-8 py-3 text-sm font-medium transition ${
                activeTab === "about" ?
                  "bg-red-700 text-white"
                : "text-[#071739]"
              }`}
            >
              About Book
            </button>

            <button
              onClick={() => setActiveTab("author")}
              className={`border-l border-red-200 px-8 py-3 text-sm font-medium transition ${
                activeTab === "author" ?
                  "bg-red-700 text-white"
                : "text-[#071739]"
              }`}
            >
              About Author
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "about" && (
           <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#071739]">
                About Book
              </h3>

             <p className="mt-3 text-[15px] leading-7 text-[#475569]">
                {book.about}
              </p>
            </div>
          )}

         {activeTab === "author" && (
  <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
    <div className="flex flex-col gap-4 md:flex-row md:items-start">

      <img
        src={book.authorImage}
        alt={book.author}
        className="h-24 w-24 rounded-2xl object-cover shadow-md"
      />

      <div className="flex-1">

        {/* <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
          Author Profile
        </p> */}

        <h3 className="mt-1 text-2xl font-bold text-[#071739]">
          {book.author}
        </h3>

        <div className="mt-3 h-[2px] w-14 rounded-full bg-red-600"></div>

        <p className="mt-3 text-[15px] leading-7 text-[#475569]">
          {book.authorAbout}
        </p>

        {/* <div className="mt-4 flex flex-wrap gap-2">

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
            Author
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[#071739]">
            Researcher
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[#071739]">
            Academic Writer
          </span>

        </div> */}

      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
