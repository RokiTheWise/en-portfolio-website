"use client";
import { useEffect, useRef, FC, ReactNode } from "react";
import { gsap } from "gsap";

interface GridMotionProps {
  items?: (string | ReactNode)[];
  gradientColor?: string;
}

const GridMotion: FC<GridMotionProps> = ({
  items = [],
  gradientColor = "black",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef<number>(0); // Default to 0 to prevent SSR mismatch

  // Ensure we always have 28 items to fill the grid (4 rows x 7 cols)
  const totalItems = 28;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Project ${index + 1}`,
  );
  const combinedItems =
    items.length > 0
      ? [...items, ...defaultItems].slice(0, totalItems)
      : defaultItems;

  useEffect(() => {
    // Initialize mouse position on client side
    mouseXRef.current = window.innerWidth / 2;

    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent): void => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = (): void => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden bg-background">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[2]">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-7"
              style={{ willChange: "transform, filter" }}
              ref={(el) => {
                if (el) rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: 7 }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-white/5 border border-white/5 flex items-center justify-center text-white text-xl font-mono">
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0 opacity-60 hover:opacity-100 transition-opacity duration-500"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className="p-4 text-center z-[1] opacity-50">
                          {content}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridMotion;
