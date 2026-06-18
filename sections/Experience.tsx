const experiences = [
    {
        period: "2026 - Atual",
        company: "Atacadista Nacional",
        role: "Desenvolvedor Back-end",
        tech: "Python, Typescript, AWS, Oracle",
    },
    {
        period: "2025 - 2025 | 3 meses",
        company: "Atacadista Nacional",
        role: "Desenvolvedor Web",
        tech: "Java, Spring, JSP, jQuery, JPA, Oracle",
    },
    {
        period: "2025 - 2025 | 10 meses",
        company: "Microbox",
        role: "Assistente",
        tech: "Vendas, Atendimento ao Cliente, Suporte Técnico",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="max-w-5xl mx-auto px-6 py-24"
        >
            <span className="text-sm text-zinc-800 uppercase tracking-widest">
                ... / Professional Experience
            </span>
            
            <h2 className="text-4xl font-bold mb-12 mt-4">
                Experiência Profissional
            </h2>

            <div className="relative border-l border-zinc-700 ml-4">
                {experiences.map((experience) => (
                    <div
                        key={`${experience.company}-${experience.period}`}
                        className="mb-12 ml-8"
                    >
                        <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px]" />

                        <span className="text-sm text-zinc-500">
                            {experience.period}
                        </span>

                        <h3 className="text-xl font-semibold mt-2">
                            {experience.company}
                        </h3>

                        <p className="text-zinc-300 mt-1">
                            {experience.role}
                        </p>

                        <p className="text-zinc-500 mt-2">
                            {experience.tech}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}