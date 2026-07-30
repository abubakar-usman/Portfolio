import { Backdrop } from "@/components/site/Backdrop";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About, Experience } from "@/components/site/AboutExperience";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Backdrop />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
