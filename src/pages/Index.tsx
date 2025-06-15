
import React from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExtraCurricularSection from "@/components/ExtraCurricularSection";

// Section order: Home, Work Experience, Skills, Projects, Achievements, Extra-Curricular, Contact Me

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen w-full flex">
      <Sidebar />
      <main className="flex-1 md:ml-[240px] min-h-screen">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExtraCurricularSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

