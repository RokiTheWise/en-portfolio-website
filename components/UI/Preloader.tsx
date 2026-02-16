"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState("INITIALIZING PORTFOLIO...");

  useEffect(() => {
    const timer1 = setTimeout(() => setText("VERIFYING BIOMETRICS..."), 800);
    const timer2 = setTimeout(() => setText("ACCESS GRANTED"), 1600);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex pointer-events-none">
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-1/2 h-full bg-[#050505] border-r border-white/10 flex items-center justify-end"
      >
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-primary/50 shadow-[0_0_15px_rgba(255,195,0,0.5)]" />

        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:20px_20px]" />
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-1/2 h-full bg-[#050505] border-l border-white/10 flex items-center justify-start"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-primary/50 shadow-[0_0_15px_rgba(255,195,0,0.5)]" />

        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:20px_20px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-50 text-white font-mono font-bold tracking-widest text-xl gap-6"
      >
        <div className="relative w-24 h-24 animate-pulse">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <Image
            src="/LogoLightTrans.png"
            alt="System Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="h-6 flex items-center justify-center overflow-hidden">
          <span className="flex items-center gap-3 text-sm md:text-base">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {text}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
