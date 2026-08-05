import type { Lang } from "../context/language-context"

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
    github: string
    languages: Language[]
    summary: string
    stats: ProfileStat[]
    highlights: Highlight[]
}

const shared = {
    name: "T.Prasath",
    email: "prasath1@hotmail.fr",
    linkedin: "https://www.linkedin.com/in/prasath-thamboo-it-devops-suisse/",
    github: "https://github.com/Prasath-Thamboo",
    location: "Paris, France",
}

export const profile: Record<Lang, Profile> = {
    fr: {
        ...shared,
        role: "Ingénieur DevOps & Infrastructure",
        tagline: "Du code à la production — Node.js, Terraform, CI/CD",
        mobility: "Mobilité Suisse romande",
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
    },
    en: {
        ...shared,
        role: "DevOps & Infrastructure Engineer",
        tagline: "From code to production — Node.js, Terraform, CI/CD",
        mobility: "Open to relocation — Swiss Romandy",
        languages: [
            { name: "French", level: "Native" },
            { name: "English", level: "C1" },
        ],
        summary:
            "Software engineer with 5+ years of experience in full-stack development and infrastructure. Specialized in Node.js backend architectures, Oracle databases and Flutter interfaces, now focused on infrastructure automation and DevOps practices (IaC, CI/CD, observability). Strong public-service mindset, keen interest in agentic AI applied to software development, and rigor in data modeling and testing.",
        stats: [
            { label: "Years of experience", value: "5+" },
            { label: "Companies", value: "3" },
            { label: "Expertise", value: "Node.js & DevOps" },
            { label: "Languages", value: "FR / EN" },
        ],
        highlights: [
            {
                title: "Full-stack versatility",
                description: "From the Node.js backend to the Flutter frontend, a complete grasp of the application lifecycle.",
                icon: "Layers",
            },
            {
                title: "Public-service mindset",
                description: "Designing reliable digital tools tailored to users' real needs.",
                icon: "ShieldCheck",
            },
            {
                title: "Innovation & AI",
                description: "Integrating agentic AI tools into development workflows.",
                icon: "Sparkles",
            },
            {
                title: "Application quality",
                description: "Rigor in data model design and testing strategies.",
                icon: "CheckCircle2",
            },
            {
                title: "Communication & bilingualism",
                description: "Fluent exchanges in French and English with teams and users.",
                icon: "Languages",
            },
        ],
    },
}
