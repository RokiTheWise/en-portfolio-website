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
  // 1. Main Content starts HIDDEN (true) so we don't see it yet
  const [isLoading, setIsLoading] = useState(true);

  // 2. Preloader starts OFF (false) to prevent the "Double Door" glitch on return visits
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check session storage immediately
    const hasBooted = sessionStorage.getItem("hasBooted");

    if (hasBooted) {
      // RETURNING VISITOR: Unlock site immediately, keep Preloader OFF
      setIsLoading(false);
    } else {
      // NEW VISITOR: Turn Preloader ON
      setShowPreloader(true);
    }
  }, []);

  // 3. Callback: Runs when the Preloader text sequence is done
  const handleBootComplete = () => {
    // A. Reveal the website (Render it behind the black doors)
    setIsLoading(false);

    // B. Trigger the Preloader "Exit" animation (Open the doors)
    setShowPreloader(false);

    // C. Mark as booted
    sessionStorage.setItem("hasBooted", "true");
  };

  // 4. NEW: Handle Hash Scroll (e.g., coming from /archive to /#projects)
  useEffect(() => {
    // Only attempt to scroll once the loading is finished and content is visible
    if (!isLoading) {
      const hash = window.location.hash;

      if (hash) {
        // Wait a tiny bit (100ms) for the DOM to fully paint the new content
        setTimeout(() => {
          const id = hash.replace("#", ""); // Remove the '#' char
          const element = document.getElementById(id);

          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [isLoading]); // Runs whenever isLoading changes to false

  return (
    <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-background">
      {/* PRELOADER SECTION */}
      <AnimatePresence mode="wait">
        {showPreloader && <Preloader onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* MAIN WEBSITE */}
      {/* Only visible when isLoading is false */}
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
