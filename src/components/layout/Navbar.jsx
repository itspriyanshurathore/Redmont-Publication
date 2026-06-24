import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import { ChevronDown, Menu, X } from "lucide-react";



const navItems = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",

    dropdown: [
      {
        label: "About Us",
        path: "/about",
      },

      {
        label: "Vision & Mission",
        path: "/vision-mission",
      },

      {
        label: "Publishing Ethics",
        path: "policies/publication-ethics",
      },

      {
        label: "Editorial Policy",
        path: "/editorial-policy",
      },
    ],
  },

  {
    name: "Services",
    mega: true,
    dropdown: [
      {
        label: "Journal Publication Support",
        path: "/services/journal-publication",
      },
      {
        label: "Book Publishing",
        path: "/services/book-publishing",
      },
      {
        label: "Thesis Editing",
        path: "/services/thesis-editing",
      },
      {
        label: "Conference Proceedings",
        path: "/services/conference-proceedings",
      },
      {
        label: "Patent Assistance",
        path: "/services/patent-assistance",
      },
      {
        label: "DOI Services",
        path: "/services/doi-services",
      },
      {
        label: "Manuscript Formatting",
        path: "/services/manuscript-formatting",
      },
      {
        label: "Language Editing",
        path: "/services/language-editing",
      },
      {
        label: "Research Consultancy",
        path: "/services/research-consultancy",
      },
    ],
  },

  {
    name: "Journals",

    mega: true,

    dropdown: [
      // {
      //   label: "Current Journals",
      //   path: "/policies/current",
      // },

      {
        label: "Upcoming Journals",
        path: "/journals/upcoming",
      },

      {
        label: "Author Guidelines",
        path: "/policies/author-guidelines",
      },

      {
        label: "Reviewer Guidelines",
        path: "/policies/reviewer-guidelines",
      },

      {
        label: "Publication Ethics",
        path: "/policies/publication-ethics",
      },

      {
        label: "Submit Manuscript",
        path: "/policies/submit-manuscript",
      },
    ],
  },

  {
    name: "Books",

    dropdown: [
      {
        label: "Published Books",
        path: "/books",
      },

      {
        label: "Publish Your Book",
        path: "/books/publish",
      },

      {
        label: "ISBN Services",
        path: "/books/isbn-services",
      },
    ],
  },

  {
    name: "Conferences",

    dropdown: [
      {
        label: "Proceedings Publication",
        path: "/conferences/proceedings",
      },

      {
        label: "Academic Collaborations",
        path: "/conferences/collaborations",
      },

      {
        label: "Conference Support",
        path: "/conferences/support",
      },
    ],
  },

  {
    name: "Insights",

    dropdown: [
      {
        label: "Research Insights",
        path: "/blog",
      },

      // {
      //   label: "Research Insights",
      //   path: "/research-insights",
      // },

      // {
      //   label: "Knowledge Hub",
      //   path: "/knowledge-hub",
      // },
    ],
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-4 max-w-[1700px] px-8">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative overflow-visible rounded-3xl border border-black/5 bg-white/85 shadow-2xl shadow-black/[0.04] backdrop-blur-2xl"
        >
          {/* Glow */}
          <div className="absolute left-10 top-0 h-24 w-24 rounded-full bg-red-100/40 blur-3xl"></div>

          <div className="absolute right-10 top-0 h-24 w-24 rounded-full bg-blue-100/40 blur-3xl"></div>

          {/* NAVBAR */}
          <div className="relative flex items-center justify-between px-5 py-3">
            {/* LOGO */}
         <Link
  to="/"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="relative flex items-center"
>
  {/* Logo */}
 <motion.div
  whileHover={{
    rotate: 360,
    scale: 1.08,
  }}
  transition={{
    duration: 0.8,
    ease: "easeInOut",
  }}
>
  <img
    src="/images/redmont.png"
    alt="Redmont Logo"
    className="h-15 w-15 object-contain"
  />
</motion.div>

  {/* Text */}
  <motion.div
    initial={false}
    animate={{
      width: hovered ? "170px" : "0px",
      opacity: hovered ? 1 : 0,
      marginLeft: hovered ? 12 : 0,
    }}
    transition={{
      duration: 0.35,
      ease: "easeInOut",
    }}
    className="overflow-hidden whitespace-nowrap"
  >
    <h2 className="text-xl font-bold text-red-900">
      Redmont
    </h2>

    <p className="text-[10px] uppercase tracking-[0.25em] text-[#475569]">
      Academic Publishing
    </p>
  </motion.div>
</Link>

            {/* CENTER NAV */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 xl:flex">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {/* SIMPLE LINK */}
                  {item.path ?
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          isActive ?
                            "bg-gradient-to-r from-red-50 to-blue-50 text-[#071739]"
                          : "text-[#475569] hover:bg-black/[0.03] hover:text-[#071739]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  : <button className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-[#475569] transition-all duration-300 hover:bg-black/[0.03] hover:text-[#071739]">
                      {item.name}

                      <ChevronDown size={16} />
                    </button>
                  }

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {openDropdown === item.name && item.dropdown && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className={`absolute left-1/2 top-[108%] z-50 mt-2 -translate-x-1/2 rounded-[24px] border border-black/5 bg-white/98 p-3 shadow-2xl shadow-black/[0.06] backdrop-blur-2xl ${
                          item.mega ?
                            "grid w-[560px] grid-cols-2 gap-1"
                          : "grid w-[320px] grid-cols-1 gap-1"
                        }`}
                      >
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.path}
                            className="flex items-center rounded-xl px-4 py-3 text-[14px] font-medium text-[#475569] transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-[#071739]"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
           <div className="flex items-center gap-3">
  
  {/* Secondary CTA */}
  {/* <motion.div
    whileHover={{
      scale: 1.03,
      y: -2,
    }}
    whileTap={{
      scale: 0.97,
    }}
  >
    <Link
      to="/contact"
      className="hidden rounded-xl border border-black/5 bg-white px-4 py-2 text-sm font-medium text-[#071739] transition-all duration-300 hover:bg-black/[0.03] xl:flex items-center"
    >
      Talk To Expert
    </Link>
  </motion.div> */}

  {/* Primary CTA */}
  <motion.div
    whileHover={{
      scale: 1.05,
      y: -2,
    }}
    whileTap={{
      scale: 0.97,
    }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 18,
    }}
  >
    <Link
      to="/contact"
      className="group hidden rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-red-500/10 xl:flex items-center gap-2"
    >
      Submit Manuscript

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  </motion.div>

  {/* Mobile Menu */}
  <button
    onClick={() => setMobileMenu(!mobileMenu)}
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-white xl:hidden"
  >
    {mobileMenu ? <X size={20} /> : <Menu size={20} />}
  </button>
</div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="overflow-hidden border-t border-black/5 xl:hidden"
              >
                <div className="flex flex-col gap-2 px-4 py-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.path ?
                        <NavLink
                          to={item.path}
                          onClick={() => setMobileMenu(false)}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-[#475569] transition hover:bg-black/[0.03]"
                        >
                          {item.name}
                        </NavLink>
                      : <details className="group rounded-xl bg-black/[0.02]">
                          <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-[#071739]">
                            {item.name}

                            <ChevronDown size={16} />
                          </summary>

                          <div className="flex flex-col px-2 pb-2">
                            {item.dropdown.map((subItem, index) => (
                              <Link
                                key={index}
                                to={subItem.path}
                                onClick={() => setMobileMenu(false)}
                                className="rounded-lg px-3 py-2 text-sm text-[#475569] transition hover:bg-white"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      }
                    </div>
                  ))}

                  {/* Mobile Buttons */}
                  <div className="mt-3 flex flex-col gap-3">
                    <button className="rounded-xl border border-black/5 bg-white px-5 py-3 text-sm font-medium text-[#071739]">
                      Talk To Expert
                    </button>

                    <button className="rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-3 text-sm font-medium text-white">
                      Submit Manuscript
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
