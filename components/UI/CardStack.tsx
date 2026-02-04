"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export const CardStack = () => {
  const [cards, setCards] = useState([
    { id: 1, src: "/PortPic1.jpg" },
    {
      id: 2,
      src: "/Chess.jpg",
    },
    {
      id: 3,
      src: "/Coding.jpg",
    },
    {
      id: 4,
      src: "Basketball.jpg",
    },
  ]);

  // AUTO-CYCLE LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((pv) => {
        const newCards = [...pv];
        const lastCard = newCards.pop();
        if (lastCard) newCards.unshift(lastCard);
        return newCards;
      });
    }, 2000); // Cycles every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 w-72 md:h-[450px] md:w-[350px]">
      {cards.map((card, index) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            src={card.src}
            index={index}
            total={cards.length}
            setCards={setCards}
          />
        );
      })}
    </div>
  );
};

const Card = ({ id, src, setCards, index, total }: any) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  // "isFront" is true if this card is the last one in the array (rendered on top)
  const isFront = index === total - 1;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv: any[]) => {
        const newCards = [...pv];
        const lastCard = newCards.pop();
        if (lastCard) newCards.unshift(lastCard);
        return newCards;
      });
    }
  };

  return (
    <motion.img
      src={src}
      alt="Hero Image"
      className="absolute h-96 w-72 md:h-[450px] md:w-[350px] origin-bottom rounded-3xl bg-surface border border-white/10 object-cover hover:cursor-grab active:cursor-grabbing shadow-2xl"
      style={{
        x,
        opacity,
        rotate,
        zIndex: index, // Ensure stacking order
        gridRow: 1,
        gridColumn: 1,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.95, // Scale down the cards in the back
        y: isFront ? 0 : 10, // Push back cards down slightly
      }}
      drag={isFront ? "x" : false} // Only drag the front card
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};
