
import React from "react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggleButton from "./ThemeToggleButton";
import { PanelLeft } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#herosection", sectionId: "herosection" },
  { label: "WORK EXPERIENCE", href: "#experience", sectionId: "experience" },
  { label: "SKILLS", href: "#skills", sectionId: "skills" },
  { label: "PROJECTS", href: "#projects", sectionId: "projects" },
  { label: "ACHIEVEMENTS", href: "#achievements", sectionId: "achievements" },
  { label: "EXTRA-CURRICULAR", href: "#extracurricular", sectionId: "extracurricular" },
  { label: "GET IN TOUCH", href: "#contact", sectionId: "contact" },
];

type SidebarProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const Sidebar: React.FC<SidebarProps> = ({ scrollRef }) => {
  const [activeSection, setActiveSection] = React.useState("herosection");

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
      const containerRect = scrollContainer.getBoundingClientRect();
      for (let id of sectionOrder) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
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
    handleScroll();
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  function handleNavClick(id: string) {
    const el = document.getElementById(id);
    if (el && scrollRef?.current) {
      const container = scrollRef.current;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const scrollOffset = elRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({ top: scrollOffset - 16, behavior: "smooth" });
    }
    setActiveSection(id);
  }

  const getActiveClass = (sectionId: string) =>
    activeSection === (sectionId || "herosection")
      ? "text-blue-500 font-bold"
      : "text-gray-700 dark:text-gray-300";

  return (
    <>
      {/* Desktop sidebar: always visible, 20vw width */}
      <div className="hidden md:flex h-screen w-[20vw] min-w-[160px] max-w-[300px] bg-[#f5f7fa] dark:bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-colors flex-col items-center relative">
        {/* Sidebar toggle button (fixed for mobile only) */}
        <div className="absolute left-4 top-4 z-20 md:hidden">
          <SidebarTrigger
            className="
              rounded-full p-2 bg-gradient-to-tr from-blue-500 to-indigo-500
              hover:from-blue-600 hover:to-indigo-600 shadow-lg
              text-white transition-all duration-200
              border-2 border-white dark:border-neutral-800
              scale-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300
              "
            aria-label="Toggle Sidebar"
          >
            <PanelLeft size={20} />
          </SidebarTrigger>
        </div>
        <SidebarContent className="flex flex-col items-center w-full p-0 mt-6">
          <div className="w-full flex flex-col items-center pt-2 pb-4">
            <Avatar className="h-24 w-24 mb-1 shadow-lg border-4 border-blue-500 bg-white dark:bg-neutral-900 transition-colors mt-0">
              <AvatarImage src="/lovable-uploads/354854ad-c8f8-4202-be31-5587a92fb34c.png" alt="Profile photo" />
              <AvatarFallback>JF</AvatarFallback>
            </Avatar>
            <h1 className="text-[1.32rem] font-extrabold mb-1 uppercase tracking-wide text-black dark:text-white text-center leading-none">Jackson Ford</h1>
            <div className="flex flex-row gap-2 items-center text-sm text-center mb-1 justify-center w-full">
              <span className="font-bold text-blue-500 tracking-widest">UI/UX Designer</span>
              <ThemeToggleButton />
            </div>
          </div>
          <nav className="flex-1 w-full flex flex-col mt-2">
            <ul className="space-y-1 mb-2 px-0">
              {navLinks.map(({ label, href, sectionId }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`block px-2 py-2 text-base font-medium tracking-wide uppercase transition text-center rounded-lg
                      ${getActiveClass(sectionId)}
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
        </SidebarContent>
      </div>
      {/* Mobile sidebar: handled by sheet/drawer */}
      <div className="md:hidden">
        <ShadcnSidebar className="w-0">
          {/* The trigger is fixed at top-left on mobile */}
          <div className="fixed left-4 top-4 z-50">
            <SidebarTrigger
              className="
                rounded-full p-2 bg-gradient-to-tr from-blue-500 to-indigo-500
                hover:from-blue-600 hover:to-indigo-600 shadow-lg
                text-white transition-all duration-200
                border-2 border-white dark:border-neutral-800
                scale-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300
                "
              aria-label="Toggle Sidebar"
            >
              <PanelLeft size={20} />
            </SidebarTrigger>
          </div>
          <SidebarContent className="flex flex-col items-center w-full p-0 mt-6">
            {/* Sidebar content is the same as desktop */}
            <div className="w-full flex flex-col items-center pt-2 pb-4">
              <Avatar className="h-24 w-24 mb-1 shadow-lg border-4 border-blue-500 bg-white dark:bg-neutral-900 transition-colors mt-0">
                <AvatarImage src="/lovable-uploads/354854ad-c8f8-4202-be31-5587a92fb34c.png" alt="Profile photo" />
                <AvatarFallback>JF</AvatarFallback>
              </Avatar>
              <h1 className="text-[1.32rem] font-extrabold mb-1 uppercase tracking-wide text-black dark:text-white text-center leading-none">Jackson Ford</h1>
              <div className="flex flex-row gap-2 items-center text-sm text-center mb-1 justify-center w-full">
                <span className="font-bold text-blue-500 tracking-widest">UI/UX Designer</span>
                <ThemeToggleButton />
              </div>
            </div>
            <nav className="flex-1 w-full flex flex-col mt-2">
              <ul className="space-y-1 mb-2 px-0">
                {navLinks.map(({ label, href, sectionId }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`block px-2 py-2 text-base font-medium tracking-wide uppercase transition text-center rounded-lg
                        ${getActiveClass(sectionId)}
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
          </SidebarContent>
        </ShadcnSidebar>
      </div>
    </>
  );
};

export default Sidebar;
