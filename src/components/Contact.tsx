import { useState, type FormEvent } from "react"
import { Mail, LinkedinIcon, Github, Send, Languages } from "lucide-react"
import Title from "./Title"
import Reveal from "./common/Reveal"
import GlassCard from "./common/GlassCard"
import RadialGauge from "./common/RadialGauge"
import { profile } from "../data/profile"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const LEVEL_PERCENT: Record<string, number> = {
    Natif: 100,
    Native: 100,
    C2: 95,
    C1: 85,
    B2: 70,
    B1: 50,
    A2: 30,
    A1: 15,
}

const levelToPercent = (level: string) => LEVEL_PERCENT[level] ?? 50

const Contact = () => {
    const [sent, setSent] = useState(false)
    const { lang } = useLanguage()
    const p = profile[lang]
    const t = ui[lang]

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const name = (form.elements.namedItem("name") as HTMLInputElement).value
        const email = (form.elements.namedItem("email") as HTMLInputElement).value
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

        const subject = encodeURIComponent(`Contact portfolio — ${name}`)
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
        window.location.href = `mailto:${p.email}?subject=${subject}&body=${body}`
        setSent(true)
    }

    return (
        <section id="contact" className="relative py-20 md:py-24 px-5 md:px-[8%] lg:px-[12%] scroll-mt-24 overflow-hidden">
            <Title title={t.sections.contact} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Reveal className="flex flex-col gap-4">
                    <a href={`mailto:${p.email}`} className="block">
                        <GlassCard className="flex items-center gap-4 p-5">
                            <div className="p-2.5 bg-accent/10 rounded-xl shrink-0">
                                <Mail className="text-accent w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wide opacity-50">{t.contact.email}</p>
                                <p className="text-sm font-semibold">{p.email}</p>
                            </div>
                        </GlassCard>
                    </a>

                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                        <GlassCard className="flex items-center gap-4 p-5">
                            <div className="p-2.5 bg-accent/10 rounded-xl shrink-0">
                                <LinkedinIcon className="text-accent w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wide opacity-50">LinkedIn</p>
                                <p className="text-sm font-semibold">{p.name}</p>
                            </div>
                        </GlassCard>
                    </a>

                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="block">
                        <GlassCard className="flex items-center gap-4 p-5">
                            <div className="p-2.5 bg-accent/10 rounded-xl shrink-0">
                                <Github className="text-accent w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wide opacity-50">GitHub</p>
                                <p className="text-sm font-semibold">{p.name}</p>
                            </div>
                        </GlassCard>
                    </a>

                    <GlassCard interactive={false} className="p-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-accent/10 rounded-xl shrink-0">
                                <Languages className="text-accent w-5 h-5" />
                            </div>
                            <p className="text-xs uppercase tracking-wide opacity-50">{t.contact.languages}</p>
                        </div>
                        <div className="flex gap-6 justify-around">
                            {p.languages.map((language) => (
                                <div key={language.name} className="flex flex-col items-center gap-2">
                                    <RadialGauge percent={levelToPercent(language.level)} size={64} label={language.level} />
                                    <span className="text-xs font-medium opacity-70">{language.name}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </Reveal>

                <Reveal delay={100}>
                    <GlassCard interactive={false} className="p-6">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <div className="form-control">
                                <label className="label pb-1" htmlFor="name">
                                    <span className="label-text text-xs uppercase tracking-wide opacity-60">{t.contact.name}</span>
                                </label>
                                <input id="name" name="name" type="text" required className="input input-bordered w-full bg-base-100/50" />
                            </div>
                            <div className="form-control">
                                <label className="label pb-1" htmlFor="email">
                                    <span className="label-text text-xs uppercase tracking-wide opacity-60">{t.contact.email}</span>
                                </label>
                                <input id="email" name="email" type="email" required className="input input-bordered w-full bg-base-100/50" />
                            </div>
                            <div className="form-control">
                                <label className="label pb-1" htmlFor="message">
                                    <span className="label-text text-xs uppercase tracking-wide opacity-60">{t.contact.message}</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="textarea textarea-bordered w-full bg-base-100/50"
                                />
                            </div>
                            <button type="submit" className="btn btn-accent rounded-full gap-2 mt-2">
                                <Send className="w-4 h-4" />
                                {t.contact.send}
                            </button>
                            {sent && (
                                <p className="text-xs text-secondary text-center">
                                    {t.contact.sentNotice}
                                </p>
                            )}
                        </form>
                    </GlassCard>
                </Reveal>
            </div>
        </section>
    )
}

export default Contact
