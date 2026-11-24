import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Mail, LinkedinIcon, Github, Download, ArrowDown } from "lucide-react"
import { profile } from "../data/profile"
import { STATIC_RENDER } from "../lib/motion"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"
import img from "../assets/img.png"
import ProtectedImage from "./common/ProtectedImage"

const EASE = [0.22, 1, 0.36, 1] as const

/** Pièce de coin moulée (corner casting) d'un conteneur ISO */
const CornerCasting = ({ className }: { className: string }) => (
    <span aria-hidden="true" className={`absolute h-7 w-9 bg-cargo-navy/85 ${className}`}>
        <span className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-2.5 rounded-full bg-primary/60" />
    </span>
)

/** Barre de verrouillage de porte avec sa poignée */
const LockRod = ({ className, handleTop }: { className: string; handleTop: string }) => (
    <span aria-hidden="true" className={`absolute top-0 bottom-0 w-3 bg-gradient-to-r from-cargo-navy/55 via-cargo-navy/30 to-cargo-navy/60 ${className}`}>
        <span className="absolute -left-1.5 top-[12%] h-5 w-6 bg-cargo-navy/70" />
        <span className="absolute -left-1.5 bottom-[12%] h-5 w-6 bg-cargo-navy/70" />
        <span className="absolute left-2 w-12 h-3 bg-cargo-navy/75 origin-left" style={{ top: handleTop }} />
    </span>
)

const Hero = () => {
    const { lang } = useLanguage()
    const p = profile[lang]
    const t = ui[lang]
    const reduce = useReducedMotion() || STATIC_RENDER
    const ref = useRef<HTMLElement>(null)

    // Le conteneur est hissé par la grue quand on défile
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const lift = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140])
    const plateSwing = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 6])

    const name = Array.from(p.name.toUpperCase())

    return (
        <section
            id="home"
            ref={ref}
            aria-labelledby="hero-name"
            className="relative overflow-hidden bg-primary text-cargo-navy min-h-[100svh] pt-16 flex flex-col"
        >
            <div aria-hidden="true" className="absolute inset-0 corrugated" />
            <div aria-hidden="true" className="absolute inset-x-0 top-16 h-5 bg-cargo-navy/20" />
            <CornerCasting className="top-[4.25rem] left-3" />
            <CornerCasting className="top-[4.25rem] right-3" />
            <p aria-hidden="true" className="absolute top-[6.5rem] right-6 md:right-10 lg:right-auto lg:left-44 hidden sm:flex items-center gap-2.5 font-mono font-bold text-xs md:text-sm">
                <span>TPRU 120526</span>
                <span className="grid place-items-center h-6 w-6 border-2 border-cargo-navy">3</span>
                <span>22G1</span>
            </p>
            <LockRod className="hidden lg:block left-10" handleTop="52%" />
            <LockRod className="hidden lg:block left-24" handleTop="58%" />

            <motion.div
                style={{ y: lift }}
                className="relative flex-1 grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] gap-12 lg:gap-16 items-center px-5 sm:px-8 lg:pl-44 lg:pr-16 xl:pr-24 pt-14 pb-20 lg:py-16 max-w-[1600px] w-full mx-auto"
            >
                <div className="min-w-0 [container-type:inline-size]">

                    <h1
                        id="hero-name"
                        aria-label={p.name}
                        className="stencil font-black text-[min(25cqi,13rem)] -ml-1 flex"
                    >
                        {name.map((char, i) => (
                            <motion.span
                                key={`${char}-${i}`}
                                aria-hidden="true"
                                initial={reduce ? false : { clipPath: "inset(0 0 100% 0)", filter: "blur(10px)", y: 30 }}
                                animate={{ clipPath: "inset(0 0 0% 0)", filter: "blur(0px)", y: 0 }}
                                transition={{ duration: 0.7, ease: EASE, delay: 0.25 + i * 0.06 }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.div
                        initial={reduce ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
                    >
                        <p className="font-cond font-bold uppercase text-2xl md:text-4xl tracking-[0.02em] mt-5 leading-tight">
                            {p.role}
                        </p>
                        <p className="mt-3 text-lg md:text-xl font-medium max-w-xl">{p.tagline}</p>

                        <div className="flex flex-wrap gap-3 mt-9">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2.5 h-14 px-7 bg-cargo-navy text-cargo-concrete font-cond font-bold uppercase tracking-[0.1em] text-base shadow-[0_10px_24px_-10px_rgba(20,33,61,0.7)] hover:-translate-y-0.5 transition-transform duration-300 ease-crane"
                            >
                                <Mail className="w-5 h-5" />
                                {t.hero.contactCta}
                            </a>
                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 h-14 px-7 bg-accent text-cargo-navy font-cond font-bold uppercase tracking-[0.1em] text-base hover:-translate-y-0.5 transition-transform duration-300 ease-crane"
                            >
                                <Download className="w-5 h-5" />
                                {t.hero.downloadCv}
                            </a>
                            <div className="flex gap-3">
                            <a
                                href={p.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.hero.linkedin}
                                className="grid place-items-center h-14 w-14 border-2 border-cargo-navy hover:bg-cargo-navy hover:text-primary transition-colors"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.hero.github}
                                className="grid place-items-center h-14 w-14 border-2 border-cargo-navy hover:bg-cargo-navy hover:text-primary transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Plaque d'identification suspendue au crochet de la grue */}
                <div className="relative justify-self-center lg:justify-self-end w-full max-w-[360px] lg:self-start lg:mt-6">
                    <motion.div
                        initial={reduce ? false : { y: -420 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 13, mass: 1.1, delay: 0.35 }}
                    >
                        <span aria-hidden="true" className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-full h-[60vh] w-[3px] bg-cargo-navy" />
                        <span aria-hidden="true" className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-7 h-8 w-8 border-[5px] border-cargo-navy border-t-transparent rounded-full" />
                        <motion.div style={{ rotate: plateSwing, transformOrigin: "50% -40px" }}>
                        <motion.div
                            style={{ transformOrigin: "50% -40px" }}
                            initial={reduce ? false : { rotate: -7 }}
                            animate={{ rotate: reduce ? 0 : [-7, 5, -3, 1.5, 0] }}
                            transition={{ duration: 2.4, ease: "easeOut", delay: 0.9 }}
                            className="relative bg-base-200 text-base-content shadow-[0_28px_50px_-18px_rgba(20,33,61,0.75)]"
                        >
                            {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos) => (
                                <span key={pos} aria-hidden="true" className={`absolute ${pos} h-2.5 w-2.5 rounded-full bg-base-300 shadow-[inset_0_-1px_0_rgba(0,0,0,0.35)]`} />
                            ))}
                            <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b-2 border-base-content">
                                <span className="field-label">{t.hero.plateTitle}</span>
                                <span className="font-mono text-xs font-bold">CSC</span>
                            </div>
                            <div className="p-3">
                                <ProtectedImage
                                    src={img}
                                    alt={t.hero.photoAlt}
                                    watermarkText={`${p.name} · portfolio`}
                                    className="w-full aspect-[4/3.4] overflow-hidden bg-base-300 grayscale-[15%] contrast-[1.05]"
                                    objectPosition="center top"
                                />
                            </div>
                            <dl className="grid grid-cols-2 border-t-2 border-base-content text-sm">
                                {[
                                    [t.hero.origin, p.location],
                                    [t.hero.destination, p.mobility],
                                    [t.hero.experience, t.hero.experienceValue],
                                    [t.hero.companies, "3"],
                                ].map(([label, value], i) => (
                                    <div
                                        key={label}
                                        className={`px-4 py-2.5 ${i % 2 === 0 ? "border-r-2" : ""} ${i < 2 ? "border-b-2" : ""} border-base-content`}
                                    >
                                        <dt className="field-label opacity-75">{label}</dt>
                                        <dd className="font-semibold leading-snug mt-0.5">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <p className="flex items-center gap-2 px-4 py-3 bg-success text-white font-cond font-semibold uppercase tracking-[0.08em] text-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-70" />
                                    <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
                                </span>
                                {t.hero.status}
                            </p>
                        </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="relative h-4 hazard" aria-hidden="true" />
            <a
                href="#about"
                aria-label={t.hero.scrollNext}
                className="absolute bottom-8 right-6 md:right-10 grid place-items-center h-12 w-12 bg-cargo-navy text-accent hover:translate-y-1 transition-transform"
            >
                <ArrowDown className="w-5 h-5" />
            </a>
        </section>
    )
}

export default Hero
