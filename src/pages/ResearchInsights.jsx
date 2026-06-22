import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


// import {
//   scopusWosIntroduction,
//   whatIsScopus,
//   whatIsWebOfScience,
//   coverageDatabase,
//   publisherOwnership,
//   subjectCoverage,
//   citationMetrics,
//   journalSelectionCriteria,
//   conferenceCoverage,
//   institutionalPreference,
//   researchVisibility,
// } from "@/data/QNA";

const ResearchInsights = () => {
  return (
    <section className="bg-[#f8fafc] py-30">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Heading */}
        <div className="text-center">
        
          {/* <h1 className="mt-4 text-4xl font-bold text-[#071739]">
             
          </h1> */}
             <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
        Publishing &{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
             Journals
              </span>
            </h1>
        </div>

        {/* Article 1 */}
        <div className="mt-16 rounded-xl border bg-white p-8 shadow-sm">
          
          <h2 className="text-3xl font-bold text-[#071739]">
            How to Select the Right Journal for Research Publication
          </h2>

          <Accordion
            type="single"
            collapsible
            className="mt-8"
          >
            <AccordionItem value="1">
              <AccordionTrigger>
                Understand the Scope of the Journal
              </AccordionTrigger>

              <AccordionContent>
                Before submitting a manuscript,
                researchers should carefully review
                the journal’s aim and scope,
                subject coverage, published
                articles, research themes and
                target audience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2">
              <AccordionTrigger>
                Review Journal Indexing and Visibility
              </AccordionTrigger>

              <AccordionContent>
                Researchers should verify whether
                the journal is indexed in recognized
                databases relevant to their field.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="3">
              <AccordionTrigger>
                Evaluate Journal Quality and Credibility
              </AccordionTrigger>

              <AccordionContent>
                Authors should assess editorial
                transparency, peer review,
                publishing history and quality
                of previously published articles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="4">
              <AccordionTrigger>
                Check the Peer Review Process
              </AccordionTrigger>

              <AccordionContent>
                Researchers should understand
                review type, timelines, revision
                procedures and editorial workflow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="5">
              <AccordionTrigger>
                Review Author Guidelines Carefully
              </AccordionTrigger>

              <AccordionContent>
                Every journal has specific
                formatting, citation and manuscript
                requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="6">
              <AccordionTrigger>
                Consider Publication Ethics
              </AccordionTrigger>

              <AccordionContent>
                Researchers should avoid journals
                lacking ethical policies or showing
                signs of predatory publishing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="7">
              <AccordionTrigger>
                Analyze Publication Timeline
              </AccordionTrigger>

              <AccordionContent>
                Review duration, revision timelines,
                publication frequency and expected
                processing time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="8">
              <AccordionTrigger>
                Understand Open Access and Publication Policies
              </AccordionTrigger>

              <AccordionContent>
                Review open access policies,
                copyright terms, licensing and
                publication charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="9">
              <AccordionTrigger>
                Review Previously Published Articles
              </AccordionTrigger>

              <AccordionContent>
                Analyzing published articles helps
                understand journal standards and
                expectations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="10">
              <AccordionTrigger>
                Seek Guidance When Necessary
              </AccordionTrigger>

              <AccordionContent>
                Guidance from supervisors,
                mentors and experienced researchers
                can improve journal selection.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Article 2 */}
        <div className="mt-16 rounded-xl border bg-white p-8 shadow-sm">
          
          <h2 className="text-3xl font-bold text-[#071739]">
            Difference Between Scopus and Web of Science
          </h2>

          {/* Comparison Table */}
          <div className="mt-8 overflow-hidden rounded-xl border">
            
            <table className="w-full border-collapse">
              
              <thead>
                <tr className="bg-[#071739] text-white">
                  <th className="p-4 text-left">
                    Feature
                  </th>

                  <th className="p-4 text-left">
                    Scopus
                  </th>

                  <th className="p-4 text-left">
                    Web of Science
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">
                    Managed By
                  </td>
                  <td className="p-4">
                    Elsevier
                  </td>
                  <td className="p-4">
                    Clarivate
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">
                    Coverage
                  </td>
                  <td className="p-4">
                    Broad multidisciplinary coverage
                  </td>
                  <td className="p-4">
                    More selective indexing
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">
                    Citation Metrics
                  </td>
                  <td className="p-4">
                    CiteScore, SJR, SNIP
                  </td>
                  <td className="p-4">
                    Impact Factor, JCR
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">
                    Conference Proceedings
                  </td>
                  <td className="p-4">
                    Strong coverage
                  </td>
                  <td className="p-4">
                    Selective coverage
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">
                    Journal Inclusion
                  </td>
                  <td className="p-4">
                    Larger database
                  </td>
                  <td className="p-4">
                    More selective database
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">
                    Common Usage
                  </td>
                  <td className="p-4">
                    Publication visibility
                  </td>
                  <td className="p-4">
                    Citation impact evaluation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl bg-red-50 p-6">
            <h3 className="font-semibold text-[#071739]">
              Which One is Better?
            </h3>

            <p className="mt-3 text-[#475569]">
              There is no universal answer.
              The suitability depends on academic
              discipline, institutional requirements,
              research objectives, journal quality,
              and publication goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInsights;