
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

// Removed dark mode toggle from this section.

const CONTACT_INFO = [
  {
    icon: <Mail size={22} className="text-blue-400" />,
    label: "anshulwork0102@gmail.com",
    href: "mailto:anshulwork0102@gmail.com",
    className: "hover:underline",
  },
  {
    icon: <Phone size={22} className="text-green-400" />,
    label: "+91 9870803265",
    href: "tel:+919870803265",
    className: "hover:underline",
  },
  {
    icon: <MapPin size={22} className="text-rose-400" />,
    label: "Pune, Maharashtra",
    href: undefined,
    className: "",
  },
];

const SOCIALS = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    icon: <Twitter size={20} />,
    label: "Twitter",
    href: "https://twitter.com/",
  },
  {
    icon: <Instagram size={20} />,
    label: "Instagram",
    href: "https://instagram.com/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-white dark:bg-background py-16 px-2 md:px-0 text-black dark:text-white relative">
      <div className="max-w-5xl mx-auto mb-8 px-2 flex items-center justify-between">
        {/* Gradient heading */}
        <h1
          className="
            text-4xl
            font-extrabold
            font-playfair
            tracking-tight
            bg-gradient-to-r
            from-blue-500
            via-fuchsia-500
            to-pink-500
            bg-clip-text
            text-transparent
            dark:bg-gradient-to-r
            dark:from-[#232943]
            dark:via-[#382a6d]
            dark:to-[#673ab7]
          "
        >
          Contact Me
        </h1>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left: Contact info (scrollable if overflow) */}
        <div className="flex flex-col justify-center gap-8 max-h-[480px] md:max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Let&apos;s Connect</h2>
            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0">{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className={`text-base ${c.className}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-base">{c.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* ---- Follow Me section ---- */}
          <div className="mt-2">
            <div className="text-lg font-semibold mt-8 mb-2">Follow Me</div>
            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 rounded-lg w-11 h-11 flex items-center justify-center bg-white dark:bg-neutral-900 dark:border-gray-700 hover:shadow-lg transform hover:scale-110 active:scale-95 transition-all duration-200 group"
                >
                  <span className="group-hover:text-blue-500 text-gray-700 dark:text-gray-300 transition">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Contact form */}
        <div className="bg-gray-100 dark:bg-neutral-900 rounded-xl p-8 shadow-md flex flex-col justify-center">
          <form
            className="flex flex-col gap-5"
            onSubmit={e => {
              e.preventDefault();
              // TODO: Hook up form handling
            }}
          >
            <div className="flex gap-4">
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 rounded-lg text-base"
                style={{ minHeight: 44 }}
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 rounded-lg text-base"
                style={{ minHeight: 44 }}
              />
            </div>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
              className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 rounded-lg text-base"
              style={{ minHeight: 44 }}
            />
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message..."
              required
              className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 rounded-lg text-base"
              style={{ minHeight: 80 }}
            />
            <Button
              type="submit"
              className="
                w-full mt-2 rounded-lg font-semibold uppercase text-base
                bg-blue-500 hover:bg-blue-600 transition
                relative
                overflow-hidden
                dark:bg-gradient-to-r
                dark:from-[#232943]
                dark:via-[#382a6d]
                dark:to-[#673ab7]
                dark:hover:from-[#20264d]
                dark:hover:via-[#473793]
                dark:hover:to-[#835fdb]
                dark:shadow-lg
                dark:border-0
                "
              style={{ minHeight: 44 }}
            >
              <span className="relative z-10">Send Message</span>
            </Button>
          </form>
        </div>
      </div>
      <Footer />
      {/* Custom scrollbar for left panel */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #52525b;
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;

