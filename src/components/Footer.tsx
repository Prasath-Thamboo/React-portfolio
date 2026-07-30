import { Mail, LinkedinIcon } from "lucide-react"
import { profile } from "../data/profile"

const Footer = () => {
    return (
        <footer className="relative border-t border-base-content/10 mt-10 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 font-mono font-bold text-sm opacity-70">
                    <span className="text-accent">~/</span>t
                </span>

                <p className="text-xs opacity-40 text-center font-mono">
                    © {new Date().getFullYear()} {profile.name} — Fait avec React &amp; Tailwind
                </p>

                <div className="flex gap-2">
                    <a
                        href={`mailto:${profile.email}`}
                        className="btn btn-ghost btn-square btn-sm rounded-full"
                        aria-label="Email"
                    >
                        <Mail className="w-4 h-4" />
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-square btn-sm rounded-full"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
