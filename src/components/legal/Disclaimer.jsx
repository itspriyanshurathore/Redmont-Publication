import {
  FileWarning,
  BookOpen,
  Database,
  ShieldCheck,
  ExternalLink,
  UserCheck,
  FileText,
  AlertTriangle,
  Globe,
  Copyright,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
            Disclaimer
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
           The information contained on the Redmont Publications website is provided for general informational, educational, and academic purposes only. By accessing and using this website, you acknowledge and agree to the terms of this Disclaimer.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            By continuing to use our website, you consent to the use of cookies
            in accordance with this Cookie Policy.
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
    1. General Information
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications makes reasonable efforts to ensure that the
    information published on this website is accurate, current, and
    reliable. However, we make no representations or warranties,
    express or implied, regarding the completeness, accuracy,
    reliability, suitability, or availability of any information,
    services, publications, products, or content contained on this
    website.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Any reliance placed on such information is strictly at the user's
    own risk.
  </p>
</div>
```

  </div>
</div>

{/* Section 2 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
  <BookOpen size={18} className="text-green-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    2. Academic and Publishing Services Disclaimer
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications provides publishing, editorial, research
    support, book publishing, journal management, conference
    proceedings, DOI registration support, and related academic
    services.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    The provision of these services does not guarantee:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Acceptance of any manuscript or publication;",
      "Positive peer-review outcomes;",
      "Editorial approval;",
      "Publication within a specific timeframe;",
      "Inclusion in any indexing database;",
      "Citation performance;",
      "Journal rankings or quartile status;",
      "Impact factor acquisition;",
      "Academic, professional, or commercial success.",
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
    All publication decisions remain subject to editorial review,
    peer-review processes, publication ethics requirements, and
    applicable academic standards.
  </p>
</div>
```

  </div>
</div>

{/* Section 3 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
  <Database size={18} className="text-purple-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    3. Indexing Disclaimer
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications may assist journals, books, conference
    proceedings, or publications in meeting the requirements of
    various indexing and abstracting services.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    However, we do not guarantee acceptance, inclusion,
    continuation, or approval by any indexing agency, including but
    not limited to:
  </p>

  <div className="mt-5 grid gap-3 sm:grid-cols-2">
    {[
      "Scopus",
      "Web of Science",
      "PubMed",
      "Embase",
      "ABDC",
      "NAAS",
      "DOAJ",
      "Crossref",
      "Google Scholar",
      "Other indexing and abstracting databases",
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
    All indexing decisions are made independently by the respective
    organizations and remain entirely outside the control of Redmont
    Publications.
  </p>
</div>
```

  </div>
</div>

{/* Section 4 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
  <ShieldCheck size={18} className="text-amber-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    4. Professional Advice Disclaimer
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    The information available on this website should not be
    considered legal, financial, medical, academic, regulatory, or
    professional advice.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Users should seek independent professional guidance before
    making decisions based on information obtained from this
    website.
  </p>
</div>
```

  </div>
</div>

{/* Section 5 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
  <ExternalLink size={18} className="text-cyan-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    5. External Links Disclaimer
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    This website may contain links to external websites,
    organizations, repositories, databases, journals, publishers,
    or third-party service providers.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Such links are provided solely for convenience and informational
    purposes.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications does not control, endorse, monitor, or
    guarantee the accuracy, reliability, availability, or content of
    any third-party website and accepts no responsibility for any
    loss or damage arising from their use.
  </p>
</div>
```

  </div>
</div>

{/* Section 6 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
  <UserCheck size={18} className="text-emerald-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    6. User Responsibility
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Users are solely responsible for:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Verifying information before relying upon it;",
      "Ensuring compliance with applicable laws and regulations;",
      "Maintaining the accuracy of submitted content;",
      "Obtaining necessary permissions and approvals;",
      "Following ethical publishing practices.",
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
    Authors remain fully responsible for the originality, accuracy,
    legality, and integrity of all submitted materials.
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
  <FileText size={18} className="text-indigo-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    7. Publication Content Disclaimer
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    The opinions, findings, conclusions, interpretations, and
    recommendations expressed in published articles, books,
    conference papers, and other scholarly works are those of the
    respective authors.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    They do not necessarily reflect the views, policies, or
    positions of Redmont Publications, its editors, reviewers,
    advisory boards, employees, or affiliates.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications shall not be responsible for any errors,
    omissions, interpretations, or consequences arising from
    published content.
  </p>
</div>
```

  </div>
</div>

{/* Section 8 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
  <AlertTriangle size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    8. Limitation of Liability
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    To the fullest extent permitted by law, Redmont Publications
    shall not be liable for any direct, indirect, incidental,
    consequential, special, or punitive damages arising from:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Use of this website;",
      "Reliance upon information contained herein;",
      "Publication delays;",
      "Service interruptions;",
      "Technical failures;",
      "Loss of data;",
      "Indexing decisions;",
      "Editorial decisions;",
      "Third-party actions or services.",
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
    Users access and use this website entirely at their own risk.
  </p>
</div>
```

  </div>
</div>


         {/* Section 9 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
  <Globe size={18} className="text-orange-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    9. Website Availability
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    While we strive to maintain uninterrupted access to our website
    and services, Redmont Publications does not guarantee that the
    website will always be available, secure, error-free, or free
    from viruses, malware, or other harmful components.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    We reserve the right to modify, suspend, or discontinue any part
    of the website or services at any time without prior notice.
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
  <Copyright size={18} className="text-violet-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    10. Intellectual Property
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    All trademarks, logos, branding elements, website content,
    designs, graphics, and materials displayed on this website are
    the property of Redmont Publications or their respective owners
    unless otherwise stated.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Unauthorized reproduction, distribution, modification, or
    commercial use is prohibited without prior written permission.
  </p>
</div>
```

  </div>
</div>

{/* Section 11 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
  <RefreshCcw size={18} className="text-slate-700" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    11. Changes to This Disclaimer
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications reserves the right to amend, revise, or
    update this Disclaimer at any time without prior notice.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Any modifications shall become effective immediately upon
    publication on this website.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Continued use of the website constitutes acceptance of the
    revised Disclaimer.
  </p>
</div>
```

  </div>
</div>

{/* Section 12 */}

<div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">

```
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
  <FileText size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    12. Contact Information
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    For questions regarding this Disclaimer, please contact:
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
    By accessing and using the Redmont Publications website, you
    acknowledge that you have read, understood, and agreed to this
    Disclaimer.
  </p>
</div>

</div>

        </div>
    </section>
  );
};

export default Disclaimer;
