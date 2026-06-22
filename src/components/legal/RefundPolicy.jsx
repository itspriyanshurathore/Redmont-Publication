import {
  Wallet,
  CreditCard,
  BookOpen,
  FileText,
  FileCheck,
  Database,
  Users,
  AlertTriangle,
  RefreshCcw,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const RefundPolicy = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
            Refund Policy
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
           Redmont Publications is committed to maintaining transparency and fairness in all publishing and academic support services. This Refund Policy outlines the circumstances under which refunds may or may not be granted for services offered by Redmont Publications
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
           By purchasing or using any of our services, you acknowledge and agree to this Refund Policy.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
         

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Wallet size={18} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  1. General Policy
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Due to the nature of academic publishing, editorial
                  processing, manuscript evaluation, consultation, formatting,
                  DOI registration, and related professional services, most
                  services involve immediate allocation of resources, personnel,
                  and administrative efforts.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  As a result, fees paid for services may become non-refundable
                  once work has commenced.
                </p>
              </div>
             
            </div>
          </div>

          {/* Section 2 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <CreditCard size={18} className="text-red-600" />
              </div>
              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  2. Publication and Processing Fees
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Publication fees, article processing charges (APCs), editorial
                  fees, submission fees, and related publication charges are
                  generally non-refundable once any of the following activities
                  have begun:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Initial manuscript screening",
                    "Editorial assessment",
                    "Peer-review processing",
                    "Reviewer assignment",
                    "Technical evaluation",
                    "Plagiarism screening",
                    "DOI registration",
                    "Production or publication preparation",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-red-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Refunds will not be granted solely because:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "A manuscript is rejected after editorial or peer-review evaluation.",
                    "Authors choose to withdraw a submission after review has commenced.",
                    "Authors fail to respond during the editorial process.",
                    "Authors no longer wish to publish after acceptance.",
                    "Indexing expectations are not met.",
                    "Citation expectations are not met.",
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

          {/* Section 3 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <BookOpen size={18} className="text-green-600" />
              </div>
              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  3. Book Publishing Services
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  For book publishing services, refunds are generally
                  unavailable once any production activity has commenced,
                  including:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Manuscript assessment",
                    "Editing",
                    "Formatting",
                    "Typesetting",
                    "Cover design",
                    "ISBN registration",
                    "Production work",
                    "Digital publication preparation",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-1 text-green-600" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  If no work has been initiated, refund requests may be
                  considered on a case-by-case basis.
                </p>
              </div>
             
            </div>
          </div>

          {/* Section 4 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <FileText size={18} className="text-purple-600" />
              </div>
              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  4. Editorial, Formatting, and Language Editing Services
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Refund requests for editorial, formatting, proofreading,
                  language editing, and related services may only be considered
                  if:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Work has not yet commenced; and",
                    "A written cancellation request is received before service initiation.",
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
                  Once work has started, completed, or substantially progressed,
                  no refund shall be issued.
                </p>
              </div>
             
            </div>
          </div>

          {/* Section 5 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <Database size={18} className="text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  5. DOI and Registration Services
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Fees associated with DOI registration, metadata registration,
                  ISBN services, indexing submissions, and similar
                  registration-based services are non-refundable once processing
                  has been initiated.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Third-party registration fees paid to external agencies cannot
                  be recovered and therefore cannot be refunded.
                </p>
              </div>
             
            </div>
          </div>

          {/* Section 6 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                <Users size={18} className="text-cyan-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  6. Conference Proceedings Services
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Payments made for conference proceedings publication,
                  editorial management, production support, or related services
                  are generally non-refundable once processing, editorial
                  review, or production activities have commenced.
                </p>
              </div>
             
            </div>
          </div>

          {/* Section 7 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <RefreshCcw size={18} className="text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  7. Duplicate Payments
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  If a customer accidentally makes a duplicate payment for the
                  same service, Redmont Publications will verify the transaction
                  and may issue a refund for the excess amount after
                  confirmation.
                </p>
              </div>
             
            </div>
          </div>

          {/* Section 8 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <CreditCard size={18} className="text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#071739]">
                  8. Failed Transactions
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  In cases where payment has been deducted but the transaction
                  was not successfully completed, users should contact us with
                  proof of payment.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  After verification, the amount may be refunded or adjusted
                  toward the intended service as appropriate.
                </p>
              </div>
             
            </div>
          </div>

          {/* Section 9 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <ShieldCheck size={18} className="text-purple-600" />
              </div>
              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  9. Exceptional Circumstances
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Refund requests arising from exceptional situations may be
                  reviewed at the sole discretion of Redmont Publications.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Approval of any refund request remains entirely at the
                  discretion of the management and shall depend on:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "The stage of service completion;",
                    "Resources already utilized;",
                    "Third-party costs incurred;",
                    "Administrative processing already performed.",
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

          {/* Section 10 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start gap-4">
             
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <AlertTriangle size={18} className="text-red-600" />
              </div>
              <div className="w-full">
                <h2 className="text-lg font-bold text-[#071739]">
                  10. Non-Refundable Situations
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Refunds will not be provided for:
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Change of mind after payment;",
                    "Failure to read service descriptions or policies;",
                    "Rejection of manuscripts after editorial evaluation;",
                    "Delays caused by authors or contributors;",
                    "Dissatisfaction with peer-review outcomes;",
                    "Expectations regarding journal indexing, ranking, citations, impact factors, or database inclusion;",
                    "Withdrawal of manuscripts after processing has begun;",
                    "Services already delivered, completed, or substantially performed.",
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

          {/* Section 11 */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <RefreshCcw size={18} className="text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#071739]">
              11. Refund Processing
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              If a refund is approved, it will generally be processed through
              the original payment method used during the transaction.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Approved refunds may take 7–21 business days to appear, depending
              on banking institutions, payment gateways, and financial
              processing systems.
            </p>
          </div>

          {/* Section 12 */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
            <FileCheck size={18} className="text-violet-600" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#071739]">
              12. Policy Modifications
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Redmont Publications reserves the right to amend, revise, or
              update this Refund Policy at any time without prior notice.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Updated versions shall become effective immediately upon
              publication on the website.
            </p>
          </div>

          {/* Section 13 */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
            <FileText size={18} className="text-red-600" />
          </div>

          <div className="w-full">
            <h2 className="text-lg font-bold text-[#071739]">
              13. Contact Information
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              For refund-related inquiries, please contact:
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

          {/* Closing Statement */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[15px] leading-7 text-slate-600">
              By purchasing or using any service offered by Redmont
              Publications, you acknowledge that you have read, understood, and
              agreed to this Refund Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
