
import React from "react";

const IntroSection = () => (
  <section
    id="custom-intro"
    className="max-w-3xl mx-auto mt-12 mb-8 px-6 py-10 bg-card rounded-2xl shadow-lg animate-fade-in"
  >
    <p className="mb-2 text-lg font-semibold text-blue-600 flex items-center gap-2">
      <span role="img" aria-label="wave">👋</span> Hello, I'm
    </p>
    <h1 className="text-4xl font-extrabold mb-2 text-black dark:text-white leading-tight">Anshul Kumar</h1>
    <h2 className="text-xl font-bold text-blue-600 mb-3">Software Developer</h2>
    <p className="text-base text-muted-foreground mb-4">
      A 4th-year B.Tech CSE student passionate about becoming a skilled Machine Learning or Software Engineer.
      I am proficient in data science, machine learning, and have hands-on experience with large language models, generative AI, and web technologies.
      Outside of tech, I enjoy solving puzzles, reading tech articles, and playing outdoor sports.
    </p>
  </section>
);

export default IntroSection;
