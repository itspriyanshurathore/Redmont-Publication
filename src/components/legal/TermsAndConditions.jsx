import {
  FileText,
  CheckCircle2,
  BookOpen,
  Users,
  ShieldCheck,
  Globe,
  CreditCard,
  Database,
  AlertTriangle,
  Lock,
  Gavel,
} from "lucide-react";

const TermsAndConditions = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
            Terms and Conditions
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
            Welcome to Redmont Publications. These Terms and Conditions govern
            the use of our website, publishing platforms, journal services, book
            publishing services, conference proceedings services, editorial
            support services, and all related offerings provided by Redmont
            Publications ("Redmont Publications", "we", "our", or "us").
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
            By accessing our website or using any of our services, you
            acknowledge that you have read, understood, and agreed to be bound
            by these Terms and Conditions.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Section 1 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <FileText size={18} className="text-blue-600" />
            </div>
          
            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                By accessing or using the services of Redmont Publications, you
                agree to comply with these Terms and Conditions, our Privacy
                Policy, Publication Ethics Policy, Copyright Policy, and any
                additional policies published on our website.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                If you do not agree with these Terms and Conditions, you must
                discontinue use of our website and services immediately.
              </p>
            </div>
            
          </div>
        </div>

        {/* Section 2 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
              <BookOpen size={18} className="text-green-600" />
            </div>
            
            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                2. Scope of Services
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications may provide services including but not
                limited to:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Academic journal publication",
                  "Book publishing",
                  "Conference proceedings publication",
                  "DOI registration support",
                  "Editorial and language editing services",
                  "Manuscript formatting services",
                  "Research consultancy services",
                  "Publication support services",
                  "Academic content management",
                  "Digital publishing solutions",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-green-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                The availability of specific services may change without prior
                notice.
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

            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                3. Eligibility
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Users must be at least eighteen (18) years of age or legally
                authorized to enter into binding agreements within their
                jurisdiction.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                By using our services, you confirm that all information provided
                is accurate, complete, and lawful.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
              <ShieldCheck size={18} className="text-red-600" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                4. Author Responsibilities
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Authors submitting manuscripts, books, conference papers, or
                other content agree that:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "The submitted work is original.",
                  "The work does not infringe any copyright, trademark, patent, or intellectual property rights.",
                  "All listed authors have approved the submission.",
                  "Appropriate acknowledgments and citations have been provided.",
                  "Any required ethical approvals have been obtained.",
                  "Submitted information is accurate and complete.",
                  "The manuscript is not knowingly submitted with fraudulent, fabricated, or manipulated data.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-red-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Authors remain solely responsible for the accuracy and integrity
                of submitted content.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
              <FileText size={18} className="text-orange-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                5. Editorial Independence
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications reserves the right to:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Accept or reject submissions.",
                  "Request revisions.",
                  "Conduct peer review and editorial evaluation.",
                  "Withdraw submissions that violate ethical standards.",
                  "Remove published content where necessary to protect publication integrity.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-orange-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Editorial decisions are final and made in accordance with
                publication ethics and academic standards.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
              <ShieldCheck size={18} className="text-pink-600" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                6. Publication Ethics
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                All users must comply with accepted standards of academic and
                publication ethics.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                The following practices are strictly prohibited:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Plagiarism",
                  "Duplicate publication",
                  "Data fabrication",
                  "Data falsification",
                  "Citation manipulation",
                  "Authorship manipulation",
                  "Peer-review manipulation",
                  "Submission of misleading information",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-pink-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Violations may result in rejection, correction, retraction,
                reporting to institutions, or permanent restrictions from future
                submissions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
              <Lock size={18} className="text-indigo-600" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                7. Intellectual Property Rights
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Authors generally retain ownership of their original work unless
                otherwise agreed in writing.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                By submitting content to Redmont Publications, authors grant the
                necessary rights required for:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Editorial processing",
                  "Peer review",
                  "Publication",
                  "Distribution",
                  "Indexing",
                  "Archiving",
                  "DOI registration",
                  "Metadata dissemination",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-indigo-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Specific copyright arrangements may be governed by separate
                publication agreements.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
              <CreditCard size={18} className="text-amber-600" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                8. Fees and Payments
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Certain services offered by Redmont Publications may require
                payment, including but not limited to:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Publication charges",
                  "Editorial services",
                  "Language editing services",
                  "DOI services",
                  "Book publishing services",
                  "Conference proceedings services",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-amber-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Applicable fees will be communicated before service
                commencement.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Payment of fees does not guarantee acceptance, publication,
                indexing, citation impact, journal ranking, or inclusion in any
                database.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
              <Database size={18} className="text-cyan-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                9. Indexing and Third-Party Databases
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications may submit eligible publications for
                inclusion in indexing and abstracting databases.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                However, we do not guarantee:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Acceptance by any indexing agency;",
                  "Inclusion in Scopus, Web of Science, PubMed, NAAS, ABDC, Embase, or any other database;",
                  "Continued indexing status;",
                  "Citation performance;",
                  "Impact factor acquisition.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-cyan-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Indexing decisions remain solely under the authority of the
                respective indexing organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 10 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <Globe size={18} className="text-slate-700" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                10. Website Use
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Users agree not to:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Violate any applicable law;",
                  "Interfere with website functionality;",
                  "Upload malicious software or harmful content;",
                  "Attempt unauthorized access to systems;",
                  "Misrepresent identity or affiliation;",
                  "Use the website for fraudulent activities.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-slate-700" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                Redmont Publications reserves the right to restrict or terminate
                access for violations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 11 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
              <Globe size={18} className="text-violet-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#071739]">
                11. Third-Party Services
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                The website may contain links to third-party websites, payment
                gateways, repositories, indexing services, and external
                resources.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Redmont Publications does not control and is not responsible for
                the content, availability, policies, or practices of third-party
                services.
              </p>
            </div>
          </div>
        </div>

        {/* Section 12 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50">
              <AlertTriangle size={18} className="text-yellow-600" />
            </div>

            <div className="w-full">
              <h2 className="text-lg font-bold text-[#071739]">
                12. Limitation of Liability
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                To the maximum extent permitted by law, Redmont Publications
                shall not be liable for:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Indirect or consequential damages;",
                  "Loss of profits;",
                  "Loss of research opportunities;",
                  "Publication delays;",
                  "Data loss;",
                  "Technical interruptions;",
                  "Actions of third-party service providers;",
                  "Indexing decisions made by external organizations.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-1 text-yellow-600" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                All services are provided on an "as available" and "as is"
                basis.
              </p>
            </div>
            
          </div>
        </div>
        {/* Section 13 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50">
                  <AlertTriangle size={18} className="text-yellow-600" />
                </div>
                
                <div className="w-full">
                  <h2 className="text-lg font-bold text-[#071739]">
                    13. Disclaimer of Warranties
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    Redmont Publications makes no warranties or guarantees
                    regarding:
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "Publication outcomes;",
                      "Acceptance decisions;",
                      "Reviewer recommendations;",
                      "Editorial decisions;",
                      "Citation performance;",
                      "Indexing results;",
                      "Search engine rankings;",
                      "Commercial success of published works.",
                    ].map((item) => (
                      <div key={item} className="flex gap-2">
                        <CheckCircle2
                          size={16}
                          className="mt-1 text-yellow-600"
                        />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-slate-600">
                    Users acknowledge that academic publishing outcomes depend
                    on multiple independent factors beyond our control.
                  </p>
                </div>
                
              </div>
            </div>

            {/* Section 14 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                  <Lock size={18} className="text-red-600" />
                </div>
                
                <div>
                  <h2 className="text-lg font-bold text-[#071739]">
                    14. Suspension and Termination
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    We reserve the right to suspend, restrict, or terminate
                    access to our services if:
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "Terms and Conditions are violated;",
                      "Fraudulent activity is detected;",
                      "Publication ethics violations occur;",
                      "Legal compliance requires such action.",
                    ].map((item) => (
                      <div key={item} className="flex gap-2">
                        <CheckCircle2 size={16} className="mt-1 text-red-600" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-slate-600">
                    Termination may occur without prior notice when necessary.
                  </p>
                </div>
                
              </div>
            </div>

            {/* Section 15 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <AlertTriangle size={18} className="text-orange-600" />
                </div>
                
                <div className="w-full">
                  <h2 className="text-lg font-bold text-[#071739]">
                    15. Force Majeure
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    Redmont Publications shall not be responsible for delays or
                    failures resulting from circumstances beyond reasonable
                    control, including:
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Natural disasters",
                      "Internet outages",
                      "Cybersecurity incidents",
                      "Government actions",
                      "Labor disputes",
                      "Technical failures",
                      "Public health emergencies",
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
                </div>
                
              </div>
            </div>

            {/* Section 16 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                  <Gavel size={18} className="text-violet-600" />
                </div>
                
                <div>
                  <h2 className="text-lg font-bold text-[#071739]">
                    16. Governing Law and Jurisdiction
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    These Terms and Conditions shall be governed by and
                    interpreted in accordance with the laws of India.
                  </p>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    Any disputes arising from the use of our services shall be
                    subject to the exclusive jurisdiction of the competent
                    courts located in Delhi NCR, India.
                  </p>
                </div>
                
              </div>
            </div>

            {/* Section 17 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <FileText size={18} className="text-blue-600" />
                </div>
                
                <div>
                  <h2 className="text-lg font-bold text-[#071739]">
                    17. Amendments
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    Redmont Publications reserves the right to modify these
                    Terms and Conditions at any time.
                  </p>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    Updated versions will be published on this page and shall
                    become effective immediately upon publication.
                  </p>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    Continued use of our services constitutes acceptance of any
                    revised Terms and Conditions.
                  </p>
                </div>
                
              </div>
            </div>

            {/* Section 18 */}

            <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                  <FileText size={18} className="text-red-600" />
                </div>
                
                <div className="w-full">
                  <h2 className="text-lg font-bold text-[#071739]">
                    18. Contact Information
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    For questions regarding these Terms and Conditions, please
                    contact:
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
                
              </div>
            </div>

            {/* Closing Statement */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[15px] leading-7 text-slate-600">
                By using the services of Redmont Publications, you acknowledge
                that you have read, understood, and agreed to these Terms and
                Conditions.
              </p>
            </div>
          
        </div>

      </div>
    </section>
  );
};

export default TermsAndConditions;
