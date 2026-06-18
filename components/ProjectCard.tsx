import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <article
            className="
                rounded-2xl
                border
                border-zinc-200
                bg-white
                overflow-hidden

                dark:bg-zinc-900
                dark:border-zinc-800

                transition-all
                hover:-translate-y-1
            "
        >
            <div className="h-48 bg-zinc-200 dark:bg-zinc-800" />

            <div className="p-6">
                <h3 className="text-xl font-semibold">
                    {project.title}
                </h3>

                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="
                                px-3 py-1
                                text-sm
                                rounded-full
                                bg-zinc-100

                                dark:bg-zinc-800
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium hover:underline"
                        >
                            GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium hover:underline"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}