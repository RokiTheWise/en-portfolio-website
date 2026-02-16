"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";
import {
  Menu,
  X,
  Github,
  Linkedin,
  FileText,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const { triggerTransition } = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- THE LOGIC ---
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMobileMenuOpen(false);

    // CASE A: We are currently on the Home Page
    if (pathname === "/") {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // CASE B: We are on the Archive Page (or any other page)
    // We want the cool Door Animation to play before leaving
    e.preventDefault();
    triggerTransition(href);
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "TechStack", href: "/#techstack" },
    { name: "Projects", href: "/#projects" },
    { name: "Beyond Coding", href: "/#beyondcoding" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            className="group flex items-center gap-2"
          >
            <div className="relative h-9 w-9 group-hover:rotate-12 transition-transform duration-300">
              <Image
                src="/LogoLightTrans.png"
                alt="Dexter Jethro Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block text-lg">
              Dex<span className="text-primary">Dev</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="relative text-sm font-medium text-gray-300 hover:text-primary transition-colors font-mono group"
              >
                <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                  &lt;
                </span>
                {link.name}
                <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                  &gt;
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-white/10 pr-5">
              <SocialIcon
                href="https://github.com/RokiTheWise"
                icon={<Github size={18} />}
              />
              <SocialIcon
                href="https://www.linkedin.com/in/dexter-jethro-enriquez-982a062ab/"
                icon={<Linkedin size={18} />}
              />
              <SocialIcon
                href="https://www.instagram.com/dexjet_enriquez/"
                icon={<Instagram size={18} />}
              />
              <SocialIcon
                href="https://www.facebook.com/dexterjethro.enriquez/"
                icon={<Facebook size={18} />}
              />
              <SocialIcon
                href="mailto:dexterjethro.enriquez@gmail.com"
                icon={<Mail size={18} />}
              />
            </div>

            <a
              href="Enriquez_DexterJethro_CV.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary hover:text-black hover:border-primary transition-all group"
            >
              <FileText
                size={14}
                className="text-primary group-hover:text-black transition-colors"
              />
              Resume
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {/* MOBILE LINKS also need the handler */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)} // <--- Attach Handler
                  className="text-2xl font-bold text-white hover:text-primary transition-colors font-mono"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-white/10 my-4" />

              <div className="flex justify-center gap-6">
                <SocialIconMobile
                  href="https://github.com/RokiTheWise"
                  icon={<Github size={24} />}
                />
                <SocialIconMobile
                  href="https://www.linkedin.com/in/dexter-jethro-enriquez-982a062ab/"
                  icon={<Linkedin size={24} />}
                />
                <SocialIconMobile
                  href="https://www.instagram.com/dexjet_enriquez/"
                  icon={<Instagram size={24} />}
                />
                <SocialIconMobile
                  href="https://www.facebook.com/dexterjethro.enriquez/"
                  icon={<Facebook size={24} />}
                />
              </div>

              <a
                href="/resume.pdf"
                className="w-full py-4 mt-4 rounded-xl bg-primary text-background font-bold text-lg hover:bg-[#FFD54F] transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- HELPER COMPONENTS ---
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white hover:scale-110 transition-all"
    >
      {icon}
    </a>
  );
}

function SocialIconMobile({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}
