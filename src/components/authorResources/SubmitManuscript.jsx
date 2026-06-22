import {
  ShieldCheck,
  Send,
  CheckCircle2,
  ClipboardCheck,
  Upload,
  Headphones,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const SubmitMenuscript = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* Hero */}
        <div className="text-center">
          {/* <span className="inline-flex rounded-full border border-red-100 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">
            Submission Portal
          </span> */}

          {/* <h1 className="mt-4 text-3xl font-bold text-[#071739] sm:text-4xl">
             
          </h1> */}
          <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
            Submit{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Manuscript
            </span>
          </h1>

          <h2 className="mt-3 text-lg font-medium text-slate-600">
            Publish Your Research with Redmont Publications
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-[15px] leading-7 text-slate-600">
            Redmont Publications welcomes original, high-quality scholarly
            submissions from researchers, academicians, professionals,
            institutions, and industry experts worldwide.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            We provide a professional, transparent, and ethical publication
            process for journals, books, conference proceedings, edited volumes,
            book chapters, and other academic publications across a wide range
            of disciplines.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            Whether you are an early-career researcher or an experienced
            academic, our editorial team is committed to supporting the
            dissemination of impactful research and scholarly work.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <BookOpen size={18} className="text-blue-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">We Accept</h2>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {[
                    "Journal Manuscripts",
                    "Original Research Articles",
                    "Review Articles",
                    "Case Studies",
                    "Short Communications",
                    "Technical Notes",
                    "Perspective Papers",
                    "Book Publishing Proposals",
                    "Academic Books",
                    "Textbooks",
                    "Reference Books",
                    "Monographs",
                    "Edited Books",
                    "Professional Books",
                    "Conference Papers",
                    "Conference Proceedings",
                    "Abstract Books",
                    "Seminar and Symposium Publications",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-blue-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                <ShieldCheck size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  Why Publish with Redmont Publications?
                </h2>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {[
                    "Professional Editorial Support",
                    "Transparent Publication Process",
                    "Ethical Publishing Standards",
                    "DOI Registration Support",
                    "ISBN Support for Books",
                    "Open Access Publishing Options",
                    "Global Visibility and Accessibility",
                    "Digital Publication and Archiving",
                    "Dedicated Author Assistance",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                <ClipboardCheck size={18} className="text-orange-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  Submission Requirements
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Before submitting your manuscript, please ensure that:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "The work is original and unpublished.",
                    "All authors have approved the submission.",
                    "References and citations are properly formatted.",
                    "Ethical approvals have been obtained where applicable.",
                    "The manuscript complies with our Author Guidelines and Publication Ethics Policy.",
                    "Any required permissions for third-party materials have been secured.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-1 text-orange-600"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Functional Cookies */}

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                <ClipboardCheck size={18} className="text-indigo-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  Peer Review Process
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  All eligible submissions undergo editorial assessment and may
                  be subject to peer review depending on the publication type.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Our review process is designed to ensure:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Academic quality",
                    "Research integrity",
                    "Originality",
                    "Relevance",
                    "Ethical compliance",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-1 text-indigo-600"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Publication decisions are based solely on scholarly merit.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                <Upload size={18} className="text-violet-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  How to Submit
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors may submit their manuscripts, book proposals,
                  conference papers, or publication inquiries through the
                  submission form provided on this page.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Please include:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Manuscript Title",
                    "Author Details",
                    "Institutional Affiliation",
                    "Contact Information",
                    "Abstract",
                    "Keywords",
                    "Manuscript File",
                    "Any Supporting Documents",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-1 text-violet-600"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Our editorial team will acknowledge receipt and provide
                  further instructions regarding the review and publication
                  process.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                <Headphones size={18} className="text-amber-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  Need Assistance?
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  If you have questions regarding manuscript preparation,
                  publication options, book publishing, conference proceedings,
                  or submission requirements, our team is available to assist
                  you.
                </p>

                <div className="mt-6 space-y-3 text-[15px] text-slate-700">
                  <p>
                    <span className="font-semibold text-[#071739]">Email:</span>{" "}
                    info@redmontpublications.com
                  </p>

                  <p>
                    <span className="font-semibold text-[#071739]">Phone:</span>{" "}
                    +91 9711052076
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100">
                  <Send size={20} className="text-red-600" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#071739]">
                    Start Your Publication Journey Today
                  </h2>

                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600">
                    Submit your manuscript and contribute to the advancement of
                    academic knowledge through a professional, ethical, and
                    globally accessible publishing platform provided by Redmont
                    Publications.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@redmontpublications.com?subject=Manuscript Submission"
                  className="rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
                >
                  Submit Manuscript
                </a>

                <Link
                  to="/contact"
                  className="rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-medium text-red-600 transition-all duration-300 hover:bg-red-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitMenuscript;
