# 🚀 Portfolio - Next.js + TypeScript + Tailwind CSS

Modern, dark-themed developer portfolio with glassmorphism design.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Syne (Display) + DM Sans (Body) + JetBrains Mono

## Features
- ✅ Dark theme with gradient accents (Purple + Cyan)
- ✅ Typewriter animation (Hero section)
- ✅ Glassmorphism cards with hover effects
- ✅ Animated skill bars
- ✅ Projects page (add your project links easily)
- ✅ Contact form
- ✅ Fully responsive (Mobile + Desktop)
- ✅ Smooth scroll & micro-interactions

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## Customize

### Add Your Info:
- `src/components/Hero.tsx` → Name, social links
- `src/components/About.tsx` → Your bio & stats
- `src/components/Skills.tsx` → Your skills & levels
- `src/components/Contact.tsx` → Email, phone, location
- `src/app/projects/page.tsx` → Add your project links here!

### Add a Project:
In `src/app/projects/page.tsx`, add to the `projects` array:
```ts
{
  title: "Your Project Name",
  description: "Short description...",
  tags: ["Next.js", "TypeScript"],
  liveUrl: "https://yourproject.vercel.app",
  githubUrl: "https://github.com/you/repo",
  gradient: "from-[#6C63FF] to-[#00D4FF]",
  emoji: "🚀",
}
```

## Deploy to Vercel
```bash
npm install -g vercel
vercel
```
