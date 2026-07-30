import { motion } from "framer-motion"

interface SparklineProps {
    data: number[]
    width?: number
    height?: number
    className?: string
}

const Sparkline = ({ data, width = 100, height = 28, className = "" }: SparklineProps) => {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min || 1

    const points = data.map((value, i) => {
        const x = (i / (data.length - 1)) * width
        const y = height - ((value - min) / range) * height
        return `${x},${y}`
    })

    const path = `M${points.join(" L")}`
    const areaPath = `${path} L${width},${height} L0,${height} Z`

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className} aria-hidden="true">
            <path d={areaPath} fill="hsl(var(--a) / 0.12)" />
            <motion.path
                d={path}
                fill="none"
                stroke="hsl(var(--a))"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
        </svg>
    )
}

export default Sparkline
