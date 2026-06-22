import {
  ShieldCheck,
  Database,
  Users,
  Share2,
  CheckCircle2,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
            Redmont Publications ("Redmont Publications", "we", "our", or "us")
            respects the privacy of authors, researchers, reviewers, editors,
            conference participants, institutional partners, and visitors to our
            website. This Privacy Policy explains how we collect, use, store,
            process, and protect personal information obtained through our
            website, publication platforms, manuscript submission systems, and
            related publishing services.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            By accessing our website or using any of our services, you agree to
            the terms outlined in this Privacy Policy.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {/* Section 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <Database size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  1. Information We Collect
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  We may collect personal and professional information that you
                  voluntarily provide when interacting with Redmont
                  Publications, including but not limited to:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Full name",
                    "Email address",
                    "Phone number",
                    "Institutional affiliation",
                    "Postal address",
                    "Academic qualifications",
                    "ORCID iD and researcher identifiers",
                    "Curriculum Vitae (CV)",
                    "Manuscript files and supplementary materials",
                    "Book proposals and publishing submissions",
                    "Reviewer comments and editorial communications",
                    "Payment and billing information",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-7 text-slate-600">
                  We may also automatically collect technical information such
                  as:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "IP address",
                    "Browser type and version",
                    "Device information",
                    "Operating system",
                    "Website usage statistics",
                    "Cookies and similar tracking technologies",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck size={18} className="text-blue-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  2. How We Use Your Information
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  The information collected may be used to:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Process manuscript and book submissions",
                    "Conduct peer review and editorial evaluations",
                    "Communicate with authors, reviewers, editors, and contributors",
                    "Publish journals, books, conference proceedings, and scholarly content",
                    "Register Digital Object Identifiers (DOIs)",
                    "Generate invoices and process payments",
                    "Provide customer support and publishing assistance",
                    "Improve our website, services, and user experience",
                    "Maintain publication records and archives",
                    "Prevent unethical publishing practices, fraud, and misconduct",
                    "Comply with legal, regulatory, and ethical obligations",
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

          {/* Section 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <Users size={18} className="text-green-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  3. Academic Publishing and Editorial Processing
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Information submitted to Redmont Publications may be shared
                  with editors, editorial board members, reviewers, production
                  staff, indexing agencies, DOI registration agencies, and
                  publishing partners strictly for purposes related to
                  manuscript evaluation, publication, editorial management, and
                  scholarly communication.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewer identities may remain confidential where required by
                  the journal's peer-review model.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <Share2 size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  4. Sharing of Information
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications does not sell, rent, or trade personal
                  information to third parties.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  We may share information only when:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Required by applicable law or legal process;",
                    "Necessary for publication, editorial, and peer-review activities;",
                    "Required for DOI registration and metadata dissemination;",
                    "Requested by indexing and abstracting databases;",
                    "Necessary to investigate publication ethics concerns or research misconduct;",
                    "Required to protect the rights, property, security, or operations of Redmont Publications.",
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
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <Database size={18} className="text-amber-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  5. Cookies and Website Analytics
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Our website may use cookies and similar technologies to
                  improve website functionality, analyze visitor behavior,
                  enhance user experience, and maintain website security.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Users may disable cookies through their browser settings;
                  however, certain website features may not function properly if
                  cookies are disabled.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <Database size={18} className="text-cyan-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  6. Data Retention
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  We retain personal and publication-related information only
                  for as long as necessary to fulfill legitimate publishing,
                  legal, archival, administrative, and scholarly recordkeeping
                  purposes.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Published articles, books, proceedings, metadata, and related
                  records may be retained permanently as part of the scholarly
                  record.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <ShieldCheck size={18} className="text-red-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  7. Data Security
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications implements reasonable administrative,
                  technical, and organizational safeguards to protect personal
                  information against unauthorized access, alteration,
                  disclosure, loss, misuse, or destruction.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  While we strive to maintain robust security measures, no
                  method of internet transmission or electronic storage can be
                  guaranteed to be completely secure.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <Users size={18} className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  8. International Data Transfers
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  As an international academic publishing organization,
                  information may be processed, stored, or accessed by editors,
                  reviewers, service providers, and publishing partners located
                  in different countries.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  By using our services, you acknowledge and consent to such
                  international processing where necessary for publication and
                  scholarly communication activities.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <Share2 size={18} className="text-purple-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  9. Third-Party Services and External Links
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Our website may contain links to third-party websites,
                  repositories, indexing services, academic databases, payment
                  gateways, and external resources.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications is not responsible for the privacy
                  practices, content, or policies of third-party websites. Users
                  are encouraged to review the privacy policies of such websites
                  independently.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <Users size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  10. User Rights
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Subject to applicable laws, users may have the right to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Request access to personal information;",
                    "Request correction of inaccurate information;",
                    "Request deletion of personal information where legally permissible;",
                    "Object to certain data processing activities;",
                    "Withdraw consent where applicable.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Requests related to personal information may be submitted
                  using the contact details provided below.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11 */}

          <div>
            <h2 className="text-lg font-bold text-[#071739]">
              11. Research Integrity and Publication Ethics
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              To preserve the integrity of the scholarly record, Redmont
              Publications may retain information relevant to editorial
              assessments, plagiarism investigations, ethical reviews,
              corrections, expressions of concern, retractions, and other
              publication-related matters.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Certain records may be retained even after publication or account
              closure where necessary to maintain publication integrity and
              comply with industry standards.
            </p>
          </div>

          {/* Section 12 */}

          <div>
            <h2 className="text-lg font-bold text-[#071739]">
              12. Children's Privacy
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              The services offered by Redmont Publications are intended for
              researchers, academics, professionals, institutions, and
              individuals engaged in scholarly and publishing activities.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              We do not knowingly collect personal information from individuals
              under the age of eighteen (18).
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-lg font-bold text-[#071739]">
              13. Changes to This Privacy Policy
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Redmont Publications reserves the right to update, revise, or
              modify this Privacy Policy at any time without prior notice.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Any changes will become effective immediately upon publication on
              this page. Continued use of our website and services constitutes
              acceptance of the revised Privacy Policy.
            </p>
          </div>

          {/* Section 14 */}

          <div className="w-full">
            <h2 className="text-lg font-bold text-[#071739]">
              14. Contact Information
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              For questions, concerns, or requests regarding this Privacy Policy
              or the handling of personal information, please contact:
            </p>

            <div className="mt-5 space-y-3 text-[15px] text-slate-700">
              <p>
                <span className="font-semibold text-[#071739]">
                  Redmont Publications
                </span>
              </p>

              <p>
                <span className="font-semibold text-[#071739]">Email:</span>{" "}
                support@redmontpublications.com
              </p>

              <p>
                <span className="font-semibold text-[#071739]">Phone:</span> +91
                9711052076
              </p>

              <p>
                <span className="font-semibold text-[#071739]">Website:</span>{" "}
                www.redmontpublications.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
