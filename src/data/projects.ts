export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    image?: string
    url?: string
}

// Section en attente de contenu : ne pas inventer de projets réels ici.
// À compléter avec de vrais projets (infra, CI/CD, automatisation...).
//
// Pour ajouter un projet avec une image et un lien :
// 1. Placez l'image dans public/projects/ (ex: public/projects/mon-projet.png)
// 2. Renseignez image: "/projects/mon-projet.png"
// 3. Renseignez url: "https://..." — un bouton s'affichera pour ouvrir le lien dans un nouvel onglet
export const projects: Project[] = [
    { id: 1, title: "Navilone", description: "Présenter les activités de la société Navilone", technologies: ["React", "Node.js"], image: "/projects/1.png", url: "https://www.navilone.com/" },
    { id: 2, title: "Visual and Ko", description: "Description à compléter.", technologies: ["React", "Node.js"], image: "/projects/2.png", url: "https://www.visualandko.com/fr" },
    { id: 3, title: "Seranya", description: "Description à compléter.", technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"], image: "/projects/3.png", url: "https://..." },
    { id: 4, title: "TechandCompare", description: "Présenter les activités de la société Navilone", technologies: ["React", "Node.js", "PHP"], image: "/projects/4.png", url: "https://www.navilone.com/" },
    { id: 5, title: "Batchily", description: "Présenter les activités de la société Navilone", technologies: ["React", "Node.js"], image: "/projects/5.png", url: "https://www.navilone.com/" },
    { id: 6, title: "Serrurier de Proximité", description: "Présenter les activités de la société Navilone", technologies: ["React", "Node.js"], image: "/projects/6.png", url: "https://www.navilone.com/" },
    { id: 7, title: "Cyria", description: "Présenter les activités de la société Navilone", technologies: ["React", "Node.js"], image: "/projects/7.png", url: "https://www.navilone.com/" },
    { id: 8, title: "Counter-inst", description: "Présenter les activités de la société Navilone", technologies: ["React", "Node.js"], image: "/projects/8.png", url: "https://www.navilone.com/" },


]
