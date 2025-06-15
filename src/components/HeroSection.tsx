
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="herosection"
      className="min-h-[60vh] flex items-center w-full bg-[#faf7f7] py-8 sm:py-12"
    >
      <div className="
        flex flex-col-reverse lg:flex-row items-center w-full
        max-w-[1440px] mx-auto
        lg:px-16 px-2 md:px-8
        gap-6 lg:gap-0
      ">
        {/* Left content */}
        <div className="flex flex-col justify-center sm:px-0 w-full max-w-2xl lg:w-1/2 py-4">
          <h1
            className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold font-playfair leading-tight mb-2 text-black"
            style={{
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.1,
            }}
          >
            Hi!
            <br />
            I&apos;m Jackson
          </h1>
          <p className="mb-5 text-base sm:text-lg text-gray-700 tracking-wide font-light">
            100% html5 bootstrap templates Made by{" "}
            <a href="https://colorlib.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              colorlib.com
            </a>
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
        {/* Right image */}
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
