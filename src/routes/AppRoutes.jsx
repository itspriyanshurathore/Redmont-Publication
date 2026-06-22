import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import Contact from "../pages/Contact";
import Book from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import About from "@/pages/About";
import PublishingEthicsPage from "@/pages/PublishingEthicsPage";
import EditorialPolicy from "@/pages/EditorialPolicy";
import MissionVission from "@/pages/MissionVission";
import JournalPublicationSupport from "@/pages/JournalPublicationSupport";
import BookPublishing from "@/pages/BookPublishing";
import ThesisEditing from "@/pages/ThesisEditing";
import ConferenceProceedings from "@/pages/ConferenceProceedings";
import PatentAssistance from "@/pages/PatentAssistance";
import DOIServices from "@/pages/DOIServices";
import ManuScriptFormatting from "@/pages/ManuscriptFormatting";
import LanguageEditing from "@/pages/LanguageEditing";
import ResearchConsultancy from "@/pages/ResearchConsultancy";
import UpcomingJournals from "@/pages/UpcomingJournals";
import PublishedYourBook from "@/pages/PublishedYourBook";
import ISBNServices from "@/pages/ISBN";
import Proceedings from "@/pages/Proceedings";
import AcademicCollaborations from "@/pages/AcademicCollaborations";
import ConferenceSupport from "@/pages/ConferenceSupport";
import ResearchInsights from "@/pages/ResearchInsights";
// import PolicyPage from "@/pages/PolicyPage";
import ScrollToTop from "../components/layout/ScrollToTop";
import BlogDetails from "@/pages/BlogDetails";
import BlogPage from "@/pages/BlogPage";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import TermsAndConditions from "@/components/legal/TermsAndConditions";
import RefundPolicy from "@/components/legal/RefundPolicy";
import CookiePolicy from "@/components/legal/CookiePolicy";
import Disclaimer from "@/components/legal/Disclaimer";
import RetractionPolicy from "@/components/legal/RetractionPolicy";
import PlagiarismPolicy from "@/components/legal/PlagiarismPolicy";
import CopyrightPolicy from "@/components/legal/CopyrightPolicy";
import APCPolicy from "@/components/legal/APCPolicy";
import SubmitMenuscript from "@/components/authorResources/SubmitManuscript";
import OpenAccessPolicy from "@/components/authorResources/OpenAccessPolicy";
import PeerReview from "@/components/authorResources/PeerReview";
import PublicationEthics from "@/components/authorResources/PublicationEthics";
import ReviewerGuidelines from "@/components/authorResources/ReviewerGuidelines";
import AuthorGuidelines from "@/components/authorResources/AuthorGuidelines";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<MissionVission />} />
          <Route path="/publishing-ethics" element={<PublishingEthicsPage />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route
            path="/services/journal-publication"
            element={<JournalPublicationSupport />}
          />
          <Route
            path="/services/book-publishing"
            element={<BookPublishing />}
          />
          <Route path="/services/thesis-editing" element={<ThesisEditing />} />
          <Route
            path="/services/conference-proceedings"
            element={<ConferenceProceedings />}
          />
          <Route
            path="/services/patent-assistance"
            element={<PatentAssistance />}
          />
          <Route path="/services/doi-services" element={<DOIServices />} />
          <Route
            path="/services/manuscript-formatting"
            element={<ManuScriptFormatting />}
          />
          <Route
            path="/services/language-editing"
            element={<LanguageEditing />}
          />
          <Route
            path="/services/research-consultancy"
            element={<ResearchConsultancy />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<Book />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/books/publish" element={<PublishedYourBook />} />
          <Route path="/books/isbn-services" element={<ISBNServices />} />
          <Route path="/journals/upcoming" element={<UpcomingJournals />} />
          <Route path="/conferences/proceedings" element={<Proceedings />} />
          <Route
            path="/conferences/collaborations"
            element={<AcademicCollaborations />}
          />
          <Route path="/conferences/support" element={<ConferenceSupport />} />
          <Route path="/research-insights" element={<ResearchInsights />} />
          <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/policies/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          <Route path="/policies/refund-policy" element={<RefundPolicy />} />

          <Route path="/policies/cookie-policy" element={<CookiePolicy />} />
          <Route path="/policies/disclaimer" element={<Disclaimer />} />

          <Route
            path="/policies/retraction-policy"
            element={<RetractionPolicy />}
          />

          <Route
            path="/policies/plagiarism-policy"
            element={<PlagiarismPolicy />}
          />

          <Route
            path="policies/copyright-policy"
            element={<CopyrightPolicy />}
          />

          <Route path="/policies/apc-policy" element={<APCPolicy />} />
          <Route
            path="/policies/submit-manuscript"
            element={<SubmitMenuscript />}
          />

          <Route
            path="/policies/open-access-policy"
            element={<OpenAccessPolicy />}
          />

          <Route path="/policies/peer-review-policy" element={<PeerReview />} />

          <Route
            path="/policies/publication-ethics"
            element={<PublicationEthics />}
          />

          <Route
            path="/policies/reviewer-guidelines"
            element={<ReviewerGuidelines />}
          />

          <Route
            path="/policies/author-guidelines"
            element={<AuthorGuidelines />}
          />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
