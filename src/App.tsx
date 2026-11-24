import { ThemeProvider } from "./context/ThemeProvider"
import { LanguageProvider } from "./context/LanguageProvider"
import ErrorBoundary from "./components/ErrorBoundary"
import { StampFilter } from "./components/freight/Stamp"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
    return (
        <ErrorBoundary>
            <LanguageProvider>
                <ThemeProvider>
                    <div className="relative min-h-screen bg-base-100 text-base-content font-sans overflow-x-clip">
                        <StampFilter />
                        <Navbar />
                        <main>
                            <Hero />
                            <About />
                            <Experience />
                            <Skills />
                            <Projects />
                            <Education />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </LanguageProvider>
        </ErrorBoundary>
    )
}
