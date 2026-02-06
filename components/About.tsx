"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Users,
  Languages,
  MapPin,
  Terminal,
} from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      {/* Background Decor (Static) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 1. SECTION HEADER (Slides Down) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
            <Terminal size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              Operator <span className="text-primary">Profile</span>
            </h2>
            <p className="text-gray-400 text-sm font-mono mt-1">
              // SYSTEM_ID: DEX_DEV_2026
            </p>
          </div>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT COLUMN: Bio & Stats */}
          <div className="md:col-span-2 space-y-6">
            {/* 2. BIO CARD (Slides in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                I found my path when I stopped looking for "the answer" and
                started building it. To me,{" "}
                <strong className="text-white">Computer Science</strong> became
                more than just a major; it became the toolkit I use to navigate
                the world.
              </p>

              <p className="text-gray-400 leading-relaxed mt-4">
                I operate on a{" "}
                <strong className="text-primary">
                  "Philosophy of Balance,"
                </strong>{" "}
                maintaining an equilibrium between{" "}
                <strong className="text-white"> rigorous academics</strong>,
                <strong className="text-white"> leisure</strong>,{" "}
                <strong className="text-white">leadership roles</strong>, and
                <strong className="text-white"> personal growth</strong>.
              </p>

              <p className="text-gray-400 leading-relaxed mt-4">
                My goal is to bridge the gap between technology,{" "}
                <strong className="text-white">
                  environmental sustainability
                </strong>
                , and <strong className="text-white">youth empowerment</strong>.
                Eventually creating software that reduces friction in people's
                daily lives.
              </p>
            </motion.div>

            {/* 3. STAT CARDS (Staggered Pop-up) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                label="Year Level"
                value="2nd Year College"
                color="bg-blue-500/10 text-blue-400 border-blue-500/20"
                delay={0.4}
              />

              <StatCard
                label="Performance"
                value="3.72 QPI"
                color="bg-primary/10 text-primary border-primary/20"
                delay={0.5}
              />

              <StatCard
                label="Status"
                value="Open for Internships"
                color="bg-green-500/10 text-green-400 border-green-500/20"
                delay={0.6}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: The Specs (Staggered Slide from Right) */}
          <div className="space-y-4">
            <InfoBlock
              icon={<GraduationCap size={18} />}
              label="Education"
              value="BS Computer Science"
              sub="Ateneo de Manila University"
              delay={0.3}
            />
            <InfoBlock
              icon={<Trophy size={18} />}
              label="Scholarships"
              value="Jose P. Rizal & EO-Ayala Scholar"
              sub="Full University & Corporate Merit Scholarship"
              delay={0.4}
            />
            <InfoBlock
              icon={<Users size={18} />}
              label="Leadership"
              value="SOSE Sanggunian (HR)"
              sub="Laro Loyola (Secretariat)"
              delay={0.5}
            />
            <InfoBlock
              icon={<Languages size={18} />}
              label="Languages"
              value="English, Tagalog"
              sub="French (Learning)"
              delay={0.6}
            />
            <InfoBlock
              icon={<MapPin size={18} />}
              label="Location"
              value="Quezon City"
              sub="Metro Manila, PH"
              delay={0.7}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon,
  label,
  value,
  sub,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
    >
      <div className="mt-1 text-gray-400 shrink-0">{icon}</div>
      <div className="min-w-0">
        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
          {label}
        </h4>
        <p className="text-white font-semibold leading-tight mb-0.5">{value}</p>
        <p className="text-gray-400 text-sm leading-tight">{sub}</p>
      </div>
    </motion.div>
  );
}

function StatCard({
  label,
  value,
  color,
  delay,
}: {
  label: string;
  value: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className={`p-4 rounded-xl border ${color} flex flex-col justify-center`}
    >
      <h4 className="text-xs font-mono uppercase tracking-wider opacity-70 mb-1">
        {label}
      </h4>
      <p className="font-bold text-base md:text-lg">{value}</p>
    </motion.div>
  );
}
