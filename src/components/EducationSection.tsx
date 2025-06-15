
import React from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BS in Computer Science",
    school: "University of Technology",
    period: "2016 - 2020",
    details: "Focused on software engineering, web technologies, and user experience design.",
  }
];

const EducationSection = () => (
  <section id="education" className="max-w-4xl mx-auto my-20 px-6 py-10 bg-card rounded-2xl shadow-lg animate-fade-in">
    <div className="flex items-center gap-3 mb-4">
      <GraduationCap className="text-primary" size={28} />
      <h2 className="text-3xl font-bold">Education</h2>
    </div>
    <ul className="space-y-4">
      {education.map((edu, idx) => (
        <li key={idx} className="bg-secondary rounded-lg p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">{edu.degree}</span>
            <span className="text-sm text-muted-foreground">{edu.period}</span>
          </div>
          <div className="mb-1 text-primary">{edu.school}</div>
          <div className="text-muted-foreground">{edu.details}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default EducationSection;
