import { Project } from "@/data/projects";
import { FiClock } from "react-icons/fi";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 transition hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/75 dark:shadow-none dark:hover:border-zinc-700">
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
                    {project.title}
                </h3>

                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200">
                    <FiClock aria-hidden="true" size={14} />
                    {project.status}
                </span>
            </div>

            <p className="mt-4 flex-1 leading-7 text-zinc-600 dark:text-zinc-300">
                {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                ))}
            </div>
        </article>
    );
}
