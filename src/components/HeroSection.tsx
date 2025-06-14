
import React from "react";

const HeroSection = () => (
  <section className="w-full py-20 flex flex-col items-center justify-center bg-background animate-fade-in">
    <h1 className="text-5xl font-extrabold tracking-tight mb-4">
      Your Name Here
    </h1>
    <p className="text-2xl text-muted-foreground mb-8">
      Web Developer &nbsp;|&nbsp; Designer &nbsp;|&nbsp; Creator
    </p>
    <a
      href="#projects"
      className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition hover-scale shadow-xl font-medium text-lg"
    >
      View My Work
    </a>
  </section>
);

export default HeroSection;
