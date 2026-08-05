import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Mail } from "lucide-react"
import { useTheme } from "../hooks/useTheme"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"
import LiveClock from "./common/LiveClock"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { lang, toggleLang } = useLanguage()
    const t = ui[lang]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll()
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header className="fixed top-3 md:top-5 inset-x-0 z-50 px-3 md:px-6">
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`mx-auto max-w-xs sm:max-w-sm flex items-center justify-between gap-3 rounded-full border transition-all duration-300 px-4 md:px-5 py-2.5 ${
                    scrolled
                        ? "bg-base-100/70 backdrop-blur-xl border-base-content/10 shadow-lg shadow-black/10"
                        : "bg-base-100/30 backdrop-blur-lg border-base-content/5"
                }`}
            >
                <a href="#home" className="flex items-center gap-1.5 font-mono font-bold text-base shrink-0">
                    <span className="text-accent">~/</span>
                    <span>t</span>
                    <span className="w-1.5 h-3.5 bg-accent animate-pulse" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-2">
                    <span className="hidden sm:block">
                        <LiveClock />
                    </span>
                    <button
                        onClick={toggleLang}
                        aria-label={t.nav.changeLang}
                        className="btn btn-ghost btn-sm rounded-full font-mono text-[11px] font-bold px-2.5"
                    >
                        {lang === "fr" ? "EN" : "FR"}
                    </button>
                    <button onClick={toggleTheme} aria-label={t.nav.changeTheme} className="btn btn-ghost btn-square btn-sm">
                        {theme === "devopsdark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <a href="#contact" aria-label={t.nav.contact} className="btn btn-accent btn-square btn-sm rounded-full">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </motion.nav>
        </header>
    )
}

export default Navbar
