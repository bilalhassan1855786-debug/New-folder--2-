"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

const roles = ["Full Stack Developer", "Frontend Developer", "n8n Automation Expert", "AI Automation Specialist"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const current = roles[roleIndex];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(type, deleting ? 50 : 80);
    };

    type();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="glow-blob w-[600px] h-[600px] bg-[#6C63FF] -top-32 -left-32" />
      <div className="glow-blob w-[500px] h-[500px] bg-[#00D4FF] -bottom-20 -right-20" />
      <div className="glow-blob w-[300px] h-[300px] bg-[#FF6584] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{opacity: 0.06}} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="tag inline-block mb-6">
            👋 Available for work
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-text">BILAL HASSAN</span>
            <br />
            <span className="text-white/90">Developer &</span>
            <br />
            <span className="gradient-text-accent">Innovator</span>
          </h1>

          {/* Typewriter */}
          <div className="font-mono text-lg text-white/50 mb-8 h-7">
            <span className="text-[#00D4FF]">&gt;</span>{" "}
            <span ref={roleRef} className="text-white/80"></span>
            <span className="animate-pulse text-[#6C63FF]">|</span>
          </div>

          <p className="text-white/50 text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Crafting modern web experiences, intelligent automations, and AI-powered solutions
            that make businesses run smarter and faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10">
            <a href="/projects" className="btn-primary px-7 py-3 rounded-xl text-sm flex items-center gap-2">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="/Bilal_Hassan_CV.pdf" download="Bilal_Hassan_CV (3).pdf" className="btn-outline px-7 py-3 rounded-xl text-sm flex items-center gap-2">
              <Download size={16} /> Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a href="https://github.com/bilalhassan1855786-debug" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/bilal-hassan-160762397/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:bilalhassan.1855786@gmail.com"
              className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Avatar Card */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#6C63FF]/30 animate-spin" style={{animationDuration: "20s"}} />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#00D4FF]/20 animate-spin" style={{animationDuration: "15s", animationDirection: "reverse"}} />

            {/* Avatar — apni photo public/bilal.jpg mein save karein */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#111118] flex items-center justify-center overflow-hidden">
                <img
                  src="/bilal.jpg"
                  alt="Bilal Hassan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-4 glass-card rounded-xl px-3 py-2 text-xs font-mono animate-float">
              <span className="text-[#00D4FF]">⚡</span> n8n Expert
            </div>
            <div className="absolute -bottom-2 -left-4 glass-card rounded-xl px-3 py-2 text-xs font-mono animate-float" style={{animationDelay: "2s"}}>
              <span className="text-[#6C63FF]">🤖</span> AI Automation
            </div>
            <div className="absolute top-1/2 -right-8 glass-card rounded-xl px-3 py-2 text-xs font-mono animate-float" style={{animationDelay: "4s"}}>
              <span className="text-[#FF6584]">💻</span> Full Stack
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs font-mono">
        <span>scroll down</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}