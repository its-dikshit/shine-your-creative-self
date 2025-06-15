
import React from "react";
import { Progress } from "@/components/ui/progress";

// Use a single, professional color scheme for all skills (primary color theme).
const skills = [
  { name: "Photoshop", value: 75 },
  { name: "HTML5", value: 85 },
  { name: "WordPress", value: 70 },
  { name: "jQuery", value: 60 },
  { name: "CSS3", value: 90 },
  { name: "SEO", value: 80 },
];

const topText =
  "Here are some of my technical proficiencies. I am always learning and keeping pace with modern technologies to deliver high-quality solutions.";

const SkillsSection = () => (
  <section id="skills" className="max-w-4xl mx-auto py-20 px-4">
    <div className="mb-2 text-xs uppercase tracking-[0.35em] text-gray-400 font-semibold" style={{ letterSpacing: "0.32em" }}>
      Skills &amp; Proficiency
    </div>
    <h2
      className="text-3xl sm:text-4xl font-bold font-playfair mb-6 tracking-widest"
      style={{ letterSpacing: ".08em", fontFamily: "'Playfair Display',serif" }}
    >
      MY SKILLS
    </h2>
    <p className="max-w-2xl mb-12 text-gray-500 text-base sm:text-lg font-light">{topText}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="mb-7">
          <div className="flex justify-between items-end mb-1">
            <span className="font-medium text-base md:text-lg text-foreground">{skill.name}</span>
            <span className="font-semibold text-sm text-primary">{skill.value}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-muted relative overflow-hidden">
            <div
              className="bg-primary h-3 rounded-full transition-all"
              style={{ width: `${skill.value}%` }}
            />
            {/* Subtle circle marker at end of progress */}
            <span
              className="absolute top-1/2"
              style={{
                left: `calc(${skill.value}% - 10px)`,
                zIndex: 1,
              }}
            >
              <span className="block w-3 h-3 rounded-full bg-white border-2 border-primary shadow" />
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;

