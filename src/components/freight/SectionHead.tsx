import { STATIC_RENDER } from "../../lib/motion"
import { motion } from "framer-motion"

interface SectionHeadProps {
    title: string
    intro?: string
    id?: string
    tone?: "default" | "inverse"
}

/**
 * Titre de section peint au pochoir : les lettres apparaissent comme bombées à travers
 * un cache (clip-path qui se lève de bas en haut, flou qui se résorbe).
 */
const SectionHead = ({ title, intro, id, tone = "default" }: SectionHeadProps) => {
    const letters = Array.from(title)
    return (
        <header className="mb-10 md:mb-14 max-w-6xl mx-auto">
            <h2 id={id} className="stencil font-black uppercase text-[clamp(3rem,9vw,7.5rem)] flex flex-wrap" aria-label={title}>
                {letters.map((char, i) => (
                    <motion.span
                        key={`${char}-${i}`}
                        aria-hidden="true"
                        initial={STATIC_RENDER ? false : { clipPath: "inset(100% 0 0 0)", filter: "blur(6px)" }}
                        whileInView={{ clipPath: "inset(0% 0 0 0)", filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block whitespace-pre"
                    >
                        {char}
                    </motion.span>
                ))}
            </h2>
            <div className="mt-5 flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span aria-hidden="true" className="hazard h-2.5 w-16 shrink-0" />
                {intro && (
                    <p className={`text-base md:text-lg max-w-2xl ${tone === "inverse" ? "text-neutral-content/80" : "opacity-80"}`}>
                        {intro}
                    </p>
                )}
            </div>
        </header>
    )
}

export default SectionHead
