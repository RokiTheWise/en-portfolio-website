import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiVercel,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { Coffee } from "lucide-react";

// --- DATA ---
const LANGUAGES = [
  { icon: <SiPython />, name: "Python", tag: "Scripting" },
  { icon: <Coffee />, name: "Java", tag: "OOP" },
  { icon: <SiTypescript />, name: "TypeScript", tag: "Safety" },
  { icon: <SiNodedotjs />, name: "Node.js", tag: "Runtime" },
];

const ECOSYSTEM = [
  { icon: <SiNextdotjs />, name: "Next.js", tag: "Fullstack" },
  { icon: <SiReact />, name: "React", tag: "Library" },
  { icon: <SiTailwindcss />, name: "Tailwind", tag: "Styling" },
  { icon: <SiVite />, name: "Vite", tag: "Build" },
  { icon: <SiGit />, name: "Git", tag: "Version" },
  { icon: <SiGithub />, name: "GitHub", tag: "Repo" },
  { icon: <SiVercel />, name: "Vercel", tag: "Deploy" },
];

export function TheArsenal() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-16 md:text-center">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
          <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Tech Stack
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The <span className="text-primary">Arsenal</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Beyond just web development, I leverage a robust set of tools for
          software engineering, version control, and deployment.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* GROUP 1: CORE LANGUAGES */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-px bg-primary"></span>
            Core & Languages
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {LANGUAGES.map((tech) => (
              <SimpleTechCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>

        {/* GROUP 2: ECOSYSTEM */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-3 md:justify-end">
            Ecosystem & Tools
            <span className="w-8 h-px bg-primary"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {ECOSYSTEM.map((tech) => (
              <SimpleTechCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- MICRO-COMPONENT: CLEAN CARD (No Spotlight) ---
function SimpleTechCard({
  icon,
  name,
  tag,
}: {
  icon: React.ReactNode;
  name: string;
  tag: string;
}) {
  return (
    <div className="group relative h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
      <div className="p-6 flex flex-col items-start h-full">
        {/* Icon */}
        <div className="text-3xl text-gray-400 group-hover:text-primary transition-colors duration-300 mb-4 group-hover:scale-110 transform origin-left">
          {icon}
        </div>

        <div className="mt-auto">
          <h4 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors">
            {name}
          </h4>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider group-hover:text-primary/80 transition-colors">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}
