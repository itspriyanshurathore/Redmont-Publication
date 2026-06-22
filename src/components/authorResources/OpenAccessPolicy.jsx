import {
  Globe,
  BookOpen,
  Eye,
  UserCheck,
  FileText,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Mail,
  Unlock,
  CreditCard,
  Archive,
  Share2,
} from "lucide-react";

const OpenAccessPolicy = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          {/* <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
             
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
      Open{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Access Policy
              </span>
            </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
            Redmont Publications is committed to promoting the global
            dissemination of scholarly knowledge through open, accessible, and
            ethical publishing practices. This Open Access Policy outlines the
            principles governing the accessibility, distribution, and use of
            research and scholarly content published by Redmont Publications.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            Our objective is to maximize the visibility, accessibility, impact,
            and preservation of academic research while maintaining high
            standards of publication ethics and scholarly integrity.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
          {/* Section 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Globe size={18} className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  1. Open Access Commitment
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications supports the principle that scholarly
                  research should be accessible to researchers, educators,
                  students, institutions, policymakers, and the public without
                  unnecessary barriers.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Accordingly, published content may be made freely available
                  online, allowing users to access, read, download, and share
                  scholarly works in accordance with applicable licensing terms
                  and copyright policies.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <BookOpen size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  2. Scope of Open Access
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  This policy may apply to:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Research Articles",
                    "Review Articles",
                    "Case Studies",
                    "Short Communications",
                    "Editorials",
                    "Conference Papers",
                    "Conference Proceedings",
                    "Book Chapters",
                    "Academic Books",
                    "Monographs",
                    "Edited Volumes",
                    "Other scholarly publications published by Redmont Publications",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  The level of open access may vary depending on the publication
                  type, journal policy, author agreement, or institutional
                  arrangement.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <Eye size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  3. Reader Access Rights
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Unless otherwise stated, users may:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Read published content online;",
                    "Download content for personal research and educational use;",
                    "Print copies for non-commercial purposes;",
                    "Share links to published materials;",
                    "Cite and reference published works in accordance with academic standards.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-1 text-purple-600"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Users must provide appropriate attribution to the original
                  authors and source when using published content.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <UserCheck size={18} className="text-orange-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  4. Author Rights
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors generally retain copyright ownership of their work
                  unless otherwise agreed through a separate publishing
                  agreement.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors may:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Share their published work with colleagues and students;",
                    "Deposit eligible versions in institutional repositories;",
                    "Include the work in academic portfolios and research profiles;",
                    "Use the work for teaching, educational, and research purposes;",
                    "Promote their publications through personal and institutional channels.",
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

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Authors must acknowledge the original publication source when
                  redistributing published content.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <FileText size={18} className="text-cyan-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  5. Licensing
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Open access content may be distributed under specific
                  licensing terms as determined by:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Journal policies;",
                    "Publication agreements;",
                    "Author-publisher agreements;",
                    "Applicable copyright arrangements.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  The applicable license, where relevant, will be clearly
                  indicated on the published work.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Users are responsible for complying with the terms of any
                  applicable license.
                </p>
              </div>
            </div>
          </div>
          {/* Section 6 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <Unlock size={18} className="text-emerald-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  6. No Access Barriers
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications strives to ensure that openly accessible
                  content can be viewed without subscription fees or paywall
                  restrictions wherever applicable.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  However, certain services, premium content, special
                  publications, or publication-related services may remain
                  subject to separate agreements or charges.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <CreditCard size={18} className="text-amber-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  7. Publication Charges
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Open access publication does not necessarily mean that
                  publication services are provided free of charge.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors may be required to pay applicable publication fees,
                  processing charges, book publication charges, conference
                  publication fees, or related service fees as outlined in the
                  Publication Charges Policy.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Any such charges are intended to support editorial processing,
                  production, hosting, archiving, and publication services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <Archive size={18} className="text-indigo-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  8. Repository and Archiving Policy
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  To ensure long-term preservation and accessibility, Redmont
                  Publications may archive published content through:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Institutional repositories",
                    "Academic databases",
                    "Digital preservation services",
                    "Library systems",
                    "Scholarly indexing platforms",
                    "Publisher archives",
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
                  Such archiving activities are intended to preserve the
                  scholarly record and enhance discoverability.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
                <Share2 size={18} className="text-pink-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  9. Third-Party Distribution
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Published content may be distributed, indexed, archived, or
                  referenced by:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Search engines",
                    "Academic databases",
                    "Library services",
                    "Repository platforms",
                    "Indexing and abstracting services",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-pink-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Such distribution supports wider dissemination and
                  accessibility of scholarly content.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <UserCheck size={18} className="text-cyan-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  10. Author Responsibilities
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors publishing under this Open Access Policy agree to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Submit original work;",
                    "Comply with publication ethics requirements;",
                    "Respect copyright laws;",
                    "Obtain permissions for third-party materials;",
                    "Ensure the accuracy and integrity of submitted content.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Authors remain responsible for the content they publish.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <ShieldCheck size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  11. Compliance with Publication Ethics
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  All open access publications are subject to the same standards
                  of:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Editorial review;",
                    "Peer review (where applicable);",
                    "Publication ethics;",
                    "Plagiarism screening;",
                    "Research integrity requirements.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Open access status does not influence editorial decisions or
                  publication standards.
                </p>
              </div>
            </div>
          </div>

          {/* Section 12 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50">
                <AlertTriangle size={18} className="text-yellow-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  12. Limitation of Liability
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications does not guarantee:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Citation performance;",
                    "Research impact;",
                    "Academic recognition;",
                    "Indexing outcomes;",
                    "Funding success;",
                    "Institutional acceptance of published works.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-1 text-yellow-600"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Such outcomes depend on numerous factors beyond the control of
                  the publisher.
                </p>
              </div>
            </div>
          </div>

          {/* Section 13 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <RefreshCw size={18} className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  13. Policy Updates
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications reserves the right to modify, revise, or
                  update this Open Access Policy at any time.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Any changes shall become effective immediately upon
                  publication on the website.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Continued use of our services constitutes acceptance of the
                  updated policy.
                </p>
              </div>
            </div>
          </div>

          {/* Section 14 */}
          <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                <Mail size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  14. Contact Information
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  For questions regarding this Open Access Policy, please
                  contact:
                </p>

                <div className="mt-5 space-y-3 text-[15px] text-slate-700">
                  <p>
                    <span className="font-semibold text-[#071739]">
                      Redmont Publications
                    </span>
                  </p>

                  <p>
                    <span className="font-semibold text-[#071739]">Email:</span>{" "}
                    info@redmontpublications.com
                  </p>

                  <p>
                    <span className="font-semibold text-[#071739]">Phone:</span>{" "}
                    +91 9711052076
                  </p>

                  <p>
                    <span className="font-semibold text-[#071739]">
                      Website:
                    </span>{" "}
                    www.redmontpublications.com
                  </p>

                  <p>
                    <span className="font-semibold text-[#071739]">
                      Last Updated:
                    </span>{" "}
                    June 07, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[15px] leading-7 text-slate-600">
              Redmont Publications supports the free and responsible exchange of
              scholarly knowledge and is committed to expanding global access to
              high-quality academic research, books, conference proceedings, and
              educational publications through sustainable open access
              publishing practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAccessPolicy;
