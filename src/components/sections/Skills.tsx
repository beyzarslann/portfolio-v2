import { Marquee } from "@/components/ui/marquee";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
  "SQL",
  "Git",
  "Figma",
];

export default function Skills() {
  return (
    <section className="w-full max-w-2xl mx-auto px-8 py-6">
      <h2 className="text-white font-mono text-lg mb-8">
        ~ &gt; <span className="text-green-400">teknik beceriler</span>
      </h2>

      <Marquee pauseOnHover className="[--duration:20s]">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="mx-4 px-4 py-2 rounded-full bg-[#1e1e2e] text-gray-300 text-sm font-mono border border-gray-700"
          >
            {skill}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
