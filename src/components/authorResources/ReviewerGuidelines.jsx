import {
  AlertTriangle,
  Users,
  ShieldAlert,
  MessageSquare,
  Bot,
  Scale,
  BadgeCheck,
  FileCheck,
  Clock,
  Mail,
  CheckCircle2,
  Award,
  ShieldCheck,
  FileSearch,
  ClipboardCheck,
  Lock,
} from "lucide-react";

const ReviewerGuidelines = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          {/* <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
             
          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
     Reviewer{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
            Guidelines
              </span>
            </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
            Redmont Publications recognizes peer review as a cornerstone of
            scholarly publishing and academic quality assurance. Reviewers play
            a vital role in evaluating the originality, validity, significance,
            and quality of submitted manuscripts while helping authors improve
            their work through constructive feedback.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            These Reviewer Guidelines outline the responsibilities,
            expectations, and ethical standards for individuals serving as
            reviewers for journals, books, conference proceedings, and other
            scholarly publications managed by Redmont Publications.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <ClipboardCheck size={18} className="text-blue-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  1. Purpose of Peer Review
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  The primary objectives of peer review are to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Assess the quality and originality of scholarly work;",
                    "Evaluate the scientific and academic merit of submissions;",
                    "Improve manuscripts through constructive feedback;",
                    "Identify methodological or ethical concerns;",
                    "Assist editors in making informed publication decisions;",
                    "Promote research integrity and scholarly excellence.",
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
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <Users size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  2. Reviewer Responsibilities
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers are expected to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Conduct reviews objectively and professionally;",
                    "Evaluate manuscripts fairly and without bias;",
                    "Provide clear, constructive, and evidence-based feedback;",
                    "Maintain confidentiality throughout the review process;",
                    "Complete reviews within the assigned timeframe;",
                    "Report any ethical concerns or conflicts of interest.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Reviewers should focus on improving the quality of the
                  manuscript rather than criticizing authors personally.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <Lock size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  3. Confidentiality
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  All manuscripts received for review must be treated as
                  confidential documents.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers must not:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Share manuscripts with unauthorized individuals;",
                    "Discuss manuscript contents publicly;",
                    "Use unpublished information for personal benefit;",
                    "Distribute or reproduce submitted materials.",
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
                  Confidentiality obligations continue even after the review
                  process has concluded.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <ShieldAlert size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  4. Conflict of Interest
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers should decline review assignments if they have any
                  conflict of interest that could affect their objectivity.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Examples include:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Personal relationships with authors;",
                    "Recent collaboration with authors;",
                    "Financial interests related to the research;",
                    "Institutional affiliations creating bias;",
                    "Competitive or professional conflicts.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Any potential conflict should be disclosed to the editorial
                  office immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <FileSearch size={18} className="text-amber-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  5. Evaluation Criteria
                </h2>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Originality
                    </h3>
                    <div className="mt-2 space-y-2 text-sm text-slate-600">
                      <p>• Is the work novel and original?</p>
                      <p>• Does it contribute new knowledge or insights?</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">Relevance</h3>
                    <div className="mt-2 space-y-2 text-sm text-slate-600">
                      <p>
                        • Is the manuscript relevant to the journal or
                        publication scope?
                      </p>
                      <p>• Does it address an important academic issue?</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Methodology
                    </h3>
                    <div className="mt-2 space-y-2 text-sm text-slate-600">
                      <p>• Is the research design appropriate?</p>
                      <p>
                        • Are methods clearly described and scientifically
                        sound?
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Data and Analysis
                    </h3>
                    <div className="mt-2 space-y-2 text-sm text-slate-600">
                      <p>
                        • Are data collection and analysis procedures adequate?
                      </p>
                      <p>
                        • Are conclusions supported by the evidence presented?
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Literature Review
                    </h3>
                    <div className="mt-2 space-y-2 text-sm text-slate-600">
                      <p>• Is the literature review current and relevant?</p>
                      <p>• Are important references included?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section 6 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <MessageSquare size={18} className="text-cyan-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  6. Reviewer Comments
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Review reports should:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Be clear and professional;",
                    "Provide specific suggestions where possible;",
                    "Identify strengths and weaknesses;",
                    "Reference specific sections when discussing issues;",
                    "Focus on improving the manuscript.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Comments should be respectful and constructive.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers should avoid offensive, discriminatory, or personal
                  remarks.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <BadgeCheck size={18} className="text-green-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  7. Recommendation Categories
                </h2>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#071739]">Accept</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      The manuscript is suitable for publication without
                      significant changes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Minor Revisions
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      The manuscript requires limited modifications before
                      publication.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Major Revisions
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Substantial revisions are necessary before further
                      consideration.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">
                      Resubmit for Review
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Significant changes are required and a new review may be
                      necessary.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#071739]">Reject</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      The manuscript does not meet publication standards or
                      falls outside the publication scope.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-7 text-slate-600">
                  Final publication decisions remain the responsibility of the
                  editor.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <AlertTriangle size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  8. Identifying Ethical Concerns
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers should notify editors if they suspect:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Plagiarism;",
                    "Duplicate publication;",
                    "Data fabrication;",
                    "Data falsification;",
                    "Image manipulation;",
                    "Citation manipulation;",
                    "Authorship disputes;",
                    "Ethical approval deficiencies;",
                    "Research misconduct.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Reviewers are encouraged to provide supporting evidence
                  whenever possible.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                <Bot size={18} className="text-violet-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  9. Use of Artificial Intelligence (AI)
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers should not upload confidential manuscripts into
                  public AI systems or third-party tools that may store,
                  process, or reuse submitted content without authorization.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers remain responsible for maintaining confidentiality
                  and independent professional judgment throughout the review
                  process.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <Clock size={18} className="text-amber-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  10. Timeliness
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers should:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Accept assignments only when they can meet deadlines;",
                    "Inform the editorial office promptly if delays occur;",
                    "Complete reviews within the requested timeframe whenever possible.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-amber-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Timely reviews help maintain an efficient publication process.
                </p>
              </div>
            </div>
          </div>
          {/* Section 11 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <Award size={18} className="text-emerald-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  11. Reviewer Recognition
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Redmont Publications values the contributions of reviewers and
                  may acknowledge reviewer service through:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Reviewer certificates;",
                    "Letters of appreciation;",
                    "Annual reviewer recognition programs;",
                    "Editorial board consideration;",
                    "Professional service acknowledgments.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-1 text-emerald-600"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Recognition practices may vary among publications.
                </p>
              </div>
            </div>
          </div>

          {/* Section 12 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Scale size={18} className="text-blue-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  12. Editorial Independence
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers should provide independent evaluations free from:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Commercial influence;",
                    "Institutional pressure;",
                    "Personal bias;",
                    "Political considerations;",
                    "Financial interests.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-blue-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Recommendations should be based solely on scholarly merit and
                  publication standards.
                </p>
              </div>
            </div>
          </div>

          {/* Section 13 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <ShieldCheck size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  13. Reviewer Conduct
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers are expected to maintain the highest standards of
                  professionalism and integrity.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers must not:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Delay reviews for personal advantage;",
                    "Request citation of irrelevant work for self-promotion;",
                    "Use confidential information for research purposes;",
                    "Contact authors directly regarding submissions;",
                    "Misrepresent their expertise or qualifications.",
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

          {/* Section 14 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <FileCheck size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  14. Compliance with Publication Policies
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Reviewers are expected to comply with all applicable Redmont
                  Publications policies, including:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Publication Ethics Policy",
                    "Peer Review Policy",
                    "Plagiarism Policy",
                    "Retraction Policy",
                    "Copyright Policy",
                    "Privacy Policy",
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
                  Failure to comply may result in removal from the reviewer
                  database.
                </p>
              </div>
            </div>
          </div>

          {/* Section 15 */}
          <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                <Mail size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  15. Contact Information
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  For questions regarding reviewer responsibilities or review
                  assignments, please contact:
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
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[15px] leading-7 text-slate-600">
              Redmont Publications appreciates the valuable contribution of
              reviewers in maintaining academic quality, research integrity, and
              scholarly excellence through fair, objective, and constructive
              peer review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewerGuidelines;
