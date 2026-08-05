import { Layers, ShieldCheck, Sparkles, CheckCircle2, Languages, type LucideIcon } from "lucide-react"
import Title from "./Title"
import Reveal from "./common/Reveal"
import GlassCard from "./common/GlassCard"
import CountUp from "./common/CountUp"
import Sparkline from "./common/Sparkline"
import { profile } from "../data/profile"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const iconMap: Record<string, LucideIcon> = {
    Layers,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
    Languages,
}

const About = () => {
    const { lang } = useLanguage()
    const p = profile[lang]
    const t = ui[lang]

    return (
        <section id="about" className="relative py-20 md:py-24 px-5 md:px-[8%] lg:px-[12%] scroll-mt-24 overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/3 -left-20 -z-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
            />
            <Title title={t.sections.about} />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <Reveal className="col-span-2 lg:col-span-2 lg:row-span-2">
                    <GlassCard interactive={false} className="h-full p-6 md:p-8 flex items-center">
                        <p className="opacity-75 leading-relaxed text-sm md:text-base">{p.summary}</p>
                    </GlassCard>
                </Reveal>

                <Reveal delay={60}>
                    <GlassCard className="h-full p-5 flex flex-col items-center justify-center text-center gap-1">
                        <CountUp value={5} suffix="+" className="font-mono text-3xl font-bold text-accent" />
                        <span className="text-xs opacity-60 uppercase tracking-wide">{p.stats[0].label}</span>
                        <Sparkline data={[2, 3, 3, 4, 4, 5]} className="mt-1 opacity-70" />
                    </GlassCard>
                </Reveal>

                <Reveal delay={100}>
                    <GlassCard className="h-full p-5 flex flex-col items-center justify-center text-center gap-1">
                        <CountUp value={3} className="font-mono text-3xl font-bold text-accent" />
                        <span className="text-xs opacity-60 uppercase tracking-wide">{p.stats[1].label}</span>
                        <Sparkline data={[1, 1, 2, 2, 3, 3]} className="mt-1 opacity-70" />
                    </GlassCard>
                </Reveal>

                <Reveal delay={140}>
                    <GlassCard className="h-full p-5 flex flex-col items-center justify-center text-center gap-1">
                        <span className="font-mono text-sm font-bold text-accent leading-tight">Node.js</span>
                        <span className="font-mono text-sm font-bold text-accent leading-tight">&amp; DevOps</span>
                        <span className="text-xs opacity-60 uppercase tracking-wide mt-1">{p.stats[2].label}</span>
                    </GlassCard>
                </Reveal>

                <Reveal delay={180}>
                    <GlassCard className="h-full p-5 flex flex-col items-center justify-center text-center gap-1">
                        <span className="font-mono text-2xl font-bold text-accent">FR / EN</span>
                        <span className="text-xs opacity-60 uppercase tracking-wide">{p.stats[3].label}</span>
                    </GlassCard>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto">
                {p.highlights.map((highlight, i) => {
                    const Icon = iconMap[highlight.icon]
                    return (
                        <Reveal key={highlight.title} delay={i * 60}>
                            <GlassCard className="p-5 h-full">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                                        {Icon && <Icon className="text-accent w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base mb-1">{highlight.title}</h3>
                                        <p className="text-sm opacity-65 leading-relaxed">{highlight.description}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </Reveal>
                    )
                })}
            </div>
        </section>
    )
}

export default About
