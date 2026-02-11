"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useTransition } from "@/context/TransitionContext";

// --- THE ARCHIVE DATABASE ---
const ARCHIVE = [
  {
    year: "2026",
    project: "LogiSketch | Visualize Boolean Logic",
    madeAt: "Electronics & Web Development",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://logisketch.djenriquez.dev/",
    github: "https://github.com/RokiTheWise/CircuitBuilder",
    image: "/LogiSketch.png",
  },
  {
    year: "2026",
    project: "Ace & Co. Accounting",
    madeAt: "Ace & Co.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://www.aceandco.org",
    github: null,
    image: "/ACE.png",
  },
  {
    year: "2026",
    project: "Portfolio V1",
    madeAt: "Personal Identity",
    tech: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    link: "/",
    github: "https://github.com/RokiTheWise/en-portfolio-website.git",
    image: "/PortfolioShot.png",
  },
  {
    year: "2026",
    project: "Majority Voter Circuit",
    madeAt: "Electronics",
    tech: ["Tinkercad", "Digital Logic", "Combinational Circuits"],
    link: "https://www.tinkercad.com/things/55OzGJMnEK3-3-input-majority-voter",
    github: null,
    image: "/Circuit.png",
  },
];

// --- ANIMATION CONFIG ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function Archive() {
  const { triggerTransition } = useTransition(); // <--- 2. USE HOOK

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-32">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* 3. UPDATED BACK BUTTON */}
          <button
            onClick={() => triggerTransition("/#projects")} // Triggers door close, then goes to home projects
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6 text-sm font-mono uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Return to Base
          </button>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Project <span className="text-primary">Archive</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg">
            A complete log of deployed systems, experiments, and academic
            coursework.
          </p>
        </motion.div>

        {/* DATABASE TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-500 text-xs font-mono uppercase tracking-wider">
                <th className="py-4 pr-4">Year</th>
                <th className="py-4 px-4">Project</th>
                <th className="py-4 px-4 hidden md:table-cell">Context</th>
                <th className="py-4 px-4 hidden sm:table-cell">Built With</th>
                <th className="py-4 pl-4 text-right">Link</th>
              </tr>
            </thead>

            {/* ANIMATED BODY */}
            <motion.tbody
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {ARCHIVE.map((item, idx) => (
                <motion.tr
                  key={idx}
                  variants={rowVariants}
                  className="group border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  {/* Year */}
                  <td className="py-4 pr-4 align-top text-gray-500 font-mono text-sm pt-6">
                    {item.year}
                  </td>

                  {/* Project Name & Image */}
                  <td className="py-4 px-4 align-top">
                    <div className="flex items-start gap-4">
                      <div className="relative w-24 h-14 shrink-0 rounded-lg overflow-hidden border border-white/10 hidden sm:block">
                        <Image
                          src={item.image}
                          alt={item.project}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div>
                        <span className="font-bold text-lg text-white group-hover:text-primary transition-colors block">
                          {item.project}
                        </span>
                        <div className="md:hidden text-xs text-gray-500 mt-1">
                          {item.madeAt}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Context */}
                  <td className="py-4 px-4 align-top hidden md:table-cell text-gray-400 text-sm pt-6">
                    {item.madeAt}
                  </td>

                  {/* Tech Stack */}
                  <td className="py-4 px-4 align-top hidden sm:table-cell pt-6">
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-primary/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Links */}
                  <td className="py-4 pl-4 align-top text-right pt-6">
                    <div className="flex items-center justify-end gap-3">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors"
                          title="View Source Code"
                        >
                          <Github size={18} />
                        </a>
                      )}

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary transition-colors"
                          title="Open Deployment"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
