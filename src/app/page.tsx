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
    <main className="min-h-screen flex flex-col items-center p-4 pt-12 sm:p-8 sm:pt-16">
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-2xl">
        <div className="w-full md:flex-1">
          <TerminalHero />
        </div>
        <div className="w-44 h-44 rounded-2xl overflow-hidden shrink-0 mx-auto md:mx-0">
          <Image
            src="/profil.jpeg"
            alt="Beyza Arslan"
            width={176}
            height={176}
            className="w-full h-full object-cover "
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
