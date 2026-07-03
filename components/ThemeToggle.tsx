"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() =>
                setTheme(isDark ? "light" : "dark")
            }
            className="rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
            aria-label="Alternar tema"
        >
            <span className="hidden dark:block">
                <FiSun size={20} />
            </span>
            <span className="block dark:hidden">
                <FiMoon size={20} />
            </span>
        </button>
    );
}
