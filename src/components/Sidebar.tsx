
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// Update section order and labels:
const navLinks = [
  { label: "HOME", href: "#", sectionId: "" },
  { label: "WORK EXPERIENCE", href: "#experience", sectionId: "experience" },
  { label: "SKILLS", href: "#skills", sectionId: "skills" },
  { label: "PROJECTS", href: "#projects", sectionId: "projects" },
  { label: "ACHIEVEMENTS", href: "#achievements", sectionId: "achievements" },
  { label: "EXTRA-CURRICULAR", href: "#extracurricular", sectionId: "extracurricular" },
  { label: "CONTACT ME", href: "#contact", sectionId: "contact" },
];

const idMap: { [k: string]: string } = {
  "": "herosection",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  achievements: "achievements",
  extracurricular: "extracurricular",
  contact: "contact",
};

const Sidebar = () => {
  const [activeSection, setActiveSection] = React.useState("herosection");

  React.useEffect(() => {
    const hero = document.querySelector("section") || document.body.children[0];
    if (hero && !hero.id) {
      (hero as HTMLElement).id = "herosection";
    }
  }, []);

  React.useEffect(() => {
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
      ? "text-blue-500 font-bold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <aside
      className="w-[240px] min-h-screen bg-[#f5f7fa] text-sidebar-foreground border-r border-sidebar-border px-6 py-0 flex flex-col items-center fixed left-0 top-0 z-40"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Avatar image section */}
      <div className="w-full flex flex-col items-center pt-8 pb-5">
        <Avatar className="h-28 w-28 mb-2 shadow-lg border-4 border-blue-500 bg-white">
          {/* You can update the src of this AvatarImage to point to your preferred image */}
          <AvatarImage src="/lovable-uploads/354854ad-c8f8-4202-be31-5587a92fb34c.png" alt="Profile photo" />
          <AvatarFallback>JF</AvatarFallback>
        </Avatar>
        <h1 className="text-[1.55rem] font-extrabold mb-1 uppercase tracking-wide text-black text-center leading-none">Jackson Ford</h1>
        <div className="flex flex-row items-center text-sm gap-1 text-center">
          <div className="font-bold text-blue-500 tracking-widest">UI/UX Designer</div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 w-full flex flex-col mt-2">
        <ul className="space-y-1 mb-2 px-0">
          {navLinks.map(({ label, href, sectionId }) => (
            <li key={label}>
              <a
                href={href}
                className={`block px-2 py-2 text-base font-medium tracking-wide uppercase transition ${getActiveClass(sectionId)} text-center rounded-lg`}
                aria-current={activeSection === (sectionId || "herosection") ? "page" : undefined}
                tabIndex={0}
                style={{
                  letterSpacing: ".12em",
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
      {/* Footer */}
      <div className="mt-auto w-full flex flex-col gap-2 pb-7" style={{ fontFamily: "sans-serif" }}>
        <div className="text-xs text-gray-400 text-center mb-0">
          © 2025 All rights reserved | Made with <span className="text-pink-500">❤</span>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {/* Social icons placeholder */}
          {["facebook", "twitter", "linkedin"].map((icon) => (
            <a key={icon} href="#" aria-label={icon} className="hover:text-blue-500 text-gray-400">
              <svg width="18" height="18" fill="currentColor" className="transition-colors">
                <circle cx="9" cy="9" r="8" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
