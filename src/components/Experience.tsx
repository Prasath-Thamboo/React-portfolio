import { STATIC_RENDER } from "../lib/motion"
import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { MapPin, Ship } from "lucide-react"
import SectionHead from "./freight/SectionHead"
import { experiences } from "../data/experience"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Le parcours comme une route maritime : une ligne pointillée relie les escales,
 * le navire descend la route au rythme du défilement.
 */
const Experience = () => {
    const { lang } = useLanguage()
    const t = ui[lang]
    const routeRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: routeRef, offset: ["start 70%", "end 60%"] })
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })
    const shipTop = useTransform(progress, (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`)
    const wake = useTransform(progress, [0, 1], [0, 1])

    const items = experiences[lang]

    return (
        <section id="experience" className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-16 bg-neutral text-neutral-content overflow-hidden">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-3 hazard" />
            <SectionHead title={t.sections.experience} intro={t.experience.intro} tone="inverse" />

            <div ref={routeRef} className="relative max-w-6xl mx-auto pl-14 md:pl-24">
                {/* Route maritime */}
                <div aria-hidden="true" className="absolute left-5 md:left-9 top-0 bottom-0 w-0 border-l-[3px] border-dashed border-neutral-content/30" />
                <motion.div
                    aria-hidden="true"
                    className="absolute left-5 md:left-9 top-0 bottom-0 w-[3px] -ml-[3px] bg-primary origin-top"
                    style={{ scaleY: wake }}
                />
                <motion.div
                    aria-hidden="true"
                    className="absolute left-5 md:left-9 -translate-x-1/2 -translate-y-1/2 z-10 grid place-items-center h-11 w-11 bg-primary text-cargo-navy shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)]"
                    style={{ top: shipTop }}
                >
                    <Ship className="w-5 h-5" />
                </motion.div>

                <ol className="space-y-16 md:space-y-24">
                    {items.map((exp) => (
                        <motion.li
                            key={exp.id}
                            initial={STATIC_RENDER ? false : { opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, ease: EASE }}
                            className="relative grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-12"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute -left-[2.9rem] md:-left-[4.6rem] top-3 h-5 w-5 rotate-45 border-[3px] border-accent bg-neutral"
                            />
                            <div className="lg:sticky lg:top-28 self-start">
                                <h3 className="stencil font-black uppercase text-[clamp(3rem,7vw,5.5rem)]">{exp.company}</h3>
                                <dl className="mt-5 grid grid-cols-2 border-y-2 border-neutral-content/40 max-w-sm">
                                    <div className="py-3 pr-3 border-r-2 border-neutral-content/40">
                                        <dt className="field-label text-accent">{t.experience.leg}</dt>
                                        <dd className="font-mono font-bold mt-1">{exp.period}</dd>
                                    </div>
                                    <div className="py-3 pl-3">
                                        <dt className="field-label text-accent">Port</dt>
                                        <dd className="flex items-center gap-1.5 mt-1 font-semibold">
                                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                                            {exp.location}
                                        </dd>
                                    </div>
                                </dl>
                                {exp.current && (
                                    <div className="mt-6">
                                        <span className="inline-flex items-center gap-2.5 -rotate-3 bg-success text-white stencil font-black uppercase text-2xl px-4 py-1.5 border-2 border-white/80 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.7)]"><span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />{t.experience.current}</span>
                                    </div>
                                )}
                            </div>
                            <div className="bg-cargo-concrete text-cargo-navy border-2 border-cargo-navy shadow-[0_24px_40px_-24px_rgba(0,0,0,0.7)]">
                                <div className="px-5 md:px-7 py-4 border-b-2 border-cargo-navy">
                                    <p className="field-label opacity-75">{lang === "fr" ? "Poste" : "Role"}</p>
                                    <p className="font-cond font-bold uppercase text-xl md:text-2xl leading-tight mt-1">{exp.role}</p>
                                </div>
                                <div className="px-5 md:px-7 py-5">
                                    <p className="field-label opacity-75">{t.experience.missions}</p>
                                    <ul className="mt-3 grid gap-2.5">
                                        {exp.missions.map((mission) => (
                                            <li key={mission} className="grid grid-cols-[14px_1fr] gap-3 leading-relaxed">
                                                <span aria-hidden="true" className="mt-2.5 h-[3px] w-3.5 bg-primary" />
                                                {mission}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Experience
