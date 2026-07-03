import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const links = [
    {
        label: "GitHub",
        href: "https://github.com/wallacemartinsz",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/martinswallace",
        icon: FaLinkedin,
    },
    {
        label: "E-mail",
        href: "mailto:martinsswallace@gmail.com",
        icon: MdEmail,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/5581985757473",
        icon: FaWhatsapp,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900/75 dark:shadow-black/20 md:p-12">
                <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">
                            Contato
                        </span>

                        <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">
                            Vamos construir algo bem feito?
                        </h2>

                        <p className="mt-5 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-300">
                            Estou disponível para oportunidades como desenvolvedor,
                            projetos freelance e conversas sobre tecnologia, produto e carreira.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {links.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                    className="inline-flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                                >
                                    <span>{link.label}</span>
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
