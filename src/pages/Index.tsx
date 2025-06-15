
import React from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExtraCurricularSection from "@/components/ExtraCurricularSection";
import MainDarkToggle from "@/components/MainDarkToggle";
import IntroSection from "@/components/IntroSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex w-full">
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
        <MainDarkToggle />
        <IntroSection />

        {/* Updated: Add headings and hover animation classes where appropriate */}
        <section className="mt-2 mb-0">
          <HeroSection />
        </section>
        <section className="my-0">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Work Experience</h2>
          <div className="text-gray-500 text-base font-light mb-6">My professional journey and the roles that have shaped my career</div>
          <ExperienceSection />
        </section>
        <section className="my-0">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Skills &amp; Technologies</h2>
          <div className="text-gray-500 text-base font-light mb-6">The tools and technologies I use to bring ideas to life</div>
          <SkillsSection />
        </section>
        <section className="my-0">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Featured Projects</h2>
          <div className="text-gray-500 text-base font-light mb-6">A showcase of my recent work and personal projects</div>
          <ProjectsSection />
        </section>
        <section className="my-0">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Achievements &amp; Recognition</h2>
          <div className="text-gray-500 text-base font-light mb-6">Milestones and recognition that mark my professional journey</div>
          <AchievementsSection />
        </section>
        <section className="my-0">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Extra-curricular Activities</h2>
          <div className="text-gray-500 text-base font-light mb-6">Beyond coding - my involvement in community and personal interests</div>
          <ExtraCurricularSection />
        </section>
        <section className="my-0">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Get In Touch</h2>
          <div className="text-gray-500 text-base font-light mb-6">I'm always open to discussing new opportunities and interesting projects</div>
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
