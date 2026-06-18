import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section
            id="contact"
            className="max-w-5xl mx-auto px-6 py-6 text-center"
        >
            <span className="text-sm text-zinc-800 uppercase tracking-widest">
                ... / Contact
            </span>

            <h2 className="mt-4 text-4xl font-bold">
                Vamos trabalhar juntos?
            </h2>

            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Estou disponível para oportunidades como Desenvolvedor, projetos freelance e novas conexões
                profissionais.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
                <a
                    href="https://github.com/wallacemartinsz"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                >
                    <FaGithub size={20} />
                    GitHub
                </a>

                <a
                    href="https://linkedin.com/in/martinswallace"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                >
                    <FaLinkedin size={20} />
                    LinkedIn
                </a>

                <a
                    href="mailto:martinsswallace@gmail.com"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                >
                    <MdEmail size={20} />
                    E-mail
                </a>

                <a
                    href="https://wa.me/5581985757473"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                >
                    <FaWhatsapp size={20} />
                    WhatsApp
                </a>
            </div>
        </section>
    );
}