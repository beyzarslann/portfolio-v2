import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TerminalHero from "@/components/TerminalHero";
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
      <a
        href="/BEYZA_ARSLAN_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce mt-6 inline-flex items-center gap-2 text-green-400 font-mono text-sm border border-green-400 rounded-full px-5 py-2 hover:bg-green-400 hover:text-black transition-colors"
      >
        {"↓ CV'mi Görüntüle"}
      </a>

      <About />
      <Experience />
      <Education />
      <Projects />
      <Certificates />
    </main>
  );
}
