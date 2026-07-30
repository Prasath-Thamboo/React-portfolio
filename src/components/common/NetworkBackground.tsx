import { useEffect, useRef } from "react"
import { useTheme } from "../../hooks/useTheme"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
}

const THEME_COLORS: Record<string, { node: string; line: string }> = {
    devopsdark: { node: "61, 169, 252", line: "61, 169, 252" },
    devopslight: { node: "37, 99, 235", line: "37, 99, 235" },
}

interface NetworkBackgroundProps {
    className?: string
    density?: number
    maxDistance?: number
}

const NetworkBackground = ({ className = "", density = 0.00009, maxDistance = 150 }: NetworkBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        const container = canvas?.parentElement
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const colors = THEME_COLORS[theme] ?? THEME_COLORS.devopsdark
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        let particles: Particle[] = []
        let width = 0
        let height = 0
        let dpr = Math.min(window.devicePixelRatio || 1, 2)
        let animationId = 0
        const mouse = { x: -9999, y: -9999 }

        const buildParticles = () => {
            const count = Math.min(90, Math.max(24, Math.floor(width * height * density)))
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
            }))
        }

        const resize = () => {
            width = container.clientWidth
            height = container.clientHeight
            dpr = Math.min(window.devicePixelRatio || 1, 2)
            canvas.width = width * dpr
            canvas.height = height * dpr
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            buildParticles()
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            for (const p of particles) {
                if (!reduceMotion) {
                    p.x += p.vx
                    p.y += p.vy

                    const dx = p.x - mouse.x
                    const dy = p.y - mouse.y
                    const dist = Math.hypot(dx, dy)
                    if (dist < 100) {
                        const force = (100 - dist) / 100
                        p.x += (dx / (dist || 1)) * force * 0.6
                        p.y += (dy / (dist || 1)) * force * 0.6
                    }

                    if (p.x < 0 || p.x > width) p.vx *= -1
                    if (p.y < 0 || p.y > height) p.vy *= -1
                    p.x = Math.max(0, Math.min(width, p.x))
                    p.y = Math.max(0, Math.min(height, p.y))
                }

                ctx.beginPath()
                ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${colors.node}, 0.7)`
                ctx.fill()
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i]
                    const b = particles[j]
                    const dist = Math.hypot(a.x - b.x, a.y - b.y)
                    if (dist < maxDistance) {
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.strokeStyle = `rgba(${colors.line}, ${0.16 * (1 - dist / maxDistance)})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                }
            }

            if (!reduceMotion) {
                animationId = requestAnimationFrame(draw)
            }
        }

        const handlePointerMove = (event: PointerEvent) => {
            const rect = container.getBoundingClientRect()
            mouse.x = event.clientX - rect.left
            mouse.y = event.clientY - rect.top
        }
        const handlePointerLeave = () => {
            mouse.x = -9999
            mouse.y = -9999
        }

        const resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(container)
        resize()
        draw()

        container.addEventListener("pointermove", handlePointerMove)
        container.addEventListener("pointerleave", handlePointerLeave)

        return () => {
            cancelAnimationFrame(animationId)
            resizeObserver.disconnect()
            container.removeEventListener("pointermove", handlePointerMove)
            container.removeEventListener("pointerleave", handlePointerLeave)
        }
    }, [theme, density, maxDistance])

    return <canvas ref={canvasRef} aria-hidden="true" className={`block ${className}`} />
}

export default NetworkBackground
