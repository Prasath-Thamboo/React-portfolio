import type { Lang } from "../context/language-context"

export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    image?: string
    url?: string
}

// Projets réels uniquement : ne pas inventer de contenu ici.
//
// Pour ajouter un projet avec une image et un lien :
// 1. Placez l'image dans public/projects/ (ex: public/projects/mon-projet.png)
// 2. Renseignez image: "/projects/mon-projet.png"
// 3. Renseignez url: "https://..." — un bouton s'affichera pour ouvrir le lien dans un nouvel onglet
export const projects: Record<Lang, Project[]> = {
    fr: [
        { id: 1, title: "Navilone", description: "Présenter les activités de la société Navilone", technologies: ["React", "Node.js"], image: "/projects/1.png", url: "https://www.navilone.com/" },
        { id: 2, title: "Visual and Ko", description: "Agence web proposant des solutions clés en main : création de site, SEO et publicité en ligne.", technologies: ["React", "Node.js"], image: "/projects/2.png", url: "https://www.visualandko.com/fr" },
        { id: 3, title: "Seranya", description: "Plateforme communautaire par abonnement autour du yoga et des enseignements bouddhistes.", technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"], image: "/projects/3.png", url: "https://www.seranya-blog.com/" },
        { id: 4, title: "TechandCompare", description: "Site d'actualités et de comparatifs tech : smartphones, consoles, ordinateurs et jeux vidéo.", technologies: ["React", "Node.js", "PHP"], image: "/projects/5.png", url: "https://techandcompare.com/" },
        { id: 5, title: "Batchily", description: "Site vitrine d'un chorégraphe et directeur artistique pour clips musicaux, événements live et projets commerciaux.", technologies: ["React", "Node.js"], image: "/projects/7.png", url: "https://batchily.com/" },
        { id: 6, title: "Serrurier de Proximité", description: "Site vitrine d'un service de dépannage en serrurerie d'urgence en Île-de-France.", technologies: ["React", "Node.js"], image: "/projects/4.png", url: "https://serrurier-de-proximite.fr/" },
        { id: 7, title: "Cyria", description: "Site e-commerce d'une marque de mobilier urbain design.", technologies: ["React", "Node.js"], image: "/projects/6.png", url: "https://cyria.net/fr/" },
        { id: 8, title: "Counter-inst", description: "Widget de compteur de followers Instagram en temps réel pour vitrines et tableaux de bord.", technologies: ["React", "Node.js"], image: "/projects/8.png", url: "https://counter-inst.com" },
    ],
    en: [
        { id: 1, title: "Navilone", description: "Showcasing Navilone's activities", technologies: ["React", "Node.js"], image: "/projects/1.png", url: "https://www.navilone.com/" },
        { id: 2, title: "Visual and Ko", description: "Web agency offering turnkey solutions: website creation, SEO, and online advertising.", technologies: ["React", "Node.js"], image: "/projects/2.png", url: "https://www.visualandko.com/fr" },
        { id: 3, title: "Seranya", description: "Subscription-based community platform centered on yoga and Buddhist teachings.", technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"], image: "/projects/3.png", url: "https://www.seranya-blog.com/" },
        { id: 4, title: "TechandCompare", description: "Tech news and comparison site covering smartphones, consoles, computers, and video games.", technologies: ["React", "Node.js", "PHP"], image: "/projects/5.png", url: "https://techandcompare.com/" },
        { id: 5, title: "Batchily", description: "Showcase site for a choreographer and artistic director working on music videos, live events, and commercial projects.", technologies: ["React", "Node.js"], image: "/projects/7.png", url: "https://batchily.com/" },
        { id: 6, title: "Serrurier de Proximité", description: "Showcase site for an emergency locksmith service across Île-de-France.", technologies: ["React", "Node.js"], image: "/projects/4.png", url: "https://serrurier-de-proximite.fr/" },
        { id: 7, title: "Cyria", description: "E-commerce site for a design-led urban furniture brand.", technologies: ["React", "Node.js"], image: "/projects/6.png", url: "https://cyria.net/fr/" },
        { id: 8, title: "Counter-inst", description: "Real-time Instagram follower counter widget for storefronts and dashboards.", technologies: ["React", "Node.js"], image: "/projects/8.png", url: "https://counter-inst.com" },
    ],
}
