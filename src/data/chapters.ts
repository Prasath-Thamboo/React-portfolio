export interface Chapter {
    id: string
    num: string
    label: string
}

export const CHAPTERS: Chapter[] = [
    { id: "home", num: "00", label: "Accueil" },
    { id: "about", num: "01", label: "À propos" },
    { id: "experience", num: "02", label: "Expérience" },
    { id: "skills", num: "03", label: "Compétences" },
    { id: "projects", num: "04", label: "Projets" },
    { id: "education", num: "05", label: "Formations" },
    { id: "contact", num: "06", label: "Contact" },
]
