export default function About() {
    const skills = {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        backend: ["Node.js", "Python", "Java", "PostgreSQL"],
        devops: ["Docker", "Kubernetes", "CI/CD", "AWS"],
        database: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]
    };

    return (
        <section
            id="about"
            className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        >
            <img src="/animado.png" alt="About me" className="w-full h-full rounded-3xl bg-zinc-200 object-cover" />

            <div>
                <span className="text-sm text-zinc-800 uppercase tracking-widest">
                    ... / About me
                </span>

                <h2 className="mt-4 text-4xl font-bold">
                    Hello World!
                </h2>

                <p className="mt-4 font-semibold text-zinc-300">
                    Experiência em desenvolvimento de integrações, APIs e aplicações web.
                </p>

                <p className="mt-4 text-zinc-400 leading-7">
                    Sou um desenvolvedor Full Stack apaixonado por criar soluções
                    escaláveis e eficientes. Atuo principalmente com Java,
                    TypeScript, Python, AWS e arquiteturas serverless,
                    desenvolvendo integrações e sistemas corporativos.
                </p>

                <div className="mt-10 space-y-6">
                    <SkillGroup
                        title="Front-end"
                        skills={skills.frontend}
                    />

                    <SkillGroup
                        title="Back-end"
                        skills={skills.backend}
                    />

                    <SkillGroup
                        title="Cloud & DevOps"
                        skills={skills.devops}
                    />

                    <SkillGroup
                        title="Banco de Dados"
                        skills={skills.database}
                    />
                </div>
            </div>
        </section>
    );
}

interface SkillGroupProps {
    title: string;
    skills: string[];
}

function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <div>
            <h3 className="font-semibold mb-3">{title}</h3>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm text-white"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}