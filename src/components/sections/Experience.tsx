type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  link: { label: string; url: string } | null;
};

const experiences: Experience[] = [
  {
    title: "Front End Developer",
    company: "AreonX (Magician of Meta Kripto Varlık Alım Satım Platformu A.Ş)",
    date: "Nisan – Haziran 2026 · Proje Bazlı",
    description:
      "Next.js ve React kullanarak kripto borsa platformunun front end geliştirmesinde ve fashionx.site sitesinin tasarım & kodlama süreçlerinde görev aldım.",
    link: { label: "fashionx.site", url: "https://fashionx.site/" },
  },
  {
    title: "Bilgisayar Mühendisliği Stajyeri",
    company: "PTT A.Ş – Bilişim Daire Başkanlığı",
    date: "Temmuz – Ağustos 2023 · Yaz Stajı",
    description:
      "Java ve Angular ile bir web uygulamasının geliştirilmesinde görev aldım.",
    link: {
      label: "https://github.com/beyzarslann/AlmanUsuluProjesi",
      url: "https://github.com/beyzarslann/AlmanUsuluProjesi",
    },
  },
  {
    title: "Bilgisayar Mühendisliği Stajyeri",
    company:
      "T.C. Cumhurbaşkanlığı İletişim Başkanlığı – Bilgi İşlem Daire Başkanlığı",
    date: "Temmuz – Ağustos 2022 · Yaz Stajı",
    description:
      "Web tasarımı alanında çalıştım ve donanım hakkında kendimi geliştirdim.",
    link: null,
  },
];

export default function Experience() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-8 py-6">
      <h2 className="text-foreground font-mono text-lg mb-4">
        ~ &gt;{" "}
        <span className="text-green-500 dark:text-green-400">iş deneyimi</span>
      </h2>

      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-green-400 border-2 border-white dark:border-[#0a0a0a]" />
              <p className="text-gray-500 dark:text-gray-500 text-xs font-mono mb-1">
                {exp.date}
              </p>
              <h3 className="text-foreground font-semibold text-sm">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {exp.company}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
              {exp.link && (
                <a
                  href={exp.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 dark:text-green-400 text-xs hover:underline mt-1 inline-block"
                >
                  → {exp.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
