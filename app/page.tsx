import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.12),transparent_32rem),linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_32rem),linear-gradient(180deg,#09090b_0%,#111113_45%,#09090b_100%)]">
            <Navbar />

            <About />

            <Experience />

            <Projects />

            <Contact />

            <Footer />
        </main>
    );
}
