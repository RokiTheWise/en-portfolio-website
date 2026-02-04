"use client";
import React, { useEffect, useRef, useCallback, useMemo } from "react";

// ANIMATION CONFIG
const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180,
} as const;

// Helper Functions
const clamp = (v: number, min = 0, max = 100): number =>
  Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number =>
  parseFloat(v.toFixed(precision));
const adjust = (
  v: number,
  fMin: number,
  fMax: number,
  tMin: number,
  tMax: number,
): number => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

interface TechCardProps {
  avatarUrl?: string;
  themeColor?: string; // e.g. "#FFC300"
  enableTilt?: boolean;
  className?: string;
}

interface TiltEngine {
  setImmediate: (x: number, y: number) => void;
  setTarget: (x: number, y: number) => void;
  toCenter: () => void;
  beginInitial: (durationMs: number) => void;
  getCurrent: () => { x: number; y: number; tx: number; ty: number };
  cancel: () => void;
}

const TechCardComponent: React.FC<TechCardProps> = ({
  avatarUrl = "/me.png",
  themeColor = "#FFC300",
  enableTilt = true,
  className = "",
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const tiltEngine = useMemo<TiltEngine | null>(() => {
    if (!enableTilt) return null;
    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number): void => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;
      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties: Record<string, string> = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };
      for (const [k, v] of Object.entries(properties))
        wrap.style.setProperty(k, v);
    };

    const step = (ts: number): void => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      const tau = ts < initialUntil ? 0.6 : 0.14;
      const k = 1 - Math.exp(-dt / tau);
      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;
      setVarsFromXY(currentX, currentY);
      const stillFar =
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05;
      if (stillFar || document.hasFocus()) rafId = requestAnimationFrame(step);
      else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = (): void => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number): void {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number): void {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter(): void {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs: number): void {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent(): { x: number; y: number; tx: number; ty: number } {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel(): void {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      },
    };
  }, [enableTilt]);

  // --- EVENT HANDLERS ---
  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!shellRef.current || !tiltEngine) return;
      const rect = shellRef.current.getBoundingClientRect();
      tiltEngine.setTarget(e.clientX - rect.left, e.clientY - rect.top);
    },
    [tiltEngine],
  );

  const handlePointerEnter = useCallback(
    (e: PointerEvent) => {
      if (!shellRef.current || !tiltEngine) return;
      shellRef.current.classList.add("active");
      tiltEngine.setTarget(
        e.clientX - shellRef.current.getBoundingClientRect().left,
        e.clientY - shellRef.current.getBoundingClientRect().top,
      );
    },
    [tiltEngine],
  );

  const handlePointerLeave = useCallback(() => {
    if (!shellRef.current || !tiltEngine) return;
    tiltEngine.toCenter();
  }, [tiltEngine]);

  useEffect(() => {
    if (!enableTilt || !tiltEngine || !shellRef.current) return;
    const shell = shellRef.current;
    shell.addEventListener("pointerenter", handlePointerMove);
    shell.addEventListener("pointermove", handlePointerMove);
    shell.addEventListener("pointerleave", handlePointerLeave);

    const initialX =
      (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    tiltEngine.setImmediate(initialX, ANIMATION_CONFIG.INITIAL_Y_OFFSET);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener("pointerenter", handlePointerMove);
      shell.removeEventListener("pointermove", handlePointerMove);
      shell.removeEventListener("pointerleave", handlePointerLeave);
      tiltEngine.cancel();
    };
  }, [enableTilt, tiltEngine, handlePointerMove, handlePointerLeave]);

  // --- STYLES ---
  const cardRadius = "20px";

  const scanlineStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))",
    backgroundSize: "100% 4px",
    pointerEvents: "none",
    zIndex: 10,
    opacity: 0.5, // Reduced opacity so color shows through
    mixBlendMode: "overlay",
    borderRadius: cardRadius,
  };

  const glassStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)", // Lighter glass
    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1)",
    borderRadius: cardRadius,
    pointerEvents: "none",
    zIndex: 5,
  };

  // VIGNETTE: Darkens the edges so the photo blends into the card
  const vignetteStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
    borderRadius: cardRadius,
    pointerEvents: "none",
    zIndex: 4,
  };

  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`}
      style={
        {
          perspective: "1000px",
          transformStyle: "preserve-3d",
          "--theme-color": themeColor,
          "--pointer-x": "50%",
          "--pointer-y": "50%",
          "--pointer-from-center": "0",
        } as React.CSSProperties
      }
    >
      <div
        ref={shellRef}
        className="relative transition-transform duration-200 ease-out group"
        style={{
          width: "320px",
          height: "420px",
          borderRadius: cardRadius,
          transform: "rotateX(var(--rotate-y)) rotateY(var(--rotate-x))",
          backgroundColor: "#0a0a0a",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: `
            0 20px 40px -10px rgba(0,0,0,0.8), 
            0 0 0 1px rgba(0,0,0,1),
            0 0 30px -20px var(--theme-color) 
          `,
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ borderRadius: cardRadius }}
        >
          <img
            src={avatarUrl}
            alt="Profile"
            className="w-full h-full object-cover brightness-75 saturate-75 transition-all duration-500 group-hover:brightness-110 group-hover:saturate-100 group-hover:scale-105"
          />
        </div>

        {/* Layer 2: Vignette (Blends edges) */}
        <div style={vignetteStyle} />

        {/* Layer 3: Scanlines */}
        <div style={scanlineStyle} />

        {/* Layer 4: Matte Glass Sheen */}
        <div style={glassStyle} />

        {/* Layer 5: Dynamic Border Highlight */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: cardRadius,
            zIndex: 20,
            opacity: "var(--pointer-from-center)",
            transition: "opacity 0.3s",
            background: `radial-gradient(
              circle at var(--pointer-x) var(--pointer-y), 
              rgba(255, 255, 255, 0.1) 0%, 
              transparent 40%
            )`,
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />

        {/* Layer 6: Tech Decorations */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full z-30 animate-pulse" />
        <div className="absolute top-4 right-4 text-[10px] font-mono text-white/60 z-30 tracking-widest">
          SYS.ONLINE
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-[2px] bg-primary z-30" />
      </div>
    </div>
  );
};

export default TechCardComponent;
