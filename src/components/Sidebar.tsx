import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainDarkToggle from "./MainDarkToggle"; // Import the toggle

// Add IDs to match section IDs in main content
const navLinks = [
  { label: "HOME", href: "#herosection", sectionId: "herosection" },
  { label: "WORK EXPERIENCE", href: "#experience", sectionId: "experience" },
  { label: "SKILLS", href: "#skills", sectionId: "skills" },
  { label: "PROJECTS", href: "#projects", sectionId: "projects" },
  { label: "ACHIEVEMENTS", href: "#achievements", sectionId: "achievements" },
  { label: "EXTRA-CURRICULAR", href: "#extracurricular", sectionId: "extracurricular" },
  { label: "GET IN TOUCH", href: "#contact", sectionId: "contact" },
];

// Used for mapping ids
const idMap: { [k: string]: string } = {
  herosection: "herosection",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  achievements: "achievements",
  extracurricular: "extracurricular",
  contact: "contact",
};

type SidebarProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const Sidebar: React.FC<SidebarProps> = ({ scrollRef }) => {
  const [activeSection, setActiveSection] = React.useState("herosection");

  // Set up scroll tracking for section highlighting (use scrollRef container)
  React.useEffect(() => {
    const scrollContainer = scrollRef?.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sectionOrder = [
        "herosection",
        "experience",
        "skills",
        "projects",
        "achievements",
        "extracurricular",
        "contact",
      ];
      let foundSection = "herosection";
      // Get scrollContainer top for relative offset
      const containerRect = scrollContainer.getBoundingClientRect();

      for (let id of sectionOrder) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust comparison for custom scroll container
          // consider the offset relative to the container's top, e.g., header size 32~64px
          const offsetTop = rect.top - containerRect.top;
          const offsetBottom = rect.bottom - containerRect.top;
          if (offsetTop <= 80 && offsetBottom >= 80) {
            foundSection = id;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial highlight
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  function handleNavClick(id: string) {
    // Scroll to the section smoothly in the scrollable main container
    const el = document.getElementById(id);
    if (el && scrollRef?.current) {
      const container = scrollRef.current;
      // Calculate how much to scroll to bring the element's top to the container
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const scrollOffset = elRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({ top: scrollOffset - 16, behavior: "smooth" }); // adjust (+/-) for header padding
    }
    setActiveSection(id);
  }

  const getActiveClass = (sectionId: string) =>
    activeSection === (sectionId || "herosection")
      ? "text-blue-500 font-bold"
      : "text-gray-700 dark:text-gray-300";

  return (
    <aside
      className="w-[240px] min-h-screen max-h-screen bg-[#f5f7fa] dark:bg-sidebar text-sidebar-foreground border-r border-sidebar-border px-6 py-0 flex flex-col items-center fixed left-0 top-0 z-40 transition-colors overflow-y-auto"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="w-full flex flex-row items-center justify-between pt-4 pb-1">
        <div />
        <div />
      </div>
      <div className="w-full flex flex-col items-center pt-4 pb-5">
        <Avatar className="h-28 w-28 mb-2 shadow-lg border-4 border-blue-500 bg-white dark:bg-neutral-900 transition-colors">
          <AvatarImage src="/lovable-uploads/354854ad-c8f8-4202-be31-5587a92fb34c.png" alt="Profile photo" />
          <AvatarFallback>JF</AvatarFallback>
        </Avatar>
        <h1 className="text-[1.55rem] font-extrabold mb-1 uppercase tracking-wide text-black dark:text-white text-center leading-none">Jackson Ford</h1>
        <div className="flex flex-row items-center text-sm gap-1 text-center mb-2">
          <div className="font-bold text-blue-500 tracking-widest">UI/UX Designer</div>
        </div>
        {/* Dark mode toggle placed here, right-aligned in sidebar */}
        <div className="w-full flex flex-row justify-end mt-1">
          <MainDarkToggle />
        </div>
      </div>
      <nav className="flex-1 w-full flex flex-col mt-2">
        <ul className="space-y-1 mb-2 px-0">
          {navLinks.map(({ label, href, sectionId }) => (
            <li key={label}>
              <a
                href={href}
                className={`
                  block px-2 py-2 text-base font-medium tracking-wide uppercase transition text-center rounded-lg
                  ${
                    getActiveClass(sectionId)
                  }
                  interactive-link
                  focus:outline-none focus:ring-2 focus:ring-blue-200
                  duration-200 ease-in-out
                  `}
                aria-current={activeSection === (sectionId || "herosection") ? "page" : undefined}
                tabIndex={0}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(sectionId);
                }}
                style={{
                  letterSpacing: ".12em",
                  fontFamily: "inherit",
                  fontWeight: sectionId === "herosection" && activeSection === "herosection" ? 700 : 500,
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto w-full flex flex-col gap-2 pb-7" style={{ fontFamily: "sans-serif" }}>
        <div className="text-xs text-gray-400 text-center mb-0 dark:text-gray-500">
          © 2025 All rights reserved | Made with <span className="text-pink-500">❤</span>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {["facebook", "twitter", "linkedin"].map((icon) => (
            <a key={icon} href="#" aria-label={icon} className="hover:text-blue-500 text-gray-400 dark:text-gray-500 transition-colors hover:scale-110 interactive-link">
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
