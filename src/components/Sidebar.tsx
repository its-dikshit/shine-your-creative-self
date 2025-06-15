
import React, { useEffect, useState } from "react";
import { Home, Contact } from "lucide-react";

// Section order as requested:
const navLinks = [
  { label: "HOME", href: "#", icon: Home, sectionId: "" }, // "" will be special-cased for HeroSection
  { label: "ABOUT", href: "#about", icon: undefined, sectionId: "about" },
  { label: "SERVICES", href: "#services", icon: undefined, sectionId: "services" },
  { label: "SKILLS", href: "#skills", icon: undefined, sectionId: "skills" },
  { label: "EDUCATION", href: "#education", icon: undefined, sectionId: "education" },
  { label: "EXPERIENCE", href: "#experience", icon: undefined, sectionId: "experience" },
  { label: "WORK", href: "#projects", icon: undefined, sectionId: "projects" },
  { label: "BLOG", href: "#blog", icon: undefined, sectionId: "blog" },
  { label: "CONTACT", href: "#contact", icon: Contact, sectionId: "contact" },
];

// Simple fallback icon (a dot), replace with your own if you wish.
const DotIcon = () => (
  <span className="inline-block w-2 h-2 rounded-full bg-gray-300"></span>
);

const idMap: { [k: string]: string } = {
  "": "herosection", // HeroSection's main area
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // All section ids present in navLinks
    const sectionIds = navLinks.map((nl) => {
      if (nl.sectionId === "") return "herosection";
      return nl.sectionId;
    });

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    // If not present (e.g. services, education, experience, blog not implemented), skip them
    const filteredNav = navLinks.filter((nl) => {
      if (nl.sectionId === "") return !!document.getElementById("herosection");
      return !!document.getElementById(nl.sectionId);
    });

    // Handler for highlighting active navlink on scroll
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          let bestId = "";
          let bestTop = -Infinity;
          elements.forEach((el, idx) => {
            const rect = el.getBoundingClientRect();
            // Section top close to viewport top, and visible
            if (rect.top <= 120 && rect.top > bestTop) {
              bestTop = rect.top;
              bestId = sectionIds[idx];
            }
          });
          setActiveSection(bestId || "herosection");
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run on mount as well in case already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    // Re-run effect if any section is dynamically rendered later
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // For "HOME", target HeroSection wrapping element. Attach id if missing.
  useEffect(() => {
    const hero = document.querySelector("section") || document.body.children[0];
    if (hero && !hero.id) {
      (hero as HTMLElement).id = "herosection";
    }
  }, []);

  const getActiveClass = (sectionId: string) =>
    (activeSection === (sectionId ? sectionId : "herosection")
      ? "bg-primary/10 text-primary font-extrabold"
      : "text-sidebar-foreground") +
    " ";

  return (
    <aside className="w-[250px] min-h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border px-6 py-0 flex flex-col items-center fixed left-0 top-0 z-40">
      <div className="w-full flex flex-col items-center pt-8 pb-6">
        <h1 className="text-2xl font-bold mb-1 uppercase tracking-wide">Jackson Ford</h1>
        <div className="flex flex-col items-center text-xs gap-0.5">
          <span className="text-blue-500 font-bold tracking-widest uppercase">UI/UX DESIGNER</span>
          <span className="text-gray-400 tracking-wider uppercase">PHILIPPINES</span>
        </div>
      </div>
      {/* Scrollable content including navigation and footer */}
      <div className="flex-1 w-full flex flex-col overflow-y-auto no-scrollbar pb-2">
        <nav className="flex-1">
          <ul className="space-y-1 mt-2 mb-2 px-2">
            {navLinks.map(({ label, href, icon: Icon, sectionId }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition font-semibold text-base tracking-widest uppercase ${getActiveClass(sectionId)}`}
                  aria-current={activeSection === (sectionId || "herosection") ? "page" : undefined}
                  tabIndex={0}
                  // Enable keyboard focus
                >
                  {Icon ? <Icon size={18} /> : <DotIcon />}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-sidebar-border mt-2 pt-4 px-2 text-center text-xs text-gray-400 flex flex-col gap-2">
          <div>&copy; 2025 Jackson Ford</div>
          <div>
            Inspired by <a href="https://colorlib.com" className="text-blue-500 underline">Colorlib</a> · Demo images: <a href="https://unsplash.com" className="text-blue-500 underline">Unsplash</a>
          </div>
          <div className="flex justify-center gap-3 mt-1 mb-1">
            {[{ label: "Facebook" }, { label: "Twitter" }, { label: "Instagram" }, { label: "LinkedIn" }].map(
              (item) => (
                <a key={item.label} href="#" aria-label={item.label}>
                  <span className="sr-only">{item.label}</span>
                  <svg width="18" height="18" fill="currentColor" className="text-gray-400 hover:text-primary transition-colors"><circle cx="9" cy="9" r="8" /></svg>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
