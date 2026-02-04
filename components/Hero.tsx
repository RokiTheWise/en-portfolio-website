import { ArrowDown } from "lucide-react";
import Image from "next/image";
import PixelSnow from "@/components/UI/PixelSnow";
import TextRotator from "@/components/UI/TextRotator";
import TechCard from "@/components/UI/TechCard";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        <PixelSnow
          color="#FFC300"
          variant="square"
          flakeSize={0.02}
          speed={1.5}
          density={0.4}
          direction={135}
        />
      </div>

      {/* 2. GRADIENT */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          {/* --- MOBILE ONLY AVATAR (UPDATED TO SQUIRCLE) --- 
              md:hidden ensures this vanishes on desktop.
          */}
          <div className="md:hidden relative w-28 h-28 mb-8 group">
            {/* 1. The Glow Behind */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl animate-pulse"></div>

            {/* 2. The Container (Rounded Square) */}
            <div className="relative w-full h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl">
              {/* Image with "Tech" styling (Dimmed + Scanlines) */}
              <Image
                src="/PortPic1.jpg"
                alt="Dexter"
                fill
                className="object-cover brightness-90 sepia-[.2] group-hover:sepia-0 group-hover:brightness-100 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40"></div>
            </div>
          </div>

          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Dexter Jethro <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-yellow-600">
              Enriquez
            </span>
          </h1>

          <div className="text-lg text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0">
            A Computer Science student who aims to <TextRotator />
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a
              href="#projects"
              className="h-12 px-8 rounded-lg bg-primary text-background font-bold hover:bg-[#FFD54F] transition-all transform hover:scale-105 flex items-center"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="h-12 px-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white font-medium transition-all flex items-center backdrop-blur-sm"
            >
              About Me
            </a>
          </div>
        </div>

        {/* RIGHT: TECH CARD (Desktop Only) */}
        <div className="hidden md:flex justify-end relative">
          <TechCard avatarUrl="/PortPic1.jpg" themeColor="#FFC300" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
