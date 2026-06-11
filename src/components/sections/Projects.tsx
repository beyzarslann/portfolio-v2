"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Öğrenci Bilgi Sistemi",
    description:
      "Bu proje, öğrencilerin kayıt işlemlerinin yönetildiği basit bir web uygulamasıdır. Sistem; öğrenci ekleme, listeleme, güncelleme ve ad,soyad,email,bölüm gibi temel bilgileri görüntüleme özelliklerine sahiptir.",
    tags: ["Java", "Spring Boot", "React", "Bootstrap", "MySQL"],
    github: "https://github.com/beyzarslann/ogrenci-bilgi-sistemi",
    website: null,
    image: "/projects/ogrenci-bilgi-sistemi.png",
  },
  {
    title: "Kuaför Randevu Sistemi",
    description:
      "Müşterilerin kuaför randevusu almasını ve kuaförlerin randevularını yönetmesini sağlayan platform.",
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "MySQL"],
    github: "https://github.com/beyzarslann/KuaforRandevuSistemi",
    website: null,
    image: "/projects/kuafor-randevu.png",
  },
  {
    title: "Alman Usulu Projesi",
    description:
      "Kullanıcılardan isim ve harcama bilgilerini alıp kişi başına düşen hesabı hesaplayan uygulama.",
    tags: ["Java", "Spring Boot", "Angular", "MySQL"],
    github: "https://github.com/beyzarslann/AlmanUsuluProjesi",
    website: "https://alman-usulu.netlify.app/",
    image: "/projects/alman-usulu.png",
  },
  {
    title: "Rick and Morty API",
    description:
      "Rick and Morty API projesi, karakterlerin listelendiği bir tabloyu içeren bir uygulamadır. React kullanılarak geliştirilmiş olup, API'den gerçek zamanlı veri çekimi ve tabloda pagination özellikleri barındırmaktadır.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/beyzarslann/rick-and-morty-api",
    website: "https://rick-and-morty-app-byz.netlify.app/",
    image: "/projects/rick-and-morty.png",
  },
  {
    title: "Hava Durumu",
    description:
      "OpenWeatherMap API entegrasyonu ile seçilen şehirler için güncel hava durumu bilgisi sunan uygulama.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/beyzarslann/TheWeather",
    website: "https://theweathert.netlify.app/",
    image: "/projects/hava-durumu.png",
  },
  {
    title: "Dünyanın Yedi Harikası",
    description: "HTML ve CSS ile kodlanmış statik bir websitesi.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/beyzarslann/DunyaninYediHarikasi",
    website: "https://dunyanin-yedi-harikasi.netlify.app/",
    image: "/projects/yedi-harika.png",
  },
  {
    title: "My Portfolio",
    description: "Kişisel portfolyo sitem !",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"],
    github: "https://github.com/beyzarslann/portfolio-v2",
    website: "https://www.beyzarslan.com.tr/",
    image: "/projects/portfolio.png",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-2xl mx-auto px-8 py-6">
      <h2 className="text-white font-mono text-lg mb-8">
        ~ &gt; <span className="text-green-400">projelerim</span>
      </h2>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {projects.map((project, i) => (
            <CarouselItem key={i} className="basis-4/5 sm:basis-1/2">
              <div className="bg-[#1e1e2e] rounded-xl overflow-hidden h-full flex flex-col">
                <div className="w-full h-32 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-white font-semibold text-sm">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-1">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-xs hover:underline"
                      >
                        → Website
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 text-xs hover:underline"
                    >
                      → GitHub
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white border-gray-700 hover:bg-gray-800" />
        <CarouselNext className="text-white border-gray-700 hover:bg-gray-800" />
      </Carousel>
    </section>
  );
}
