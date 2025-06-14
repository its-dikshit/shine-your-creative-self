
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen w-full flex flex-col">
      <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur border-b border-border z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
          <a href="/" className="text-2xl font-bold tracking-tight hover-scale transition">
            YourName
          </a>
          <div className="flex gap-6 font-medium text-md">
            <a href="#about" className="story-link transition">About</a>
            <a href="#projects" className="story-link transition">Projects</a>
            <a href="#skills" className="story-link transition">Skills</a>
            <a href="#contact" className="story-link transition">Contact</a>
          </div>
        </nav>
      </header>
      <main className="flex-1 pt-32 pb-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
