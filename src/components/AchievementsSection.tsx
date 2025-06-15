
import React from "react";

const achievements = [
  {
    title: "Geeks for Geeks – Solving for India Hackathon",
    org: "GeeksforGeeks",
    url: "#",
    description:
      "Selected in the Top 15 teams in the Western Regional Finals among nationwide participants.",
    year: "2023",
  },
  {
    title: "PEC Hacks – 36 Hrs Hackathon",
    org: "PEC College",
    url: "#",
    description:
      "Reached Top 50 out of 500+ teams in the final round with a real-world project demo.",
    year: "2024",
  },
  {
    title: "Citi Bank Ada Lovelace Hackathon",
    org: "Citi Bank",
    url: "#",
    description:
      "Secured 2nd position within the institute and placed in the Top 20 overall out of 300+ teams.",
    year: "2025",
  },
  {
    title: "Oracle GenAI Certified",
    org: "Oracle Cloud Infrastructure",
    url: "#",
    description:
      "Certified Generative AI Professional under Oracle Cloud Infrastructure 2024 program.",
    year: "2024",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-3xl sm:text-4xl font-bold mb-1 text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-300 dark:via-cyan-200 dark:to-purple-200 font-playfair">Achievements & Recognition</h2>
    <div className="text-gray-500 dark:text-gray-300 text-base font-light mb-10">
      Milestones and recognition that mark my professional journey
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {achievements.map((a, i) => (
        <div
          key={a.title}
          className="relative rounded-2xl bg-gray-50 dark:bg-gradient-to-br dark:from-[#232943] dark:via-[#2d3458] dark:to-[#323e54] border border-gray-200 dark:border-slate-800 px-6 py-6 flex flex-col shadow-sm min-h-[170px] transition-all"
        >
          <span className="text-lg font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200 mb-1">{a.title}</span>
          <a
            className="text-sm text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-300 font-semibold underline hover:text-blue-800 dark:hover:text-blue-300 transition mb-1"
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {a.org}
          </a>
          <span className="text-gray-500 dark:text-gray-300 text-base mb-2 font-normal">{a.description}</span>
          <span className="absolute top-6 right-6 bg-gray-200 dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500 rounded-full px-3 text-xs font-semibold text-gray-500 dark:text-white">{a.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AchievementsSection;
