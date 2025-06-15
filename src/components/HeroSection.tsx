
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="herosection"
      className="flex items-center justify-center w-full py-8 sm:py-12"
    >
      <div
        className={`
          w-full
          max-w-none
          mx-auto
          px-0 md:px-0
        `}
      >
        <div
          className="
            flex flex-col-reverse lg:flex-row items-center w-full
            rounded-3xl shadow-lg
            bg-[#fcf6f5] dark:bg-background
            px-3 sm:px-10 md:px-16
            gap-6 lg:gap-0
            min-h-[60vh]
            "
          style={{
            borderRadius: "2rem",
            background: "var(--hero-card-bg, #fcf6f5)"
          }}
        >
          {/* Left content: This is now the custom intro! */}
          <div className="flex flex-col justify-center w-full max-w-2xl lg:w-3/5 py-4 pl-2 sm:pl-12 md:pl-20">
            <p className="mb-2 text-lg font-semibold text-blue-600 flex items-center gap-2">
              <span role="img" aria-label="wave">👋</span> Hello, I'm
            </p>
            <h1 className="text-4xl font-extrabold mb-2 text-black dark:text-white leading-tight">Anshul Kumar</h1>
            <h2 className="text-xl font-bold text-blue-600 mb-3">Software Developer</h2>
            <p className="text-base text-[#4a5773] mb-4">
              A 4th-year B.Tech CSE student passionate about becoming a skilled Machine Learning or Software Engineer.
              I am proficient in data science, machine learning, and have hands-on experience with large language models, generative AI, and web technologies.
              Outside of tech, I enjoy solving puzzles, reading tech articles, and playing outdoor sports.
            </p>
            <div className="flex flex-row gap-4 mb-2">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg bg-white border-[#e2e4ef] hover:bg-[#f5f8fb] text-black dark:text-white dark:bg-muted"
                  style={{ fontWeight: 700 }}
                >
                  View Resume
                  <Download className="ml-2" size={21} />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="default"
                  size="lg"
                  className="font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg bg-[#171b2b] hover:bg-[#242857] text-white"
                >
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          {/* Right image stays as is */}
          <div className="flex items-center justify-center w-full lg:w-2/5 min-h-[260px] sm:min-h-[380px] lg:min-h-[450px] px-2 sm:px-6 md:px-12 py-4">
            <img
              src="/lovable-uploads/749d406c-5538-47c8-ae37-418a06ed9c34.png"
              alt="Jackson adjusting collar"
              className="object-cover w-full h-auto max-h-[320px] sm:max-h-[380px] lg:max-h-[460px] max-w-md lg:max-w-lg rounded-md shadow-md"
              style={{
                background: "#fcf6f5"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

