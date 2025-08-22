import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Import your store demo content
import StoreDemoContent from "./StoreDemoContent";

const projects = {
  "luxe-store": {
    title: "LUXE Fashion Store",
    description:
      "A modern, responsive e-commerce frontend built with React & Tailwind CSS. Designed for performance, conversion, and elegance.",
    role: "Frontend Development, UI/UX Design",
    tech: "React, Vite, Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#", // Replace later
    githubUrl: "#",
  },
  "ecommerce-app": {
    title: "E-Commerce Mobile App",
    description:
      "A cross-platform mobile app with cart, payments, and offline sync using React Native and Firebase.",
    role: "Mobile Development, Backend Integration",
    tech: "React Native, Firebase, Stripe",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  "seo-dashboard": {
    title: "SEO Dashboard",
    description:
      "A real-time analytics dashboard for tracking keyword rankings, backlinks, and organic traffic.",
    role: "Full-Stack Development",
    tech: "React, Tailwind, Vite, REST API",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  "adsense-guide": {
    title: "AdSense Monetization Guide",
    description:
      "A high-traffic content site earning $3k/month through strategic SEO and AdSense optimization.",
    role: "SEO Strategy, AdSense Optimization, Content Planning",
    tech: "SEO, Google AdSense, WordPress",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-2xl text-gray-400">Project not found</h2>
        <Link
          to="/#projects"
          className="text-primary hover:underline mt-4 inline-block"
        >
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
      <Link
        to="/#projects"
        className="text-primary hover:underline mb-6 inline-block text-sm"
      >
        ← Back to Projects
      </Link>

      <article data-aos="fade-up">
        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg mb-6">{project.description}</p>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Role</h3>
            <p className="text-gray-300">{project.role}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Technologies
            </h3>
            <p className="text-gray-300 font-mono text-sm">{project.tech}</p>
          </div>
        </div>

        {/* Store Demo Content (Only for luxe-store) */}
        {slug === "luxe-store" && <StoreDemoContent />}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-6 py-2 rounded font-semibold hover:bg-primary-dark transition"
          >
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary px-6 py-2 rounded font-semibold hover:bg-primary hover:text-black transition"
          >
            View Code
          </a>
        </div>
      </article>
    </section>
  );
};

export default ProjectPage;
