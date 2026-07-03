import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";

const skills = [
    "Java",
    "TypeScript",
    "Python",
    "Next.js",
    "React",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "Oracle",
];

const highlights = [
    "APIs e integrações",
    "Aplicações web",
    "Cloud e serverless",
];

export default function About() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

    return (
        <section
            id="about"
            className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-24"
        >
            <div>
                <span className="inline-flex rounded-full border border-teal-500/25 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-700 dark:text-teal-300">
                    Desenvolvedor Full Stack
                </span>

                <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-zinc-950 dark:text-white md:text-7xl">
                    Construo integrações, APIs e produtos web com foco em clareza.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    Sou Wallace Martins, desenvolvedor com experiência em sistemas corporativos,
                    arquiteturas serverless e interfaces modernas. Trabalho para transformar regras
                    complexas em soluções estáveis, simples de usar e fáceis de evoluir.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    >
                        Ver projetos
                        <FiArrowUpRight size={18} />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-500"
                    >
                        Contato
                        <FiSend size={18} />
                    </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <TechBadge key={skill} name={skill} />
                    ))}
                </div>
            </div>

            <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-teal-500/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/80 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
                    <Image
                        src={`${basePath}/animado.png`}
                        alt="Ilustração de Wallace Martins"
                        width={900}
                        height={1125}
                        priority
                        className="aspect-[4/5] w-full object-cover"
                    />

                    <div className="border-t border-zinc-200 p-5 dark:border-zinc-800">
                        <div className="grid gap-3 sm:grid-cols-3">
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl bg-zinc-50 p-4 text-sm font-medium text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 flex gap-3">
                            <a
                                href="https://github.com/wallacemartinsz"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="rounded-full border border-zinc-200 p-3 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/martinswallace"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="rounded-full border border-zinc-200 p-3 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
