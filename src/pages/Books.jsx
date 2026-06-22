import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const booksData = [
{
  id: 1,
  title: "Machine Learning and Data Analytics: Concepts and Applications",
  author: "Dr. Alok Verma",
  year: 2025,
  isbn: "978-93-00000-001",
  category: "Computer Science",
  image: "/images/Book-1.png"

},
{
  id: 2,
  title: "Environmental Management for Sustainable Development",
  author: "Er. Swati Mishra",
  year: 2025,
  isbn: "978-93-00000-002",
  category: "Environmental Science",
  image: "/images/Book-2.png",
},
{
  id: 3,
  title: "Advances in Civil Engineering and Infrastructure Development",
  author: "Anjali Srivastava",
  year: 2025,
  isbn: "978-93-00000-003",
  category: "Civil Engineering",
  image: "/images/Book-3.png",
},
{
  id: 4,
  title: "Contemporary Legal Issues in the Digital Age",
  author: "Dr. Deepak Pandey",
  year: 2025,
  isbn: "978-93-00000-004",
  category: "Law",
  image: "/images/Book-4.png",
},
{
  id: 5,
  title: "Interdisciplinary Research for Sustainable Development",
  author: "Dr. Rishabh Bansal",
  year: 2025,
  isbn: "978-93-00000-005",
  category: "Multidisciplinary",
  image: "/images/Book-5.png",
},
{
  id: 6,
  title: "Advances in Clinical Medicine and Patient Care",
  author: "Dr. Shweta Pannuji",
  year: 2025,
  isbn: "978-93-00000-006",
  category: "Medical Sciences",
  image: "/images/Book-6.png",
},
{
  id: 7,
  title: "Telemedicine and Digital Health Innovations",
  author: "Arvind Shisodiya",
  year: 2025,
  isbn: "978-93-00000-007",
  category: "Healthcare Technology",
  image: "/images/Book-7.png",
},
{
  id: 8,
  title: "Ancient Civilizations: Society, Culture and Governance",
  author: "Dr. Anjana Pandey",
  year: 2025,
  isbn: "978-93-00000-008",
  category: "History",
  image: "/images/Book-8.png",
},
{
  id: 9,
  title: "Historical Research Methods and Historiography",
  author: "Shubham Kumar Patel",
  year: 2025,
  isbn: "978-93-00000-009",
  category: "History & Research",
  image: "/images/Book-9.png",
},
{
  id: 10,
  title: "Psychological Well-Being in Contemporary Society",
  author: "AbhiShek Raj",
  year: 2025,
  isbn: "978-93-00000-010",
  category: "Psychology",
  image: "/images/Book-10.png",
},
];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredBooks = booksData
    .filter((book) => {
      const matchesSearch =
        book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesYear =
        selectedYear ? book.year === Number(selectedYear) : true;

      const matchesCategory =
        selectedCategory ? book.category === selectedCategory : true;

      return matchesSearch && matchesYear && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "oldest") return a.year - b.year;
      return 0;
    });

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-4 py-30 font-sans">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-100 opacity-60 blur-3xl animate-pulse"></div>

      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-red-50 opacity-70 blur-3xl animate-pulse"></div>

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

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          {/* <h1 className="text-4xl font-bold text-[#071739]"> </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
               Published{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Books
              </span>
            </h1>

          <p className="mx-auto mt-4 max-w-5xl text-sm leading-relaxed text-[#475569]">
            Explore academic, research-oriented, and professional publications
            supported by Redmont Publications across multidisciplinary domains.
            Our catalog includes scholarly books, edited volumes, conference
            publications, educational resources, and research-based works
            developed with a focus on academic quality and professional
            publishing standards.
          </p>
        </div>
        {/* <div className="mb-8 flex flex-wrap gap-3">
          {[
            "Management",
            "Commerce",
            "Multidisciplinary Research",
            "Education",
            "Computer Science",
            "Social Sciences",
            "Healthcare",
            "Conference Proceedings",
          ].map((category) => (
            <button
              key={category}
              className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-[#071739] transition-all duration-300 hover:bg-red-700 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Layout */}
        <div>
          {/* FILTERS */}
          <div className="mb-10 rounded-2xl border border-red-300 bg-white p-4 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-[1.8fr_1fr_1fr_1fr_auto]">
              {/* Search */}
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search by Book Title, Author or ISBN..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-red-400"
                />
              </div>

              {/* Category */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 rounded-xl border border-slate-200 px-4"
              >
                <option value="">All Categories</option>

                <option value="Management">Management</option>

                <option value="Commerce">Commerce</option>

                <option value="Education">Education</option>

                <option value="Computer Science">Computer Science</option>

                <option value="Healthcare">Healthcare</option>
              </select>

              {/* Year */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="h-12 rounded-xl border border-slate-200 px-4"
              >
                <option value="">All Years</option>

                <option value="2025">2025</option>

                <option value="2024">2024</option>

                <option value="2023">2023</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-12 rounded-xl border border-slate-200 px-4"
              >
                <option value="newest">Newest First</option>

                <option value="oldest">Oldest First</option>
              </select>

              {/* <button className="h-12 rounded-xl bg-[#071739] px-8 text-white transition hover:bg-[#0b2757]">
      Search
    </button> */}
            </div>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#071739]">
              All Published Books
            </h2>

            <p className="text-sm text-slate-500">
              Showing {filteredBooks.length} books
            </p>
          </div>

          {/* BOOK GRID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                whileHover={{ y: -8 }}
                className="group [perspective:1200px]"
              >
                {/* CARD */}
                <div className="relative h-[470px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* FRONT */}

                  <div className="absolute inset-0 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-lg [backface-visibility:hidden]">
                    {/* Cover */}
                    <div className="h-[78%] overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex h-[22%] flex-col justify-center px-4">
                      <h3 className="line-clamp-1 text-base font-semibold text-[#071739]">
                        {book.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {book.author}
                      </p>

                      <span className="mt-2 inline-block w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                        {book.category}
                      </span>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl border border-red-200 bg-[#071739] shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {/* Background Image */}
                    <img
                      src={book.image}
                      alt={book.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-20"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-[#071739]/85"></div>

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-end p-6">
                      <div className="transition duration-500 group-hover:-translate-y-2">
                        <p className="text-sm uppercase tracking-[0.2em] text-red-300">
                          Academic Publication
                        </p>

                        <h3 className="mt-3 text-2xl font-bold leading-snug text-white">
                          {book.title}
                        </h3>

                        <p className="mt-4 text-base text-red-200">
                          {book.author}
                        </p>

                        <div className="mt-5 space-y-2">
                          <p className="text-sm text-neutral-300">
                            ISBN: {book.isbn}
                          </p>

                          <p className="text-sm text-neutral-300">
                            Year: {book.year}
                          </p>

                          <p className="text-sm text-neutral-300">
                            Category: {book.category}
                          </p>
                        </div>

                        {/* Button */}
                        <div className="mt-6 flex gap-3">
                          <Link
                            to={`/books/${book.id}`}
                            className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800"
                          >
                            View Details
                          </Link>

                          {/* <button
    className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
  >
    Add to Cart
  </button> */}
                        </div>
                      </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-red-500/10 blur-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
