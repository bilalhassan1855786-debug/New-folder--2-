import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
          BILAL HASSAN<span className="gradient-text">.</span>
        </div>
        <p className="text-white/30 text-sm font-body">
          © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/bilalhassan1855786-debug" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/bilal-hassan-160762397/" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:bilalhassan.1855786@gmail.com" className="text-white/30 hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
