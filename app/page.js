// STYLE
import "../styles/global.scss";
import "../styles/blocks/index.scss";

// COMPONENTS
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Projects from "@/components/ProjectsList/ProjecstList";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
