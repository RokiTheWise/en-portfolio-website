"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TheArsenal } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { BeyondTheCode } from "@/components/BeyondTheCode";
import { Contact } from "@/components/Contact";
import Preloader from "@/components/UI/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-background">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <TheArsenal />
          <Projects />
          <BeyondTheCode />
          <Contact />
        </>
      )}
    </main>
  );
}
