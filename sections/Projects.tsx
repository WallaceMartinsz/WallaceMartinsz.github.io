import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">
                        Projetos
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">
                        Soluções com foco prático.
                    </h2>
                </div>

                <p className="max-w-sm text-zinc-600 dark:text-zinc-400">
                    Os projetos ainda estão em construção. Por enquanto, deixei o foco
                    nas tecnologias e no problema que cada solução pretende resolver.
                </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
