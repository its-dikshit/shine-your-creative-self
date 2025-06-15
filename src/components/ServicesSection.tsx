
import React from "react";
import { Rocket } from "lucide-react";

const services = [
  {
    title: "Web Development",
    details: "Building fast and modern web applications using React, TypeScript, and the latest web technologies.",
  },
  {
    title: "UI/UX Design",
    details: "Designing user-friendly and visually appealing interfaces tailored for excellent user experience.",
  },
  {
    title: "Branding",
    details: "Creating unique brand identities to help you stand out in the digital world.",
  },
];

const ServicesSection = () => (
  <section id="services" className="max-w-4xl mx-auto my-20 px-6 py-10 bg-secondary rounded-2xl shadow-md animate-fade-in">
    <div className="flex items-center gap-3 mb-6">
      <Rocket className="text-primary" size={32} />
      <h2 className="text-3xl font-bold">Services</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div key={service.title} className="bg-card rounded-lg p-6 shadow transition hover:shadow-lg text-center">
          <div className="mb-3 text-primary font-semibold text-lg">{service.title}</div>
          <div className="text-muted-foreground">{service.details}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
