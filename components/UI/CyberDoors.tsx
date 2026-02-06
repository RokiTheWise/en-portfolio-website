"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTransition } from "@/context/TransitionContext";

export default function CyberDoors() {
  const { isTransitioning } = useTransition();

  const leftPanelVariants = {
    closed: { x: "0%" },
    open: { x: "-100%" },
  };

  const rightPanelVariants = {
    closed: { x: "0%" },
    open: { x: "100%" },
  };

  return (
    <div className="fixed inset-0 z-[9999] flex pointer-events-none">
      {/* LEFT PANEL */}
      <motion.div
        initial="closed"
        animate={isTransitioning ? "closed" : "open"}
        variants={leftPanelVariants}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-1/2 h-full bg-[#050505] border-r border-white/10 flex items-center justify-end pointer-events-auto"
      >
        {/* The "Seam" Line (Glowing Edge) */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-primary/50 shadow-[0_0_15px_rgba(255,195,0,0.5)]" />

        {/* Decorative Diagonal Lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:20px_20px]" />
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        initial="closed"
        animate={isTransitioning ? "closed" : "open"}
        variants={rightPanelVariants}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-1/2 h-full bg-[#050505] border-l border-white/10 flex items-center justify-start pointer-events-auto"
      >
        {/* The "Seam" Line (Glowing Edge) */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-primary/50 shadow-[0_0_15px_rgba(255,195,0,0.5)]" />

        {/* Decorative Diagonal Lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:20px_20px]" />
      </motion.div>
    </div>
  );
}
