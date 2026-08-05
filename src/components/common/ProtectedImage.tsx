import { useEffect, useRef, useState } from "react"

interface ProtectedImageProps {
    src: string
    alt: string
    watermarkText: string
    className?: string
    objectPosition?: string
}

/**
 * Image affichée via <canvas> (pixels bakés, pas de <img src> extractible en un clic)
 * avec un léger bruit aléatoire et un filigrane répété en overlay.
 * Ne garantit pas une protection absolue (une capture d'écran reste possible) mais
 * dissuade la copie automatisée/casuelle et trace visuellement toute réutilisation.
 */
const ProtectedImage = ({ src, alt, watermarkText, className = "", objectPosition = "center" }: ProtectedImageProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const image = new Image()
        image.crossOrigin = "anonymous"
        image.src = src
        image.onload = () => {
            canvas.width = image.naturalWidth
            canvas.height = image.naturalHeight
            ctx.drawImage(image, 0, 0)

            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const pixels = frame.data
            for (let i = 0; i < pixels.length; i += 4) {
                const noise = (Math.random() - 0.5) * 6
                pixels[i] = Math.min(255, Math.max(0, pixels[i] + noise))
                pixels[i + 1] = Math.min(255, Math.max(0, pixels[i + 1] + noise))
                pixels[i + 2] = Math.min(255, Math.max(0, pixels[i + 2] + noise))
            }
            ctx.putImageData(frame, 0, 0)
            setReady(true)
        }
    }, [src])

    return (
        <div
            className={`relative select-none ${className}`}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{ WebkitTouchCallout: "none" } as React.CSSProperties}
        >
            <canvas
                ref={canvasRef}
                role="img"
                aria-label={alt}
                className={`w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
                style={{ objectPosition }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
                style={{
                    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='120'>
                            <text x='0' y='60' transform='rotate(-24 110 60)' font-family='monospace' font-size='13' fill='white' fill-opacity='0.55' stroke='black' stroke-opacity='0.55' stroke-width='0.6' text-anchor='middle'>${watermarkText}</text>
                        </svg>`
                    )}")`,
                    backgroundRepeat: "repeat",
                }}
            />
        </div>
    )
}

export default ProtectedImage
