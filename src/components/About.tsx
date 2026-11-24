import { STATIC_RENDER } from "../lib/motion"
import { motion } from "framer-motion"
import SectionHead from "./freight/SectionHead"
import Stamp from "./freight/Stamp"
import { profile } from "../data/profile"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * « À propos » rendu comme un connaissement (bill of lading) : cases à champ,
 * filets épais, et les points forts listés comme lignes de cargaison.
 */
const About = () => {
    const { lang } = useLanguage()
    const p = profile[lang]
    const t = ui[lang]
    const a = t.about

    const Field = ({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) => (
        <div className={`p-4 md:p-5 border-base-content ${className}`}>
            <p className="field-label opacity-70">{label}</p>
            <div className="mt-1.5">{children}</div>
        </div>
    )

    return (
        <section id="about" className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-16">
            <SectionHead title={t.sections.about} intro={a.intro} />

            <motion.article
                initial={STATIC_RENDER ? false : { opacity: 0, y: 60, rotate: -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -0.4 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative max-w-6xl mx-auto bg-base-200 border-2 border-base-content shadow-[0_30px_60px_-30px_rgba(20,33,61,0.45)]"
            >
                <div className="flex items-center justify-between gap-4 px-4 md:px-5 py-3 bg-neutral text-neutral-content">
                    <span className="stencil font-black uppercase text-2xl md:text-3xl">
                        {lang === "fr" ? "Connaissement" : "Bill of lading"}
                    </span>
                    <span className="font-mono text-xs md:text-sm font-bold">B/L TP-2026-001</span>
                </div>

                <div className="grid md:grid-cols-3 border-b-2 border-base-content">
                    <Field label={a.shipper} className="md:border-r-2 border-b-2 md:border-b-0">
                        <p className="stencil font-black text-4xl uppercase">{p.name}</p>
                        <p className="font-semibold mt-1">{p.role}</p>
                    </Field>
                    <Field label={a.portOfLoading} className="md:border-r-2 border-b-2 md:border-b-0">
                        <p className="font-cond font-bold uppercase text-2xl">{p.location}</p>
                    </Field>
                    <Field label={a.destination}>
                        <p className="font-cond font-bold uppercase text-2xl text-primary">{p.mobility}</p>
                    </Field>
                </div>

                <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] border-b-2 border-base-content">
                    <Field label={a.goods} className="md:border-r-2 border-b-2 md:border-b-0">
                        <p className="text-base md:text-lg leading-relaxed max-w-[68ch]">{p.summary}</p>
                    </Field>
                    <div className="grid grid-rows-3">
                        <Field label={lang === "fr" ? "Spécialité" : "Specialty"} className="border-b-2 row-span-2">
                            <p className="font-cond font-bold uppercase text-2xl leading-tight">{p.stats[2].value}</p>
                            <p className="mt-2 opacity-85">{p.highlights[0].description}</p>
                        </Field>
                        <Field label={a.languages}>
                            <ul className="flex flex-wrap gap-x-4 gap-y-1 font-semibold">
                                {p.languages.map((l) => (
                                    <li key={l.name}>
                                        {l.name} <span className="font-mono text-sm opacity-75">{l.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </Field>
                    </div>
                </div>

                <div className="px-4 md:px-5 pt-5 pb-2">
                    <p className="field-label opacity-70">{a.lines}</p>
                </div>
                <table className="w-full text-left">
                    <thead className="hidden md:table-header-group">
                        <tr className="border-y-2 border-base-content field-label">
                            <th scope="col" className="px-5 py-2 w-72">{a.designation}</th>
                            <th scope="col" className="px-5 py-2">{a.details}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {p.highlights.map((h, i) => (
                            <motion.tr
                                key={h.title}
                                initial={STATIC_RENDER ? false : { opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.07 }}
                                className="grid md:table-row border-b border-base-content/25 last:border-b-0 hover:bg-accent/25 transition-colors"
                            >
                                <th scope="row" className="px-4 md:px-5 pt-4 md:py-4 font-cond font-bold uppercase text-lg tracking-[0.02em]">
                                    {h.title}
                                </th>
                                <td className="px-4 md:px-5 pt-1 pb-4 md:py-4 opacity-85">{h.description}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>

                <div className="absolute -bottom-7 right-6 md:right-12">
                    <Stamp label={a.original} tone="orange" rotate={-10} size="lg" />
                </div>
            </motion.article>
        </section>
    )
}

export default About
