import { STATIC_RENDER } from "../lib/motion"
import { motion } from "framer-motion"
import SectionHead from "./freight/SectionHead"
import { education } from "../data/education"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const TILTS = [-1.6, 1.2, -0.8, 1.8]

/** Les formations comme certificats agrafés au dossier de la cargaison */
const Education = () => {
    const { lang } = useLanguage()
    const t = ui[lang]

    return (
        <section id="education" className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-16">
            <SectionHead title={t.sections.education} intro={t.education.intro} />

            <ul className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {education[lang].map((edu, i) => (
                    <motion.li
                        key={edu.id}
                        initial={STATIC_RENDER ? false : { opacity: 0, y: 40, rotate: TILTS[i % TILTS.length] * 3 }}
                        whileInView={{ opacity: 1, y: 0, rotate: TILTS[i % TILTS.length] }}
                        whileHover={{ rotate: 0, y: -4 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ type: "spring", stiffness: 160, damping: 18, delay: (i % 2) * 0.08 }}
                        className="relative bg-base-200 perforated-top pt-8 pb-6 px-6 shadow-[0_20px_36px_-22px_rgba(20,33,61,0.6)]"
                    >
                        <span aria-hidden="true" className="absolute -top-3 left-10 h-7 w-3 bg-base-content/70" />
                        <div className="flex items-start justify-between gap-4 border-b-2 border-base-content pb-3">
                            <span className="field-label opacity-75">{t.education.certificate}</span>
                            <span className="font-mono text-sm font-bold">{edu.period}</span>
                        </div>
                        <p className="stencil font-black uppercase text-[2.6rem] md:text-5xl mt-4 text-primary">{edu.school}</p>
                        <h3 className="font-cond font-bold uppercase text-xl leading-tight mt-2">{edu.degree}</h3>
                        <p className="mt-3 text-sm opacity-80">{edu.location}</p>
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Education
