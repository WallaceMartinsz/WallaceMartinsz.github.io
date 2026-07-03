import TechBadge from "@/components/TechBadge";

const experiences = [
    {
        period: "2026 - Atual",
        company: "Atacadista Nacional",
        role: "Desenvolvedor Back-end",
        technologies: ["Python", "TypeScript", "AWS", "Oracle"],
        description:
            "Desenvolvimento de serviços, integrações e rotinas para sistemas corporativos.",
    },
    {
        period: "2025 - 2025 | 3 meses",
        company: "Atacadista Nacional",
        role: "Desenvolvedor Web",
        technologies: ["Java", "Spring", "jQuery", "Oracle"],
        description:
            "Manutenção e evolução de aplicações web internas com foco em produtividade operacional.",
    },
    {
        period: "2025 - 2025 | 10 meses",
        company: "Microbox",
        role: "Assistente",
        technologies: ["Atendimento", "Suporte técnico", "Vendas"],
        description:
            "Atendimento, suporte e rotinas comerciais, fortalecendo comunicação e resolução de problemas.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">
                    Experiência
                </span>

                <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">
                    Trajetória focada em sistemas reais.
                </h2>
            </div>

            <div className="mt-12 grid gap-4">
                {experiences.map((experience) => (
                    <article
                        key={`${experience.company}-${experience.period}`}
                        className="grid gap-5 rounded-2xl border border-zinc-200 bg-white/75 p-6 shadow-sm shadow-zinc-200/60 transition hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-none dark:hover:border-zinc-700 md:grid-cols-[13rem_1fr]"
                    >
                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                            {experience.period}
                        </span>

                        <div>
                            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
                                {experience.role}
                            </h3>
                            <p className="mt-1 font-medium text-teal-700 dark:text-teal-300">
                                {experience.company}
                            </p>
                            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">
                                {experience.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => (
                                    <TechBadge key={tech} name={tech} />
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
