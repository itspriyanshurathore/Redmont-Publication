import {
  ShieldCheck,
  FileText,
  Users,
  Search,
  UserCheck,
  ClipboardCheck,
  CheckCircle2,
  FileCheck,
  Lock,
  ShieldAlert,
  Clock3,
  Scale,
  RefreshCw,
  Mail,
} from "lucide-react";

const PeerReview = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          {/* <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
              Policy
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
      Peer{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Review Policy
              </span>
            </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
            Redmont Publications is committed to maintaining the highest
            standards of scholarly quality, academic integrity, transparency,
            and ethical publishing. Peer review plays a critical role in
            ensuring the validity, originality, significance, and quality of
            scholarly publications.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            This Peer Review Policy outlines the procedures and principles
            governing the review of manuscripts submitted to journals, books,
            edited volumes, conference proceedings, and other academic
            publications managed by Redmont Publications.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck size={18} className="text-blue-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  1. Purpose of Peer Review
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  The peer review process is designed to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Evaluate the originality of submitted work;",
                    "Assess scientific, academic, and scholarly quality;",
                    "Verify the validity and reliability of research findings;",
                    "Improve the quality of manuscripts through constructive feedback;",
                    "Ensure compliance with publication ethics standards;",
                    "Assist editors in making informed publication decisions.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-blue-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Peer review serves as an essential quality-control mechanism
                  within scholarly publishing.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <FileText size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  2. Scope of Review
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Peer review may apply to:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Research Articles",
                    "Review Articles",
                    "Case Studies",
                    "Short Communications",
                    "Technical Notes",
                    "Conference Papers",
                    "Conference Proceedings",
                    "Book Chapters",
                    "Edited Volumes",
                    "Academic Books",
                    "Other scholarly submissions deemed appropriate by the editorial team",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  The specific review process may vary depending on the
                  publication type and discipline.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <Users size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  3. Peer Review Model
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications primarily follows a Double-Blind Peer
                  Review process whenever applicable.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Under this model:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Reviewers do not know the identity of authors.",
                    "Authors do not know the identity of reviewers.",
                    "Editorial staff manage communications confidentially.",
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
                  In certain circumstances, alternative review models may be
                  applied, including:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Single-Blind Review",
                    "Open Peer Review",
                    "Editorial Review",
                    "Expert Assessment",
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
                  The selected review model shall be determined by the journal,
                  editor, or publication program.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <Search size={18} className="text-orange-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  4. Initial Editorial Screening
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Before entering peer review, submissions may undergo an
                  initial editorial evaluation to assess:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Relevance to the publication scope;",
                    "Compliance with submission guidelines;",
                    "Academic quality;",
                    "Originality;",
                    "Ethical compliance;",
                    "Language quality;",
                    "Completeness of submission materials.",
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
                  Submissions failing to meet basic requirements may be rejected
                  without external review.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <UserCheck size={18} className="text-cyan-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  5. Reviewer Selection
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers are selected based on:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Subject expertise;",
                    "Academic qualifications;",
                    "Research experience;",
                    "Publication record;",
                    "Professional competence;",
                    "Absence of significant conflicts of interest.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  The Editorial Office reserves the right to determine the
                  number and selection of reviewers for each submission.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
                <ClipboardCheck size={18} className="text-pink-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  6. Reviewer Responsibilities
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers are expected to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Conduct objective and unbiased evaluations;",
                    "Maintain confidentiality;",
                    "Provide constructive feedback;",
                    "Identify relevant literature where appropriate;",
                    "Report suspected plagiarism or ethical concerns;",
                    "Declare conflicts of interest;",
                    "Complete reviews within a reasonable timeframe.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-pink-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Reviewers must not use unpublished materials for personal
                  benefit.
                </p>
              </div>
            </div>
          </div>
          {/* Section 7 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <UserCheck size={18} className="text-blue-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  7. Author Responsibilities During Review
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors are expected to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Submit original work;",
                    "Cooperate with editorial requests;",
                    "Respond to reviewer comments professionally;",
                    "Provide revisions when requested;",
                    "Disclose conflicts of interest;",
                    "Supply supporting information if requested by editors.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-blue-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Authors must not attempt to influence reviewer evaluations
                  improperly.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <FileCheck size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  8. Editorial Decision Process
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Following peer review, editors may make one of the following
                  decisions:
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <h3 className="font-semibold text-[#071739]">Accept</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">
                      The manuscript is accepted for publication with no further
                      revisions required.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Minor Revision
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">
                      The manuscript requires limited modifications before
                      acceptance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Major Revision
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">
                      Substantial revisions are required before further
                      consideration.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Resubmission Required
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">
                      The manuscript may be reconsidered after significant
                      restructuring or additional work.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">Reject</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">
                      The manuscript does not meet publication standards or
                      falls outside the publication's scope.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Editorial decisions are based on reviewer recommendations,
                  editorial judgment, publication standards, and ethical
                  considerations.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <Lock size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  9. Confidentiality
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  All materials submitted for peer review are treated as
                  confidential.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors, reviewers, editors, and editorial staff are expected
                  to maintain confidentiality throughout the review process.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Confidential information obtained through peer review must not
                  be disclosed, shared, or used for personal advantage.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <ShieldAlert size={18} className="text-orange-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  10. Conflict of Interest
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers, editors, and authors must disclose any actual or
                  potential conflicts of interest that may influence the review
                  process.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Examples include:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Financial interests;",
                    "Institutional affiliations;",
                    "Personal relationships;",
                    "Collaborative relationships;",
                    "Competitive interests.",
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
                  Where a conflict exists, alternative reviewers or editors may
                  be assigned.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <ShieldAlert size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  11. Ethical Concerns
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  During peer review, any concerns relating to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Plagiarism;",
                    "Duplicate publication;",
                    "Data fabrication;",
                    "Data falsification;",
                    "Authorship disputes;",
                    "Ethical misconduct;",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  may result in investigation under the relevant publication
                  ethics policies of Redmont Publications.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Editorial action may include rejection, correction,
                  retraction, or institutional notification where appropriate.
                </p>
              </div>
            </div>
          </div>

          {/* Section 12 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <Clock3 size={18} className="text-cyan-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  12. Review Timeline
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications endeavors to conduct peer review
                  efficiently; however, review timelines may vary depending on:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Subject area;",
                    "Reviewer availability;",
                    "Complexity of the submission;",
                    "Revision requirements;",
                    "Editorial workload.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Publication timelines cannot be guaranteed.
                </p>
              </div>
            </div>
          </div>
          {/* Section 13 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <Scale size={18} className="text-indigo-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  13. Appeals
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Authors may appeal editorial decisions by submitting a written
                  request with supporting justification.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Appeals will be reviewed by the editorial team or an
                  independent reviewer where appropriate.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  The final decision of Redmont Publications shall be considered
                  binding.
                </p>
              </div>
            </div>
          </div>

          {/* Section 14 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <ShieldCheck size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  14. Editorial Independence
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Editors retain full independence in publication decisions.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Publication fees, sponsorships, institutional relationships,
                  advertising, or other commercial considerations shall not
                  influence editorial judgments.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  All submissions are evaluated on academic merit and compliance
                  with publication standards.
                </p>
              </div>
            </div>
          </div>

          {/* Section 15 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <FileText size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  15. Compliance with Publication Ethics
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  This Peer Review Policy operates alongside the:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Publication Ethics Policy",
                    "Plagiarism Policy",
                    "Retraction Policy",
                    "Copyright Policy",
                    "Open Access Policy",
                    "Terms and Conditions",
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
                  All participants in the publication process are expected to
                  comply with these policies.
                </p>
              </div>
            </div>
          </div>

          {/* Section 16 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <RefreshCw size={18} className="text-blue-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  16. Policy Updates
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications reserves the right to amend, revise, or
                  update this Peer Review Policy at any time.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Any updates shall become effective immediately upon
                  publication on the website.
                </p>
              </div>
            </div>
          </div>

          {/* Section 17 */}
          <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                <Mail size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  17. Contact Information
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  For questions regarding this Peer Review Policy, editorial
                  procedures, or reviewer matters, please contact:
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
              Redmont Publications is committed to maintaining a fair,
              transparent, confidential, and rigorous peer review process that
              supports scholarly excellence, research integrity, and the
              advancement of academic knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeerReview;
