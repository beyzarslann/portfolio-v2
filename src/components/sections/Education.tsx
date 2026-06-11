const education = [
  {
    school: "Sivas Cumhuriyet Üniversitesi",
    department: "Bilgisayar Mühendisliği",
    date: "2019 – 2023",
    gpa: "GPA: 2.95",
  },
];

export default function Education() {
  return (
    <section className="w-full max-w-2xl mx-auto px-8 py-6">
      <h2 className="text-white font-mono text-lg mb-8">
        ~ &gt; <span className="text-green-400">eğitim geçmişi</span>
      </h2>

      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-700" />
        <div className="flex flex-col gap-8">
          {education.map((edu, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-green-400 border-2 border-[#0a0a0a]" />
              <p className="text-gray-500 text-xs font-mono mb-1">{edu.date}</p>
              <h3 className="text-white font-semibold text-sm">{edu.school}</h3>
              <p className="text-gray-400 text-sm">{edu.department}</p>
              <p className="text-gray-500 text-xs font-mono mt-1">{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
