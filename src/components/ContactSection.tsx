import React from "react";
import { Mail, Phone, Linkedin, Instagram, Github, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

const CONTACT_EMAIL = "your.email@example.com";
const CONTACT_PHONE = "+1 234 567 8900";
const CONTACT_LOCATION = "San Francisco, CA";

const SOCIALS = [
  {
    href: "https://github.com/",
    icon: <Github size={20} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/",
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/",
    icon: <Instagram size={20} />,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/",
    icon: <Youtube size={20} />,
    label: "YouTube",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-background py-20 px-4 md:px-0 text-foreground transition-colors"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Left: Let's Connect */}
        <div className="flex-1 w-full md:max-w-xs mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-3">Let's Connect</h2>
          <ul className="mb-5 space-y-4">
            <li className="flex items-center gap-3 text-base">
              <Mail size={20} className="text-blue-500" />
              <span className="font-medium">{CONTACT_EMAIL}</span>
            </li>
            <li className="flex items-center gap-3 text-base">
              <Phone size={20} className="text-green-500" />
              <span className="font-medium">{CONTACT_PHONE}</span>
            </li>
            <li className="flex items-center gap-3 text-base">
              {/* Location icon fallback */}
              <span className="inline-block text-red-500">
                <svg width="20" height="20" fill="currentColor" className="inline align-middle"><circle cx="10" cy="10" r="8" /></svg>
              </span>
              <span className="font-medium">{CONTACT_LOCATION}</span>
            </li>
          </ul>
          <div>
            <div className="text-base font-semibold mb-2">Follow Me</div>
            <div className="flex flex-row gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="border border-border bg-card hover:bg-muted text-foreground rounded-md p-2 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 w-full max-w-xl mx-auto bg-card rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
          <p className="text-muted-foreground mb-7 text-base">
            I'll get back to you as soon as possible
          </p>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Hook up form handling
            }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1 font-medium" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-background text-foreground border-border placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background text-foreground border-border placeholder:text-muted-foreground"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="subject">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="bg-background text-foreground border-border placeholder:text-muted-foreground"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message..."
                className="bg-background text-foreground border-border placeholder:text-muted-foreground"
                required
              />
            </div>
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full mt-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-semibold hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default ContactSection;
