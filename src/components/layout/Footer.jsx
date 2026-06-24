import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#08090c] pt-12 text-white">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

      {/* Slash Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-10 left-[10%] h-[140%] w-[1px] rotate-[25deg] bg-white"></div>

        <div className="absolute -top-10 left-[28%] h-[140%] w-[1px] rotate-[25deg] bg-white"></div>

        <div className="absolute -top-10 left-[46%] h-[140%] w-[1px] rotate-[25deg] bg-white"></div>

        <div className="absolute -top-10 left-[64%] h-[140%] w-[1px] rotate-[25deg] bg-white"></div>

        <div className="absolute -top-10 left-[82%] h-[140%] w-[1px] rotate-[25deg] bg-white"></div>
      </div>

      <div className="relative mx-auto max-w-[1700px] px-6">
        {/* Main Footer */}
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          {/* TOP */}
          <div className="grid gap-10 px-8 py-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
            {/* ABOUT */}
            <div>
              {/* Logo */}
              {/* Logo */}
<div className="flex items-center gap-4">
  
  <motion.div
    whileHover={{
      rotate: 360,
      scale: 1.08,
    }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="shrink-0"
  >
    <img
      src="/images/redmont.png"
      alt="Redmont Publications"
      className="h-14 w-14 object-contain bg-white rounded-full p-2"
    />
  </motion.div>

  <div>
    <h2 className="text-2xl font-bold tracking-wide text-white">
      Redmont
    </h2>

    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
      Publications
    </p>
  </div>
</div>

              {/* Intro */}
              <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
                Redmont Publications is an academic publishing and research
                support organization committed to advancing scholarly
                communication and research excellence.
              </p>

              {/* Contact */}
              <div className="mt-6 flex flex-col gap-4 text-sm text-neutral-400">
                {/* <div className="flex items-start gap-3">
                  <MapPin size={17} className="mt-1 text-red-400" />

                  <p>New Delhi, India</p>
                </div> */}

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-400" />

                  <p>info@redmontpublications.com</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-green-400" />

                  <p>+91 9711052076</p>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Quick Links
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-400">
                <Link to="/" className="transition hover:text-red-400">
                  Home
                </Link>

                <Link to="/about" className="transition hover:text-red-400">
                  About
                </Link>

                <Link to="/services/journal-publication" className="transition hover:text-red-400">
                  Services
                </Link>

                <Link to="/journals/upcoming" className="transition hover:text-red-400">
                  Journals
                </Link>

                <Link to="/books" className="transition hover:text-red-400">
                  Books
                </Link>

                <Link
                  to="/conferences/proceedings"
                  className="transition hover:text-red-400"
                >
                  Conferences
                </Link>

                <Link to="/blog" className="transition hover:text-red-400">
                  Blog
                </Link>

                <Link to="/contact" className="transition hover:text-red-400">
                  Contact
                </Link>
              </div>
            </div>

            {/* AUTHOR RESOURCES */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Author Resources
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-400">
                <Link
                  to="/policies/submit-manuscript"
                  className="transition hover:text-blue-400"
                >
                  Submit Manuscript
                </Link>

                <Link
                  to="/policies/author-guidelines"
                  className="transition hover:text-blue-400"
                >
                  Author Guidelines
                </Link>

                <Link
                  to="/policies/reviewer-guidelines"
                  className="transition hover:text-blue-400"
                >
                  Reviewer Guidelines
                </Link>

                <Link
                  to="/policies/publication-ethics"
                  className="transition hover:text-blue-400"
                >
                  Publication Ethics
                </Link>

                <Link
                  to="/policies/peer-review-policy"
                  className="transition hover:text-blue-400"
                >
                  Peer Review Policy
                </Link>

                <Link
                  to="/policies/open-access-policy"
                  className="transition hover:text-blue-400"
                >
                  Open Access Policy
                </Link>
              </div>
            </div>

            {/* SERVICES */}
            {/* PUBLISHING SERVICES */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Publishing Services
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-400">
                <Link
                  to="/services/journal-publication"
                  className="transition hover:text-red-400"
                >
                  Journal Publication Support
                </Link>

                <Link
                  to="/books"
                  className="transition hover:text-red-400"
                >
                  Book Publishing
                </Link>

                <Link
                  to="/services/thesis-editing"
                  className="transition hover:text-red-400"
                >
                  Thesis Editing
                </Link>

                <Link
                  to="/conferences/proceedings"
                  className="transition hover:text-red-400"
                >
                  Conference Proceedings
                </Link>

                <Link
                  to="/services/doi-services"
                  className="transition hover:text-red-400"
                >
                  DOI Services
                </Link>

                <Link
                  to="/services/patent-assistance"
                  className="transition hover:text-red-400"
                >
                  Patent Assistance
                </Link>

                <Link
                  to="/services/language-editing"
                  className="transition hover:text-red-400"
                >
                  Language Editing
                </Link>

                <Link
                  to="/services/research-consultancy"
                  className="transition hover:text-red-400"
                >
                  Research Consultancy
                </Link>
              </div>
            </div>

            {/* LEGAL */}
            {/* LEGAL & COMPLIANCE */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Legal & Compliance
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-400">
                <Link
                  to="/policies/privacy-policy"
                  className="transition hover:text-blue-400"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/policies/terms-and-conditions"
                  className="transition hover:text-blue-400"
                >
                  Terms & Conditions
                </Link>

                <Link
                  to="/policies/refund-policy"
                  className="transition hover:text-blue-400"
                >
                  Refund Policy
                </Link>

                <Link
                  to="/policies/cookie-policy"
                  className="transition hover:text-blue-400"
                >
                  Cookie Policy
                </Link>

                <Link
                  to="/policies/disclaimer"
                  className="transition hover:text-blue-400"
                >
                  Disclaimer
                </Link>

                <Link
                  to="/policies/retraction-policy"
                  className="transition hover:text-blue-400"
                >
                  Retraction Policy
                </Link>

                <Link
                  to="/policies/plagiarism-policy"
                  className="transition hover:text-blue-400"
                >
                  Plagiarism Policy
                </Link>

                <Link
                  to="/policies/copyright-policy"
                  className="transition hover:text-blue-400"
                >
                  Copyright Policy
                </Link>

                <Link
                  to="/policies/apc-policy"
                  className="transition hover:text-blue-400"
                >
                  APC Policy
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM STRIP */}
          <div className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5 px-8 py-5">
            {/* Glow */}
            <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-red-500/10 blur-3xl"></div>

            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"></div>

            {/* Divider */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

            <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* Left */}
              <p className="text-[11px] tracking-wide text-white/70">
                © 2026 Redmont Publications. All Rights Reserved.
              </p>

              {/* Center */}
              <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent md:mx-8 md:block"></div>

              {/* Right */}
              <div className="flex items-center gap-5 text-[11px] text-white/70">
                <a href="#" className="transition hover:text-red-400">
                  Designed By Redmont
                </a>

                <a href="#" className="transition hover:text-blue-400">
                  Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
