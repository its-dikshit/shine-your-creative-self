
import React from "react";
import { Globe, Map, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

const CONTACTS = [
  {
    icon: <Globe size={32} className="text-blue-500" />,
    label: "info@domain.com",
    value: "info@domain.com",
    href: "mailto:info@domain.com",
    className: "font-medium text-blue-500 hover:underline",
  },
  {
    icon: <Map size={32} className="text-blue-500" />,
    label: (
      <span>
        198 West 21th Street, Suite<br />
        721 New York NY 10016
      </span>
    ),
    value: "198 West 21th Street, Suite 721 New York NY 10016",
    href: undefined,
    className: "text-gray-700",
  },
  {
    icon: <Phone size={32} className="text-blue-500" />,
    label: "+123 456 7890",
    value: "+123 456 7890",
    href: "tel:+1234567890",
    className: "font-medium text-blue-500 hover:underline",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-background py-20 px-2 md:px-0 text-foreground transition-colors"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-3">
        {/* Left: Contact Information */}
        <div className="flex-1 max-w-md flex flex-col justify-center gap-5">
          <h2 className="font-playfair text-3xl font-extrabold uppercase tracking-wide mb-6 text-black">
            Contact
          </h2>
          <div className="flex flex-col gap-5">
            {CONTACTS.map((c, i) => (
              <div
                key={i}
                className="w-full flex min-h-[82px] bg-gray-100 rounded-md items-center gap-4 px-6 py-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                <div className="flex-shrink-0 bg-white rounded-lg p-2">
                  {c.icon}
                </div>
                <div className="font-base text-[1.07rem]">
                  {c.href ? (
                    <a href={c.href} className={c.className}>{c.label}</a>
                  ) : (
                    <span className={c.className}>{c.label}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Message Form */}
        <div className="flex-1 w-full max-w-lg mx-auto flex flex-col justify-center">
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Hook up form handling
            }}
          >
            <div className="flex flex-col gap-4">
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="bg-gray-100 text-base rounded-md border-none focus-visible:ring-2 focus-visible:ring-blue-400 placeholder:text-gray-400"
                required
                style={{ minHeight: 50, fontFamily: "'Playfair Display', serif" }}
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="bg-gray-100 text-base rounded-md border-none focus-visible:ring-2 focus-visible:ring-blue-400 placeholder:text-gray-400"
                required
                style={{ minHeight: 50, fontFamily: "'Playfair Display', serif" }}
              />
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="bg-gray-100 text-base rounded-md border-none focus-visible:ring-2 focus-visible:ring-blue-400 placeholder:text-gray-400"
                required
                style={{ minHeight: 50, fontFamily: "'Playfair Display', serif" }}
              />
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                className="bg-gray-100 text-base rounded-md border-none focus-visible:ring-2 focus-visible:ring-blue-400 placeholder:text-gray-400"
                required
                style={{ fontFamily: "'Playfair Display', serif" }}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full mt-2 rounded bg-blue-500 hover:bg-blue-600 font-semibold uppercase tracking-wider text-base"
              style={{ fontFamily: "'Playfair Display', serif", minHeight: 48 }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
      {/* Remove social icons and integrate site-wide Footer as before */}
      <Footer />
    </section>
  );
};

export default ContactSection;

