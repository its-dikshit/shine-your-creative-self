
import React from "react";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "Git",
  "Vite",
];

const SkillsSection = () => (
  <section id="skills" className="max-w-4xl mx-auto my-20 px-6 py-10 bg-secondary rounded-2xl shadow-md animate-fade-in">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-primary/10 text-primary px-4 py-2 rounded-full text-base font-medium tracking-wide transition hover:bg-primary/20"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default SkillsSection;
