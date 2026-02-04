import React from "react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import GridMotion from "@/components/UI/GridMotion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full h-[600px] overflow-hidden bg-background flex items-center justify-center"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <GridMotion
          items={["Open to Work", "Let's Build", "Contact Me", "System Ready"]}
          gradientColor="#000"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] z-10 pointer-events-none"></div>

      <div className="relative z-20 max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-mono font-medium text-primary mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
          System Status: Online
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
          Ready to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50">
            Initialize?
          </span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
          Whether you have a project in mind or just want to discuss the latest
          in tech, my inbox is open for high-bandwidth communication.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* PRIMARY BUTTON: EMAIL */}
          <a
            href="mailto:dexterjethro.enriquez@gmail.com"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-background transition-all duration-300 hover:w-56 hover:bg-[#FFD54F]"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="flex items-center gap-2">
              <Mail size={18} />
              <span>Transmit Message</span>
            </span>
          </a>

          {/* SECONDARY BUTTONS: SOCIALS */}
          <div className="flex items-center gap-4">
            <SocialBtn
              href="https://linkedin.com/in/dexter-jethro-enriquez-982a062ab"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialBtn
              href="https://github.com/rokithewise"
              icon={<Github size={20} />}
              label="GitHub"
            />
          </div>
        </div>
      </div>

      {/* FOOTER COPYRIGHT */}
      <div className="absolute bottom-6 w-full text-center z-20">
        <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">
          © 2026 Dexter Jethro Enriquez // All Systems Nominal
        </p>
      </div>
    </section>
  );
}

// --- MICRO-COMPONENT: SOCIAL BUTTON ---
function SocialBtn({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
