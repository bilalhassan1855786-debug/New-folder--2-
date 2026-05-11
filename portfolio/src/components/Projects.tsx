"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bilal GPT",
    description:
      "A personalized AI-powered chat application built with Next.js, featuring a custom GPT interface with a welcome screen for authenticated users.",
    tags: ["Next.js", "TypeScript", "Tailwind", "OpenAI"],
    color: "#6C63FF",
    emoji: "🤖",
    link: "https://bilal-gpt.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/bilal-gpt",
    status: "Live",
  },
  {
    id: 2,
    title: "Clinic Management System",
    description:
      "A complete clinic management platform with patient records, appointment scheduling, and doctor dashboards for streamlined healthcare operations.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    color: "#00D9B5",
    emoji: "🏥",
    link: "https://clinic-fptv.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/clinic",
    status: "Live",
  },
  {
    id: 3,
    title: "Disease Predictor",
    description:
      "An AI-powered disease prediction app that analyzes user symptoms and provides probable diagnoses using machine learning models.",
    tags: ["Next.js", "TypeScript", "AI/ML", "Tailwind"],
    color: "#FF6B6B",
    emoji: "🩺",
    link: "https://disease-predictor-beryl.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/disease-predictor",
    status: "Live",
  },
  {
    id: 4,
    title: "Admin Panel",
    description:
      "A powerful admin dashboard with user management, analytics overview, role-based access control, and real-time data tables.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    color: "#A78BFA",
    emoji: "🛠️",
    link: "https://admin-panel-five-sooty.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/admin-panel",
    status: "Live",
  },
  {
    id: 5,
    title: "Attendance System",
    description:
      "A digital attendance tracking system for institutions, supporting student check-ins, reports, and real-time attendance monitoring.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    color: "#34D399",
    emoji: "📋",
    link: "https://attendace-system-eta.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/attendace-system",
    status: "Live",
  },
  {
    id: 6,
    title: "Luxury Cars Showroom",
    description:
      "A premium luxury car showcase platform featuring detailed listings for Lamborghini, Ferrari, Bugatti, and more — with elegant UI and smooth browsing.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    color: "#FFD93D",
    emoji: "🚗",
    link: "https://luxury-cars-5trq.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/luxury-cars",
    status: "Live",
  },
  {
    id: 7,
    title: "Grocery Store",
    description:
      "A fully functional online grocery store with product listings, cart management, category filters, and a smooth checkout experience.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    color: "#4ADE80",
    emoji: "🛒",
    link: "https://grocery-store-weld-nine.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/grocery-store",
    status: "Live",
  },
  {
    id: 8,
    title: "Furniture Store",
    description:
      "A modern furniture e-commerce platform with stylish product pages, category browsing, shopping cart, and clean minimalist design.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    color: "#FB923C",
    emoji: "🛋️",
    link: "https://furniture-store-ten-omega.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/furniture-store",
    status: "Live",
  },
  {
    id: 9,
    title: "Gym Website",
    description:
      "A professional gym and fitness center website with membership plans, trainer profiles, class schedules, and a motivational landing page.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    color: "#F43F5E",
    emoji: "💪",
    link: "https://gym-website-one-swart.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/gym-website",
    status: "Live",
  },
  {
    id: 10,
    title: "Prayer Time App",
    description:
      "A location-based Islamic prayer times app that displays accurate daily Namaz timings based on the user's city with a clean, minimal interface.",
    tags: ["Next.js", "TypeScript", "Prayer API", "Tailwind"],
    color: "#38BDF8",
    emoji: "🕌",
    link: "https://prayer-time-rust.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/prayer-time",
    status: "Live",
  },
  {
    id: 11,
    title: "To-Do App",
    description:
      "A clean and intuitive task manager with add, complete, and delete functionality — helping users stay organized and productive daily.",
    tags: ["Next.js", "TypeScript", "Tailwind", "LocalStorage"],
    color: "#FACC15",
    emoji: "✅",
    link: "https://to-do-hazel-sigma-85.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/to-do",
    status: "Live",
  },
  {
    id: 12,
    title: "JSON Formatter",
    description:
      "A developer utility tool that instantly formats, validates, and beautifies raw JSON data with syntax highlighting and error detection.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    color: "#818CF8",
    emoji: "🧩",
    link: "https://json-formatter-chi-nine.vercel.app/",
    github: "https://github.com/bilalhassan1855786-debug/json-formatter",
    status: "Live",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div
        className="orb w-96 h-96 bg-[#FF6B6B] top-20 right-0"
        style={{ opacity: 0.05 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6C63FF] font-mono text-sm tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A collection of projects I&apos;ve built — from AI tools to e-commerce platforms and developer utilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl overflow-hidden card-hover group"
            >
              {/* Card Header */}
              <div
                className="h-36 relative flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  borderBottom: `1px solid ${project.color}20`,
                }}
              >
                <span className="text-5xl">{project.emoji}</span>

                {/* Status Badge */}
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor:
                      project.status === "Live"
                        ? "rgba(0, 217, 181, 0.1)"
                        : "rgba(255, 211, 61, 0.1)",
                    color:
                      project.status === "Live" ? "#00D9B5" : "#FFD93D",
                    border: `1px solid ${
                      project.status === "Live"
                        ? "rgba(0, 217, 181, 0.3)"
                        : "rgba(255, 211, 61, 0.3)"
                    }`,
                  }}
                >
                  {project.status === "Live" ? "● Live" : "⟳ Building"}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag text-gray-400 text-xs px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1E1E2E]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: project.color }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors ml-auto"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/bilalhassan1855786-debug"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}