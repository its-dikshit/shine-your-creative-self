import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=600&q=80",
    alt: "Profile 1"
  },
  {
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=600&q=80",
    alt: "Profile 2"
  },
  {
    url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&q=80",
    alt: "Profile 3"
  }
];

const AUTO_ADVANCE_INTERVAL = 3500; // ms

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, AUTO_ADVANCE_INTERVAL);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current]);

  return (
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
          <Carousel
            opts={{ loop: true }}
            className="w-full max-w-xs md:max-w-md"
            key={current}
          >
            <CarouselContent>
              {IMAGES.map((image, idx) => (
                <CarouselItem key={image.url} className="flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className={`rounded-xl shadow-lg object-cover transition-all duration-700 ${
                      idx === current ? "opacity-100" : "opacity-0 h-0"
                    }`}
                    style={{
                      background: "#f4f6fa",
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
