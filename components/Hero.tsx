import { ArrowDown } from "lucide-react";
import Image from "next/image";
import PixelSnow from "@/components/UI/PixelSnow";
import TextRotator from "@/components/UI/TextRotator";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 1. BACKGROUND ANIMATION */}
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

      {/* 2. GRADIENT FADE */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
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
            A Computer Science student who aims to {/* THE DYNAMIC PART */}
            <TextRotator />
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

        {/* RIGHT: THE PHOTO FRAME */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>

          <div className="relative w-72 h-80 md:w-80 md:h-96 bg-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:border-primary/50 group overflow-hidden">
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-20"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-20"></div>

            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>

            <Image
              src="/PortPic.png"
              alt="Dexter Jethro Enriquez"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
