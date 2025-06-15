
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
    <div className="bg-background text-foreground min-h-screen flex w-full">
      {/* Sidebar: fixes to left on md+, stacks on top on mobile */}
      <Sidebar />
      <main
        className="
          flex-1 
          h-screen 
          overflow-y-auto 
          md:ml-[240px] 
          flex flex-col 
          w-full 
          px-2 sm:px-4 md:px-8
          pt-0
        "
      >
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

