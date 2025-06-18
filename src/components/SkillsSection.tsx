
import React from "react";
import { Progress } from "@/components/ui/progress";

// Adapted to match the sample: two columns, each with 3 skills, labels + percent + colored progress bars.
const skills = [
  { name: "Python", value: 95, color: "bg-blue-400 dark:bg-blue-600", percentColor: "text-blue-500 dark:text-blue-300" },
  { name: "JavaScript", value: 80, color: "bg-yellow-400 dark:bg-yellow-500", percentColor: "text-yellow-500 dark:text-yellow-300" },
  { name: "c++", value: 85, color: "bg-teal-500 dark:bg-teal-400", percentColor: "text-teal-600 dark:text-teal-300" },
  { name: "SQL", value: 90, color: "bg-red-400 dark:bg-red-500", percentColor: "text-red-500 dark:text-red-300" },
  { name: "Scikit-learn", value: 85, color: "bg-purple-400 dark:bg-purple-600", percentColor: "text-purple-600 dark:text-purple-300" },
  { name: "TensorFlow", value: 85, color: "bg-blue-900 dark:bg-blue-800", percentColor: "text-blue-900 dark:text-blue-300" },
  { name: "Keras", value: 80, color: "bg-yellow-400 dark:bg-yellow-500", percentColor: "text-yellow-500 dark:text-yellow-300" },
  { name: "PyTorch", value: 80, color: "bg-teal-500 dark:bg-teal-400", percentColor: "text-teal-600 dark:text-teal-300" },
  { name: "OpenCV", value: 80, color: "bg-red-400 dark:bg-red-500", percentColor: "text-red-500 dark:text-red-300" },
  { name: "LLM", value: 75, color: "bg-purple-400 dark:bg-purple-600", percentColor: "text-purple-600 dark:text-purple-300" },
  { name: "NLP", value: 75, color: "bg-blue-900 dark:bg-blue-800", percentColor: "text-blue-900 dark:text-blue-300" },
  { name: "Pandas", value: 85, color: "bg-purple-400 dark:bg-purple-600", percentColor: "text-purple-600 dark:text-purple-300" },
  { name: "NumPy", value: 85, color: "bg-blue-900 dark:bg-blue-800", percentColor: "text-blue-900 dark:text-blue-300" },
  { name: "Matplotlib", value: 85, color: "bg-yellow-400 dark:bg-yellow-500", percentColor: "text-yellow-500 dark:text-yellow-300" },
  { name: "React.js", value: 75, color: "bg-teal-500 dark:bg-teal-400", percentColor: "text-teal-600 dark:text-teal-300" },
  { name: "Node.js", value: 75, color: "bg-red-400 dark:bg-red-500", percentColor: "text-red-500 dark:text-red-300" },
  { name: "MongoDB", value: 80, color: "bg-purple-400 dark:bg-purple-600", percentColor: "text-purple-600 dark:text-purple-300" },
  { name: "PostgreSQL", value: 85, color: "bg-blue-900 dark:bg-blue-800", percentColor: "text-blue-900 dark:text-blue-300" },
  { name: "Git", value: 85, color: "bg-purple-400 dark:bg-purple-600", percentColor: "text-purple-600 dark:text-purple-300" },
  { name: "Docker", value: 80, color: "bg-yellow-400 dark:bg-yellow-500", percentColor: "text-yellow-400 dark:text-yellow-300" },
  
];

const topText = "My technical toolkit includes a blend of AI/ML frameworks, data science libraries, and web development technologies.";

const SkillsSection = () => (
  <section
    id="skills"
    className={`
      max-w-4xl mx-auto py-20 px-4 
      bg-card dark:bg-gradient-to-br dark:from-[#181e32] dark:via-[#232d48] dark:to-[#253356]
      border border-gray-100 dark:border-slate-800 
      rounded-2xl shadow-lg transition-all
    `}
  >
    <div className="mb-2 text-xs uppercase tracking-[0.35em] text-gray-400 font-semibold" style={{letterSpacing: "0.32em"}}>My Specialty</div>
    <h2
      className="text-3xl sm:text-4xl font-bold font-playfair mb-6 tracking-widest text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#c3c8ef] dark:via-[#859ef8] dark:to-[#5b7cfa]"
      style={{ letterSpacing: ".08em", fontFamily: "'Playfair Display',serif" }}
    >
      MY SKILLS
    </h2>
    <p className="max-w-2xl mb-12 text-gray-500 dark:text-gray-300 text-base sm:text-lg font-light">
      {topText}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
      {skills.slice(0, 3).map((skill) => (
        <div key={skill.name} className="mb-6">
          <div className="flex justify-between items-end mb-1">
            <span className="font-semibold text-lg text-black dark:text-white">{skill.name}</span>
            <span className={`font-semibold text-sm ${skill.percentColor}`}>{skill.value}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-slate-700 relative overflow-hidden">
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
              <span className={`block w-4 h-4 rounded-full ${skill.color} border-2 border-white dark:border-slate-900`}></span>
            </span>
          </div>
        </div>
      ))}
      {skills.slice(3).map((skill) => (
        <div key={skill.name} className="mb-6">
          <div className="flex justify-between items-end mb-1">
            <span className="font-semibold text-lg text-black dark:text-white">{skill.name}</span>
            <span className={`font-semibold text-sm ${skill.percentColor}`}>{skill.value}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-slate-700 relative overflow-hidden">
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
              <span className={`block w-4 h-4 rounded-full ${skill.color} border-2 border-white dark:border-slate-900`}></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
