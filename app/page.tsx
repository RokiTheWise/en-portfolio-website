import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TheArsenal } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { BeyondTheCode } from "@/components/BeyondTheCode";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-background">
      <Navbar />
      <Hero />
      <About />
      <TheArsenal />
      <Projects />
      <BeyondTheCode />
      <Contact />
    </main>
  );
}
