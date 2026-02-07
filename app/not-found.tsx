"use client";

import { Navbar } from "@/components/Navbar";
import { useTransition } from "@/context/TransitionContext";

export default function NotFound() {
  const { triggerTransition } = useTransition();

  return (
    <main className="min-h-screen bg-background text-white flex flex-col relative overflow-hidden">
      <Navbar /> {/* Background Glitch Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#ffffff_3px)] opacity-10 animate-scan" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10 relative">
        {/* BIG 404 TEXT (Background Layer) */}
        <h1 className="text-[120px] md:text-[250px] font-bold text-white/5 leading-none select-none font-mono absolute pointer-events-none">
          404
        </h1>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-pulse tracking-widest">
            SYSTEM FAILURE
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8 font-mono text-sm md:text-base">
            The requested directory could not be located. Signal lost in the
            void.
          </p>

          {/* 3. THE BUTTON (Triggers Door Close) */}
          <button
            onClick={() => triggerTransition("/")}
            className="px-8 py-3 rounded-full bg-primary text-background font-bold hover:scale-105 hover:bg-[#FFD54F] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,193,7,0.3)]"
          >
            Return to Base
          </button>
        </div>
      </div>
    </main>
  );
}
