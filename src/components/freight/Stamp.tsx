import { motion } from "framer-motion"

interface StampProps {
    label: string
    tone?: "green" | "orange" | "navy"
    rotate?: number
    className?: string
    /** Le tampon « claque » sur le support quand visible devient vrai */
    visible?: boolean
    size?: "sm" | "md" | "lg"
}

const toneClass = {
    green: "text-success border-success",
    orange: "text-primary border-primary",
    navy: "text-base-content border-base-content",
}

const sizeClass = {
    sm: "text-sm px-2.5 py-0.5 border-2",
    md: "text-xl px-4 py-1 border-[3px]",
    lg: "text-3xl md:text-4xl px-5 py-1.5 border-4",
}

/**
 * Tampon encré : bordure double, texte pochoir, grain irrégulier obtenu par un filtre SVG
 * (turbulence + déplacement) pour imiter l'encre qui accroche mal sur le papier.
 */
const Stamp = ({ label, tone = "green", rotate = -8, className = "", visible = true, size = "md" }: StampProps) => {
    return (
        <motion.span
            aria-hidden="true"
            initial={false}
            animate={visible ? { scale: 1, opacity: 0.92, rotate } : { scale: 1.8, opacity: 0, rotate: rotate - 10 }}
            transition={visible ? { type: "spring", stiffness: 520, damping: 22, mass: 0.7 } : { duration: 0.15 }}
            className={`pointer-events-none inline-block stencil font-black uppercase tracking-wide rounded-sm ${toneClass[tone]} ${sizeClass[size]} ${className}`}
            style={{ filter: "url(#stamp-ink)", boxShadow: "inset 0 0 0 2px currentColor" }}
        >
            {label}
        </motion.span>
    )
}

/** Filtre SVG partagé, monté une fois dans App */
export const StampFilter = () => (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <filter id="stamp-ink">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
            <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.35" result="mask" />
            <feComposite in="SourceGraphic" in2="mask" operator="in" result="inked" />
            <feDisplacementMap in="inked" in2="noise" scale="1.6" />
        </filter>
    </svg>
)

export default Stamp
