import {
  Copyright,
  FileSignature,
  UserCheck,
  Image,
  ShieldAlert,
  FileCheck,
  Archive,
  BookOpen,
  Users,
  Lock,
  Scale,
  AlertTriangle,
  RefreshCcw,
  FileText,
  CheckCircle2,
} from "lucide-react";

const CopyrightPolicy = () => {
  return (
  <section className="bg-[#f8fafc] py-16 lg:py-30">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

    <div className="text-center">
      <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
        Copyright Policy
      </h1>

      <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
        ...
      </p>
    </div>

      <div className="mt-12 space-y-8">
        {/* Section 1 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            ```
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <Copyright size={18} className="text-blue-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                1. Copyright Ownership
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Authors retain copyright ownership of their original work unless
                otherwise specified in a separate publishing agreement.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                By submitting a manuscript, book chapter, conference paper,
                review article, or other scholarly work, authors confirm that:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "The submitted work is original.",
                  "They possess the legal authority to grant publication rights.",
                  "The work does not infringe upon the rights of any third party.",
                  "Necessary permissions have been obtained for any copyrighted material included in the submission.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-blue-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            ```
          </div>
        </div>

        {/* Section 2 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            ```
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
              <FileSignature size={18} className="text-green-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                2. Publishing License
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Upon acceptance for publication, authors grant Redmont
                Publications a non-exclusive license to:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Publish the work in print and electronic formats;",
                  "Distribute the work worldwide;",
                  "Archive and preserve the work;",
                  "Register metadata and identifiers (including DOI where applicable);",
                  "Index and disseminate the work through databases and repositories;",
                  "Promote and market the published content.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-green-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                The specific licensing terms may vary depending on the
                publication type and any separate agreement executed between the
                author and Redmont Publications.
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
              <UserCheck size={18} className="text-purple-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                3. Author Rights
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Authors generally retain the right to:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Be identified as the creator of their work;",
                  "Use the work for educational and research purposes;",
                  "Share the published work with colleagues and students;",
                  "Deposit approved versions in institutional repositories, subject to applicable policies;",
                  "Include the work in theses, dissertations, books, or future scholarly compilations with proper citation.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-purple-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Authors must acknowledge the original publication source when
                reusing published material.
              </p>
            </div>
            ```
          </div>
        </div>

        {/* Section 4 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            ```
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
              <Image size={18} className="text-orange-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                4. Use of Third-Party Material
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Authors are responsible for obtaining written permission for any
                copyrighted material included in their submissions, including
                but not limited to:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Figures",
                  "Tables",
                  "Images",
                  "Photographs",
                  "Graphs",
                  "Illustrations",
                  "Maps",
                  "Large text excerpts",
                  "Multimedia content",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-orange-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Evidence of permission may be requested by Redmont Publications
                at any stage of the publication process.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Failure to obtain required permissions may result in rejection,
                correction, withdrawal, or retraction of the publication.
              </p>
            </div>
            ```
          </div>
        </div>

        {/* Section 5 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            ```
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
              <ShieldAlert size={18} className="text-red-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                5. Copyright Infringement
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications does not knowingly publish material that
                infringes copyright laws or intellectual property rights.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                If copyright infringement is suspected, reported, or discovered,
                Redmont Publications may:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Investigate the allegation;",
                  "Contact the involved parties;",
                  "Request supporting documentation;",
                  "Temporarily suspend access to the content;",
                  "Publish corrections;",
                  "Retract affected publications;",
                  "Remove content where legally required.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-red-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Appropriate actions will be taken based on the findings of the
                investigation.
              </p>
            </div>
            ```
          </div>
        </div>

        {/* Section 6 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            ```
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
              <FileCheck size={18} className="text-cyan-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                6. Permissions and Reuse Requests
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Requests to reproduce, distribute, translate, adapt, or reuse
                material published by Redmont Publications should be submitted
                in writing.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Permission requests should include:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Full citation of the material;",
                  "Intended use;",
                  "Distribution method;",
                  "Nature of reproduction;",
                  "Requestor's contact information.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Approval may be subject to applicable copyright laws, licensing
                terms, and author agreements.
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
              <Archive size={18} className="text-indigo-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                7. Repository and Archiving Rights
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications supports the long-term preservation of
                scholarly content.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Published materials may be archived in:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Institutional repositories;",
                  "Academic databases;",
                  "Digital archives;",
                  "Preservation systems;",
                  "Library collections;",
                  "Scholarly indexing platforms.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-indigo-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Such archiving activities are intended to enhance accessibility,
                preservation, and scholarly communication.
              </p>
            </div>
            ```
          </div>
        </div>

        {/* Section 8 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            ```
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
              <BookOpen size={18} className="text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                8. Open Access Publications
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Where applicable, certain publications may be made available
                under specific Open Access licensing terms.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                The applicable license, if any, will be clearly indicated on the
                published work.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Users must comply with the terms of the applicable license when
                using, sharing, or reproducing Open Access content.
              </p>
            </div>
            ```
          </div>
        </div>

        {/* Section 9 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            ```
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
              <Users size={18} className="text-amber-600" />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                9. User Responsibilities
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Users accessing content published by Redmont Publications agree
                not to:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Reproduce copyrighted materials without authorization;",
                  "Remove copyright notices;",
                  "Misrepresent authorship;",
                  "Distribute content unlawfully;",
                  "Use content in a manner that infringes intellectual property rights.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-amber-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Unauthorized use may result in legal action and other remedies
                available under applicable law.
              </p>
            </div>
            ```
          </div>
        </div>

        {/* Section 10 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
              <Lock size={18} className="text-violet-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                10. Digital Content Protection
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications reserves the right to employ technical,
                administrative, and legal measures to protect copyrighted
                content from unauthorized access, copying, distribution, or
                misuse.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Such measures may include monitoring, access controls, and
                enforcement actions where necessary.
              </p>
            </div>
          </div>
        </div>

        {/* Section 11 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50">
              <AlertTriangle size={18} className="text-rose-600" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                11. Copyright Complaints (DMCA-Style Notice)
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Any individual or organization believing that content published
                by Redmont Publications infringes their copyright may submit a
                written complaint containing:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Identification of the copyrighted work;",
                  "Identification of the allegedly infringing material;",
                  "Contact information of the complainant;",
                  "A statement of good-faith belief that the use is unauthorized;",
                  "A statement that the information provided is accurate.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-rose-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Upon receipt of a valid complaint, Redmont Publications will
                review the matter and take appropriate action where warranted.
              </p>
            </div>
          </div>
        </div>

        {/* Section 12 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50">
              <Scale size={18} className="text-yellow-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                12. Limitation of Liability
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                While Redmont Publications undertakes reasonable efforts to
                verify permissions and copyright compliance, ultimate
                responsibility for submitted content remains with the authors.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications shall not be liable for copyright
                violations resulting from false, incomplete, or misleading
                information provided by contributors.
              </p>
            </div>
          </div>
        </div>

        {/* Section 13 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <RefreshCcw size={18} className="text-blue-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                13. Policy Updates
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications reserves the right to modify or update this
                Copyright Policy at any time.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Any changes shall become effective immediately upon publication
                on the website.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Continued use of our services constitutes acceptance of the
                revised policy.
              </p>
            </div>
          </div>
        </div>

        {/* Section 14 */}
        <div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
              <FileText size={18} className="text-red-600" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                14. Contact Information
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                For copyright inquiries, permission requests, or infringement
                complaints, please contact:
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
                  <span className="font-semibold text-[#071739]">Phone:</span>{" "}
                  +91 9711052076
                </p>

                <p>
                  <span className="font-semibold text-[#071739]">Website:</span>{" "}
                  www.redmontpublications.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-[15px] leading-7 text-slate-600">
            Redmont Publications respects intellectual property rights and is
            committed to protecting the rights of authors, contributors,
            publishers, and content users while supporting the responsible
            dissemination of scholarly knowledge.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CopyrightPolicy;
