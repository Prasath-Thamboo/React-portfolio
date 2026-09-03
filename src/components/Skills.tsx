import {
    Boxes,
    Workflow,
    Bot,
    Cloud,
    Waypoints,
    ShieldCheck,
    Activity,
    LifeBuoy,
    Terminal,
    Code2,
    Smartphone,
    Database,
    Wrench,
    type LucideIcon,
} from "lucide-react"
import Title from "./Title"
import Reveal from "./common/Reveal"
import GlassCard from "./common/GlassCard"
import { skillCategories } from "../data/skills"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const iconMap: Record<string, LucideIcon> = {
    Boxes,
    Workflow,
    Bot,
    Cloud,
    Waypoints,
    ShieldCheck,
    Activity,
    LifeBuoy,
    Terminal,
    Code2,
    Smartphone,
    Database,
    Wrench,
}

const Skills = () => {
    const { lang } = useLanguage()
    const t = ui[lang]

    return (
        <section id="skills" className="relative py-20 md:py-24 px-5 md:px-[8%] lg:px-[12%] scroll-mt-24 overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 -left-20 -z-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
            />
            <Title title={t.sections.skills} />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr [grid-auto-flow:dense] max-w-5xl mx-auto">
                {skillCategories[lang].map((cat, i) => {
                    const Icon = iconMap[cat.icon]
                    const isWide = cat.items.length >= 4

                    return (
                        <Reveal key={cat.id} delay={i * 35} className={isWide ? "sm:col-span-2" : ""}>
                            <GlassCard className="p-5 h-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                                        {Icon && <Icon className="text-accent w-4 h-4" />}
                                    </div>
                                    <h3 className="font-semibold text-sm">{cat.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5 min-w-0">
                                    {cat.items.map((item) => (
                                        <span
                                            key={item}
                                            className="badge badge-outline badge-sm font-mono text-[11px] h-auto min-h-0 py-1 leading-snug whitespace-normal break-words text-left max-w-full"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </Reveal>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills
