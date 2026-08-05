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

    return (
        <footer className="relative border-t border-base-content/10 mt-10 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 font-mono font-bold text-sm opacity-70">
                    <span className="text-accent">~/</span>t
                </span>

                <div className="flex flex-col items-center gap-1">
                    <p className="text-xs opacity-40 text-center font-mono">
                        © {new Date().getFullYear()} {p.name} — {t.footer.madeWith}
                    </p>
                    <button
                        type="button"
                        onClick={() => setLegalOpen(true)}
                        className="text-xs opacity-40 hover:opacity-70 underline underline-offset-2 transition-opacity"
                    >
                        {t.footer.legal}
                    </button>
                </div>

                <div className="flex gap-2">
                    <a
                        href={`mailto:${p.email}`}
                        className="btn btn-ghost btn-square btn-sm rounded-full"
                        aria-label="Email"
                    >
                        <Mail className="w-4 h-4" />
                    </a>
                    <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-square btn-sm rounded-full"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-square btn-sm rounded-full"
                        aria-label="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
            <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} />
        </footer>
    )
}

export default Footer
