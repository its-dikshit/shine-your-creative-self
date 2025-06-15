
import React from "react";

// Example data and Unicode emoji for icon
const activities = [
  {
    icon: "🏆",
    title: "Sports Club | Head",
    description:
      "Organized Eklavya (Annual Sports Fest) twice with 500+ participants and hosted National Sports Day engaging 300+ students.",
  },
  {
    icon: "🧠",
    title: "localhost | Web3 and AI/ML Mentor",
    description:
      "Conducted web development sessions and Web3 workshops for 200+ learners; organized two major hackathons to foster innovation.",
  },
  {
    icon: "🚀",
    title: "E-Cell | Cluster Head",
    description:
      "Led E-Summit 2k23 & 2k24 with 1,000+ attendees and organized multiple tech events to boost student engagement and entrepreneurship.",
  },
  {
    icon: "📐",
    title: "Quantnum | Event Management Head",
    description:
      "Managed an inter-college Mathematics competition celebrating National Mathematics Day with wide student participation.",
  },
];

const ExtraCurricularSection = () => (
  <section id="extracurricular" className="max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-3xl sm:text-4xl font-bold mb-1 text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-300 dark:via-cyan-200 dark:to-purple-200 font-playfair">
      Extra-curricular Activities
    </h2>
    <div className="text-gray-500 dark:text-gray-300 text-base font-light mb-10">
      Beyond coding – my involvement in community and personal interests
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {activities.map((a, i) => (
        <div key={i} className="rounded-2xl bg-gray-50 dark:bg-gradient-to-br dark:from-[#232943] dark:via-[#2a3350] dark:to-[#323e54] border border-gray-200 dark:border-slate-800 px-6 py-6 flex flex-col shadow-sm min-h-[140px] transition-all">
          <div className="flex flex-row items-center gap-3 mb-2">
            <span className="text-2xl sm:text-2xl">{a.icon}</span>
            <span className="text-lg font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">{a.title}</span>
          </div>
          <span className="text-gray-500 dark:text-gray-300 text-base font-normal">{a.description}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ExtraCurricularSection;
