"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg transition hover:bg-zinc-200 dark:hover:bg-zinc-800"
            aria-label="Alternar tema"
        >
            {theme === "dark" ? (
                <FiSun size={20} />
            ) : (
                <FiMoon size={20} />
            )}
        </button>
    );
}