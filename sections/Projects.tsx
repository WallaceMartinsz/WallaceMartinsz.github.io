export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-5xl mx-auto px-6">
                <span className="text-sm text-zinc-800 uppercase tracking-widest">
                    ... / Projects
                </span>
                <h2 className="mt-4 text-3xl font-bold">
                    Projetos
                </h2>

                <div
                    className="
                        mt-8
                        rounded-2xl
                        border
                        border-zinc-200
                        dark:border-zinc-800
                        p-8
                        text-center
                    "
                >
                    <h3 className="text-xl font-semibold">
                        Em desenvolvimento
                    </h3>

                    <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        Atualmente estou desenvolvendo novos projetos para
                        publicação. Enquanto isso, você pode conhecer minha
                        experiência profissional e tecnologias através do meu
                        currículo e GitHub.
                    </p>
                </div>
            </div>
        </section>
    );
}