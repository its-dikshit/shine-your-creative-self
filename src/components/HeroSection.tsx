
import React from "react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center">
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:ml-[250px]">
      <div className="max-w-xl text-center md:text-left flex-1">
        <h1 className="text-[2.6rem] md:text-[4rem] font-extrabold font-playfair leading-tight mb-3">
          I am <br className="hidden md:block" />
          <span className="text-gray-700">a Designer</span>
        </h1>
        <p className="mb-8 text-xl text-gray-500 font-light">
          100% html5 react templates made by lovable.dev
        </p>
        <a
          href="/cv.pdf"
          download
          className="inline-block border border-gray-400 px-7 py-3 rounded-lg font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Download CV
        </a>
      </div>
      <div className="mt-10 md:mt-0 flex-1 flex justify-center md:justify-end">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=600&q=80"
          alt="Profile"
          className="max-w-xs md:max-w-md rounded-xl shadow-lg object-cover"
          style={{ background: "#f4f6fa" }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
