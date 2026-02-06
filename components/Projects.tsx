import React from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiFramer,
  SiTinkercad,
} from "react-icons/si";

// --- DATA ---
const PROJECTS = [
  {
    id: 1,
    title: "Ace & Co. Accounting",
    category: "Professional Work",
    description:
      "A comprehensive web solution for an accounting firm, featuring client portals, automated scheduling, and a high-performance marketing front-end.",
    tech: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tw" />,
    ],
    image: "/ACE.png",
    status: "Live",

    href: "https://www.aceandco.org",

    githubUrl: null,

    isFeatured: true,
  },
  {
    id: 2,
    title: "Portfolio V1",
    category: "Personal Identity",
    description:
      "Designed to breakaway from standard portfolio templates, using a techonology-based aesthetic and immersive interactions to create a unique personal brand experience.",
    tech: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tw" />,
    ],
    image: "/PortfolioShot.png",
    status: "Live",

    href: "/",

    githubUrl: "https://github.com/RokiTheWise/en-portfolio-website",

    isFeatured: false,
  },
  {
    id: 3,
    title: "Majority Voter Circuit",
    category: "Electronics",
    description:
      "A digital logic circuit designed to implement a majority voter function using Tinkercad.",
    tech: [<SiTinkercad key="tinkercad" />],
    image: "/Circuit.png",
    status: "Live",

    href: "https://www.tinkercad.com/things/55OzGJMnEK3-3-input-majority-voter",

    githubUrl: null,

    isFeatured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative w-full">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Selected Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-primary">Deployments</span>
          </h2>
        </div>

        <a
          href="/archive"
          className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-colors pb-2" // Added pb-2 to align visually with the large text
        >
          <span className="text-sm font-mono uppercase tracking-wider">
            View Archive
          </span>
          <ArrowUpRight
            size={18}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

// --- UPDATED CARD COMPONENT ---
function ProjectCard({ project }: { project: any }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-surface border border-white/10 hover:border-primary/50 transition-all duration-500 ${
        project.isFeatured
          ? "md:col-span-2 aspect-[16/9] md:aspect-[21/9]"
          : "aspect-[4/3] md:aspect-[4/3]"
      }`}
    >
      {/* 1. CLICKABLE CARD LINK (Optional: Makes whole card clickable) */}
      <a
        href={project.href}
        target="_blank"
        className="absolute inset-0 z-20"
      />

      {/* 2. IMAGE BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
      </div>

      {/* 3. CONTENT OVERLAY */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start pointer-events-none">
        {/* BUTTONS (Now with Z-Index 30 to sit ABOVE the card link) */}
        <div className="absolute top-6 right-6 flex gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-30 pointer-events-auto">
          {/* CONDITIONAL GITHUB BUTTON */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:text-primary hover:border-primary transition-colors cursor-pointer"
            >
              <Github size={20} />
            </a>
          )}

          {/* LIVE LINK BUTTON */}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:text-primary hover:border-primary transition-colors cursor-pointer"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-primary text-xs font-mono uppercase tracking-wider font-bold">
              {project.status}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
            <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm md:text-base max-w-xl line-clamp-2 mb-4 group-hover:text-gray-200 transition-colors">
            {project.description}
          </p>

          <div className="flex gap-4 text-2xl text-gray-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            {project.tech.map((icon: any, idx: number) => (
              <div key={idx} className="hover:text-white transition-colors">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-3xl transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(255,195,0,0.05),transparent)] -translate-y-full animate-scan"></div>
      </div>
    </div>
  );
}
