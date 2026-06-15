"use client";

import { CvButton } from "@/components/CvButton";
import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import TerminalHero from "@/components/TerminalHero";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen flex flex-col items-center p-4 pt-12 sm:p-8 sm:pt-16">
      {/* Hero */}
      <div className="w-full flex justify-center">
        <motion.div
          className="w-full max-w-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TerminalHero />
        </motion.div>
      </div>

      {/* CV Butonu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      >
        <CvButton />
      </motion.div>

      {[About, Experience, Education, Projects, Certificates, Skills].map(
        (Section, i) => (
          <motion.div
            key={i}
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Section />
          </motion.div>
        ),
      )}
    </main>
  );
}
