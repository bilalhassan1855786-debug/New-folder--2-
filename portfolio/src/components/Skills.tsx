"use client";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    color: "#6C63FF",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    color: "#00D4FF",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    title: "n8n Automation",
    icon: "⚡",
    color: "#FF6584",
    skills: [
      { name: "n8n Workflows", level: 95 },
      { name: "API Integrations", level: 92 },
      { name: "Webhook Automation", level: 90 },
      { name: "Data Pipelines", level: 85 },
      { name: "Error Handling", level: 88 },
    ],
  },
  {
    title: "AI Automation",
    icon: "🤖",
    color: "#A78BFA",
    skills: [
      { name: "LLM Integration (GPT/Claude)", level: 90 },
      { name: "AI Workflow Design", level: 88 },
      { name: "Prompt Engineering", level: 92 },
      { name: "Langchain", level: 78 },
      { name: "AI Chatbots", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] bg-[#00D4FF] bottom-0 left-0 opacity-8" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tag">My Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            What I <span className="gradient-text">Do Best</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            A blend of development, automation, and AI expertise to build the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70 text-sm font-body">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <h3 className="font-display font-bold text-xl mb-6 text-white">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "VS Code", "Git & GitHub", "Vercel", "Docker", "Postman",
              "Figma", "OpenAI API", "Anthropic API", "Supabase", "Firebase",
              "n8n Cloud", "Make.com", "Zapier", "Linux", "ChatGPT",
            ].map((tool) => (
              <span key={tool} className="tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
