"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface TransitionContextType {
  isTransitioning: boolean;
  triggerTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined,
);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const triggerTransition = (href: string) => {
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(href);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 800);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context)
    throw new Error("useTransition must be used within a TransitionProvider");
  return context;
}
