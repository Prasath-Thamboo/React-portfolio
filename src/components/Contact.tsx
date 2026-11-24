import { STATIC_RENDER } from "../lib/motion"
import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, LinkedinIcon, Github, Send, ArrowUpRight } from "lucide-react"
import { profile } from "../data/profile"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const EASE = [0.22, 1, 0.36, 1] as const

/** Code-barres décoratif dérivé de l'adresse email (largeurs de barres déterministes) */
const Barcode = ({ seed }: { seed: string }) => {
    const bars = Array.from(seed).flatMap((c) => {
        const n = c.charCodeAt(0)
        return [(n % 3) + 1, ((n >> 2) % 2) + 1, ((n >> 3) % 3) + 1]
    })
    let x = 0
    return (
        <svg aria-hidden="true" viewBox={`0 0 ${bars.reduce((s, b) => s + b + 1.5, 0)} 40`} className="h-12 w-full" preserveAspectRatio="none">
            {bars.map((w, i) => {
                const rect = <rect key={i} x={x} y={0} width={w} height={40} fill="currentColor" />
                x += w + 1.5
                return rect
            })}
        </svg>
    )
}

const Contact = () => {
    const [sent, setSent] = useState(false)
    const { lang } = useLanguage()
    const p = profile[lang]
    const t = ui[lang]
    const c = t.contact

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

    const inputClass =
        "w-full bg-transparent border-0 border-b-2 border-base-content/40 focus:border-primary focus:outline-none py-2 text-lg font-medium transition-colors placeholder:text-base-content/45"

    return (
        <section id="contact" className="relative bg-accent text-cargo-navy py-24 md:py-32 px-5 sm:px-8 lg:px-16 overflow-hidden">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-3 hazard" />

            <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 lg:gap-16 items-start">
                <div>
                    <h2 className="stencil font-black uppercase text-[clamp(3.5rem,10vw,8rem)]">{t.sections.contact}</h2>
                    <p className="mt-6 text-lg md:text-xl font-medium max-w-md">{c.intro}</p>

                    <dl className="mt-10 border-t-2 border-cargo-navy">
                        <div className="py-4 border-b-2 border-cargo-navy">
                            <dt className="field-label">{c.recipient}</dt>
                            <dd className="mt-1">
                                <a href={`mailto:${p.email}`} className="inline-flex items-center gap-2 font-cond font-bold text-2xl md:text-3xl hover:underline decoration-[3px]">
                                    <Mail className="w-6 h-6" />
                                    {p.email}
                                </a>
                            </dd>
                        </div>
                        <div className="py-4 border-b-2 border-cargo-navy">
                            <dt className="field-label">{c.channels}</dt>
                            <dd className="mt-2 flex flex-wrap gap-3">
                                <a
                                    href={p.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 h-11 px-4 border-2 border-cargo-navy font-cond font-bold uppercase tracking-[0.08em] hover:bg-cargo-navy hover:text-accent transition-colors"
                                >
                                    <LinkedinIcon className="w-4 h-4" />
                                    {c.linkedinLabel}
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 h-11 px-4 border-2 border-cargo-navy font-cond font-bold uppercase tracking-[0.08em] hover:bg-cargo-navy hover:text-accent transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    {c.githubLabel}
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </dd>
                        </div>
                        <div className="py-4 border-b-2 border-cargo-navy">
                            <dt className="field-label">{c.languages}</dt>
                            <dd className="mt-1 flex flex-wrap gap-x-6 gap-y-1 font-semibold text-lg">
                                {p.languages.map((l) => (
                                    <span key={l.name}>
                                        {l.name} <span className="font-mono text-sm">{l.level}</span>
                                    </span>
                                ))}
                            </dd>
                        </div>
                    </dl>
                </div>

                {/* Étiquette d'expédition */}
                <motion.div
                    initial={STATIC_RENDER ? false : { opacity: 0, y: 70, rotate: 3 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0.8 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="relative bg-base-200 text-base-content border-2 border-cargo-navy shadow-[0_30px_50px_-24px_rgba(20,33,61,0.7)]"
                >
                    <div className="flex items-stretch border-b-2 border-base-content">
                        <div className="flex-1 px-5 py-4">
                            <p className="field-label opacity-75">{c.recipient}</p>
                            <p className="stencil font-black uppercase text-3xl mt-1">{p.name}</p>
                            <p className="font-medium">{p.mobility}</p>
                        </div>
                        <div className="grid place-items-center px-5 bg-neutral text-neutral-content stencil font-black text-4xl">CH</div>
                    </div>

                    <form onSubmit={handleSubmit} className="px-5 py-6 grid gap-6">
                        <p className="field-label opacity-75 -mb-3">{c.sender}</p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <label className="block">
                                <span className="field-label">{c.name}</span>
                                <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
                            </label>
                            <label className="block">
                                <span className="field-label">{c.email}</span>
                                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                            </label>
                        </div>
                        <label className="block">
                            <span className="field-label">{c.message}</span>
                            <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-y`} />
                        </label>
                        <button
                            type="submit"
                            className="group inline-flex items-center justify-center gap-3 h-14 px-6 bg-primary text-cargo-navy font-cond font-bold uppercase tracking-[0.12em] text-base shadow-[0_10px_20px_-10px_rgba(20,33,61,0.7)] hover:bg-cargo-navy hover:text-accent transition-colors"
                        >
                            <Send className="w-5 h-5 transition-transform duration-500 ease-crane group-hover:translate-x-1.5 group-hover:-translate-y-1" />
                            {c.send}
                        </button>
                        {sent && (
                            <p role="status" className="font-semibold text-success">
                                {c.sentNotice}
                            </p>
                        )}
                    </form>

                    <div className="px-5 pb-5 pt-1 border-t-2 border-base-content">
                        <Barcode seed={p.email} />
                        <p className="font-mono text-xs text-center mt-1 tracking-[0.3em]">TP · {p.email.toUpperCase()}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
