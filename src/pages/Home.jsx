//
import HeroSection from "@/components/home/HeroSection";
// import TrustLogos from "@/components/home/TrustLogos";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SupportStrip from "@/components/home/SupportStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkFlow from "@/components/home/WorkFlow";
import OurBookSection from "@/components/home/OurBookSection";
import UpCommingJournals from "@/components/journals/UpCommingJournal";
import ResearchDomainsSection from "@/components//journals/ResearchDomainsSection";
import OurBlogSection from "@/components/home/OurBlog";
import CTASection from "@/components/home/CTASection";
export default function home() {
  return (
    <>
      <HeroSection />
      <SupportStrip />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkFlow />
      <OurBookSection />
      <UpCommingJournals />
      <ResearchDomainsSection />
      <TestimonialsSection />
      <OurBlogSection />
      {/* <TrustLogos /> */}
      <CTASection />
    </>
  );
}
