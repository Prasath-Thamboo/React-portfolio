import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
    value: number
    suffix?: string
    prefix?: string
    className?: string
}

const CountUp = ({ value, suffix = "", prefix = "", className = "" }: CountUpProps) => {
    const ref = useRef<HTMLSpanElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: "-40px" })
    const motionValue = useMotionValue(0)
    const spring = useSpring(motionValue, { duration: 1200, bounce: 0 })

    useEffect(() => {
        if (isInView) motionValue.set(value)
    }, [isInView, value, motionValue])

    useEffect(() => {
        return spring.on("change", (latest) => {
            if (ref.current) ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
        })
    }, [spring, prefix, suffix])

    return (
        <span ref={ref} className={className}>
            {prefix}0{suffix}
        </span>
    )
}

export default CountUp
