import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SummarySection } from "@/components/SummarySection";
import { TechnicalSkillsSection } from "@/components/TechnicalSkillsSection";
import { SoftSkillsSection } from "@/components/SoftSkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HighlightProjectsSection } from "@/components/HighlightProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SummarySection />
      <TechnicalSkillsSection />
      <SoftSkillsSection />
      <ExperienceSection />
      <HighlightProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
