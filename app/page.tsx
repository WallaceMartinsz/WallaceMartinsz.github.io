import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";

export default function Home() {
    return (
        <main>
            <Navbar />

            <About />

            <Experience />

            <Projects />

            <Contact />

            <Footer />
        </main>
    );
}