import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react"
import { useTheme } from "../hooks/useTheme"
import { useLanguage } from "../hooks/useLanguage"
import { useActiveSection } from "../hooks/useActiveSection"
import { CHAPTERS } from "../data/chapters"
import { ui } from "../data/ui"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { lang, toggleLang } = useLanguage()
    const t = ui[lang]
    const chapters = CHAPTERS[lang]
    const ids = chapters.map((c) => c.id)
    const active = useActiveSection(ids)

    // Le chariot du portique glisse le long du rail au rythme du défilement
    const { scrollYProgress } = useScroll()
    const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 })
    const trolleyLeft = useTransform(progress, (v) => `calc(${v * 100}% - ${v * 56}px)`)

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open])

    const links = chapters.filter((c) => c.id !== "home")

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-neutral text-neutral-content">
            <nav aria-label={t.nav.primary} className="relative flex items-center justify-between gap-4 h-16 px-4 md:px-8">
                <a href="#home" className="flex items-center gap-3 shrink-0 group" aria-label="T.Prasath — accueil">
                    <span className="grid place-items-center h-10 w-10 bg-primary text-cargo-navy stencil font-black text-xl corrugated-fine transition-transform duration-300 ease-crane group-hover:-translate-y-0.5">
                        TP
                    </span>
                    <span className="hidden sm:block font-cond font-bold uppercase tracking-[0.14em] text-sm">T.Prasath</span>
                </a>

                <ul className="hidden lg:flex items-center gap-1">
                    {links.map((chapter) => {
                        const isActive = active === chapter.id
                        return (
                            <li key={chapter.id}>
                                <a
                                    href={`#${chapter.id}`}
                                    aria-current={isActive ? "true" : undefined}
                                    className={`relative block px-3.5 py-2 font-cond font-semibold uppercase tracking-[0.1em] text-[0.82rem] transition-colors duration-200 ${
                                        isActive ? "text-cargo-navy" : "text-neutral-content/75 hover:text-neutral-content"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 bg-accent"
                                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                        />
                                    )}
                                    <span className="relative">{chapter.label}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={toggleLang}
                        aria-label={t.nav.changeLang}
                        className="h-10 px-3 font-mono font-bold text-xs border border-neutral-content/25 hover:border-accent hover:text-accent transition-colors"
                    >
                        {lang === "fr" ? "EN" : "FR"}
                    </button>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={t.nav.changeTheme}
                        className="grid place-items-center h-10 w-10 border border-neutral-content/25 hover:border-accent hover:text-accent transition-colors"
                    >
                        {theme === "nuit" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center gap-2 h-10 px-4 bg-primary text-cargo-navy font-cond font-bold uppercase tracking-[0.1em] text-sm hover:bg-accent transition-colors"
                    >
                        {t.nav.contact}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? t.nav.close : t.nav.menu}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="lg:hidden grid place-items-center h-10 w-10 bg-accent text-cargo-navy"
                    >
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Rail du portique + chariot = progression de lecture */}
                <div aria-hidden="true" className="absolute left-0 right-0 bottom-0 h-1.5 hazard opacity-90" />
                <motion.div
                    aria-hidden="true"
                    className="absolute -bottom-2 h-3.5 w-14 bg-primary border-2 border-cargo-navy"
                    style={{ left: trolleyLeft }}
                />
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden bg-neutral border-t border-neutral-content/10"
                    >
                        <ul className="px-4 py-4 grid gap-1">
                            {links.map((chapter) => (
                                <li key={chapter.id}>
                                    <a
                                        href={`#${chapter.id}`}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-baseline justify-between py-3 border-b border-neutral-content/10 stencil font-black uppercase text-4xl ${
                                            active === chapter.id ? "text-accent" : ""
                                        }`}
                                    >
                                        {chapter.label}
                                        <ArrowRight className="w-5 h-5 opacity-60" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
