import {
  Receipt,
  FileText,
  Briefcase,
  BadgeDollarSign,
  CreditCard,
  ShieldCheck,
  Percent,
  RefreshCcw,
  Database,
  UserCheck,
  Settings,
  Mail,
  CheckCircle2,
} from "lucide-react";

const APCPolicy = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
            Publication Charges Policy
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
          Redmont Publications is committed to maintaining transparency, fairness, and ethical publishing practices. This Publication Charges Policy outlines the fees, payment procedures, waivers, and related terms applicable to journals, books, conference proceedings, and other scholarly publishing services offered by Redmont Publications.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
         By submitting a manuscript, book proposal, conference paper, or utilizing any publishing service offered by Redmont Publications, authors, editors, institutions, and contributors acknowledge and agree to this Policy.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Receipt size={18} className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  1. Purpose of Publication Charges
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Publication charges help support the costs associated with the scholarly publishing process, including:
                </p>

                 <div className="mt-5 space-y-3">
                  {[
                   "Manuscript submission management",
"Editorial evaluation",
"Peer-review administration",
"Technical screening",
"Plagiarism checking",
"Copyediting and proofreading",
"Typesetting and formatting",
"Cover design and production",
"DOI registration",
"ISBN registration support",
"Metadata creation and management",
"Digital publication and hosting",
"Online dissemination",
"Digital archiving and preservation",
"Administrative and operational services",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

             
                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                   These charges contribute to maintaining publication quality, accessibility, and long-term preservation of scholarly content.
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
                  2. Applicable Publication Charges
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  
Publication charges may apply to various publishing services offered by Redmont Publications, including but not limited to:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                   "Journal Publications",
                    " Research Articles",
                    " Review Articles",
"Case Studies",
"Short Communications",
"Technical Notes",
"Editorial Contributions",
"Special Issue Articles",
"Book Publishing Services",
"Academic Books",
"Textbooks",
"Reference Books",
"Monographs",
"Edited Books",
"Conference Proceedings Books",
"Book Chapters",
"Thesis-to-Book Publications",
"Professional and Scholarly Books",
"Conference Publications",
"Conference Papers",
"Conference Proceedings",
"Abstract Books",
"Seminar Publications",
"Symposium Publications",
"Additional Publishing Services",
"DOI Registration",
"ISBN Registration Support",
"Copyediting",
"Language Editing",
"Formatting Services",
"Typesetting Services",
"Publication Support Services",
"Digital Publishing Solutions",


                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                 The applicable fee may vary depending upon the publication type, manuscript length, production requirements, subject area, editorial services requested, and publication format.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <Briefcase size={18} className="text-purple-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  3. Fee Disclosure
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  
Applicable publication charges will be communicated through:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                  "Journal websites",
"Author guidelines",
"Book publishing proposals",
"Conference publication agreements",
"Official quotations",
"Direct communication from Redmont Publications",
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
                 
Authors and contributors are encouraged to review all applicable charges before proceeding with publication services.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Independence */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <BadgeDollarSign size={18} className="text-orange-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  4. Editorial Independence
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Payment of publication charges does not influence:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                   "Editorial decisions",
"Peer-review outcomes",
"Reviewer recommendations",
"Manuscript acceptance",
"Publication eligibility",
"Ethical evaluations",
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
                 All submissions are assessed solely on academic merit, originality, quality, relevance, and compliance with publication ethics standards.
                </p>
                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                 Payment of fees does not guarantee acceptance or publication.
                </p>
               
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <CreditCard size={18} className="text-cyan-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  5. Payment Procedure
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Where publication charges apply:
                </p>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Payment instructions will be provided by Redmont Publications.
Payments must be made through approved payment methods.
Publication activities may be delayed until payment verification is completed.
Authors are responsible for any applicable banking charges, transaction fees, taxes, or currency conversion costs.
                </p>
                 <p className="mt-4 text-[15px] leading-7 text-slate-600">
               Invoices and payment confirmations may be issued upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <CreditCard size={18} className="text-indigo-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  6. Services Covered by Publication Charges
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Depending on the publication type, charges may cover:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                      "Peer-review administration",
                      "Editorial processing",
"Technical evaluation",
"Plagiarism screening",
"Copyediting",
"Proofreading",
"Typesetting",
"Layout design",
"Cover design",
"DOI assignment",
"ISBN support",
"Metadata registration",
"Online publication",
"Digital dissemination",
"Archiving and preservation",


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
                 Specific inclusions may vary based on the selected publication package or service agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <ShieldCheck size={18} className="text-emerald-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  7. Waivers and Discounts
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Redmont Publications may, at its sole discretion, provide:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                   
"Full fee waivers",
"Partial fee waivers",
"Institutional discounts",
"Academic partnership discounts",
"Conference collaboration discounts",
"Promotional offers",
"Special publication agreements",
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
                
Approval of waivers or discounts is not guaranteed and will be evaluated individually based on applicable criteria.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
                <Percent size={18} className="text-pink-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  8. Refunds
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Refund requests shall be governed by the Refund Policy published on the Redmont Publications website.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  In general, publication charges become non-refundable once editorial processing, production work, registration services, or publication activities have commenced.
                </p>

 <p className="mt-5 text-[15px] leading-7 text-slate-600">
                 Authors are encouraged to review the Refund Policy before making any payment.
                </p>

              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <RefreshCcw size={18} className="text-amber-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                    9. Indexing and Publication Charges</h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Payment of publication charges does not guarantee:
                </p>
                  <div className="mt-5 space-y-3">
                  {[
                   
"Inclusion in Scopus",
"Inclusion in Web of Science",
"Inclusion in PubMed",
"Inclusion in Embase",
"Inclusion in ABDC",
"Inclusion in NAAS",
"Inclusion in DOAJ",
"Inclusion in any indexing database",
"Citation performance",
"Journal rankings",
"Impact factor acquisition",
"Academic recognition",
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

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                All indexing and abstracting decisions remain solely under the authority of the respective organizations.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <Database size={18} className="text-red-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  10. Publication Ethics Compliance
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  
All authors and contributors must comply with:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                   
"Publication Ethics Policy",
"Plagiarism Policy",
"Copyright Policy",
"Retraction Policy",
"Author Guidelines",
"Terms and Conditions",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
               Payment of publication charges does not exempt any submission from ethical review, plagiarism screening, editorial assessment, or peer-review requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <UserCheck size={18} className="text-cyan-600" />
              </div>

              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  11. Taxes and Government Charges
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 
Applicable taxes, statutory levies, government fees, or financial charges may be applied in accordance with relevant laws and regulations.
                </p>
                 <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 
Where applicable, such charges shall be payable by the customer in addition to the publication fees.
                </p>



               
              </div>
            </div>
          </div>

          {/* Section 12 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <Settings size={18} className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  12. Modification of Charges
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Redmont Publications reserves the right to revise, modify, or update publication charges at any time.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Any changes shall not affect services already confirmed under a previously agreed quotation unless otherwise specified.
                </p>
              </div>
            </div>
          </div>
              {/* Section 13 */}
           <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <Settings size={18} className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  13. Limitation of Liability
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Publication charges are intended to cover publishing and production services only.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications shall not be liable for outcomes related to:
                </p>
                  <div className="mt-5 space-y-3">
                  {[
                   
"Editorial decisions",
"Reviewer recommendations",
"Citation performance",
"Indexing outcomes",
"Research impact",
"Academic promotions",
"Funding decisions",
"Institutional evaluations",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>


                 <p className="mt-4 text-[15px] leading-7 text-slate-600">
               Such outcomes depend on numerous factors beyond the control of Redmont Publications.
                </p>
              </div>
            </div>
          </div>

           {/* Section 14 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <Settings size={18} className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  14. Policy Updates
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                 Redmont Publications reserves the right to amend, revise, or update this Publication Charges Policy at any time.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Updated versions shall become effective immediately upon publication on the website.
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
                  For APC-related inquiries, please contact:
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
              Redmont Publications is committed to maintaining transparent,
              fair, and ethical publication fee practices while supporting
              high-quality scholarly communication and academic publishing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APCPolicy;
