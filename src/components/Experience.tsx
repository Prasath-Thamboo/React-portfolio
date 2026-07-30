import { motion } from "framer-motion"
import { Server, Code2, GraduationCap, MapPin, type LucideIcon } from "lucide-react"
import Title from "./Title"
import Reveal from "./common/Reveal"
import GlassCard from "./common/GlassCard"
import { experiences } from "../data/experience"

const iconMap: Record<string, LucideIcon> = {
    Server,
    Code2,
    GraduationCap,
}

const Experience = () => {
    return (
        <section id="experience" className="relative py-20 md:py-24 px-5 md:px-[8%] lg:px-[12%] scroll-mt-24 overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 -right-20 -z-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
            />
            <Title title="Expérience professionnelle" />

            <div className="relative max-w-3xl mx-auto pl-9 md:pl-12">
                <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-base-content/10 overflow-hidden">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="w-full h-full bg-gradient-to-b from-accent via-secondary to-accent"
                    />
                </div>

                {experiences.map((exp, i) => {
                    const Icon = iconMap[exp.icon]
                    return (
                        <Reveal key={exp.id} delay={i * 80} className="relative mb-10 last:mb-0">
                            <span className="absolute -left-9 md:-left-12 top-1 w-4 h-4 rounded-full border-2 border-accent bg-base-100 flex items-center justify-center z-10">
                                {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                            </span>

                            <GlassCard className="p-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="p-2.5 bg-accent/10 rounded-xl shrink-0">
                                        {Icon && <Icon className="text-accent w-5 h-5" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-base leading-snug">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                                            <span className="text-sm font-semibold text-accent">{exp.company}</span>
                                            {exp.current && (
                                                <span className="badge badge-secondary badge-sm font-mono">En poste</span>
                                            )}
                                            <span className="text-xs opacity-40">·</span>
                                            <span className="text-xs font-mono opacity-60">{exp.period}</span>
                                            <span className="text-xs opacity-40">·</span>
                                            <span className="text-xs opacity-55 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-1.5 ml-1">
                                    {exp.missions.map((mission) => (
                                        <li key={mission} className="flex items-start gap-2 text-sm opacity-70">
                                            <span className="text-accent mt-0.5 shrink-0 text-xs">▸</span>
                                            {mission}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </Reveal>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience
