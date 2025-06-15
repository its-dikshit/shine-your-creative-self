
import React from "react";
import { Home, Contact, Bot } from "lucide-react";

// Only using Bot for most nav links.
const navLinks = [
  { label: "HOME", href: "#", icon: Home },
  { label: "ABOUT", href: "#about", icon: Bot },
  { label: "SERVICES", href: "#services", icon: Bot },
  { label: "SKILLS", href: "#skills", icon: Bot },
  { label: "EDUCATION", href: "#education", icon: Bot },
  { label: "EXPERIENCE", href: "#experience", icon: Bot },
  { label: "WORK", href: "#projects", icon: Bot },
  { label: "BLOG", href: "#blog", icon: Bot },
  { label: "CONTACT", href: "#contact", icon: Contact },
];

const Sidebar = () => (
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
          {navLinks.map(({ label, href, icon: Icon }, idx) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-primary/10 text-sidebar-foreground hover:text-primary transition font-semibold text-base tracking-widest uppercase"
              >
                <Icon size={18} />
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

export default Sidebar;
