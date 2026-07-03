import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
    SiDocker,
    SiJquery,
    SiJunit5,
    SiNextdotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiSwagger
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
    "AWS": FaAws,
    "AWS Lambda": FaAws,
    "Docker": SiDocker,
    "Java": FaJava,
    "jQuery": SiJquery,
    "Next.js": SiNextdotjs,
    "Oracle": GrOracle,
    "PostgreSQL": SiPostgresql,
    "Python": SiPython,
    "React": SiReact,
    "Spring": SiSpring,
    "Tailwind CSS": SiTailwindcss,
    "TypeScript": SiTypescript,
    "Spring Boot": SiSpring,
    "Swagger": SiSwagger,
    "JUnit": SiJunit5,
    "Mockito": FaJava,
};

interface TechBadgeProps {
    name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
    const Icon = iconMap[name];

    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:shadow-none">
            {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
            {name}
        </span>
    );
}
