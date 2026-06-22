
import {
  BookOpen,
  ShieldCheck,
  Languages,
  FileText,
  FileWarning,
  Copyright,
  User,
  Upload,
  FileSearch,
  Image,
  Quote,
  CreditCard,
  CheckCircle2,
   Shield,
  Users,
  AlertTriangle,
  Landmark,
  Bot,
  ScanSearch,
  ClipboardCheck,
  RefreshCcw,
  Mail,
  FileCheck,
} from "lucide-react";

const AuthorGuidelines = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          {/* <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
           

          </h1> */}
            <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
       Author{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Guidelines
              </span>
            </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
          Redmont Publications welcomes the submission of high-quality scholarly works from researchers, academicians, professionals, institutions, and industry experts worldwide. These Author Guidelines provide essential information regarding manuscript preparation, submission requirements, publication ethics, review procedures, and publication standards.

          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
         
Authors are encouraged to carefully read and comply with these guidelines before submitting their work.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
      <BookOpen size={18} className="text-blue-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        1. Scope of Publications
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Redmont Publications accepts scholarly and academic submissions including, but not limited to:
      </p>

      <div className="mt-5 grid gap-3 md:grid-cols-2">

        {[
          "Journal Publications",
          "Research Articles",
          "Review Articles",
          "Case Studies",
          "Short Communications",
          "Technical Notes",
          "Editorials",
          "Perspective Papers",
          "Academic Books",
          "Textbooks",
          "Monographs",
          "Edited Volumes",
          "Reference Books",
          "Professional Books",
          "Thesis-to-Book Publications",
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

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Submissions must fall within the scope of the respective journal, book project, or publication program.
      </p>

    </div>
  </div>
</div>

          {/* Section 2 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
      <ShieldCheck size={18} className="text-green-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        2. Originality Requirements
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors must ensure that:
      </p>

      <div className="mt-5 space-y-3">

        {[
          "The submitted work is original.",
          "The manuscript has not been published previously.",
          "The manuscript is not under consideration elsewhere.",
          "All sources are properly cited.",
          "Necessary permissions have been obtained for third-party materials.",
          "The submission complies with ethical publishing standards.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-green-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}

      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Any form of plagiarism, duplicate publication, or research misconduct is strictly prohibited.
      </p>

    </div>
  </div>
</div>

          {/* Section 3 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
      <Languages size={18} className="text-purple-600" />
    </div>

    <div>

      <h2 className="text-lg font-bold text-[#071739]">
        3. Language Requirements
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Manuscripts should be written in clear and professional English.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors are responsible for ensuring proper grammar and spelling, consistent terminology, academic writing standards, clarity, and readability.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        The editorial office may request language revisions prior to review or publication.
      </p>

    </div>
  </div>
</div>

          {/* Section 4 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
      <FileText size={18} className="text-orange-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        4. Manuscript Structure
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors are encouraged to organize manuscripts using the following structure where applicable:
      </p>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <h3 className="font-semibold text-[#071739]">
          Research Articles
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Title • Author Information • Abstract • Keywords • Introduction • Literature Review • Methodology • Results • Discussion • Conclusion • Acknowledgments • Funding Information • Conflict of Interest Statement • References
        </p>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <h3 className="font-semibold text-[#071739]">
          Review Articles
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Title • Abstract • Keywords • Introduction • Literature Review • Analysis and Discussion • Conclusion • References
        </p>
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        The structure may vary depending on the publication type and discipline.
      </p>

    </div>
  </div>
</div>

          {/* Section 5 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
      <User size={18} className="text-cyan-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        5. Title and Author Information
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        The title should:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Clearly reflect the content of the work;",
          "Be concise and informative;",
          "Avoid unnecessary abbreviations.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Authors should provide:
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          "Full Name(s)",
          "Institutional Affiliation(s)",
          "Country",
          "Email Address of Corresponding Author",
          "ORCID iD (where available)",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>
          {/* Section 6 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
      <FileSearch size={18} className="text-pink-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        6. Abstract and Keywords
      </h2>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">

        <h3 className="font-semibold text-[#071739]">
          Abstract
        </h3>

        <div className="mt-4 space-y-3">
          {[
            "Summarize the study clearly;",
            "Highlight objectives, methods, results, and conclusions;",
            "Be written as a standalone summary.",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-1 text-pink-600" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">

        <h3 className="font-semibold text-[#071739]">
          Keywords
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Authors should provide 3–8 relevant keywords that accurately represent the subject matter.
        </p>

      </div>

    </div>
  </div>
</div>

          {/* Section 7 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
      <Image size={18} className="text-amber-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        7. Tables, Figures, and Illustrations
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors should ensure that:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Figures and tables are clearly labeled;",
          "Images are of adequate quality and resolution;",
          "Sources are acknowledged where applicable;",
          "Necessary permissions have been obtained.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-amber-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        All figures and tables should be referenced within the manuscript text.
      </p>

    </div>
  </div>
</div>

          {/* Section 8 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
      <Quote size={18} className="text-violet-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        8. References and Citations
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors must:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Cite all sources appropriately;",
          "Ensure reference accuracy;",
          "Maintain consistency in citation style.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-violet-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        The required citation style may vary depending on the publication and may include:
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          "APA",
          "Harvard",
          "Vancouver",
          "MLA",
          "Chicago",
          "Other recognized academic styles",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-violet-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Specific requirements will be communicated by the editorial office or publication guidelines.
      </p>

    </div>
  </div>
</div>

          {/* Section 9 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
      <Shield size={18} className="text-red-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        9. Ethical Requirements
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors must comply with all applicable ethical standards.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        This includes:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Honest reporting of research;",
          "Proper attribution of sources;",
          "Disclosure of conflicts of interest;",
          "Compliance with human and animal research ethics;",
          "Protection of confidential information;",
          "Avoidance of plagiarism and misconduct.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-red-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Authors may be required to provide supporting documentation regarding ethical approval.
      </p>

    </div>
  </div>
</div>

          {/* Section 10 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
      <Users size={18} className="text-blue-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        10. Authorship Criteria
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authorship should be limited to individuals who have made substantial contributions to:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Research conception or design;",
          "Data collection;",
          "Analysis and interpretation;",
          "Manuscript preparation;",
          "Critical revision of the work.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-blue-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        All authors must approve the final version before submission.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Individuals who do not meet authorship criteria should be acknowledged appropriately.
      </p>

    </div>
  </div>
</div>
          {/* Section 11 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50">
      <AlertTriangle size={18} className="text-yellow-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        11. Conflict of Interest Disclosure
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors must disclose any financial, institutional, personal, or professional relationships that could influence the research or publication process.
      </p>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        If no conflicts exist, authors should declare:
      </p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="italic text-slate-700">
          "The authors declare no conflict of interest."
        </p>
      </div>

    </div>
  </div>
</div>

          {/* Section 12 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
      <Landmark size={18} className="text-emerald-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        12. Funding Disclosure
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors should disclose all sources of financial support related to the research.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Funding information should include:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Funding organization name;",
          "Grant number (if applicable);",
          "Nature of support received.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-emerald-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>

          {/* Section 13 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
      <Bot size={18} className="text-violet-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        13. Use of Artificial Intelligence (AI)
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors using Artificial Intelligence (AI) tools during manuscript preparation must ensure that:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "The content remains accurate and original;",
          "All factual information is verified;",
          "AI-generated content does not result in plagiarism;",
          "Appropriate disclosure is provided where required.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-violet-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        AI systems cannot be listed as authors.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors remain fully responsible for the content of their submissions.
      </p>

    </div>
  </div>
</div>

          {/* Section 14 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
      <ScanSearch size={18} className="text-pink-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        14. Plagiarism Screening
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        All submissions may be subjected to plagiarism and similarity checks.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Manuscripts found to contain:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Plagiarism;",
          "Duplicate publication;",
          "Data manipulation;",
          "Copyright violations;",
          "Other ethical concerns;",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-pink-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        may be rejected, withdrawn, or subject to further investigation.
      </p>

    </div>
  </div>
</div>

          {/* Section 15 */}
         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
      <ClipboardCheck size={18} className="text-indigo-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        15. Peer Review Process
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Eligible submissions may undergo:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Editorial Screening",
          "Peer Review",
          "Revision Process",
          "Final Editorial Evaluation",
          "Publication Decision",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-indigo-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        The review model may include:
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          "Double-Blind Review",
          "Single-Blind Review",
          "Open Review",
          "Editorial Review",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-indigo-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        depending on the publication's requirements.
      </p>

    </div>
  </div>
</div>
 {/* Section 16 */}
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
      <RefreshCcw size={18} className="text-orange-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        16. Revision Requirements
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors receiving revision requests should:
      </p>

      <div className="mt-5 space-y-3">
        {[
          "Address reviewer comments carefully;",
          "Submit revised manuscripts within the requested timeframe;",
          "Provide responses explaining revisions made.",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-orange-600" />
            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Failure to respond may result in withdrawal of the submission from consideration.
      </p>

    </div>
  </div>
</div>

 {/* Section 17 */}
 <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
      <Copyright size={18} className="text-sky-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        17. Copyright and Licensing
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors must comply with the Copyright Policy of Redmont Publications.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        By submitting a manuscript, authors confirm that they possess the necessary rights to publish all included content.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Any licensing terms applicable to the publication will be communicated during the publication process.
      </p>

    </div>
  </div>
</div>

  {/* Section 18 */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
      <CreditCard size={18} className="text-emerald-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        18. Publication Charges
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Certain journals, books, conference proceedings, and publishing services may be subject to publication charges.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors are encouraged to review the Publication Charges Policy before submission.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Payment of publication fees does not guarantee acceptance or publication.
      </p>

    </div>
  </div>
</div>

   {/* Section 19 */}
   <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
      <FileWarning size={18} className="text-red-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        19. Corrections and Retractions
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors are expected to notify the editorial office promptly if significant errors are discovered in published work.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Corrections, retractions, or other editorial actions may be implemented when necessary to preserve the integrity of the scholarly record.
      </p>

    </div>
  </div>
</div>

    {/* Section 20 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
      <Upload size={18} className="text-violet-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        20. Submission of Manuscripts
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors should submit:
      </p>

      <div className="mt-5 space-y-3">

        {[
          "Complete manuscript files;",
          "Author details;",
          "Required declarations;",
          "Supplementary files (if applicable);",
          "Ethical approval documents (where applicable);",
          "Permission letters (where applicable).",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-violet-600" />
            <span className="text-sm text-slate-600">
              {item}
            </span>
          </div>
        ))}

      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Additional documentation may be requested during the review process.
      </p>

    </div>
  </div>
</div>

     {/* Section 21 */}
     <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
      <FileCheck size={18} className="text-amber-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        21. Compliance with Publisher Policies
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        Authors are expected to comply with all applicable Redmont Publications policies, including:
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">

        {[
          "Publication Ethics Policy",
          "Peer Review Policy",
          "Plagiarism Policy",
          "Copyright Policy",
          "Open Access Policy",
          "Retraction Policy",
          "Privacy Policy",
          "Terms and Conditions",
        ].map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 text-amber-600" />
            <span className="text-sm text-slate-600">
              {item}
            </span>
          </div>
        ))}

      </div>

    </div>
  </div>
</div>

      {/* Section 22 */}
      <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm sm:p-6">
  <div className="flex items-start gap-4">

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
      <Mail size={18} className="text-red-600" />
    </div>

    <div className="w-full">

      <h2 className="text-lg font-bold text-[#071739]">
        22. Contact Information
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        For submission-related inquiries, author support, or publication assistance, please contact:
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
            
                Redmont Publications is committed to supporting authors through a transparent, ethical, and professional publication process while promoting high-quality scholarly communication and academic excellence worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorGuidelines;
