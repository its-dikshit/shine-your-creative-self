
import React from "react";
import { Home, About, Contact, Work, Blog, Skills, Education } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#", icon: Home },
  { label: "ABOUT", href: "#about", icon: About },
  { label: "SERVICES", href: "#services", icon: Work },
  { label: "SKILLS", href: "#skills", icon: Skills },
  { label: "EDUCATION", href: "#education", icon: Education },
  { label: "EXPERIENCE", href: "#experience", icon: Work },
  { label: "WORK", href: "#projects", icon: Work },
  { label: "BLOG", href: "#blog", icon: Blog },
  { label: "CONTACT", href: "#contact", icon: Contact },
];

const Sidebar = () => (
  <aside className="w-[250px] min-h-screen bg-gray-50 border-r px-6 py-8 flex flex-col items-center fixed left-0 top-0 z-40">
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold mb-1">Jackson Ford</h1>
      <div className="text-xs">
        <a href="#" className="text-blue-500 font-semibold">UI/UX/DESIGNER</a>
        <span className="ml-1 text-gray-400">IN PHILIPPINES</span>
      </div>
    </div>
    <nav className="flex-1 w-full">
      <ul className="space-y-2">
        {navLinks.map(({ label, href }, idx) => (
          <li key={label}>
            <a
              href={href}
              className="block px-2 py-2 rounded hover:bg-primary/10 text-gray-600 hover:text-primary transition font-medium text-base text-center"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-8 text-center text-xs text-gray-400">
      <div className="mb-1">&copy; Copyright &copy;2025 All rights reserved</div>
      <div>
        Template inspired by <a href="https://colorlib.com" className="text-blue-500">Colorlib</a><br/>
        Demo images: <a href="https://unsplash.com" className="text-blue-500">Unsplash.com</a>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        <a href="#"><span className="sr-only">Facebook</span>
          <svg width="18" height="18" fill="currentColor" className="text-gray-400 hover:text-primary"><circle cx="9" cy="9" r="8" /></svg>
        </a>
        <a href="#"><span className="sr-only">Twitter</span>
          <svg width="18" height="18" fill="currentColor" className="text-gray-400 hover:text-primary"><circle cx="9" cy="9" r="8" /></svg>
        </a>
        <a href="#"><span className="sr-only">Instagram</span>
          <svg width="18" height="18" fill="currentColor" className="text-gray-400 hover:text-primary"><circle cx="9" cy="9" r="8" /></svg>
        </a>
        <a href="#"><span className="sr-only">LinkedIn</span>
          <svg width="18" height="18" fill="currentColor" className="text-gray-400 hover:text-primary"><circle cx="9" cy="9" r="8" /></svg>
        </a>
      </div>
    </div>
  </aside>
);

export default Sidebar;
