
import React from "react";

const ContactSection = () => (
  <footer
    id="contact"
    className="max-w-4xl mx-auto mt-20 px-6 py-10 bg-card rounded-t-2xl shadow-inner text-center animate-fade-in"
  >
    <h2 className="text-2xl font-bold mb-3">Contact</h2>
    <p className="text-muted-foreground mb-4">
      {"Feel free to reach out to me for collaboration, work, or just to say hi!"}
    </p>
    <div className="flex flex-wrap justify-center gap-6 mb-2">
      <a
        href="mailto:your.email@example.com"
        className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition"
      >
        your.email@example.com
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition"
      >
        GitHub
      </a>
    </div>
    <div className="text-xs text-muted-foreground mt-2">&copy; {new Date().getFullYear()} Your Name</div>
  </footer>
);

export default ContactSection;
