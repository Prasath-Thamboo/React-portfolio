export interface Experience {
    id: number
    role: string
    company: string
    period: string
    location: string
    missions: string[]
    icon: string
    current?: boolean
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: "Ingénieur Logiciel — Backend NodeJS & Architectures API",
        company: "Navilone",
        period: "2024–2026",
        location: "Fontainebleau, France",
        current: true,
        icon: "Server",
        missions: [
            "Conception et développement d'applications sur-mesure selon l'architecture globale",
            "Évolution des applications existantes en fonction des besoins métiers",
            "Analyse des besoins et suivi régulier avec les utilisateurs",
            "Conception et optimisation des modèles de données sous Oracle",
            "Développement de composants backend sécurisés (Node.js)",
            "Interfaces frontend dynamiques et multiplateformes avec Flutter",
            "Tests unitaires et tests d'acceptation utilisateurs",
            "Exploration et intégration d'outils d'IA agentique dans les workflows de développement",
        ],
    },
    {
        id: 2,
        role: "Développeur Full-Stack PHP / Symfony & Node.js",
        company: "Visual&KO",
        period: "2023–2024",
        location: "Paris, France",
        icon: "Code2",
        missions: [
            "Développement de modules applicatifs robustes (PHP, Symfony)",
            "Conception d'interfaces web réactives et ergonomiques",
            "Scripts SQL et requêtes optimisées sur Oracle",
            "Rédaction de documentation technique et guides d'utilisation",
            "Collaboration en équipe agile pluridisciplinaire, livraison de releases",
        ],
    },
    {
        id: 3,
        role: "Développeur Logiciel Junior",
        company: "Fydgest",
        period: "2019–2022",
        location: "Paris, France",
        icon: "GraduationCap",
        missions: [
            "Développement et correctifs de premier niveau sur applications internes",
            "Plans de tests unitaires automatisés",
            "Support technique aux utilisateurs finaux en phase de recette",
            "Rédaction de fiches de spécifications techniques",
        ],
    },
]
