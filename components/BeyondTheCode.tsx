"use client"; // Required for animations

import React from "react";
import { Mic, Microscope, Feather } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import PixelCard from "@/components/UI/PixelCard";
import DecryptedText from "@/components/UI/DecryptedText";

const MODULES = [
  {
    id: "comm",
    icon: <Mic size={24} />,
    title: "Public Communication",
    subtitle: "Speaker & Host",
    description:
      "Bridging technical complexity with clear, human-centric delivery on stage.",
    stat: "E.I. High",
    image: "/Host.jpeg",
  },
  {
    id: "write",
    icon: <Feather size={24} />,
    title: "Technical Writing",
    subtitle: "Journalism Background",
    description:
      "Documenting systems with the same rigor I used for award-winning publications.",
    stat: "Published",
    image: "/Journ.jpeg",
  },
  {
    id: "research",
    icon: <Microscope size={24} />,
    title: "Research Oriented",
    subtitle: "Research Background",
    description:
      "Applying empirical analysis from marine bio studies to code optimization.",
    stat: "Awarded",
    image: "/Research.jpeg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function BeyondTheCode() {
  return (
    <section
      id="beyondcoding"
      className="py-24 px-6 bg-background border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Offline <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-gray-400">
            A system is only as good as its operator.{" "}
            <span className="text-primary font-bold">Click or tap</span> to
            decrypt the human data files.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {MODULES.map((mod) => (
            <motion.div key={mod.id} variants={cardVariants}>
              <PixelCard
                className="h-[400px] md:h-[450px] w-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                gridSize={25}
                pixelColor="#FFC300"
                firstContent={
                  <div className="h-full w-full p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          {mod.icon}
                        </div>
                        <div className="px-2 py-1 rounded border border-white/10 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                          {mod.stat}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 h-8 flex items-center">
                        <DecryptedText
                          text={mod.title}
                          speed={80}
                          maxIterations={10}
                          className="text-white"
                          encryptedClassName="text-gray-500"
                          animateOn="view"
                        />
                      </h3>

                      <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
                        {mod.subtitle}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {mod.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-primary/50 text-xs font-mono uppercase">
                      <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                      <span>Click to Reveal File</span>
                    </div>
                  </div>
                }
                secondContent={
                  <div className="relative h-full w-full bg-black">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-grayscale-[50%] flex items-center justify-center group">
                      <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded border border-primary/50 text-primary font-mono text-xs uppercase tracking-widest">
                        // Evidence_File_0{MODULES.indexOf(mod) + 1}
                      </div>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
