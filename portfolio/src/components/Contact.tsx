"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, MessageSquare, Phone } from "lucide-react";

// 🔑 Apni EmailJS keys yahan daalo
const EMAILJS_SERVICE_ID = "service_37ycrh9";
const EMAILJS_TEMPLATE_ID = "template_5lflbn8";
const EMAILJS_PUBLIC_KEY = "5e7ljvU_I3TKrmmBk";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Bilal Hassan",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-[#FF6584] top-10 right-10 opacity-8" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tag">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-[#6C63FF]" />
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">Email</div>
                <div className="text-white font-body">bilalhassan.1855786@gmail.com</div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 border border-[#00D4FF]/30 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-[#00D4FF]" />
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">WhatsApp</div>
                <div className="text-white font-body">+92 3213174055</div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6584]/20 border border-[#FF6584]/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-[#FF6584]" />
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">Location</div>
                <div className="text-white font-body">Chiniot, Pakistan 🇵🇰</div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/20 border border-[#A78BFA]/30 flex items-center justify-center flex-shrink-0">
                <MessageSquare size={20} className="text-[#A78BFA]" />
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">Availability</div>
                <div className="text-white font-body">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Available for freelance work
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-white/50 text-sm block mb-2 font-body">Your Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-body text-sm"
              />
            </div>
            <div>
              <label className="text-white/50 text-sm block mb-2 font-body">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-body text-sm"
              />
            </div>
            <div>
              <label className="text-white/50 text-sm block mb-2 font-body">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-body text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" && (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </>
              )}
              {status === "sent" && "✅ Message Sent!"}
              {status === "error" && "❌ Failed. Try again."}
              {status === "idle" && (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}