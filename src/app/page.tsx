import TerminalHero from "@/components/TerminalHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center pt-16 p-8">
      <div className="flex items-center gap-12">
        <TerminalHero />
        <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/profil.jpeg"
            alt="Beyza Arslan"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
