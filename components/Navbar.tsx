"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/75">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                <a href="#about" className="text-sm font-semibold tracking-wide text-zinc-950 dark:text-white">
                    Wallace<span className="text-teal-500">.</span>
                </a>

                <ul className="hidden list-none items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 sm:flex">
                    <li><a href="#about" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white">Sobre</a></li>
                    <li><a href="#experience" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white">Experiência</a></li>
                    <li><a href="#projects" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white">Projetos</a></li>
                    <li><a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white">Contato</a></li>
                </ul>

                <ThemeToggle />
            </div>
        </nav>
    );
}
