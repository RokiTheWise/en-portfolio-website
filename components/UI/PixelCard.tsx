"use client";
import React, { useRef, useEffect, useState, CSSProperties } from "react";
import { gsap } from "gsap";

interface PixelTransitionProps {
  firstContent: React.ReactNode | string;
  secondContent: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: CSSProperties;
}

const PixelCard: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 12, // Increased slightly for better resolution
  pixelColor = "#FFC300", // Default to your Brand Yellow
  animationStepDuration = 0.3,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);

  const firstContentRef = useRef<HTMLDivElement | null>(null);

  // 1. Swapped out delayedCall for a timeline reference
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel", "absolute", "hidden");
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    // Prevent re-triggering if clicking too fast on the same state
    if (isActive === activate) return;

    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(".pixel");
    if (!pixels.length) return;

    // 2. Kill the active timeline and any tweens if the user rapidly clicks
    gsap.killTweensOf(pixels);
    if (tlRef.current) tlRef.current.kill();

    // Reset pixels before starting the sequence
    gsap.set(pixels, { display: "none" });

    // 3. Create a strict sequential timeline
    tlRef.current = gsap.timeline();

    // PHASE 1: Cover the screen
    // Using 'amount' lets GSAP handle the timing distribution perfectly
    tlRef.current.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        amount: animationStepDuration,
        from: "random",
      },
    });

    // PHASE 2: The Swap
    // This ONLY fires when Phase 1 is 100% complete
    tlRef.current.call(() => {
      // Show/Hide Image
      activeEl.style.display = activate ? "block" : "none";
      activeEl.style.pointerEvents = activate ? "none" : "";

      // NEW: Hide/Show Text to prevent bleed-through while image lazy loads
      if (firstContentRef.current) {
        firstContentRef.current.style.display = activate ? "none" : "block";
      }
    });

    // PHASE 3: Reveal the content
    tlRef.current.to(pixels, {
      display: "none",
      duration: 0,
      stagger: {
        amount: animationStepDuration,
        from: "random",
      },
    });
  };

  return (
    <div
      ref={containerRef}
      // Added cursor-pointer so the mouse turns into a hand, implying it is clickable
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
      style={style}
      // Replaced hover events with a clean click toggle
      onClick={() => animatePixels(!isActive)}
      tabIndex={0}
      // Added keyboard support for accessibility (Enter/Space to trigger)
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          animatePixels(!isActive);
        }
      }}
    >
      {/* NEW: Added ref right here */}
      <div ref={firstContentRef} className="absolute inset-0 w-full h-full">
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: "none" }}
      >
        {secondContent}
      </div>

      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
};

export default PixelCard;
