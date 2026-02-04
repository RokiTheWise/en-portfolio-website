import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TheArsenal } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TheArsenal />
      <Projects />
      <About />
    </>
  );
}
