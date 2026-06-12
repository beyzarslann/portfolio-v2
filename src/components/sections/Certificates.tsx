"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const certificates = [
  {
    title: "Beltek - Java Spring Boot Programlama Başarı Belgesi",
    description: "Haziran 2026  ↗",
    link: "/certificates/beltek-java.jpeg",
  },
  {
    title: "Ticar@ Yazılım Akademisi E-Devlet Onaylı Başarı Sertifikası",
    description: "Aralık 2024  ↗",
    link: "/certificates/ticaretakademi.jpg",
  },
  {
    title: "BTK Akademi & Google - Yapay Zeka Zirvesi 2024",
    description: "Aralık 2024  ↗",
    link: "/certificates/yapay-zeka-zirve.jpg",
  },
  {
    title: "Turkcell Geleceği Yazanlar - React 101 Başarı Belgesi",
    description: "Aralık 2023  ↗",
    link: "/certificates/react101.jpg",
  },
  {
    title: "BTK Akademi - Angular ile Web Programlama Katılım Sertifikası",
    description: "Kasım 2023  ↗",
    link: "/certificates/angular.jpg",
  },
  {
    title: "BTK Akademi - Git ve Github Eğitimi Katılım Sertifikası",
    description: "Ekim 2023  ↗",
    link: "/certificates/git-github.jpg",
  },
  {
    title: "Archi's Academy - Java Spring Boot Workshop",
    description: "Eylül 2023  ↗",
    link: "/certificates/java-springboot.jpg",
  },
  {
    title: "Kodluyoruz - Hi-Kod Front End Atölyesi",
    description: "Mayıs 2023  ↗",
    link: "/certificates/hikod.png",
  },
  {
    title: "Cumhuriyet Üniversitesi - Java ile Oyun Programlama Hackathonu",
    description: "Ocak 2023  ↗",
    link: "/certificates/hackhathon.jpeg",
  },
];

export default function Certificates() {
  return (
    <section className="w-full max-w-2xl mx-auto px-8 py-6">
      <h2 className="text-white font-mono text-lg mb-4">
        ~ &gt; <span className="text-green-400">sertifikalarım</span>
      </h2>
      <HoverEffect items={certificates} />
    </section>
  );
}
