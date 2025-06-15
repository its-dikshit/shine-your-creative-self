
import React, { useEffect, useState } from "react";

// Section order as requested:
const navLinks = [
  { label: "HOME", href: "#", sectionId: "" }, // "" will be special-cased for HeroSection
  { label: "ABOUT", href: "#about", sectionId: "about" },
  { label: "SERVICES", href: "#services", sectionId: "services" },
  { label: "SKILLS", href: "#skills", sectionId: "skills" },
  { label: "EDUCATION", href: "#education", sectionId: "education" },
  { label: "EXPERIENCE", href: "#experience", sectionId: "experience" },
  { label: "WORK", href: "#projects", sectionId: "projects" },
  { label: "BLOG", href: "#blog", sectionId: "blog" },
  { label: "CONTACT", href: "#contact", sectionId: "contact" },
];

const idMap: { [k: string]: string } = {
  "": "herosection",
  about: "about",
  services: "services",
  skills: "skills",
  education: "education",
  experience: "experience",
  projects: "projects",
  blog: "blog",
  contact: "contact",
};

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("herosection");

  // Ensure hero section has id
  useEffect(() => {
    const hero = document.querySelector("section") || document.body.children[0];
    if (hero && !hero.id) {
      (hero as HTMLElement).id = "herosection";
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      const navWithElements = navLinks
        .map((nl) => {
          const domId = nl.sectionId === "" ? "herosection" : nl.sectionId;
          const el = document.getElementById(domId);
          return el ? { ...nl, domId, el } : null;
        })
        .filter((x) => !!x) as Array<{ label: string; href: string; sectionId: string; domId: string; el: HTMLElement }>;

      let currentActive = navWithElements[0]?.domId || "herosection";
      let bestTop = -Infinity;
      for (const nav of navWithElements) {
        const rect = nav.el.getBoundingClientRect();
        if (rect.top <= 120 && rect.top > bestTop) {
          bestTop = rect.top;
          currentActive = nav.domId;
        }
      }
      setActiveSection(currentActive);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getActiveClass = (sectionId: string) =>
    activeSection === (sectionId ? sectionId : "herosection")
      ? "text-blue-500"
      : "text-gray-700 hover:text-blue-600";

  return (
    <aside
      className="w-[340px] min-h-screen bg-[#f5f7fa] text-sidebar-foreground border-r border-sidebar-border px-10 py-0 flex flex-col items-center fixed left-0 top-0 z-40"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="w-full flex flex-col items-center pt-10 pb-7">
        <h1 className="text-[2.2rem] font-extrabold mb-1 uppercase tracking-wide text-black">Jackson Ford</h1>
        <div className="flex flex-row items-center text-[1rem] gap-1">
          <div className="font-bold text-blue-500 tracking-widest">UI/UX/DESIGNER</div>
          <div className="mx-1 text-gray-400 font-normal uppercase tracking-wider">in Philippines</div>
        </div>
      </div>
      <nav className="flex-1 w-full flex flex-col">
        <ul className="space-y-1 mb-2 px-0">
          {navLinks.map(({ label, href, sectionId }) => (
            <li key={label}>
              <a
                href={href}
                className={`block px-2 py-2 text-lg font-medium tracking-wide uppercase transition ${getActiveClass(sectionId)} text-center rounded-lg`}
                aria-current={activeSection === (sectionId || "herosection") ? "page" : undefined}
                tabIndex={0}
                style={{
                  letterSpacing: ".15em",
                  fontFamily: "inherit",
                  fontWeight: sectionId === "" && activeSection === "herosection" ? 700 : 500,
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto w-full flex flex-col gap-2 pb-7" style={{ fontFamily: "sans-serif" }}>
        <div className="text-xs text-gray-400 text-center mb-0">
          © Copyright ©2025 All rights reserved | This template is made with{" "}
          <span className="text-pink-500">❤</span> by&nbsp;
          <a href="https://colorlib.com" className="text-blue-500 underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            Colorlib
          </a>
          <br />
          Demo Images:{" "}
          <a href="https://unsplash.com" className="text-blue-500 underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            Unsplash.com
          </a>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
            <a key={icon} href="#" aria-label={icon} className="hover:text-blue-500 text-gray-400">
              <svg width="17" height="17" fill="currentColor" className="transition-colors">
                <circle cx="8.5" cy="8.5" r="8" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

