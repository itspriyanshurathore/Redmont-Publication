import {
  FileSearch,
  CopyCheck,
  ShieldCheck,
  ScanSearch,
  Percent,
  FileX,
  FileWarning,
  UserCheck,
  ClipboardCheck,
  Bot,
  SearchCheck,
  Gavel,
  BookOpen,
  RefreshCcw,
  FileText,
  CheckCircle2,
} from "lucide-react";

const PlagiarismPolicy = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
       <div className="text-center">
  <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
    Plagiarism Policy
  </h1>

  <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
    Redmont Publications is committed to maintaining the highest
    standards of academic integrity, originality, and ethical
    publishing. All manuscripts, book chapters, conference papers,
    review articles, and other scholarly submissions are expected to be
    original works of the authors and free from plagiarism or unethical
    publication practices.
  </p>

  <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
    This Plagiarism Policy outlines the standards, procedures, and
    actions followed by Redmont Publications in addressing plagiarism
    and related ethical concerns.
  </p>
</div>

        <div className="mt-10 space-y-6">
          {/* Section 1 */}
         {/* Section 1 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
  <FileSearch size={18} className="text-blue-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    1. Definition of Plagiarism
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Plagiarism is the use of another person's ideas, words, data,
    figures, tables, images, research findings, or intellectual work
    without proper acknowledgment, citation, or permission.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Plagiarism includes, but is not limited to:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Copying text without citation.",
      "Using ideas without appropriate attribution.",
      "Reproducing figures, tables, or images without permission.",
      "Presenting another person's research as one's own.",
      "Submitting purchased, ghostwritten, or AI-generated work as original research without proper disclosure.",
      "Unauthorized translation and publication of previously published content.",
      "Misappropriation of unpublished data or confidential information.",
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

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Plagiarism is considered a serious violation of publication
    ethics.
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
  <CopyCheck size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    2. Types of Plagiarism
  </h2>

  {/* Direct Plagiarism */}
  <div className="mt-5 rounded-xl border border-red-100 bg-red-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Direct Plagiarism
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-slate-600">
      Copying text, data, or content word-for-word from another
      source without proper citation or quotation.
    </p>
  </div>

  {/* Mosaic Plagiarism */}
  <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Mosaic Plagiarism
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-slate-600">
      Borrowing phrases, sentence structures, or ideas from multiple
      sources while making minor modifications without proper
      attribution.
    </p>
  </div>

  {/* Self-Plagiarism */}
  <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Self-Plagiarism
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-slate-600">
      Reusing substantial portions of an author's own previously
      published work without proper citation, disclosure, or
      editorial approval.
    </p>
  </div>

  {/* Data Plagiarism */}
  <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Data Plagiarism
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-slate-600">
      Using another researcher's data, results, or datasets without
      authorization or acknowledgment.
    </p>
  </div>

  {/* Image and Figure Plagiarism */}
  <div className="mt-5 rounded-xl border border-cyan-100 bg-cyan-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Image and Figure Plagiarism
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-slate-600">
      Using figures, graphs, photographs, illustrations, tables, or
      visual content without permission or proper citation.
    </p>
  </div>
</div>
```

  </div>
</div>

{/* Section 3 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
  <ShieldCheck size={18} className="text-green-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    3. Originality Requirements
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Authors submitting manuscripts to Redmont Publications must
    ensure that:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "The work is original.",
      "The manuscript has not been plagiarized.",
      "All sources are appropriately cited.",
      "Proper acknowledgments have been provided.",
      "Permissions have been obtained where required.",
      "Previously published material has been disclosed.",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-green-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Authors bear full responsibility for the originality of
    submitted content.
  </p>
</div>
```

  </div>
</div>

{/* Section 4 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
  <ScanSearch size={18} className="text-purple-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    4. Similarity Screening
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    All submissions may be subjected to plagiarism and similarity
    checks using appropriate plagiarism detection software and
    editorial review procedures.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    The similarity score alone does not determine plagiarism.
    Editorial evaluation will consider:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Nature of the matching content;",
      "Source of similarity;",
      "Extent of overlap;",
      "Proper citation practices;",
      "Context of reproduced material.",
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
    A low similarity score does not automatically guarantee
    originality, and a high similarity score does not automatically
    constitute plagiarism.
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
  <Percent size={18} className="text-amber-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    5. Acceptable Similarity Levels
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    As a general guideline:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Similarity arising from references, methodology descriptions, common technical phrases, legally required statements, or properly quoted material may be acceptable.",
      "Excessive overlap with previously published works may require revision, rejection, or further investigation.",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-amber-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Final decisions regarding acceptable similarity levels remain at
    the discretion of the editorial team.
  </p>
</div>
```

  </div>
</div>

{/* Section 6 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
  <FileX size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    6. Actions Prior to Publication
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    If plagiarism is identified during the review process, Redmont
    Publications may:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Request clarification from the authors;",
      "Request revisions and proper citations;",
      "Require rewriting of affected sections;",
      "Suspend editorial evaluation;",
      "Reject the manuscript;",
      "Impose restrictions on future submissions.",
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
    The severity of action will depend upon the nature and extent of
    the plagiarism detected.
  </p>
</div>
```

  </div>
</div>

{/* Section 7 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
  <FileWarning size={18} className="text-indigo-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    7. Actions After Publication
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    If plagiarism is discovered after publication, Redmont
    Publications may take one or more of the following actions:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Publish a correction notice;",
      "Issue an expression of concern;",
      "Retract the publication;",
      "Remove content where legally necessary;",
      "Notify relevant institutions or organizations;",
      "Restrict future submissions from responsible authors.",
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
    Such actions may be taken regardless of when the plagiarism is
    discovered.
  </p>
</div>
```

  </div>
</div>

{/* Section 8 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
  <UserCheck size={18} className="text-green-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    8. Author Responsibilities
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Authors are responsible for:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Ensuring originality of submitted work;",
      "Properly citing all sources;",
      "Obtaining permissions where required;",
      "Disclosing overlapping publications;",
      "Cooperating with editorial investigations.",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-green-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Submission of a manuscript constitutes a declaration that the
    work complies with this Plagiarism Policy.
  </p>
</div>
```

  </div>
</div>

{/* Section 9 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
  <ClipboardCheck size={18} className="text-cyan-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    9. Editorial Responsibilities
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Editors and reviewers are expected to:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Maintain publication ethics standards;",
      "Report suspected plagiarism;",
      "Evaluate concerns objectively and confidentially;",
      "Follow fair and transparent investigation procedures.",
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
    All allegations of plagiarism will be reviewed carefully before a
    final decision is reached.
  </p>
</div>
```

  </div>
</div>

{/* Section 10 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
  <Bot size={18} className="text-violet-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    10. Use of Artificial Intelligence (AI)
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Authors using Artificial Intelligence (AI) tools, language
    models, or automated content-generation systems must ensure that:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "The submitted work remains original.",
      "All factual claims have been verified.",
      "Proper disclosures are provided where required.",
      "AI-generated content does not result in plagiarism or copyright infringement.",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-violet-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Authors remain fully responsible for all content submitted for
    publication, regardless of the tools used during manuscript
    preparation.
  </p>
</div>
```

  </div>
</div>

{/* Section 11 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
  <SearchCheck size={18} className="text-purple-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    11. Investigation Procedure
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    When plagiarism allegations are received, Redmont Publications
    may:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Review the evidence;",
      "Compare source materials;",
      "Contact authors for explanations;",
      "Consult editors, reviewers, or experts;",
      "Request supporting documentation;",
      "Make a determination based on available evidence.",
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
    Investigations will be conducted fairly, objectively, and
    confidentially.
  </p>
</div>
```

  </div>
</div>

{/* Section 12 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
  <Gavel size={18} className="text-amber-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    12. Appeals
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Authors may appeal plagiarism-related decisions by providing a
    written explanation and supporting evidence.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Appeals will be reviewed independently, and the final decision of
    Redmont Publications shall be considered binding.
  </p>
</div>
```

  </div>
</div>

{/* Section 13 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
  <BookOpen size={18} className="text-indigo-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    13. Compliance with Publication Ethics
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    This Plagiarism Policy operates in conjunction with the:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Publication Ethics Policy",
      "Retraction Policy",
      "Copyright Policy",
      "Author Guidelines",
      "Terms and Conditions",
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
    All users are expected to comply with these policies.
  </p>
</div>
```

  </div>
</div>

{/* Section 14 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
  <RefreshCcw size={18} className="text-blue-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    14. Policy Updates
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications reserves the right to amend or update this
    Plagiarism Policy at any time.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Updated versions shall become effective immediately upon
    publication on the website.
  </p>
</div>
```

  </div>
</div>

{/* Section 15 */}

<div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
  <FileText size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    15. Contact Information
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    For questions regarding this Plagiarism Policy or to report
    suspected plagiarism, please contact:
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
    Redmont Publications is committed to promoting originality,
    ethical scholarship, responsible authorship, and the integrity
    of the academic record through rigorous plagiarism prevention
    and investigation procedures.
  </p>
</div>

</div>

        </div>
    </section>
  );
};

export default PlagiarismPolicy;
