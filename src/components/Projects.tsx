import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react"
import {
    animate,
    motion,
    useAnimationFrame,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react"
import SectionHead from "./freight/SectionHead"
import Stamp from "./freight/Stamp"
import { projects, type Project } from "../data/projects"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const GAP = 28
const BASE_SPEED = 42 // px/s, positif = le convoi avance vers la droite
const EASE = [0.22, 1, 0.36, 1] as const

const FLEET = [
    { bg: "bg-cargo-orange", fg: "text-cargo-navy" },
    { bg: "bg-cargo-navy", fg: "text-cargo-concrete" },
    { bg: "bg-cargo-steel", fg: "text-white" },
    { bg: "bg-cargo-yellow", fg: "text-cargo-navy" },
    { bg: "bg-cargo-green", fg: "text-white" },
]

const containerCode = (id: number) => `TPRU ${String(id * 4127).padStart(6, "0")}`

/** Une porte de conteneur : tôle nervurée verticale + deux barres de verrouillage */
const Door = ({ side, open, bg, reduce }: { side: "left" | "right"; open: boolean; bg: string; reduce: boolean | null }) => (
    <motion.div
        aria-hidden="true"
        initial={false}
        animate={{ rotateY: open ? (side === "left" ? -112 : 112) : 0 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 15, mass: 0.9 }}
        style={{ transformOrigin: side === "left" ? "left center" : "right center", backfaceVisibility: "hidden" }}
        className={`absolute top-0 bottom-0 w-1/2 ${side === "left" ? "left-0" : "right-0"} ${bg} border border-black/25`}
    >
        <div className="absolute inset-0 corrugated-fine" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/15" />
        {[30, 62].map((pos) => (
            <span key={pos} className="absolute top-1 bottom-1 w-2 bg-black/30" style={{ left: `${pos}%` }}>
                <span className="absolute -left-1 top-[45%] h-2.5 w-7 bg-black/45" />
            </span>
        ))}
    </motion.div>
)

interface ContainerCardProps {
    project: Project
    index: number
    duplicate?: boolean
    autoOpen?: boolean
    cardKey: string
    onEngage: (engaged: boolean) => void
}

const ContainerCard = ({ project, index, duplicate = false, autoOpen = false, cardKey, onEngage }: ContainerCardProps) => {
    const { lang } = useLanguage()
    const t = ui[lang].projects
    const reduce = useReducedMotion()
    const [open, setOpen] = useState(false)
    const fleet = FLEET[index % FLEET.length]
    const canOpen = Boolean(project.image)
    const isOpen = canOpen && (open || autoOpen)

    const setEngaged = (value: boolean) => {
        setOpen(value)
        onEngage(value)
    }

    return (
        <article
            aria-hidden={duplicate || undefined}
            data-card={cardKey}
            className={`relative shrink-0 w-[290px] sm:w-[380px] lg:w-[430px] flex flex-col select-none ${project.inProgress ? "hazard p-2 shadow-[0_0_0_2px_#F6C445]" : ""}`}
            onPointerEnter={(e) => e.pointerType === "mouse" && setEngaged(true)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setEngaged(false)}
            onFocus={() => setEngaged(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setEngaged(false)
            }}
        >
            {project.inProgress && (
                <span className="absolute -top-3.5 left-5 z-10 px-2.5 py-1 bg-accent text-cargo-navy border-2 border-cargo-navy font-cond font-bold uppercase tracking-[0.12em] text-xs">
                    {t.underConstruction}
                </span>
            )}
            {/* Conteneur */}
            <div className={`relative ${fleet.bg} ${fleet.fg} shadow-[0_22px_34px_-20px_rgba(20,33,61,0.85)]`}>
                <div aria-hidden="true" className="absolute inset-0 corrugated-fine opacity-60" />
                <div className="relative flex items-end justify-between gap-3 px-4 pt-3 pb-2">
                    <h3 className="stencil font-black uppercase text-[1.9rem] sm:text-[2.2rem] truncate">{project.title}</h3>
                    <span className="font-mono text-[11px] font-bold shrink-0 mb-1">{containerCode(project.id)}</span>
                </div>

                <button
                    type="button"
                    tabIndex={duplicate || !canOpen ? -1 : 0}
                    aria-label={canOpen ? `${t.openDoors} — ${project.title}` : project.title}
                    aria-pressed={canOpen ? isOpen : undefined}
                    onClick={() => canOpen && setEngaged(!open)}
                    className="relative block w-[calc(100%-1.5rem)] mx-3 mb-3 aspect-[16/10] overflow-hidden bg-cargo-navy [perspective:1100px] cursor-pointer disabled:cursor-default"
                    disabled={!canOpen}
                >
                    {project.image ? (
                        <motion.img
                            src={project.image}
                            alt=""
                            loading="lazy"
                            draggable={false}
                            initial={false}
                            animate={{ scale: isOpen ? 1 : 1.12, filter: isOpen ? "brightness(1)" : "brightness(0.35)" }}
                            transition={{ duration: 0.9, ease: EASE }}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-cargo-navy" />
                    )}
                    <Door side="left" open={isOpen} bg={fleet.bg} reduce={reduce} />
                    <Door side="right" open={isOpen} bg={fleet.bg} reduce={reduce} />

                    <span className="absolute right-3 bottom-3">
                        {project.inProgress ? (
                            <Stamp label={t.inProgress} tone="navy" rotate={-9} className="bg-accent/90" />
                        ) : (
                            <Stamp label={t.delivered} tone="green" rotate={-11} visible={isOpen} className="bg-white/90" />
                        )}
                    </span>
                </button>
            </div>

            {/* Étiquette de manifeste */}
            <div className="relative bg-base-200 border-2 border-t-0 border-base-content px-4 pt-4 pb-4 flex flex-col gap-3 flex-1">
                <p className="text-[0.95rem] leading-relaxed line-clamp-4">{project.description}</p>
                {project.technologies.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                            <li key={tech} className="px-2 py-0.5 border border-base-content/60 font-mono text-[11px] font-bold">
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="mt-auto pt-1">
                    {project.url ? (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={duplicate ? -1 : 0}
                            draggable={false}
                            className="group inline-flex items-center gap-2 h-11 px-4 bg-neutral text-neutral-content font-cond font-bold uppercase tracking-[0.1em] text-sm hover:bg-primary hover:text-cargo-navy transition-colors"
                        >
                            {t.viewProject}
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-crane group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    ) : (
                        <span className="inline-flex items-center h-11 px-4 border-2 border-dashed border-base-content/50 font-cond font-bold uppercase tracking-[0.1em] text-sm opacity-80">
                            {project.inProgress ? t.inProgress : t.toComplete}
                        </span>
                    )}
                </div>
            </div>
        </article>
    )
}

/**
 * Le convoi : une file de conteneurs qui avance en continu de gauche à droite.
 * Accélère et se cisaille avec la vitesse de défilement de la page, ralentit jusqu'à
 * l'arrêt quand on survole ou focalise un conteneur, se manipule à la souris ou au doigt
 * (avec inertie), et se pilote aux flèches. Sans animation si prefers-reduced-motion.
 */
const Projects = () => {
    const { lang } = useLanguage()
    const t = ui[lang]
    const list = projects[lang]
    const reduce = useReducedMotion()

    const firstSetRef = useRef<HTMLDivElement>(null)
    const setWidth = useRef(0)
    const stepWidth = useRef(400)
    const x = useMotionValue(0)
    const targetFactor = useRef(1)
    const factor = useRef(1)
    const engaged = useRef(0)
    const [playing, setPlaying] = useState(true)
    const playingRef = useRef(true)
    const drag = useRef({ active: false, lastX: 0, lastT: 0, moved: 0, captured: false, velocity: 0 })
    const momentum = useRef(0)
    const nudging = useRef(false)
    const convoyRef = useRef<HTMLDivElement>(null)
    const [centerKey, setCenterKey] = useState<string | null>(null)
    const centerKeyRef = useRef<string | null>(null)
    const lastCenterCheck = useRef(0)

    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 300 })
    const skewX = useTransform(smoothVelocity, [-3000, 0, 3000], reduce ? [0, 0, 0] : [-8, 0, 8], { clamp: true })

    useEffect(() => {
        const el = firstSetRef.current
        if (!el) return
        const measure = () => {
            setWidth.current = el.offsetWidth + GAP
            const first = el.firstElementChild as HTMLElement | null
            if (first) stepWidth.current = first.offsetWidth + GAP
        }
        measure()
        const ro = new ResizeObserver(measure)
        ro.observe(el)
        return () => ro.disconnect()
    }, [list.length])

    useEffect(() => {
        playingRef.current = playing
    }, [playing])

    useAnimationFrame((time, delta) => {
        // Le conteneur le plus proche du centre ouvre ses portes en passant devant le quai
        if (time - lastCenterCheck.current > 180 && convoyRef.current) {
            lastCenterCheck.current = time
            const box = convoyRef.current.getBoundingClientRect()
            const mid = box.left + box.width / 2
            let best: string | null = null
            let bestDist = Infinity
            convoyRef.current.querySelectorAll<HTMLElement>("[data-card]").forEach((el) => {
                const r = el.getBoundingClientRect()
                const d = Math.abs(r.left + r.width / 2 - mid)
                if (d < bestDist) {
                    bestDist = d
                    best = el.dataset.card ?? null
                }
            })
            if (best !== centerKeyRef.current) {
                centerKeyRef.current = best
                setCenterKey(best)
            }
        }
        const dt = Math.min(delta, 64) / 1000
        const wanted = playingRef.current && !reduce ? targetFactor.current : 0
        factor.current += (wanted - factor.current) * Math.min(1, dt * 3.5)
        if (drag.current.active || nudging.current) return

        let v = BASE_SPEED * factor.current
        if (!reduce) v += Math.min(Math.abs(smoothVelocity.get()) * 0.3, 700) * factor.current
        if (Math.abs(momentum.current) > 2) {
            v += momentum.current
            momentum.current *= Math.pow(0.03, dt)
        } else {
            momentum.current = 0
        }
        if (v !== 0) x.set(x.get() + v * dt)
    })

    const wrapped = useTransform(x, (v) => {
        const W = setWidth.current || 1
        return (((v % W) + W) % W) - W
    })
    const quayDashes = useTransform(wrapped, (v) => `${v}px 50%`)

    const onEngage = (value: boolean) => {
        engaged.current = Math.max(0, engaged.current + (value ? 1 : -1))
        targetFactor.current = engaged.current > 0 ? 0 : 1
    }

    const nudge = (dir: -1 | 1) => {
        nudging.current = true
        momentum.current = 0
        animate(x, x.get() + dir * stepWidth.current, {
            duration: reduce ? 0 : 0.8,
            ease: EASE,
            onComplete: () => {
                nudging.current = false
            },
        })
    }

    const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (e.pointerType === "mouse" && e.button !== 0) return
        drag.current = { active: true, lastX: e.clientX, lastT: performance.now(), moved: 0, captured: false, velocity: 0 }
        momentum.current = 0
    }

    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        const d = drag.current
        if (!d.active) return
        const now = performance.now()
        const dx = e.clientX - d.lastX
        const dtMs = Math.max(1, now - d.lastT)
        d.velocity = d.velocity * 0.6 + (dx / dtMs) * 1000 * 0.4
        d.moved += Math.abs(dx)
        d.lastX = e.clientX
        d.lastT = now
        if (d.moved > 6 && !d.captured) {
            e.currentTarget.setPointerCapture(e.pointerId)
            d.captured = true
        }
        x.set(x.get() + dx)
    }

    const endDrag = () => {
        const d = drag.current
        if (!d.active) return
        d.active = false
        momentum.current = Math.max(-2600, Math.min(2600, d.velocity))
    }

    return (
        <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-base-300/60">
            <div className="px-5 sm:px-8 lg:px-16">
                <SectionHead title={t.sections.projects} intro={t.projects.intro} />
                <div className="max-w-6xl mx-auto -mt-4 mb-10 flex flex-wrap items-end justify-between gap-6">
                    <p className="max-w-xl text-sm opacity-85">
                        <span className="field-label mr-2 font-bold underline decoration-primary decoration-2 underline-offset-4">{lang === "fr" ? "Avis" : "Notice"}</span>
                        {t.projects.notice}
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => nudge(-1)}
                            aria-label={t.projects.previous}
                            aria-controls="convoy"
                            className="grid place-items-center h-12 w-12 border-2 border-base-content hover:bg-base-content hover:text-base-100 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        {!reduce && (
                            <button
                                type="button"
                                onClick={() => setPlaying((p) => !p)}
                                aria-label={playing ? "Pause" : "Lecture"}
                                aria-pressed={!playing}
                                aria-controls="convoy"
                                className="grid place-items-center h-12 w-12 bg-accent text-cargo-navy hover:bg-primary transition-colors"
                            >
                                {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={() => nudge(1)}
                            aria-label={t.projects.next}
                            aria-controls="convoy"
                            className="grid place-items-center h-12 w-12 border-2 border-base-content hover:bg-base-content hover:text-base-100 transition-colors"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Poutre du portique */}
            <div aria-hidden="true" className="relative h-5 bg-neutral">
                <div className="absolute inset-y-0 left-0 w-24 hazard" />
                <div className="absolute inset-y-0 right-0 w-24 hazard" />
            </div>

            <div
                id="convoy"
                ref={convoyRef}
                role="region"
                aria-roledescription="carousel"
                aria-label={t.projects.carousel}
                className="relative pt-10 pb-6 cursor-grab active:cursor-grabbing [touch-action:pan-y] [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onClickCapture={(e) => {
                    if (drag.current.moved > 6) {
                        e.preventDefault()
                        e.stopPropagation()
                        drag.current.moved = 0
                    }
                }}
            >
                <motion.div className="flex items-stretch will-change-transform" style={{ x: wrapped, skewX, gap: GAP }}>
                    <div ref={firstSetRef} className="flex items-stretch shrink-0" style={{ gap: GAP }}>
                        {list.map((project, i) => (
                            <ContainerCard key={project.id} cardKey={`a-${project.id}`} autoOpen={centerKey === `a-${project.id}`} project={project} index={i} onEngage={onEngage} />
                        ))}
                    </div>
                    <div className="flex items-stretch shrink-0" style={{ gap: GAP }} aria-hidden="true">
                        {list.map((project, i) => (
                            <ContainerCard key={`dup-${project.id}`} cardKey={`d-${project.id}`} autoOpen={centerKey === `d-${project.id}`} project={project} index={i} duplicate onEngage={onEngage} />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bord du quai : le marquage au sol défile avec le convoi */}
            <motion.div
                aria-hidden="true"
                className="h-3 bg-neutral"
                style={{
                    backgroundImage: "repeating-linear-gradient(90deg, #F6C445 0 40px, transparent 40px 80px)",
                    backgroundSize: "80px 4px",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: quayDashes,
                }}
            />
        </section>
    )
}

export default Projects
