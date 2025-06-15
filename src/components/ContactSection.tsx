
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

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
    <section id="contact" className="w-full bg-white py-16 px-2 md:px-0 text-black">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left: Contact info */}
        <div className="flex flex-col justify-center gap-8">
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
          <div>
            <div className="text-lg font-semibold mt-8 mb-2">Follow Me</div>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 rounded-lg w-11 h-11 flex items-center justify-center hover:border-blue-400 hover:text-blue-500 transition-colors group bg-white"
                >
                  <span className="group-hover:text-blue-500 text-gray-700">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Contact form */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-md flex flex-col justify-center">
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
                className="bg-white border border-gray-300 rounded-lg text-base"
                style={{ minHeight: 44 }}
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="bg-white border border-gray-300 rounded-lg text-base"
                style={{ minHeight: 44 }}
              />
            </div>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
              className="bg-white border border-gray-300 rounded-lg text-base"
              style={{ minHeight: 44 }}
            />
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message..."
              required
              className="bg-white border border-gray-300 rounded-lg text-base"
              style={{ minHeight: 80 }}
            />
            <Button
              type="submit"
              className="w-full mt-2 rounded-lg font-semibold uppercase text-base bg-blue-500 hover:bg-blue-600 transition"
              style={{ minHeight: 44 }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;
