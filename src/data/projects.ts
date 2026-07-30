export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
}

// Section en attente de contenu : ne pas inventer de projets réels ici.
// À compléter avec de vrais projets (infra, CI/CD, automatisation...).
export const projects: Project[] = [
    { id: 1, title: "Projet à venir", description: "Description à compléter.", technologies: [] },
    { id: 2, title: "Projet à venir", description: "Description à compléter.", technologies: [] },
    { id: 3, title: "Projet à venir", description: "Description à compléter.", technologies: [] },
]
