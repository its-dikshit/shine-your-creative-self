
import React from "react";
import { Mail, Phone, Linkedin, Instagram, Github, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
      className="w-full bg-[#11141a] py-20 px-4 md:px-0"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Left: Let's Connect */}
        <div className="flex-1 w-full md:max-w-xs mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-3">Let's Connect</h2>
          <ul className="mb-5 space-y-4">
            <li className="flex items-center gap-3 text-base text-gray-100">
              <Mail size={20} className="text-blue-400" />
              <span className="font-medium">{CONTACT_EMAIL}</span>
            </li>
            <li className="flex items-center gap-3 text-base text-gray-100">
              <Phone size={20} className="text-green-400" />
              <span className="font-medium">{CONTACT_PHONE}</span>
            </li>
            <li className="flex items-center gap-3 text-base text-gray-100">
              {/* Using Youtube icon as location icon fallback */}
              <span className="inline-block text-red-400">
                <svg width="20" height="20" fill="currentColor" className="inline align-middle"><circle cx="10" cy="10" r="8" /></svg>
              </span>
              <span className="font-medium">{CONTACT_LOCATION}</span>
            </li>
          </ul>
          <div>
            <div className="text-base font-semibold text-white mb-2">Follow Me</div>
            <div className="flex flex-row gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="border border-gray-700 bg-[#161b22] hover:bg-[#23272e] text-gray-300 rounded-md p-2 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 w-full max-w-xl mx-auto bg-[#212634] rounded-2xl p-8 shadow-xl text-white">
          <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
          <p className="text-gray-300 mb-7 text-base">
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
                  className="bg-[#161b22] text-white border-gray-700 placeholder:text-gray-400"
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
                  className="bg-[#161b22] text-white border-gray-700 placeholder:text-gray-400"
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
                className="bg-[#161b22] text-white border-gray-700 placeholder:text-gray-400"
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
                className="bg-[#161b22] text-white border-gray-700 placeholder:text-gray-400"
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
    </section>
  );
};

export default ContactSection;

