
import React from "react";
import { Briefcase } from "lucide-react";

const experience = [
  {
    job: "Frontend Developer",
    company: "Digital Solutions Inc.",
    period: "2021 - Present",
    details: "Design and build React applications, create reusable components, and collaborate closely with UI/UX designers.",
  },
  {
    job: "Intern Developer",
    company: "Webify Studio",
    period: "2020 - 2021",
    details: "Assisted in building landing pages and contributed to UI improvements for various client projects.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="max-w-4xl mx-auto my-20 px-6 py-10 bg-secondary rounded-2xl shadow-md animate-fade-in">
    <div className="flex items-center gap-3 mb-5">
      <Briefcase className="text-primary" size={28} />
      <h2 className="text-3xl font-bold">Experience</h2>
    </div>
    <ul className="space-y-4">
      {experience.map((exp, idx) => (
        <li key={idx} className="bg-card rounded-lg p-5">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold">{exp.job}</span>
            <span className="text-sm text-muted-foreground">{exp.period}</span>
          </div>
          <div className="mb-1 text-primary">{exp.company}</div>
          <div className="text-muted-foreground">{exp.details}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default ExperienceSection;
