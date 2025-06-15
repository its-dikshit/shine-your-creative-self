
import React, { useRef } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExtraCurricularSection from "@/components/ExtraCurricularSection";

const sectionDescriptions = {
  experience: "My professional journey and the roles that have shaped my career",
  skills: "The tools and technologies I use to bring ideas to life",
  projects: "A showcase of my recent work and personal projects",
  achievements: "Milestones and recognition that mark my professional journey",
  extracurricular: "Beyond coding - my involvement in community and personal interests",
  contact: "I'm always open to discussing new opportunities and interesting projects",
};

const Index = () => {
  const mainScrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background text-foreground min-h-screen flex w-full">
      <Sidebar scrollRef={mainScrollRef} />
      <main
        ref={mainScrollRef}
        className="
          ml-[20vw]
          w-[80vw]
          max-w-[1100px]
          h-screen
          overflow-y-auto
          flex flex-col
          px-2 sm:px-6 md:px-10
          pt-0
          min-h-screen
          transition-all
        "
        style={{ marginLeft: "20vw" }}
      >
        {/* Hero Section */}
        <section className="mt-4 mb-0" id="herosection">
          <HeroSection />
        </section>
        {/* Work Experience */}
        <section className="my-0" id="experience">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Work Experience</h2>
          <div className="text-gray-500 text-base font-light mb-6">{sectionDescriptions.experience}</div>
          <ExperienceSection />
        </section>
        {/* Skills & Technologies */}
        <section className="my-0" id="skills">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Skills &amp; Technologies</h2>
          <div className="text-gray-500 text-base font-light mb-6">{sectionDescriptions.skills}</div>
          <SkillsSection />
        </section>
        {/* Projects */}
        <section className="my-0" id="projects">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Featured Projects</h2>
          <div className="text-gray-500 text-base font-light mb-6">{sectionDescriptions.projects}</div>
          <ProjectsSection />
        </section>
        {/* Achievements */}
        <section className="my-0" id="achievements">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Achievements &amp; Recognition</h2>
          <div className="text-gray-500 text-base font-light mb-6">{sectionDescriptions.achievements}</div>
          <AchievementsSection />
        </section>
        {/* Extra Curricular */}
        <section className="my-0" id="extracurricular">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Extra-curricular Activities</h2>
          <div className="text-gray-500 text-base font-light mb-6">{sectionDescriptions.extracurricular}</div>
          <ExtraCurricularSection />
        </section>
        {/* Contact / Get in Touch */}
        <section className="my-0" id="contact">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Get In Touch</h2>
          <div className="text-gray-500 text-base font-light mb-6">{sectionDescriptions.contact}</div>
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
