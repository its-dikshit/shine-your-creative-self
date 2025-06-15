import React from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen w-full flex">
      <Sidebar />
      <main className="flex-1 md:ml-[250px] min-h-screen">
        <HeroSection />
        {/* Optionally render other sections here */}
        {/* <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection /> */}
      </main>
    </div>
  );
};

export default Index;
