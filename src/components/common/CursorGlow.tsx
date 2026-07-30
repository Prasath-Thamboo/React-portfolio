import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const CursorGlow = () => {
    const x = useMotionValue(-300)
    const y = useMotionValue(-300)
    const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.5 })
    const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.5 })

    useEffect(() => {
        const isFinePointer = window.matchMedia("(pointer: fine)").matches
        if (!isFinePointer) return

        const handleMove = (event: PointerEvent) => {
            x.set(event.clientX)
            y.set(event.clientY)
        }
        window.addEventListener("pointermove", handleMove)
        return () => window.removeEventListener("pointermove", handleMove)
    }, [x, y])

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed top-0 left-0 z-0 hidden md:block w-[500px] h-[500px] rounded-full mix-blend-screen"
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
                background: "radial-gradient(circle, hsl(var(--a) / 0.08) 0%, transparent 70%)",
            }}
        />
    )
}

export default CursorGlow
