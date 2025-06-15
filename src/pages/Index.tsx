
import React from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen w-full flex">
      <Sidebar />
      <main className="flex-1 md:ml-[250px] min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
