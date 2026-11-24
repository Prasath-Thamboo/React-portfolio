import { useState } from "react"
import { Mail, LinkedinIcon, Github } from "lucide-react"
import { profile } from "../data/profile"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"
import LegalModal from "./common/LegalModal"

const Footer = () => {
    const [legalOpen, setLegalOpen] = useState(false)
    const { lang } = useLanguage()
    const p = profile[lang]
    const t = ui[lang]

    const iconLink = "grid place-items-center h-11 w-11 border border-neutral-content/30 hover:border-accent hover:text-accent transition-colors"

    return (
        <footer className="relative bg-neutral text-neutral-content">
            <div aria-hidden="true" className="h-2 hazard" />
            <div className="px-5 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <p className="stencil font-black uppercase text-6xl md:text-7xl text-primary">{p.name}</p>
                    <p className="mt-3 text-sm text-neutral-content/75">
                        © {new Date().getFullYear()} {p.name} — {t.footer.madeWith}
                    </p>
                    <button
                        type="button"
                        onClick={() => setLegalOpen(true)}
                        className="mt-1 text-sm text-neutral-content/75 hover:text-accent underline underline-offset-4 transition-colors"
                    >
                        {t.footer.legal}
                    </button>
                </div>

                <div className="flex gap-2">
                    <a href={`mailto:${p.email}`} className={iconLink} aria-label="Email">
                        <Mail className="w-4 h-4" />
                    </a>
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
                        <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
            <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} />
        </footer>
    )
}

export default Footer
