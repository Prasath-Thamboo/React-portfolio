import type { Lang } from "../context/language-context"

export interface Chapter {
    id: string
    num: string
    label: string
}

export const CHAPTERS: Record<Lang, Chapter[]> = {
    fr: [
        { id: "home", num: "00", label: "Accueil" },
        { id: "about", num: "01", label: "À propos" },
        { id: "experience", num: "02", label: "Expérience" },
        { id: "skills", num: "03", label: "Compétences" },
        { id: "projects", num: "04", label: "Projets" },
        { id: "education", num: "05", label: "Formations" },
        { id: "contact", num: "06", label: "Contact" },
    ],
    en: [
        { id: "home", num: "00", label: "Home" },
        { id: "about", num: "01", label: "About" },
        { id: "experience", num: "02", label: "Experience" },
        { id: "skills", num: "03", label: "Skills" },
        { id: "projects", num: "04", label: "Projects" },
        { id: "education", num: "05", label: "Education" },
        { id: "contact", num: "06", label: "Contact" },
    ],
}
