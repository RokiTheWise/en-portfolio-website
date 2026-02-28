"use client";

import React from "react";
import { motion } from "framer-motion";
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
  SiSupabase,
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
  { icon: <SiSupabase />, name: "Supabse", tag: "Database" },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TheArsenal() {
  return (
    <section
      id="techstack"
      className="py-32 px-6 bg-background relative overflow-hidden"
    >
      {/* HEADER (Slides Up) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16 md:text-center"
      >
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
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* GROUP 1: CORE LANGUAGES */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-white flex items-center gap-3"
          >
            <span className="w-8 h-px bg-primary"></span>
            Core & Languages
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4"
          >
            {LANGUAGES.map((tech) => (
              <SimpleTechCard key={tech.name} {...tech} />
            ))}
          </motion.div>
        </div>

        {/* GROUP 2: ECOSYSTEM */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-white flex items-center gap-3 md:justify-end"
          >
            Ecosystem & Tools
            <span className="w-8 h-px bg-primary"></span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {ECOSYSTEM.map((tech) => (
              <SimpleTechCard key={tech.name} {...tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- MICRO-COMPONENT: ANIMATED CARD ---
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
    <motion.div
      variants={itemVariants}
      className="group relative h-24 bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:bg-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-4 flex items-center gap-4 h-full">
        {/* Icon */}
        <div className="text-3xl text-gray-500 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform">
          {icon}
        </div>

        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
            {name}
          </h4>
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider group-hover:text-primary/80 transition-colors">
            {tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
