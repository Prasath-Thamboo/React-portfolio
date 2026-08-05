import { ThemeProvider } from "./context/ThemeProvider"
import { LanguageProvider } from "./context/LanguageProvider"
import ErrorBoundary from "./components/ErrorBoundary"
import ScrollProgress from "./components/common/ScrollProgress"
import CursorGlow from "./components/common/CursorGlow"
import NetworkBackground from "./components/common/NetworkBackground"
import Navbar from "./components/Navbar"
import ChapterNav from "./components/ChapterNav"
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
          <div className="relative min-h-screen bg-base-100 text-base-content font-sans overflow-x-hidden">
            <div className="fixed inset-0 -z-10" aria-hidden="true">
              <NetworkBackground density={0.00006} maxDistance={140} />
            </div>
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <ChapterNav />
            <main className="relative z-10">
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
