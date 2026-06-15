"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const lines = [
  { command: "whoami", output: "Beyza Arslan — Junior Web Developer" },
  { command: "location", output: "Ankara, Türkiye" },
  { command: "status", output: "Yeni fırsatlar arıyorum 👀" },
];

export default function TerminalHero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [typingOutput, setTypingOutput] = useState(false);
  const [currentOutputChar, setCurrentOutputChar] = useState(0);
  const [completedLines, setCompletedLines] = useState<typeof lines>([]);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];

    // Komutu yaz
    if (!typingOutput && currentChar < line.command.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), 80);
      return () => clearTimeout(t);
    }

    // Komut bitti, output'a geç
    if (!typingOutput && currentChar === line.command.length) {
      const t = setTimeout(() => setTypingOutput(true), 300);
      return () => clearTimeout(t);
    }

    // Output'u yaz
    if (typingOutput && currentOutputChar < line.output.length) {
      const t = setTimeout(() => setCurrentOutputChar((c) => c + 1), 40);
      return () => clearTimeout(t);
    }

    // Output bitti, sonraki satıra geç
    if (typingOutput && currentOutputChar === line.output.length) {
      const t = setTimeout(() => {
        setCompletedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setTypingOutput(false);
        setCurrentOutputChar(0);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, typingOutput, currentOutputChar]);

  return (
    <div className="bg-gray-100 dark:bg-[#1e1e2e] rounded-xl w-full max-w-xl font-mono text-sm border border-gray-400 dark:border-white/10 overflow-hidden">
      {/* Başlık barı */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-200 dark:bg-[#2a2a3d] border-b border-gray-400 dark:border-white/10">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-xs">
          /home/b-arslan/cv
        </span>
        <ThemeToggle />
      </div>
      {/* İçerik */}
      <div className="p-6 flex gap-4 items-start">
        <div className="flex-1">
          {completedLines.map((line, i) => (
            <div key={i} className="mb-2">
              <p className="text-green-500 dark:text-green-400">
                ~ &gt; {line.command}
              </p>
              <p className="text-gray-600 dark:text-gray-300 ml-2">
                {line.output}
              </p>
            </div>
          ))}
          {currentLine < lines.length && (
            <div className="mb-2">
              <p className="text-green-500 dark:text-green-400">
                ~ &gt; {lines[currentLine].command.slice(0, currentChar)}
                {!typingOutput && <span className="animate-pulse">▋</span>}
              </p>
              {typingOutput && (
                <p className="text-gray-600 dark:text-gray-300 ml-2">
                  {lines[currentLine].output.slice(0, currentOutputChar)}
                  <span className="animate-pulse">▋</span>
                </p>
              )}
            </div>
          )}
        </div>
        <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
          <img
            src="/profil.jpeg"
            alt="Beyza Arslan"
            className="w-full h-full object-cover object-[50%_0%]"
          />
        </div>
      </div>
    </div>
  );
}
