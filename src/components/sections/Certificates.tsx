"use client";

import { useState } from "react";

const certificates = [
  {
    title: "Beltek - Java Spring Boot Programlama Başarı Belgesi",
    date: "Haziran 2026",
    file: "/certificates/beltek-java.jpeg",
  },
  {
    title: "Ticar@ Yazılım Akademisi E-Devlet Onaylı Başarı Sertifikası",
    date: "Aralık 2024",
    file: "/certificates/ticaretakademi.jpg",
  },
  {
    title: "BTK Akademi & Google - Yapay Zeka Zirvesi 2024",
    date: "Aralık 2024",
    file: "/certificates/yapay-zeka-zirve.jpg",
  },
  {
    title: "Turkcell Geleceği Yazanlar - React 101 Başarı Belgesi",
    date: "Aralık 2023",
    file: "/certificates/react101.jpg",
  },
  {
    title: "BTK Akademi - Angular ile Web Programlama Katılım Sertifikası",
    date: "Kasım 2023",
    file: "/certificates/angular.jpg",
  },
  {
    title: "BTK Akademi - Git ve Github Eğitimi Katılım Sertifikası",
    date: "Ekim 2023",
    file: "/certificates/git-github.jpg",
  },
  {
    title: "Archi's Academy - Java Spring Boot Workshop",
    date: "Eylül 2023",
    file: "/certificates/java-springboot.jpg",
  },
  {
    title: "Kodluyoruz - Hi-Kod Front End Atölyesi",
    date: "Mayıs 2023",
    file: "/certificates/hikod.png",
  },
  {
    title: "Cumhuriyet Üniversitesi - Java ile Oyun Programlama Hackathonu",
    date: "Ocak 2023",
    file: "/certificates/hackhathon.jpeg",
  },
];

const chunks = (arr: typeof certificates, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

export default function Certificates() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const groups = chunks(certificates, 3);

  const changePage = (newPage: number) => {
    const dir = newPage > page ? "right" : "left";
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setPage(newPage);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-8 py-6">
      <h2 className="text-white font-mono text-lg mb-8">
        ~ &gt; <span className="text-green-400">sertifikalarım</span>
      </h2>

      <div
        className="flex flex-col gap-3 transition-all duration-250"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateX(${direction === "right" ? "-20px" : "20px"})`
            : "translateX(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        {groups[page].map((cert, i) => (
          <a
            key={i}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#1e1e2e] rounded-xl px-5 py-4 hover:bg-[#2a2a3e] transition-colors group"
          >
            <div>
              <p className="text-white text-sm font-medium group-hover:text-green-400 transition-colors">
                {cert.title}
              </p>
              <p className="text-gray-500 text-xs font-mono mt-1">
                {cert.date}
              </p>
            </div>
            <span className="text-green-400 text-lg ml-4">↗</span>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => changePage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="text-gray-400 hover:text-white disabled:opacity-30 font-mono text-sm"
        >
          ← prev
        </button>
        <span className="text-gray-500 font-mono text-xs">
          {page + 1} / {groups.length}
        </span>
        <button
          onClick={() => changePage(Math.min(groups.length - 1, page + 1))}
          disabled={page === groups.length - 1}
          className="text-gray-400 hover:text-white disabled:opacity-30 font-mono text-sm"
        >
          next →
        </button>
      </div>
    </section>
  );
}
