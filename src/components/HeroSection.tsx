
import React from "react";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="herosection"
      className="min-h-screen flex items-center"
      style={{ background: "#faf7f7" }}
    >
      <div className="flex flex-row items-stretch w-full pl-[340px]">
        {/* Left content */}
        <div className="flex flex-col justify-center px-16 max-w-2xl w-1/2 py-12">
          <h1
            className="text-[3.2rem] lg:text-[4rem] font-extrabold font-playfair leading-tight mb-2 text-black"
            style={{
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.1,
            }}
          >
            Hi!
            <br />
            I&apos;m Jackson
          </h1>
          <p className="mb-5 text-lg text-gray-700 tracking-wide font-light">
            100% html5 bootstrap templates Made by{" "}
            <a href="https://colorlib.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              colorlib.com
            </a>
          </p>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center border border-gray-600 px-8 py-3 rounded-[6px] text-lg font-semibold transition-all bg-transparent text-black hover:bg-gray-100"
            style={{ letterSpacing: "0.02em" }}
          >
            DOWNLOAD CV
            <Download className="ml-2" size={21} />
          </a>
        </div>
        {/* Right image */}
        <div className="w-1/2 flex items-center justify-start pr-10 min-h-[450px]">
          <img
            src="/lovable-uploads/749d406c-5538-47c8-ae37-418a06ed9c34.png"
            alt="Jackson adjusting collar"
            className="object-cover rounded-none w-full h-auto max-h-[560px] shadow-none"
            style={{
              maxWidth: "540px",
              minWidth: "320px",
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

