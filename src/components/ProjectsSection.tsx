
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My very own personal website built with React and Tailwind CSS. It features a bold aesthetic and smooth user experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=80&fm=jpg&w=3882&fit=max",
    url: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather app leveraging OpenWeather API for real-time forecasts and neat data visualizations.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=80&fm=jpg&w=6000&fit=max",
    url: "#",
  },
  {
    title: "Task Manager",
    description:
      "A productivity tool to manage daily tasks with an intuitive UI, drag-and-drop, and persistent storage.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=80&fm=jpg&w=3543&fit=max",
    url: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="max-w-6xl mx-auto my-20 px-6">
    <h2 className="text-3xl font-bold mb-10 text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#232943] dark:via-[#382a6d] dark:to-[#673ab7]">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card dark:bg-gradient-to-br dark:from-[#232943] dark:via-[#382a6d] dark:to-[#673ab7] rounded-xl overflow-hidden shadow-lg group hover-scale transition-all duration-200 animate-fade-in flex flex-col border border-gray-100 dark:border-slate-800"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            style={{
              background: "#e6eaf1",
              borderBottom: "1px solid #f1f4fa"
            }}
          />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#858fe6] dark:via-[#a693f9] dark:to-[#673ab7]">{project.title}</h3>
            <p className="text-muted-foreground mb-4 flex-1 dark:text-gray-300">{project.description}</p>
            <span className="mt-auto text-primary font-medium underline-offset-2 group-hover:underline dark:bg-gradient-to-r dark:from-[#858fe6] dark:via-[#a693f9] dark:to-[#673ab7] dark:bg-clip-text dark:text-transparent">
              View Project &rarr;
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectsSection;

