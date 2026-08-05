import type { Lang } from "../context/language-context"

export interface SkillCategory {
    id: number
    category: string
    icon: string
    items: string[]
}

export const skillCategories: Record<Lang, SkillCategory[]> = {
    fr: [
        { id: 1, category: "Infrastructure as Code", icon: "Boxes", items: ["Terraform"] },
        { id: 2, category: "CI/CD", icon: "Workflow", items: ["GitHub Actions", "GitLab CI", "Jenkins"] },
        { id: 3, category: "Automatisation", icon: "Bot", items: ["Ansible"] },
        { id: 4, category: "Systèmes / Cloud", icon: "Cloud", items: ["Linux (administration avancée)", "Virtualisation", "AWS (notions)"] },
        { id: 5, category: "Réseaux", icon: "Waypoints", items: ["Proxy", "Firewall", "Load balancer"] },
        { id: 6, category: "Sécurité", icon: "ShieldCheck", items: ["Bonnes pratiques", "Gestion des accès", "Gestion des secrets"] },
        { id: 7, category: "Observabilité", icon: "Activity", items: ["Prometheus", "Grafana", "ELK"] },
        { id: 8, category: "Exploitation", icon: "LifeBuoy", items: ["Gestion d'incidents", "Support opérationnel", "Environnements critiques / haute disponibilité"] },
        { id: 9, category: "Scripting", icon: "Terminal", items: ["Python"] },
        { id: 10, category: "Backend", icon: "Code2", items: ["Node.js", "PHP", "Symfony"] },
        { id: 11, category: "Frontend", icon: "Smartphone", items: ["Flutter"] },
        { id: 12, category: "Bases de données", icon: "Database", items: ["Oracle", "PostgreSQL", "MongoDB"] },
        { id: 13, category: "Outils", icon: "Wrench", items: ["Docker", "Git", "GitHub", "GitLab", "VS Code", "JIRA", "Office 365"] },
    ],
    en: [
        { id: 1, category: "Infrastructure as Code", icon: "Boxes", items: ["Terraform"] },
        { id: 2, category: "CI/CD", icon: "Workflow", items: ["GitHub Actions", "GitLab CI", "Jenkins"] },
        { id: 3, category: "Automation", icon: "Bot", items: ["Ansible"] },
        { id: 4, category: "Systems / Cloud", icon: "Cloud", items: ["Linux (advanced administration)", "Virtualization", "AWS (basics)"] },
        { id: 5, category: "Networking", icon: "Waypoints", items: ["Proxy", "Firewall", "Load balancer"] },
        { id: 6, category: "Security", icon: "ShieldCheck", items: ["Best practices", "Access management", "Secrets management"] },
        { id: 7, category: "Observability", icon: "Activity", items: ["Prometheus", "Grafana", "ELK"] },
        { id: 8, category: "Operations", icon: "LifeBuoy", items: ["Incident management", "Operational support", "Critical / high-availability environments"] },
        { id: 9, category: "Scripting", icon: "Terminal", items: ["Python"] },
        { id: 10, category: "Backend", icon: "Code2", items: ["Node.js", "PHP", "Symfony"] },
        { id: 11, category: "Frontend", icon: "Smartphone", items: ["Flutter"] },
        { id: 12, category: "Databases", icon: "Database", items: ["Oracle", "PostgreSQL", "MongoDB"] },
        { id: 13, category: "Tools", icon: "Wrench", items: ["Docker", "Git", "GitHub", "GitLab", "VS Code", "JIRA", "Office 365"] },
    ],
}
