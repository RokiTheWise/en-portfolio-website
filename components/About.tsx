import React from "react";
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
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-12 flex items-center gap-4">
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
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT: THE BIO (Text) */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-lg">
                I found my path when I stopped looking for "the answer" and
                started building it. To me,{" "}
                <strong className="text-white">Computer Science</strong> became
                more than just a major; it became the the toolkit I use to
                navigate the world.
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
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <StatCard
                label="Year Level"
                value="2nd Year College"
                color="bg-blue-500/10 text-blue-400 border-blue-500/20"
              />

              <StatCard
                label="Performance" //
                value="3.72 Cumulative QPI" //
                color="bg-primary/10 text-primary border-primary/20"
              />

              <StatCard
                label="Status"
                value="Open for Internships"
                color="bg-green-500/10 text-green-400 border-green-500/20"
              />
            </div>
          </div>

          {/* RIGHT: THE SPECS (List) */}
          <div className="space-y-4">
            <InfoBlock
              icon={<GraduationCap size={18} />}
              label="Education"
              value="BS Computer Science"
              sub="Ateneo de Manila University"
            />
            <InfoBlock
              icon={<Trophy size={18} />}
              label="Scholarships"
              value="Jose P. Rizal & EO-Ayala Scholar"
              sub="Full University & Corporate Merit Scholarship"
            />
            <InfoBlock
              icon={<Users size={18} />}
              label="Leadership"
              value="SOSE Sanggunian (HR)"
              sub="Laro Loyola (Secretariat)"
            />
            <InfoBlock
              icon={<Languages size={18} />}
              label="Languages"
              value="English, Tagalog"
              sub="French (Learning)"
            />
            <InfoBlock
              icon={<MapPin size={18} />}
              label="Location"
              value="Quezon City"
              sub="Metro Manila, PH"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- MICRO-COMPONENTS ---

function InfoBlock({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
      <div className="mt-1 text-gray-400">{icon}</div>
      <div>
        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
          {label}
        </h4>
        <p className="text-white font-semibold">{value}</p>
        <p className="text-gray-400 text-sm">{sub}</p>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className={`p-4 rounded-xl border ${color} flex flex-col justify-center`}
    >
      <h4 className="text-xs font-mono uppercase tracking-wider opacity-70 mb-1">
        {label}
      </h4>
      <p className="font-bold text-lg">{value}</p>
    </div>
  );
}
