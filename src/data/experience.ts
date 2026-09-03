import type { Lang } from "../context/language-context"

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

export const experiences: Record<Lang, Experience[]> = {
    fr: [
        {
            id: 1,
            role: "Ingénieur Logiciel — Backend Java / Spring Boot, Node.js & Architectures API",
            company: "Navilone",
            period: "2024–2026",
            location: "Fontainebleau, France",
            current: true,
            icon: "Server",
            missions: [
                "Conception et développement d'applications sur-mesure selon l'architecture globale",
                "Développement de microservices et d'API REST en Java / Spring Boot (Spring Web, Spring Data JPA, Spring Security)",
                "Mise en place de tests automatisés avec JUnit 5 et Mockito, et intégration dans la CI/CD",
                "Évolution des applications existantes en fonction des besoins métiers",
                "Analyse des besoins et suivi régulier avec les utilisateurs",
                "Conception et optimisation des modèles de données sous Oracle (mapping JPA / Hibernate)",
                "Développement de composants backend sécurisés (Node.js)",
                "Interfaces frontend dynamiques et multiplateformes avec Flutter",
                "Tests unitaires et tests d'acceptation utilisateurs",
                "Exploration et intégration d'outils d'IA agentique dans les workflows de développement",
            ],
        },
        {
            id: 2,
            role: "Développeur Full-Stack Java / Spring Boot, PHP / Symfony & Node.js",
            company: "Visual&KO",
            period: "2023–2024",
            location: "Paris, France",
            icon: "Code2",
            missions: [
                "Développement de modules applicatifs robustes (PHP, Symfony)",
                "Développement de services backend en Java / Spring Boot et exposition d'API REST pour les applications clientes",
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
                "Développement et correctifs de premier niveau sur applications internes Java (Spring / Spring Boot)",
                "Plans de tests unitaires automatisés (JUnit)",
                "Support technique aux utilisateurs finaux en phase de recette",
                "Rédaction de fiches de spécifications techniques",
            ],
        },
    ],
    en: [
        {
            id: 1,
            role: "Software Engineer — Java / Spring Boot & Node.js Backend, API Architectures",
            company: "Navilone",
            period: "2024–2026",
            location: "Fontainebleau, France",
            current: true,
            icon: "Server",
            missions: [
                "Design and development of custom applications aligned with the overall architecture",
                "Development of microservices and REST APIs in Java / Spring Boot (Spring Web, Spring Data JPA, Spring Security)",
                "Automated testing with JUnit 5 and Mockito, integrated into the CI/CD pipeline",
                "Evolution of existing applications based on business needs",
                "Requirements analysis and regular follow-up with users",
                "Design and optimization of data models under Oracle (JPA / Hibernate mapping)",
                "Development of secure backend components (Node.js)",
                "Dynamic, cross-platform frontend interfaces with Flutter",
                "Unit testing and user acceptance testing",
                "Exploring and integrating agentic AI tools into development workflows",
            ],
        },
        {
            id: 2,
            role: "Full-Stack Developer — Java / Spring Boot, PHP / Symfony & Node.js",
            company: "Visual&KO",
            period: "2023–2024",
            location: "Paris, France",
            icon: "Code2",
            missions: [
                "Development of robust application modules (PHP, Symfony)",
                "Development of backend services in Java / Spring Boot, exposing REST APIs to client applications",
                "Design of responsive, user-friendly web interfaces",
                "SQL scripts and optimized queries on Oracle",
                "Writing technical documentation and user guides",
                "Collaboration within a multidisciplinary agile team, release delivery",
            ],
        },
        {
            id: 3,
            role: "Junior Software Developer",
            company: "Fydgest",
            period: "2019–2022",
            location: "Paris, France",
            icon: "GraduationCap",
            missions: [
                "First-level development and bug fixes on internal Java applications (Spring / Spring Boot)",
                "Automated unit test plans (JUnit)",
                "Technical support for end users during acceptance testing",
                "Writing technical specification sheets",
            ],
        },
    ],
}
