export interface ProfileStat {
    label: string
    value: string
}

export interface Language {
    name: string
    level: string
}

export interface Highlight {
    title: string
    description: string
    icon: string
}

export interface Profile {
    name: string
    role: string
    tagline: string
    location: string
    mobility: string
    email: string
    linkedin: string
    languages: Language[]
    summary: string
    stats: ProfileStat[]
    highlights: Highlight[]
}

export const profile: Profile = {
    name: "T.",
    role: "Ingénieur DevOps & Infrastructure",
    tagline: "Du code à la production — Node.js, Terraform, CI/CD",
    location: "Paris, France",
    mobility: "Mobilité Suisse romande",
    email: "prasath1@hotmail.fr",
    linkedin: "https://www.linkedin.com/in/prasath-thamboo-it-devops-suisse/",
    languages: [
        { name: "Français", level: "Natif" },
        { name: "Anglais", level: "C1" },
    ],
    summary:
        "Ingénieur en informatique avec plus de 5 ans d'expérience dans le développement full stack et l'infrastructure. Spécialiste des architectures backend Node.js, des bases de données Oracle et des interfaces Flutter, aujourd'hui orienté vers l'automatisation d'infrastructure et les pratiques DevOps (IaC, CI/CD, observabilité). Fort esprit du service public, curiosité marquée pour l'IA agentique appliquée au développement, et rigueur dans la conception des modèles de données et les tests.",
    stats: [
        { label: "Ans d'expérience", value: "5+" },
        { label: "Entreprises", value: "3" },
        { label: "Expertise", value: "Node.js & DevOps" },
        { label: "Langues", value: "FR / EN" },
    ],
    highlights: [
        {
            title: "Polyvalence full stack",
            description: "Du backend Node.js au frontend Flutter, une compréhension complète du cycle de vie applicatif.",
            icon: "Layers",
        },
        {
            title: "Orientation service public",
            description: "Conception d'outils numériques fiables et adaptés aux besoins réels des utilisateurs.",
            icon: "ShieldCheck",
        },
        {
            title: "Innovation & IA",
            description: "Intégration d'outils d'IA agentique dans les workflows de développement.",
            icon: "Sparkles",
        },
        {
            title: "Qualité applicative",
            description: "Rigueur sur la conception des modèles de données et les stratégies de tests.",
            icon: "CheckCircle2",
        },
        {
            title: "Communication & bilinguisme",
            description: "Échanges fluides en français et en anglais avec équipes et utilisateurs.",
            icon: "Languages",
        },
    ],
}
