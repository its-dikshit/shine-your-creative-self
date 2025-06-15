
import React from "react";
import { Progress } from "@/components/ui/progress";

// Adapted to match the sample: two columns, each with 3 skills, labels + percent + colored progress bars.
const skills = [
  { name: "Photoshop", value: 75, color: "bg-blue-400", percentColor: "text-blue-500" },
  { name: "HTML5", value: 85, color: "bg-yellow-400", percentColor: "text-yellow-500" },
  { name: "WordPress", value: 70, color: "bg-teal-500", percentColor: "text-teal-600" },
  { name: "jQuery", value: 60, color: "bg-red-400", percentColor: "text-red-500" },
  { name: "CSS3", value: 90, color: "bg-purple-400", percentColor: "text-purple-600" },
  { name: "SEO", value: 80, color: "bg-blue-900", percentColor: "text-blue-900" },
];

const topText = "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.";

const SkillsSection = () => (
  <section id="skills" className="max-w-4xl mx-auto py-20 px-4">
    <div className="mb-2 text-xs uppercase tracking-[0.35em] text-gray-400 font-semibold" style={{letterSpacing: "0.32em"}}>My Specialty</div>
    <h2
      className="text-3xl sm:text-4xl font-bold font-playfair mb-6 tracking-widest"
      style={{ letterSpacing: ".08em", fontFamily: "'Playfair Display',serif" }}
    >
      MY SKILLS
    </h2>
    <p className="max-w-2xl mb-12 text-gray-500 text-base sm:text-lg font-light">
      {topText}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
      {skills.slice(0, 3).map((skill) => (
        <div key={skill.name} className="mb-6">
          <div className="flex justify-between items-end mb-1">
            <span className="font-semibold text-lg text-black">{skill.name}</span>
            <span className={`font-semibold text-sm ${skill.percentColor}`}>{skill.value}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-200 relative overflow-hidden">
            <div
              className={`${skill.color} h-3 rounded-full transition-all`}
              style={{ width: `${skill.value}%` }}
            />
            {/* Circle marker at end of progress */}
            <span
              className="absolute top-1/2 right-0 -translate-y-1/2"
              style={{
                left: `calc(${skill.value}% - 14px)`,
                zIndex: 1,
              }}
            >
              <span className={`block w-4 h-4 rounded-full ${skill.color} border-2 border-white`}></span>
            </span>
          </div>
        </div>
      ))}
      {skills.slice(3).map((skill) => (
        <div key={skill.name} className="mb-6">
          <div className="flex justify-between items-end mb-1">
            <span className="font-semibold text-lg text-black">{skill.name}</span>
            <span className={`font-semibold text-sm ${skill.percentColor}`}>{skill.value}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-200 relative overflow-hidden">
            <div
              className={`${skill.color} h-3 rounded-full transition-all`}
              style={{ width: `${skill.value}%` }}
            />
            {/* Circle marker at end of progress */}
            <span
              className="absolute top-1/2 right-0 -translate-y-1/2"
              style={{
                left: `calc(${skill.value}% - 14px)`,
                zIndex: 1,
              }}
            >
              <span className={`block w-4 h-4 rounded-full ${skill.color} border-2 border-white`}></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
