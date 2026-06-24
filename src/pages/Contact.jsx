import {
  Mail,
  Clock,
  Upload,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const services = [
  "Journal Publication Support",
  "Book Publishing",
  "Thesis Editing",
  "Conference Proceedings",
  "DOI Services",
  "Manuscript Formatting",
  "Language Editing",
  "Research Consultancy",
  "Academic Collaboration",
  "Other",
];

const inquiryAreas = [
  "Journal Publication Support",
  "Book Publishing",
  "Thesis Editing",
  "Conference Proceedings",
  "DOI Services",
  "Manuscript Formatting",
  "Language Editing",
  "Research Consultancy",
  "Academic Collaborations",
];

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Hero */}
        <div className="text-center">
          {/* <h1 className="mt-4 text-5xl font-bold text-[#071739]">
             
          </h1> */}
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#071739]">
            Get in{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-4xl px-2 text-sm sm:text-[15px] leading-7 sm:leading-8 text-[#64748b]">
            Redmont Publications welcomes inquiries from researchers,
            academicians, scholars, institutions, conference organizers,
            authors, and academic professionals seeking publishing, editorial,
            research, or scholarly communication support.
          </p>
        </div>

        {/* Main Section */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#071739]">
                Contact Information
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex flex-col items-center text-center gap-3 sm:flex-row sm:items-start sm:text-left">
                  <Mail className="mt-1 text-red-600" size={20} />

                  <div>
                    <p className="font-semibold text-[#071739]">
                      Email Support
                    </p>

                    <p className="mt-2 break-all text-[#64748b]">
                      info@redmontpublications.com
                    </p>

                    <p className="mt-2 break-all text-[#64748b]">
                      redmontpublications@gmail.com
                    </p>

                    {/* <p className="mt-2 break-all text-[#64748b]">
                      submissions@redmontpublications.com
                    </p> */}
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="mt-1 text-red-600" size={20} />

                  <div>
                    <p className="font-semibold text-[#071739]">
                      WhatsApp Support
                    </p>

                    <p className="mt-2 text-[#64748b]">+91 9711052076</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 text-red-600" size={20} />

                  <div>
                    <p className="font-semibold text-[#071739]">
                      Working Hours
                    </p>

                    <p className="mt-2 text-[#64748b]">Monday – Saturday</p>

                    <p className="text-[#64748b]">10:00 AM – 7:00 PM (IST)</p>

                    <p className="text-[#64748b]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Areas */}
            <div className="rounded-2xl border border-black/5 bg-white p-5 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#071739]">
                Inquiry Areas
              </h2>

              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                {inquiryAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm text-[#071739]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Communication */}
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#071739]">
                Professional Communication
              </h2>

              <p className="mt-4 text-[15px] leading-8 text-[#64748b]">
                We encourage professional and respectful communication for all
                academic, editorial, and publication-related discussions.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
                {/* Contact Page */}
                {/* <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        to="/contact"
        className="group flex items-center gap-2 rounded-xl border border-[#071739] px-5 py-3 font-medium text-[#071739] transition-all duration-300 hover:bg-[#071739] hover:text-white"
      >
        Talk to Expert

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div> */}

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/+919711052076"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2 rounded-xl border border-green-600 px-5 py-3 font-medium text-green-600 transition-all duration-300 hover:bg-[#25D366] hover:text-white"
                >
                  <FaWhatsapp className="text-lg" />
                  Get Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="mt-8 text-2xl font-bold text-[#071739]">
              Quick Inquiry Form
            </h2>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full rounded-xl border p-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address *"
                className="w-full rounded-xl border p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Phone / WhatsApp Number *"
                className="w-full rounded-xl border p-4 outline-none"
              />

              <select className="w-full rounded-xl border p-4 outline-none">
                <option>Subject / Service Required *</option>

                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Institution / Organization Name"
                className="w-full rounded-xl border p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Research Area / Discipline"
                className="w-full rounded-xl border p-4 outline-none"
              />

              <textarea
                rows={6}
                placeholder="Message / Query *"
                className="w-full rounded-xl border p-4 outline-none"
              />

              {/* Upload */}
              <div className="rounded-xl border border-dashed p-5">
                <div className="flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left">
                  <Upload size={20} className="text-red-600" />

                  <span className="text-[#071739]">Upload File</span>
                </div>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-4 w-full"
                />

                <p className="mt-3 text-sm text-[#64748b]">
                  Accepted Formats: PDF, DOC, DOCX
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 hover:bg-red-900 py-4 font-medium text-white"
              >
                <Send size={18} />
                Submit Manuscript
              </button>

              <p className="text-center text-sm text-[#64748b]">
                Our team generally responds within 24–48 working hours.
              </p>
            </form>
          </div>
        </div>

        {/* Follow Us */}

        {/* Disclaimer */}
        <div className="mt-10 rounded-2xl border border-red-100 bg-red-50 p-8">
          <h2 className="text-xl font-bold text-[#071739]">Disclaimer</h2>

          <p className="mt-4 text-[15px] leading-8 text-[#475569]">
            Redmont Publications provides academic publishing, editorial, and
            research support services intended for educational and scholarly
            purposes. Researchers and authors are encouraged to independently
            verify institutional and publication requirements where applicable.
          </p>
        </div>
        {/* Follow Us */}
        <div className="mt-16 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-[#071739]">Follow Us</h2>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#64748b]">
              Connect with Redmont Publications across our professional and
              academic platforms for updates, research insights, publications,
              and scholarly activities.
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/company/YOUR-LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
         className="group flex items-center gap-3 rounded-xl border border-[#1877F2]/20 bg-[#1877F2]/5 px-5 py-3 transition-all duration-300 hover:bg-[#1877F2]"
              >
                <FaLinkedin className="text-xl text-[#0077B5] group-hover:text-white" />

                <span className="font-medium text-[#0077B5] group-hover:text-white">
                  LinkedIn
                </span>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://facebook.com/YOUR-FACEBOOK"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 rounded-xl border border-[#1877F2]/20 bg-[#1877F2]/5 px-5 py-3 transition-all duration-300 hover:bg-[#1877F2]"
              >
                <FaFacebook className="text-xl text-[#1877F2] group-hover:text-white" />

                <span className="font-medium text-[#1877F2] group-hover:text-white">
                  Facebook
                </span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/YOUR-INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 rounded-xl border border-pink-200 bg-pink-50 px-5 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400"
              >
                <FaInstagram className="text-xl text-pink-600 group-hover:text-white" />

                <span className="font-medium text-pink-600 group-hover:text-white">
                  Instagram
                </span>
              </motion.a>

              {/* Academic Profile */}
              {/* <motion.a
        href="https://scholar.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-3 transition-all duration-300 hover:bg-green-600"
      >
        <FaGoogleScholar className="text-xl text-green-600 group-hover:text-white" />

        <span className="font-medium text-green-600 group-hover:text-white">
          Academic Profiles
        </span>
      </motion.a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
