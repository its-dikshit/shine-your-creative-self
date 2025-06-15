import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="herosection"
      className="
        min-h-[60vh]
        flex items-center w-full
        bg-[#faf7f7] dark:bg-gradient-to-br dark:from-[#141c2f] dark:via-[#1c2740] dark:to-[#253356]
        py-8 sm:py-12
        rounded-none sm:rounded-2xl lg:rounded-3xl
        shadow-lg
        transition-all
        mx-auto
        mt-4
        max-w-[1400px]
      "
      style={{}}
    >
      <div className="
        flex flex-col-reverse lg:flex-row items-center w-full
        max-w-[1440px] mx-auto
        lg:px-16 px-2 md:px-8
        gap-6 lg:gap-0
      ">
        {/* Left content: This is now the custom intro! */}
        <div className="flex flex-col justify-center sm:px-0 w-full max-w-2xl lg:w-1/2 py-4">
          <p className="mb-2 text-lg font-semibold text-blue-600 flex items-center gap-2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#5b9cff] dark:to-[#b0bff7]">
            <span
              role="img"
              aria-label="wave"
              className="transition-all dark:drop-shadow-[0_0_6px_rgba(255,235,59,0.8)]"
              style={{
                // Filter for yellow(ish) in dark mode, normal in light mode
                filter:
                  // Tailwind can't do this inline for emojis, use JS for best yellow
                  'var(--emoji-filter)',
                // We'll use a CSS var trick to toggle filter by mode
                // But we rely on dark's class settings for best compatibility
              }}
              // Set a CSS variable on the span only in dark mode using Tailwind's dark: modifier
              // This must be set in index.css, so instead we'll use a better approach:
              // Use Tailwind's dark:filter + dark:brightness + dark:saturate for yellow
              // Browsers differ, but this is a good approximation for emoji yellow:
              // hue-rotate: +15deg, brightness 1.2-1.4, saturate 1.9-2
              // See: https://codepen.io/sosuke/pen/Pjoqqp for color filter generator
              // We'll just use Tailwind for dark with: filter, brightness, saturate, hue-rotate
              // Example: dark:filter dark:brightness-125 dark:saturate-200 dark:hue-rotate-20
              // Add those classes below:
              // Add "select-none" so it doesn't get copied weirdly
              // The final tailwind classes:
              className="select-none dark:filter dark:brightness-125 dark:saturate-200 dark:hue-rotate-20 transition-all"
            >👋🏻</span>{" "}
            Hello, I'm
          </p>
          <h1 className="text-4xl font-extrabold mb-2 text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#b0bff7] dark:via-[#617aff] dark:to-[#38b2fc] leading-tight">
            Anshul Kumar
          </h1>
          <h2 className="text-xl font-bold text-blue-600 mb-3 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#86b4fc] dark:via-[#a290fc] dark:to-[#657ee8]">
            Software Developer
          </h2>
          <p className="text-base text-muted-foreground mb-4 dark:text-gray-300">
            A 4th-year B.Tech CSE student passionate about becoming a skilled Machine Learning or Software Engineer.
            I am proficient in data science, machine learning, and have hands-on experience with large language models, generative AI, and web technologies.
            Outside of tech, I enjoy solving puzzles, reading tech articles, and playing outdoor sports.
          </p>
          <div className="flex flex-row gap-4 mb-2">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg">
                View Resume
                <Download className="ml-2" size={21} />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="default" size="lg" className="font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
        {/* Right image stays as is */}
        <div className="flex items-center justify-center w-full lg:w-1/2 min-h-[260px] sm:min-h-[380px] lg:min-h-[450px] px-0">
          <img
            src="/lovable-uploads/749d406c-5538-47c8-ae37-418a06ed9c34.png"
            alt="Jackson adjusting collar"
            className="object-cover w-full h-auto max-h-[320px] sm:max-h-[380px] lg:max-h-[560px] max-w-sm md:max-w-md lg:max-w-[540px] rounded-none shadow-none"
            style={{
              borderRadius: 0,
              marginLeft: "auto",
              background: "#faf7f7"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
