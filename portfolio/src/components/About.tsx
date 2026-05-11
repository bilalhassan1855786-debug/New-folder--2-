"use client";

const stats = [
  { value: "100+", label: "Projects Built" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "∞", label: "Automations Created" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-[#6C63FF] top-0 right-0 opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="tag">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Who <span className="gradient-text">Am I?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              I&apos;m a passionate <span className="text-white font-semibold">Full Stack & Frontend Developer</span> with
              deep expertise in building modern, high-performance web applications.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Beyond development, I specialize in <span className="text-[#00D4FF] font-semibold">n8n workflow automation</span> and{" "}
              <span className="text-[#6C63FF] font-semibold">AI-powered automations</span> — helping businesses eliminate
              repetitive tasks and scale intelligently.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              My goal is simple: build things that{" "}
              <span className="gradient-text font-semibold">actually work</span> — beautifully, efficiently, and intelligently.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "React", "Node.js", "n8n", "AI/LLMs", "Tailwind CSS", "Python"].map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                <div className="font-display text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
