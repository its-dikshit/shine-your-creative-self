
import React from "react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggleButton from "./ThemeToggleButton";
import {
  ToggleLeft,
  ToggleRight,
  Home,
  Briefcase,
  Layers,
  FolderOpen,
  Trophy,
  Users,
  Mail,
} from "lucide-react";

const navLinks = [
  {
    label: "HOME",
    href: "#herosection",
    sectionId: "herosection",
    icon: Home,
  },
  {
    label: "WORK EXPERIENCE",
    href: "#experience",
    sectionId: "experience",
    icon: Briefcase,
  },
  {
    label: "SKILLS",
    href: "#skills",
    sectionId: "skills",
    icon: Layers,
  },
  {
    label: "PROJECTS",
    href: "#projects",
    sectionId: "projects",
    icon: FolderOpen,
  },
  {
    label: "ACHIEVEMENTS",
    href: "#achievements",
    sectionId: "achievements",
    icon: Trophy,
  },
  {
    label: "EXTRA-CURRICULAR",
    href: "#extracurricular",
    sectionId: "extracurricular",
    icon: Users,
  },
  {
    label: "GET IN TOUCH",
    href: "#contact",
    sectionId: "contact",
    icon: Mail,
  },
];

type SidebarProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const SidebarToggleButton: React.FC = () => {
  const { state, toggleSidebar } = useSidebar();
  return (
    <button
      className="
        mt-4 mb-6 mx-auto flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500
        hover:from-blue-600 hover:to-indigo-600 shadow-lg text-white transition-all duration-200 border-2 border-white
        dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-300
      "
      aria-label={state === "collapsed" ? "Expand sidebar" : "Collapse sidebar"}
      onClick={toggleSidebar}
      type="button"
      tabIndex={0}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 20,
      }}
    >
      {state === "collapsed" ? <ToggleRight size={22} /> : <ToggleLeft size={22} />}
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ scrollRef }) => {
  const { state } = useSidebar();
  const [activeSection, setActiveSection] = React.useState("herosection");
  const collapsed = state === "collapsed";

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

  // Visual indication for active section
  const getActiveClass = (sectionId: string) =>
    activeSection === (sectionId || "herosection")
      ? "text-blue-500 bg-blue-100 dark:bg-blue-900 font-bold"
      : "text-gray-700 dark:text-gray-300";

  // The width of the sidebar changes between expanded (20vw) and collapsed (10vw)
  const sidebarWidth = collapsed
    ? "w-[10vw] min-w-[56px] max-w-[90px]"
    : "w-[20vw] min-w-[160px] max-w-[300px]";

  return (
    <>
      <ShadcnSidebar className="hidden md:block" collapsible="icon" side="left">
        <div
          className={`${sidebarWidth} h-screen bg-[#f5f7fa] dark:bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all flex-col items-center relative flex`}
          style={{ transition: "width 0.2s, min-width 0.2s" }}
        >
          {/* Toggle button always at the top */}
          <SidebarToggleButton />

          <SidebarContent className="flex flex-col items-center w-full p-0">
            {collapsed ? (
              // Collapsed: Only avatar and vertical icons
              <div className="flex flex-col items-center w-full">
                <Avatar className="h-10 w-10 my-3 shadow-md border-2 border-blue-500 bg-white dark:bg-neutral-900 transition-colors mt-0">
                  <AvatarImage src="/lovable-uploads/354854ad-c8f8-4202-be31-5587a92fb34c.png" alt="Profile photo" />
                  <AvatarFallback>JF</AvatarFallback>
                </Avatar>
                <nav className="flex-1 w-full flex flex-col items-center">
                  <ul className="flex flex-col gap-4 mt-6 w-full items-center">
                    {navLinks.map(({ label, sectionId, icon: Icon }) => (
                      <li key={label}>
                        <button
                          className={`flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 mb-0 outline-none transition-colors duration-150 border-none
                              ${getActiveClass(sectionId)}
                            `}
                          aria-label={label}
                          tabIndex={0}
                          onClick={() => handleNavClick(sectionId)}
                          style={{
                            background:
                              activeSection === sectionId
                                ? "var(--tw-bg-opacity,1) #e0e7ff"
                                : undefined,
                          }}
                        >
                          <Icon size={22} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto mb-4 w-full flex flex-col items-center">
                  <ThemeToggleButton />
                </div>
              </div>
            ) : (
              // Expanded: full content
              <div className="flex flex-col items-center w-full">
                <Avatar className="h-24 w-24 mb-1 shadow-lg border-4 border-blue-500 bg-white dark:bg-neutral-900 transition-colors mt-0">
                  <AvatarImage src="/lovable-uploads/354854ad-c8f8-4202-be31-5587a92fb34c.png" alt="Profile photo" />
                  <AvatarFallback>JF</AvatarFallback>
                </Avatar>
                <h1 className="text-[1.32rem] font-extrabold mb-1 uppercase tracking-wide text-black dark:text-white text-center leading-none">
                  Jackson Ford
                </h1>
                <div className="flex flex-row gap-2 items-center text-sm text-center mb-1 justify-center w-full">
                  <span className="font-bold text-blue-500 tracking-widest">UI/UX Designer</span>
                  <ThemeToggleButton />
                </div>
                <nav className="flex-1 w-full flex flex-col mt-2">
                  <ul className="space-y-1 mb-2 px-0 w-full">
                    {navLinks.map(({ label, href, sectionId, icon: Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className={`flex items-center gap-3 px-2 py-2 text-base font-medium tracking-wide uppercase transition text-left rounded-lg
                            ${getActiveClass(sectionId)}
                            interactive-link focus:outline-none focus:ring-2 focus:ring-blue-200 duration-200
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
                            fontWeight:
                              sectionId === "herosection" && activeSection === "herosection"
                                ? 700
                                : 500,
                          }}
                        >
                          <Icon size={22} />
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
              </div>
            )}
          </SidebarContent>
        </div>
      </ShadcnSidebar>
      {/* Mobile sidebar: handled by sheet/drawer */}
      <div className="md:hidden">
        <ShadcnSidebar className="w-0">
          <div className="fixed left-4 top-4 z-50">
            <button
              className="
                rounded-full p-2 bg-gradient-to-tr from-blue-500 to-indigo-500
                hover:from-blue-600 hover:to-indigo-600 shadow-lg
                text-white transition-all duration-200
                border-2 border-white dark:border-neutral-800
                scale-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300
                "
              aria-label="Toggle Sidebar"
              onClick={useSidebar().toggleSidebar}
              type="button"
            >
              <ToggleLeft size={20} />
            </button>
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
                {navLinks.map(({ label, href, sectionId, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`flex items-center gap-2 px-2 py-2 text-base font-medium tracking-wide uppercase transition text-center rounded-lg
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
                      <Icon size={22} />
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
