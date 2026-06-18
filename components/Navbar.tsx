"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className={"w-full h-16 bg-white text-zinc-900 flex items-center justify-between px-4 sticky top-0 z-50"}>
            <div className={"text-xl font-bold"}>Wallace</div>
            <ul className={"flex space-x-4 list-none"}>
                <li><a href="#about" className={"hover:text-gray-400"}>Sobre mim</a></li>
                <li><a href="#projects" className={"hover:text-gray-400"}>Projetos</a></li>
                <li><a href="#contact" className={"hover:text-gray-400"}>Contato</a></li>
            </ul>
            <ThemeToggle />
        </nav>
    );
}