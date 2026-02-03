"use client";
import { useState, useEffect } from "react";
import DecryptedText from "./DecryptedText";

const descriptions = [
  "innovate for sustainability.",
  "bridge tech and people.",
  "create modern solutions for modern problems.",
  "build the future.",
  "design with empathy.",
  "code with passion.",
  "turn ideas into reality.",
];

export default function TextRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-[200px]">
      {" "}
      <strong className="text-white">
        <DecryptedText
          text={descriptions[index]}
          animateOn="view"
          revealDirection="center"
          speed={100}
          maxIterations={20}
          characters="10"
          className="text-white font-bold"
          parentClassName="inline-block"
          encryptedClassName="text-primary"
          key={index}
        />
      </strong>
    </span>
  );
}
