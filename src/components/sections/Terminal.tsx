"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Line = { type: "input" | "output"; text: string };

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    "kullanılabilir komutlar:",
    "  help        bu menüyü göster",
    "  whoami      kısa tanıtım",
    "  about       hakkımda",
    "  skills      kullandığım teknolojiler",
    "  projects    projeler",
    "  contact     iletişim",
    "  cv          CV'yi aç",
    "  theme       tema değiştir",
    "  clear       ekranı temizle",
  ],
  whoami: () => ["Beyza Arslan — Junior Web Developer, Ankara"],
  about: () => [
    "Cumhuriyet Üniversitesi Bilgisayar Mühendisliği mezunuyum.",
    "Next.js, React, TypeScript ile web geliştiriyorum.",
  ],
  skills: () => [
    "HTML · CSS · JavaScript · TypeScript",
    "React · Next.js · Tailwind CSS",
    "Java · Spring Boot · SQL · Git",
  ],
  projects: () => [
    "→ fashionx.site       tasarım & kodlama",
    "→ Öğrenci Bilgi Sistemi",
    "→ Kuaför Randevu Sistemi",
    "→ Alman Usulü Projesi",
  ],
  contact: () => [
    "github    github.com/beyzarslann",
    "linkedin  linkedin.com/in/beyzarslan",
    "email     beyzarslan@gmail.com",
    "telefon   0507 883 3693",
  ],
  cv: () => ["CV açılıyor..."],
};

export default function TerminalSection() {
  const [lines, setLines] = useState<Line[]>([
    {
      type: "output",
      text: "Bir komut dene: help · whoami · projects · contact · cv",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: "input", text: cmd }];

    if (trimmed === "clear") {
      setLines([
        {
          type: "output",
          text: "Bir komut dene: help · whoami · projects · contact · cv",
        },
      ]);
      return;
    }

    if (trimmed === "cv") {
      window.open("/BEYZA_ARSLAN_CV.pdf", "_blank");
      newLines.push({ type: "output", text: "CV açılıyor..." });
      setLines(newLines);
      return;
    }

    if (trimmed === "theme") {
      const current = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      const next = current === "dark" ? "light" : "dark";
      setTheme(next);
      newLines.push({ type: "output", text: `Tema değişti: ${next}` });
      setLines(newLines);
      return;
    }

    const fn = COMMANDS[trimmed];
    if (fn) {
      fn().forEach((t) => newLines.push({ type: "output", text: t }));
    } else {
      newLines.push({
        type: "output",
        text: `komut bulunamadı: ${trimmed}. 'help' yaz.`,
      });
    }

    setLines(newLines);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-8 py-6">
      <h2 className="text-foreground font-mono text-lg mb-4">
        ~ &gt;{" "}
        <span className="text-green-500 dark:text-green-400">terminal</span>
      </h2>

      <div className="bg-gray-100 dark:bg-[#1e1e2e] border border-gray-300 dark:border-white/10 rounded-xl p-4 font-mono text-sm max-h-72 overflow-y-auto">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            {line.type === "input" ? (
              <p>
                <span className="text-green-500 dark:text-green-400">
                  beyza@cv:~$
                </span>{" "}
                <span className="text-foreground">{line.text}</span>
              </p>
            ) : (
              <p className="text-gray-600 dark:text-gray-400 whitespace-pre">
                {line.text}
              </p>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-500 dark:text-green-400">
            beyza@cv:~$
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input.trim()) {
                handleCommand(input);
                setInput("");
              }
            }}
            className="bg-transparent outline-none text-foreground flex-1 caret-green-400"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </section>
  );
}
