import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import TerminalHero from "@/components/TerminalHero";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-16 p-8">
      {/* Hero */}
      <div className="flex items-center gap-12 w-full max-w-2xl">
        <TerminalHero />
        <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/profil.jpeg"
            alt="Beyza Arslan"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CV Butonu */}
      <a href="/BEYZA_ARSLAN_CV.pdf" target="_blank" rel="noopener noreferrer">
        <ShimmerButton className="mt-6">{"↓ CV'mi Görüntüle"}</ShimmerButton>
      </a>

      <About />
      <Experience />
      <Education />
      <Projects />
      <Certificates />
      <Skills />
    </main>
  );
}
