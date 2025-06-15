
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

const CONTACT_INFO = [
  {
    icon: <Mail size={24} className="text-blue-400" />,
    label: "anshulwork0102@gmail.com",
    href: "mailto:anshulwork0102@gmail.com",
    className: "text-white font-medium hover:underline",
  },
  {
    icon: <Phone size={24} className="text-green-400" />,
    label: "+91 9870803265",
    href: "tel:+919870803265",
    className: "text-white font-medium hover:underline",
  },
  {
    icon: <MapPin size={24} className="text-rose-400" />,
    label: "Pune, Maharashtra",
    href: undefined,
    className: "text-white font-medium",
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
    <section
      id="contact"
      className="w-full min-h-[600px] bg-black py-20 px-2 md:px-0 text-white transition-colors"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-10">
        {/* Left: Contact Information and Socials */}
        <div className="flex-1 max-w-md flex flex-col justify-center gap-10 px-2 md:px-0">
          <div>
            <h2 className="font-playfair text-3xl font-extrabold mb-6 text-white tracking-wide">
              Let's Connect
            </h2>
            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="flex flex-row items-center gap-4">
                  <span className="flex-shrink-0">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className={c.className} target="_blank" rel="noopener noreferrer">
                      {c.label}
                    </a>
                  ) : (
                    <span className={c.className}>{c.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-10 mb-3 text-white">Follow Me</h3>
            <div className="flex gap-4">
              {SOCIALS.map((s, idx) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 rounded-lg w-12 h-12 flex items-center justify-center group transition hover:border-blue-400 hover:text-blue-400"
                >
                  <span className="text-white group-hover:text-blue-400">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Message Form */}
        <div className="flex-1 w-full max-w-lg mx-auto flex flex-col justify-center">
          <div className="bg-[#232b38] rounded-2xl px-8 py-10 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-1 font-playfair">Send me a message</h3>
            <div className="text-base text-gray-300 mb-7">
              I'll get back to you as soon as possible
            </div>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: Hook up form handling
              }}
            >
              <div className="flex gap-4">
                <div className="w-1/2 flex flex-col gap-1">
                  <label htmlFor="name" className="text-white font-semibold text-base mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-[#2f3745] text-white border-none rounded-lg placeholder:text-gray-400"
                    required
                    style={{ minHeight: 48, fontFamily: "'Playfair Display', serif" }}
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-1">
                  <label htmlFor="email" className="text-white font-semibold text-base mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-[#2f3745] text-white border-none rounded-lg placeholder:text-gray-400"
                    required
                    style={{ minHeight: 48, fontFamily: "'Playfair Display', serif" }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-white font-semibold text-base mb-1">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="bg-[#2f3745] text-white border-none rounded-lg placeholder:text-gray-400"
                  required
                  style={{ minHeight: 48, fontFamily: "'Playfair Display', serif" }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-white font-semibold text-base mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className="bg-[#2f3745] text-white border-none rounded-lg placeholder:text-gray-400"
                  required
                  style={{ fontFamily: "'Playfair Display', serif", minHeight: 96 }}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full mt-2 rounded-lg font-semibold uppercase tracking-wider text-base border-0"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  minHeight: 48,
                  background: "linear-gradient(90deg,#3b82f6 0%,#6f46ff 100%)",
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Integrate site-wide Footer as before */}
      <Footer />
    </section>
  );
};

export default ContactSection;
