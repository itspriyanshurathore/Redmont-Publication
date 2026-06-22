
import {
  AlertTriangle,
  Users,
  ShieldAlert,
  UserCheck,
  PawPrint,
  Bot,
  Scale,
  RefreshCcw,
    MessageSquareWarning,
  Archive,
  FileCheck,
  RefreshCw,
  Mail,
  CheckCircle2,
  FileText,
  Building2,
  ShieldCheck
} from "lucide-react";

const PublicationEthics = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          {/* <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
             
          </h1> */}
           <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
              Publication Ethics{" "} 
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
               Policy
              </span>
            </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
              Redmont Publications is committed to maintaining the highest
    standards of academic integrity, ethical publishing,
    transparency, and responsible scholarly communication.
    This Publication Ethics Policy establishes the ethical
    principles and responsibilities that govern authors,
    editors, reviewers, editorial board members, publishers,
    and all participants involved in the publication process.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
           All parties engaged in publishing activities through
    Redmont Publications are expected to comply with this
    policy and uphold the integrity of the scholarly record.
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
          1. Purpose of Publication Ethics
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          The purpose of this policy is to:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Promote integrity in scholarly publishing;",
            "Ensure the reliability of published research;",
            "Prevent unethical publishing practices;",
            "Protect the rights of authors, reviewers, editors, and readers;",
            "Maintain transparency throughout the publication process;",
            "Preserve trust in academic communication.",
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
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
        <Scale size={18} className="text-green-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          2. Ethical Principles
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Redmont Publications expects all participants in the
          publication process to adhere to the following principles:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Honesty and accuracy in research reporting;",
            "Originality of submitted work;",
            "Transparency in authorship and contributions;",
            "Fairness in editorial decision-making;",
            "Confidentiality during review processes;",
            "Accountability for published content;",
            "Respect for intellectual property rights;",
            "Compliance with applicable ethical and legal requirements.",
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
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
        <UserCheck size={18} className="text-purple-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          3. Responsibilities of Authors
        </h2>

        <p className="mt-4 font-semibold text-[#071739]">
          Originality
        </p>

        <div className="mt-3 space-y-3">
          {[
            "Submit original and unpublished work.",
            "Properly acknowledge all sources used.",
            "Avoid plagiarism in any form.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-purple-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 font-semibold text-[#071739]">
          Accuracy
        </p>

        <div className="mt-3 space-y-3">
          {[
            "Present research findings accurately and honestly.",
            "Avoid fabrication, falsification, or manipulation of data.",
            "Maintain records supporting research findings where applicable.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-purple-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 font-semibold text-[#071739]">
          Authorship
        </p>

        <div className="mt-3 space-y-3">
          {[
            "Ensure that all listed authors have made significant contributions.",
            "Obtain consent from all co-authors before submission.",
            "Avoid guest, honorary, or ghost authorship.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-purple-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Section 4 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
        <FileText size={18} className="text-orange-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          4. Responsibilities of Editors
        </h2>

        <div className="mt-5 space-y-3">
          {[
            "Evaluate submissions fairly and objectively.",
            "Make publication decisions based solely on academic merit.",
            "Maintain confidentiality.",
            "Avoid conflicts of interest.",
            "Ensure ethical concerns are investigated appropriately.",
            "Preserve editorial independence.",
            "Promote transparency throughout the review process.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-orange-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Editors must not discriminate on the basis of nationality,
          ethnicity, gender, religion, institutional affiliation,
          or political beliefs.
        </p>
      </div>
    </div>
  </div>

  {/* Section 5 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
        <Users size={18} className="text-pink-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          5. Responsibilities of Reviewers
        </h2>

        <div className="mt-5 space-y-3">
          {[
            "Conduct reviews objectively and professionally.",
            "Maintain strict confidentiality.",
            "Provide constructive and evidence-based feedback.",
            "Identify relevant published work not cited by authors.",
            "Report suspected plagiarism or ethical concerns.",
            "Disclose conflicts of interest.",
            "Decline review assignments where impartiality cannot be maintained.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-pink-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Reviewers must not use unpublished information for
          personal or professional advantage.
        </p>
      </div>
    </div>
  </div>

  {/* Section 6 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
        <Building2 size={18} className="text-cyan-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          6. Responsibilities of the Publisher
        </h2>

        <div className="mt-5 space-y-3">
          {[
            "Supporting editorial independence;",
            "Maintaining ethical publishing standards;",
            "Investigating allegations of misconduct;",
            "Correcting errors where necessary;",
            "Preserving the scholarly record;",
            "Protecting confidentiality;",
            "Ensuring transparent publication procedures.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Commercial considerations shall not influence editorial
          decisions.
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

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          7. Plagiarism and Originality
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Redmont Publications does not tolerate plagiarism in any form.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          The following are considered unacceptable:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Direct plagiarism;",
            "Mosaic plagiarism;",
            "Self-plagiarism;",
            "Unauthorized use of data;",
            "Unauthorized use of images, figures, tables, or graphics;",
            "Misappropriation of intellectual property.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-red-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          All submissions may undergo plagiarism screening and
          editorial evaluation.
        </p>
      </div>
    </div>
  </div>
    {/* Section 8 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
        <AlertTriangle size={18} className="text-orange-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          8. Research Misconduct
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Research misconduct includes but is not limited to:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Data fabrication;",
            "Data falsification;",
            "Image manipulation;",
            "Misrepresentation of results;",
            "Fraudulent research practices;",
            "Misleading reporting.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-orange-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Confirmed misconduct may result in rejection, correction,
          retraction, institutional notification, or additional
          corrective actions.
        </p>
      </div>
    </div>
  </div>

  {/* Section 9 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
        <Users size={18} className="text-indigo-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          9. Authorship and Contribution Standards
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Authorship should be limited to individuals who have made
          substantial contributions to:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Research conception or design;",
            "Data collection;",
            "Data analysis or interpretation;",
            "Manuscript drafting or revision;",
            "Approval of the final version.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-indigo-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Individuals who contributed in a limited capacity should be
          acknowledged appropriately but not listed as authors unless
          authorship criteria are met.
        </p>
      </div>
    </div>
  </div>

  {/* Section 10 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
        <ShieldAlert size={18} className="text-red-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          10. Conflicts of Interest
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Authors, reviewers, editors, and editorial board members
          must disclose any actual, perceived, or potential conflicts
          of interest.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Examples include:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Financial interests;",
            "Employment relationships;",
            "Consulting arrangements;",
            "Institutional affiliations;",
            "Personal relationships;",
            "Competitive interests.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-red-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Failure to disclose relevant conflicts may result in
          editorial action.
        </p>
      </div>
    </div>
  </div>

  {/* Section 11 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
        <UserCheck size={18} className="text-green-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          11. Human Subjects Research
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Research involving human participants should:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Follow recognized ethical principles;",
            "Obtain approval from an appropriate ethics committee or Institutional Review Board (IRB), where applicable;",
            "Obtain informed consent when required;",
            "Protect participant privacy and confidentiality.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-green-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Authors may be required to provide evidence of ethical
          approval.
        </p>
      </div>
    </div>
  </div>

  {/* Section 12 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
        <PawPrint size={18} className="text-amber-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          12. Animal Research
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Research involving animals must:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Follow applicable institutional and national guidelines;",
            "Minimize unnecessary suffering;",
            "Demonstrate ethical justification for animal use;",
            "Obtain required approvals where applicable.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-amber-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Section 13 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
        <Bot size={18} className="text-purple-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          13. Artificial Intelligence (AI) and Generative Tools
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Authors using Artificial Intelligence (AI) tools during
          manuscript preparation must ensure that:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "The work remains accurate and original;",
            "All factual information is verified;",
            "AI tools are not listed as authors;",
            "Appropriate disclosure is provided when required.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-purple-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Authors remain fully responsible for all submitted content
          regardless of the tools used.
        </p>
      </div>
    </div>
  </div>

  {/* Section 14 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
        <RefreshCcw size={18} className="text-cyan-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          14. Corrections, Retractions, and Expressions of Concern
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Where necessary, Redmont Publications may publish:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Corrections (Errata)",
            "Corrigenda",
            "Expressions of Concern",
            "Retraction Notices",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Such actions may be taken to preserve the integrity and
          accuracy of the scholarly record.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Relevant procedures are governed by the Retraction Policy.
        </p>
      </div>
    </div>
  </div>
    {/* Section 15 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
        <MessageSquareWarning size={18} className="text-red-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          15. Complaints and Ethical Concerns
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Allegations involving:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Plagiarism;",
            "Authorship disputes;",
            "Ethical violations;",
            "Data concerns;",
            "Reviewer misconduct;",
            "Editorial misconduct;",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2
                size={16}
                className="mt-1 text-red-600"
              />
              <span className="text-sm text-slate-600">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          may be submitted to Redmont Publications for investigation.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          All complaints will be handled fairly, confidentially, and
          objectively.
        </p>
      </div>
    </div>
  </div>

  {/* Section 16 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
        <Archive size={18} className="text-indigo-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          16. Preservation of the Scholarly Record
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Redmont Publications is committed to preserving the
          integrity, accessibility, and permanence of scholarly
          publications through responsible archiving,
          recordkeeping, and publication management practices.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Published records may remain permanently accessible even
          when corrections or retractions occur.
        </p>
      </div>
    </div>
  </div>

  {/* Section 17 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
        <FileCheck size={18} className="text-purple-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          17. Compliance with Related Policies
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          This Publication Ethics Policy should be read together
          with:
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Peer Review Policy",
            "Plagiarism Policy",
            "Copyright Policy",
            "Open Access Policy",
            "Retraction Policy",
            "Privacy Policy",
            "Terms and Conditions",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2
                size={16}
                className="mt-1 text-purple-600"
              />
              <span className="text-sm text-slate-600">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          All participants are expected to comply with these
          policies.
        </p>
      </div>
    </div>
  </div>

  {/* Section 18 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
        <RefreshCw size={18} className="text-blue-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          18. Policy Updates
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Redmont Publications reserves the right to revise,
          amend, or update this Publication Ethics Policy at any
          time.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          Any changes shall become effective immediately upon
          publication on the website.
        </p>
      </div>
    </div>
  </div>

  {/* Section 19 */}
  <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm sm:p-6">
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
        <Mail size={18} className="text-red-600" />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold text-[#071739]">
          19. Contact Information
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          For questions regarding publication ethics or to report
          ethical concerns, please contact:
        </p>

        <div className="mt-5 space-y-3 text-[15px] text-slate-700">

          <p>
            <span className="font-semibold text-[#071739]">
              Redmont Publications
            </span>
          </p>

          <p>
            <span className="font-semibold text-[#071739]">
              Email:
            </span>{" "}
            info@redmontpublications.com
          </p>

          <p>
            <span className="font-semibold text-[#071739]">
              Phone:
            </span>{" "}
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
      Redmont Publications is dedicated to promoting ethical
      publishing practices, research integrity, transparency,
      accountability, and scholarly excellence across all
      journals, books, conference proceedings, and academic
      publications under its management.
    </p>
  </div>

</div>
        </div>
    </section>
  );
};

export default PublicationEthics;
