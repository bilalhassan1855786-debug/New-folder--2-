import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";

const projects: {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  emoji: string;
}[] = [
  {
    title: "Bilal GPT",
    description:
      "A personalized AI-powered chat application built with Next.js, featuring a custom GPT interface with a welcome screen for authenticated users.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
    liveUrl: "https://bilal-gpt.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/bilal-gpt",
    gradient: "from-[#6C63FF] to-[#A78BFA]",
    emoji: "🤖",
  },
  {
    title: "Clinic Management System",
    description:
      "A complete clinic management platform with patient records, appointment scheduling, and doctor dashboards for streamlined healthcare operations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://clinic-fptv.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/clinic",
    gradient: "from-[#00D9B5] to-[#00D4FF]",
    emoji: "🏥",
  },
  {
    title: "Disease Predictor",
    description:
      "An AI-powered disease prediction app that analyzes user symptoms and provides probable diagnoses using machine learning models.",
    tags: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    liveUrl: "https://disease-predictor-beryl.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/disease-predictor",
    gradient: "from-[#FF6B6B] to-[#FFD93D]",
    emoji: "🩺",
  },
  {
    title: "Admin Panel",
    description:
      "A powerful admin dashboard with user management, analytics overview, role-based access control, and real-time data tables.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://admin-panel-five-sooty.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/admin-panel",
    gradient: "from-[#A78BFA] to-[#6C63FF]",
    emoji: "🛠️",
  },
  {
    title: "Attendance System",
    description:
      "A digital attendance tracking system for institutions, supporting student check-ins, reports, and real-time attendance monitoring.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://attendace-system-eta.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/attendace-system",
    gradient: "from-[#34D399] to-[#00D9B5]",
    emoji: "📋",
  },
  {
    title: "Luxury Cars Showroom",
    description:
      "A premium luxury car showcase platform featuring detailed listings for Lamborghini, Ferrari, Bugatti, and more with elegant UI and smooth browsing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://luxury-cars-5trq.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/luxury-cars",
    gradient: "from-[#FFD93D] to-[#FB923C]",
    emoji: "🚗",
  },
  {
    title: "Grocery Store",
    description:
      "A fully functional online grocery store with product listings, cart management, category filters, and a smooth checkout experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://grocery-store-weld-nine.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/grocery-store",
    gradient: "from-[#4ADE80] to-[#34D399]",
    emoji: "🛒",
  },
  {
    title: "Furniture Store",
    description:
      "A modern furniture e-commerce platform with stylish product pages, category browsing, shopping cart, and clean minimalist design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://furniture-store-ten-omega.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/furniture-store",
    gradient: "from-[#FB923C] to-[#FF6B6B]",
    emoji: "🛋️",
  },
  {
    title: "Gym Website",
    description:
      "A professional gym and fitness center website with membership plans, trainer profiles, class schedules, and a motivational landing page.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://gym-website-one-swart.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/gym-website",
    gradient: "from-[#F43F5E] to-[#FB923C]",
    emoji: "💪",
  },
  {
    title: "Prayer Time App",
    description:
      "A location-based Islamic prayer times app that displays accurate daily Namaz timings based on the user's city with a clean, minimal interface.",
    tags: ["Next.js", "TypeScript", "Prayer API", "Tailwind CSS"],
    liveUrl: "https://prayer-time-rust.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/prayer-time",
    gradient: "from-[#38BDF8] to-[#00D4FF]",
    emoji: "🕌",
  },
  {
    title: "To-Do App",
    description:
      "A clean and intuitive task manager with add, complete, and delete functionality — helping users stay organized and productive daily.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://to-do-hazel-sigma-85.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/to-do",
    gradient: "from-[#FACC15] to-[#FFD93D]",
    emoji: "✅",
  },
  {
    title: "JSON Formatter",
    description:
      "A developer utility tool that instantly formats, validates, and beautifies raw JSON data with syntax highlighting and error detection.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://json-formatter-chi-nine.vercel.app/",
    githubUrl: "https://github.com/bilalhassan1855786-debug/json-formatter",
    gradient: "from-[#818CF8] to-[#6C63FF]",
    emoji: "🧩",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute w-[500px] h-[500px] bg-[#6C63FF] rounded-full filter blur-[100px] opacity-10 -top-32 -right-32 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="inline-block font-mono text-xs px-4 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(108, 99, 255, 0.1)",
                border: "1px solid rgba(108, 99, 255, 0.2)",
                color: "#00D4FF",
              }}
            >
              My Work
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-2">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-white/40 mt-4 max-w-xl mx-auto font-body">
              A collection of things I&apos;ve built — from AI tools to e-commerce
              platforms and developer utilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Card Header */}
                <div
                  className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative z-10">{project.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 font-body">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 py-2 rounded-lg text-xs flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline px-4 py-2 rounded-lg text-xs flex items-center justify-center gap-1.5"
                    >
                      <Github size={13} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-white/40 font-body mb-4">
              Want to work together on something awesome?
            </p>
            <a
              href="/#contact"
              className="btn-primary px-8 py-3 rounded-xl text-sm inline-block"
            >
              Let&apos;s Connect 🤝
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}