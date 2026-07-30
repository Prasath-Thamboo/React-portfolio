import { GraduationCap, Award } from "lucide-react"
import Title from "./Title"
import Reveal from "./common/Reveal"
import GlassCard from "./common/GlassCard"
import { education } from "../data/education"

const Education = () => {
    return (
        <section id="education" className="relative py-20 md:py-24 px-5 md:px-[8%] lg:px-[12%] scroll-mt-24 overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-10 -right-20 -z-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
            />
            <Title title="Formations & Certifications" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {education.map((edu, i) => (
                    <Reveal key={edu.id} delay={i * 60}>
                        <GlassCard className="p-5 h-full">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-accent/10 rounded-xl shrink-0">
                                    {i === 0 ? (
                                        <Award className="text-accent w-5 h-5" />
                                    ) : (
                                        <GraduationCap className="text-accent w-5 h-5" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm leading-snug">{edu.degree}</h3>
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5">
                                        <span className="text-sm font-semibold text-accent">{edu.school}</span>
                                        <span className="text-xs opacity-40">·</span>
                                        <span className="text-xs font-mono opacity-60">{edu.period}</span>
                                        <span className="text-xs opacity-40">·</span>
                                        <span className="text-xs opacity-55">{edu.location}</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Education
