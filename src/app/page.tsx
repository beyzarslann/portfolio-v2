import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TerminalHero from "@/components/TerminalHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 p-8">
      {/* Hero */}
      <div className="flex items-start gap-12 w-full max-w-2xl">
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

      <About />
      <Experience />
    </main>
  );
}
