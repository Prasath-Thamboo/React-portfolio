import type { ReactNode, HTMLAttributes, MouseEvent } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    className?: string
    interactive?: boolean
    glow?: boolean
}

const GlassCard = ({ children, className = "", interactive = true, glow = true, ...rest }: GlassCardProps) => {
    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`)
        event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`)
    }

    return (
        <div
            onMouseMove={glow ? handleMouseMove : undefined}
            className={`group/card relative overflow-hidden rounded-2xl border border-base-content/10 bg-base-100/50 backdrop-blur-xl shadow-lg shadow-black/5 ${
                interactive
                    ? "transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
                    : ""
            } ${className}`}
            {...rest}
        >
            {glow && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                    style={{
                        background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 0%), hsl(var(--a) / 0.12), transparent 65%)",
                    }}
                />
            )}
            <div className="relative">{children}</div>
        </div>
    )
}

export default GlassCard
