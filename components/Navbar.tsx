"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Github,
  Linkedin,
  FileText,
  Terminal,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to toggle the glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "TechStack", href: "#techstack" },
    { name: "Projects", href: "#projects" },
    { name: "Beyond Coding", href: "#beyondcoding" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* 1. LOGO */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative h-10 w-10 group-hover:rotate-12 transition-transform duration-300">
              <Image
                src="/LogoLightTrans.png"
                alt="Dexter Jethro Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block">
              Dex<span className="text-primary">Dev</span>
            </span>
          </Link>

          {/* 2. DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-primary transition-colors font-mono group"
              >
                {/* The < > decoration effect on hover */}
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

          {/* 3. SOCIALS & RESUME */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-white/10 pr-4 mr-1">
              <a
                href="https://github.com/RokiTheWise"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dexter-jethro-enriquez-982a062ab/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/dexjet_enriquez/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/dexterjethro.enriquez/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:dexterjethro.enriquez@gmail.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded bg-surface border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/5 hover:border-primary/50 transition-all group"
            >
              <FileText
                size={14}
                className="text-primary group-hover:scale-110 transition-transform"
              />
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-white/10 my-4" />
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/RokiTheWise"
                  className="text-gray-400 hover:text-primary"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dexter-jethro-enriquez-982a062ab/"
                  className="text-gray-400 hover:text-primary"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/dexjet_enriquez/"
                  className="text-gray-400 hover:text-primary"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/dexterjethro.enriquez/"
                  className="text-gray-400 hover:text-primary"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="mailto:dexterjethro.enriquez@gmail.com"
                  className="text-gray-400 hover:text-primary"
                >
                  <Facebook size={24} />
                </a>
              </div>
              <button className="w-full py-4 mt-4 rounded-xl bg-primary text-background font-bold text-lg">
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
