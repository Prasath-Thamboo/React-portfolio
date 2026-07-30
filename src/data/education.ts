export interface Education {
    id: number
    degree: string
    school: string
    period: string
    location: string
}

export const education: Education[] = [
    {
        id: 1,
        degree: "Mastère — Expert en systèmes d'information et sécurité",
        school: "Cloud Campus",
        period: "2024–2025",
        location: "Paris",
    },
    {
        id: 2,
        degree: "Formation Développeur Grands Systèmes (POEC)",
        school: "AJC",
        period: "2024",
        location: "Paris",
    },
    {
        id: 3,
        degree: "Bachelor Développeur Full Stack",
        school: "IPSSI",
        period: "2022–2023",
        location: "Paris",
    },
    {
        id: 4,
        degree: "Brevet Fédéral (équivalence) SIO — Services Informatiques aux Organisations",
        school: "IPSSI",
        period: "2019–2021",
        location: "Paris",
    },
]
