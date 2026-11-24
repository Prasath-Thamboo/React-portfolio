import { STATIC_RENDER } from "../lib/motion"
import { motion } from "framer-motion"
import SectionHead from "./freight/SectionHead"
import { skillCategories } from "../data/skills"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

// Couleurs de flotte : chaque conteneur garde un contraste texte ≥ 4.5:1
const FLEET = [
    { bg: "bg-cargo-orange", fg: "text-cargo-navy", label: "bg-cargo-navy text-cargo-concrete" },
    { bg: "bg-cargo-navy", fg: "text-cargo-concrete", label: "bg-cargo-concrete text-cargo-navy" },
    { bg: "bg-cargo-yellow", fg: "text-cargo-navy", label: "bg-cargo-navy text-cargo-concrete" },
    { bg: "bg-cargo-steel", fg: "text-white", label: "bg-white text-cargo-navy" },
    { bg: "bg-cargo-green", fg: "text-white", label: "bg-white text-cargo-navy" },
]

const PREFIX: Record<number, string> = {
    1: "IAC", 2: "CID", 3: "AUT", 4: "SYS", 5: "NET", 6: "SEC", 7: "OBS",
    8: "OPS", 9: "SCR", 10: "BCK", 11: "FRT", 12: "DBS", 13: "TLS",
}

/**
 * Le parc à conteneurs : les compétences empilées par la grue, chaque catégorie
 * étant un conteneur dont la longueur (20 ou 40 pieds) suit le nombre d'éléments.
 */
const Skills = () => {
    const { lang } = useLanguage()
    const t = ui[lang]
    const cats = skillCategories[lang]

    return (
        <section id="skills" className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-16">
            <SectionHead title={t.sections.skills} intro={t.skills.intro} />

            <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 [grid-auto-flow:dense]">
                {cats.map((cat, i) => {
                    const fleet = FLEET[i % FLEET.length]
                    const isForty = cat.items.length >= 4
                    return (
                        <motion.li
                            key={cat.id}
                            initial={STATIC_RENDER ? false : { y: -90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ type: "spring", stiffness: 260, damping: 19, mass: 0.9, delay: (i % 4) * 0.08 }}
                            whileHover={{ y: -6 }}
                            className={`relative ${fleet.bg} ${fleet.fg} ${isForty ? "sm:col-span-2" : ""} min-h-[170px] flex flex-col shadow-[0_14px_24px_-16px_rgba(20,33,61,0.8)]`}
                        >
                            <div aria-hidden="true" className="absolute inset-0 corrugated-fine" />
                            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-black/20" />
                            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-black/20" />
                            <h3 className="relative px-4 pt-5 stencil font-black uppercase text-3xl md:text-[2.1rem] break-words [hyphens:auto]">{cat.category}</h3>
                            <span aria-hidden="true" className="absolute right-3 bottom-3 font-mono text-[10px] font-bold opacity-80 [writing-mode:vertical-rl] rotate-180">
                                {PREFIX[cat.id] ?? "CRG"}U {String(cat.id).padStart(2, "0")}
                            </span>
                            <ul className="relative mt-auto flex flex-wrap gap-1.5 pl-4 pr-9 pb-5 pt-4">
                                {cat.items.map((item) => (
                                    <li key={item} className={`${fleet.label} px-2 py-1 font-cond font-semibold text-sm leading-tight`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Skills
