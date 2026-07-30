import { motion } from "framer-motion"

interface RadialGaugeProps {
    percent: number
    size?: number
    strokeWidth?: number
    label?: string
}

const RadialGauge = ({ percent, size = 72, strokeWidth = 6, label }: RadialGaugeProps) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference * (1 - percent / 100)

    return (
        <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-base-content/10"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="hsl(var(--a))"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </svg>
            {label && (
                <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold text-accent">
                    {label}
                </span>
            )}
        </div>
    )
}

export default RadialGauge
