import React from "react";
import { Mic, Microscope, Globe, Feather } from "lucide-react";

const MODULES = [
  {
    id: "comm",
    icon: <Mic size={24} />,
    title: "Public Communication",
    subtitle: "Speaker & Host",
    description:
      "Former Invited Speaker for USC Biology Alumni and Program Host for CompSAt. I bridge technical complexity with clear, human-centric delivery.",
    stat: "E.I. High", // Referencing your "Emotional Intelligence" skill
  },
  {
    id: "write",
    icon: <Feather size={24} />,
    title: "Technical Writing",
    subtitle: "Journalism Background",
    description:
      "As a former Editor-in-Chief and Editorial Champion, I document code and systems with the same rigor I used for award-winning publications.",
    stat: "Published",
  },
  {
    id: "research",
    icon: <Microscope size={24} />,
    title: "Scientific Method",
    subtitle: "Research Background",
    description:
      "Co-led award-winning studies on marine biodiversity. I apply this same empirical, data-driven approach to debugging and optimization.",
    stat: "Awarded",
  },
];

export function BeyondTheCode() {
  return (
    <section className="py-24 px-6 bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Offline <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-gray-400">
            A system is only as good as its operator. My background in
            leadership, research, and communication ensures that I solve the{" "}
            <em>right</em> problems, not just the technical ones.
          </p>
        </div>

        {/* MODULE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MODULES.map((mod) => (
            <ModuleCard key={mod.id} {...mod} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MICRO-COMPONENT: MODULE CARD ---
function ModuleCard({ icon, title, subtitle, description, stat }: any) {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="px-2 py-1 rounded border border-white/10 text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-primary group-hover:border-primary/30 transition-colors">
          {stat}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
        {subtitle}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
