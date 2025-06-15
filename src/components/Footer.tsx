
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = [
  { label: "Home", href: "#" },
  { label: "Work Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const CONTACT = {
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "San Francisco, CA",
};

const Footer = () => (
  <footer className="w-full bg-background border-t border-border mt-16 text-foreground/90">
    <div className="max-w-6xl mx-auto px-4 md:px-0 py-12 flex flex-col md:flex-row justify-between gap-10">
      {/* Left */}
      <div className="flex-1 min-w-[220px]">
        <div className="text-2xl font-bold mb-1 text-blue-600">Jackson Ford</div>
        <p className="mb-4 text-base text-muted-foreground max-w-md">
          UI/UX Designer passionate about creating delightful digital experiences and building scalable, elegant applications.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="GitHub"><Github size={22} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn"><Linkedin size={22} /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Twitter"><Twitter size={22} /></a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-600 transition-colors" aria-label="Mail"><Mail size={22} /></a>
        </div>
      </div>
      {/* Center */}
      <div className="flex-1 min-w-[180px]">
        <div className="font-bold text-xl mb-3">Quick Links</div>
        <ul className="space-y-1 text-base">
          {FOOTER_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Right */}
      <div className="flex-1 min-w-[200px]">
        <div className="font-bold text-xl mb-3">Contact Info</div>
        <ul className="space-y-2 text-base">
          <li>{CONTACT.email}</li>
          <li>{CONTACT.phone}</li>
          <li>{CONTACT.location}</li>
        </ul>
      </div>
    </div>
    <Separator className="my-2" />
    <div className="max-w-6xl mx-auto px-4 md:px-0 py-4 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
      <span>© 2025 Jackson Ford. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
