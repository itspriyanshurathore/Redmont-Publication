import {
  FileWarning,
  ShieldAlert,
  SearchCheck,
  UserCheck,
  Scale,
  FileX,
  FilePenLine,
  Undo2,
  Trash2,
  Building2,
  Gavel,
  Archive,
  RefreshCcw,
  FileText,
  CheckCircle2,
} from "lucide-react";

const RetractionPolicy = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
       <div className="text-center">
  <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
    Retraction Policy
  </h1>

  <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
    Redmont Publications is committed to maintaining the integrity,
    transparency, and reliability of the scholarly record. This
    Retraction Policy outlines the circumstances under which published
    articles, book chapters, conference papers, and other scholarly
    content may be corrected, withdrawn, or retracted.
  </p>

  <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
    This policy is guided by internationally recognized publication
    ethics principles and best practices in scholarly publishing.
  </p>
</div>

        <div className="mt-12 space-y-8">
        {/* Section 1 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
  <FileWarning size={18} className="text-blue-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    1. Purpose of Retraction
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    The purpose of a retraction is to correct the scholarly record
    and inform readers of content that contains serious errors,
    ethical violations, or unreliable findings.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Retractions are intended to preserve academic integrity and
    should not be regarded as a form of punishment against authors.
  </p>
</div>
```

  </div>
</div>

{/* Section 2 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
  <ShieldAlert size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    2. Grounds for Retraction
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    A publication may be retracted if credible evidence demonstrates
    any of the following:
  </p>

  {/* Research Misconduct */}
  <div className="mt-6 rounded-xl border border-red-100 bg-red-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Research Misconduct
    </h3>

    <div className="mt-4 space-y-3">
      {[
        "Data fabrication",
        "Data falsification",
        "Manipulation of research findings",
        "Fraudulent research practices",
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
  </div>

  {/* Publication Misconduct */}
  <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Publication Misconduct
    </h3>

    <div className="mt-4 space-y-3">
      {[
        "Plagiarism",
        "Duplicate publication",
        "Redundant publication",
        "Self-plagiarism of significant portions of previously published work",
        "Citation manipulation",
      ].map((item) => (
        <div key={item} className="flex gap-2">
          <CheckCircle2
            size={16}
            className="mt-1 text-orange-600"
          />
          <span className="text-sm text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Authorship Issues */}
  <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Authorship Issues
    </h3>

    <div className="mt-4 space-y-3">
      {[
        "Unauthorized authorship",
        "Ghost authorship",
        "Gift authorship",
        "Authorship disputes affecting publication validity",
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
  </div>

  {/* Ethical Violations */}
  <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Ethical Violations
    </h3>

    <div className="mt-4 space-y-3">
      {[
        "Lack of required ethical approval",
        "Violation of human or animal research ethics",
        "Breach of informed consent requirements",
        "Failure to disclose significant conflicts of interest",
      ].map((item) => (
        <div key={item} className="flex gap-2">
          <CheckCircle2
            size={16}
            className="mt-1 text-emerald-600"
          />
          <span className="text-sm text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Serious Errors */}
  <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Serious Errors
    </h3>

    <div className="mt-4 space-y-3">
      {[
        "Major methodological errors",
        "Significant calculation errors",
        "Invalid conclusions resulting from mistakes",
        "Errors rendering findings unreliable",
      ].map((item) => (
        <div key={item} className="flex gap-2">
          <CheckCircle2
            size={16}
            className="mt-1 text-blue-600"
          />
          <span className="text-sm text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Legal Concerns */}
  <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Legal Concerns
    </h3>

    <div className="mt-4 space-y-3">
      {[
        "Copyright infringement",
        "Defamation",
        "Violation of intellectual property rights",
        "Court orders or legal requirements",
      ].map((item) => (
        <div key={item} className="flex gap-2">
          <CheckCircle2
            size={16}
            className="mt-1 text-slate-700"
          />
          <span className="text-sm text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>

</div>
```

  </div>
</div>
{/* Section 3 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
  <SearchCheck size={18} className="text-purple-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    3. Retraction Investigation Process
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    When concerns are raised regarding a publication, Redmont
    Publications may initiate an investigation.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    The investigation may involve:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Communication with authors",
      "Consultation with editors",
      "Review of supporting documentation",
      "Examination of original data where available",
      "Consultation with institutions or funding agencies when appropriate",
      "Evaluation of evidence provided by complainants",
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
    All allegations will be reviewed fairly, confidentially, and
    objectively.
  </p>
</div>
```

  </div>
</div>

{/* Section 4 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
  <UserCheck size={18} className="text-green-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    4. Author Response
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Authors will normally be given an opportunity to respond to
    allegations and provide explanations or supporting evidence
    before a final decision is made.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Failure to respond within a reasonable timeframe may result in a
    decision based on the available evidence.
  </p>
</div>
```

  </div>
</div>

{/* Section 5 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
  <Scale size={18} className="text-amber-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    5. Retraction Decision
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    The decision to retract a publication shall be made by the
    Editor-in-Chief, Editorial Board, Publisher, or an authorized
    ethics committee, depending on the nature of the case.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Retraction decisions will be based on evidence, publication
    ethics standards, and the need to maintain the integrity of the
    scholarly record.
  </p>
</div>
```

  </div>
</div>

{/* Section 6 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
  <FileX size={18} className="text-indigo-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    6. Retraction Notice
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    When a publication is retracted:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "A formal Retraction Notice will be published.",
      "The reason for retraction will be clearly stated where appropriate.",
      "The notice will remain permanently accessible.",
      "The original publication may remain available for transparency and recordkeeping purposes.",
      'The publication will be clearly marked as "Retracted."',
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-indigo-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Retraction notices will be linked to the original publication
    whenever possible.
  </p>
</div>
```

  </div>
</div>

{/* Section 7 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
  <FilePenLine size={18} className="text-cyan-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    7. Corrections and Errata
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Not all errors require retraction.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    For minor issues that do not compromise the validity of the
    research, Redmont Publications may publish:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Corrections",
      "Errata",
      "Corrigenda",
      "Editorial Notes",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-cyan-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    instead of issuing a full retraction.
  </p>
</div>
```

  </div>
</div>



         {/* Section 8 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
  <Undo2 size={18} className="text-orange-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    8. Article Withdrawal Before Publication
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Authors may request withdrawal of a manuscript before publication.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    However:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Withdrawal requests must be submitted in writing.",
      "Editorial and administrative fees already incurred may remain payable.",
      "Withdrawal may be denied if evidence of misconduct is under investigation.",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-orange-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Once a manuscript has been formally published, withdrawal requests
    will generally be handled through correction or retraction
    procedures rather than removal.
  </p>
</div>
```

  </div>
</div>

{/* Section 9 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50">
  <Trash2 size={18} className="text-rose-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    9. Removal of Published Content
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Complete removal of published content is considered only in
    exceptional circumstances, including:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Court orders",
      "Legal requirements",
      "Serious privacy violations",
      "Significant risks to public safety",
      "Copyright infringement requiring removal",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-rose-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    In such cases, a public record of the removal may remain available.
  </p>
</div>
```

  </div>
</div>

{/* Section 10 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
  <Building2 size={18} className="text-emerald-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    10. Institutional Notification
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Where appropriate, Redmont Publications reserves the right to
    notify:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Research institutions",
      "Universities",
      "Funding agencies",
      "Regulatory bodies",
      "Relevant publishers or editors",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-emerald-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    regarding confirmed cases of serious publication misconduct.
  </p>
</div>
```

  </div>
</div>

{/* Section 11 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
  <Gavel size={18} className="text-violet-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    11. Appeals
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Authors may appeal a retraction decision by submitting a written
    request with supporting evidence.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Appeals will be reviewed independently, and the final decision of
    Redmont Publications shall be considered binding.
  </p>
</div>
```

  </div>
</div>

{/* Section 12 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
  <Archive size={18} className="text-slate-700" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    12. Preservation of the Scholarly Record
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications is committed to preserving the integrity of
    the scholarly record.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Retracted publications, correction notices, and related editorial
    communications may remain permanently archived to ensure
    transparency and accountability within the academic community.
  </p>
</div>
```

  </div>
</div>

{/* Section 13 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
  <RefreshCcw size={18} className="text-blue-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    13. Policy Updates
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications reserves the right to amend or update this
    Retraction Policy at any time.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Revised versions shall become effective immediately upon
    publication on the website.
  </p>
</div>
```

  </div>
</div>

{/* Section 14 */}

<div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
  <FileText size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    14. Contact Information
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    For questions regarding this Retraction Policy or to report
    concerns about a publication, please contact:
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
      support@redmontpublications.com
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
```

  </div>
</div>

{/* Closing Statement */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <p className="text-[15px] leading-7 text-slate-600">
    Redmont Publications is committed to upholding the highest standards
    of publication ethics, research integrity, and scholarly
    transparency through fair and responsible correction and retraction
    procedures.
  </p>
</div>

</div>

        </div>
    </section>
  );
};

export default RetractionPolicy;
