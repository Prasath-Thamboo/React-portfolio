import type { Lang } from "../context/language-context"

export interface UiStrings {
    nav: {
        changeTheme: string
        changeLang: string
        primary: string
        contact: string
        menu: string
        close: string
    }
    hero: {
        contactCta: string
        linkedin: string
        github: string
        downloadCv: string
        status: string
        scrollNext: string
        photoAlt: string
        plateTitle: string
        origin: string
        destination: string
        experience: string
        experienceValue: string
        companies: string
    }
    sections: {
        about: string
        experience: string
        skills: string
        projects: string
        education: string
        contact: string
    }
    about: {
        intro: string
        shipper: string
        portOfLoading: string
        destination: string
        goods: string
        experience: string
        companies: string
        languages: string
        lines: string
        lineNo: string
        designation: string
        details: string
        original: string
    }
    experience: {
        intro: string
        current: string
        leg: string
        missions: string
    }
    skills: {
        intro: string
    }
    projects: {
        intro: string
        notice: string
        viewProject: string
        toComplete: string
        inProgress: string
        underConstruction: string
        delivered: string
        previous: string
        next: string
        carousel: string
        openDoors: string
    }
    education: {
        intro: string
        certificate: string
    }
    contact: {
        intro: string
        name: string
        email: string
        message: string
        send: string
        sentNotice: string
        languages: string
        recipient: string
        sender: string
        channels: string
        linkedinLabel: string
        githubLabel: string
    }
    footer: {
        madeWith: string
        legal: string
    }
}

export const ui: Record<Lang, UiStrings> = {
    fr: {
        nav: {
            changeTheme: "Changer de thème",
            changeLang: "Switch to English",
            primary: "Navigation principale",
            contact: "Contact",
            menu: "Ouvrir le menu",
            close: "Fermer le menu",
        },
        hero: {
            contactCta: "Me contacter",
            linkedin: "LinkedIn",
            github: "GitHub",
            downloadCv: "Télécharger mon CV",
            status: "Disponible pour de nouvelles opportunités",
            scrollNext: "Défiler vers la section suivante",
            photoAlt: "Photo de profil de T.Prasath",
            plateTitle: "Plaque d'identification",
            origin: "Origine",
            destination: "Destination",
            experience: "Expérience",
            experienceValue: "5+ ans",
            companies: "Entreprises",
        },
        sections: {
            about: "À propos",
            experience: "Expérience",
            skills: "Compétences",
            projects: "Projets",
            education: "Formations",
            contact: "Contact",
        },
        about: {
            intro: "Le connaissement : qui expédie, d'où, vers où, et ce qu'il y a dans la cargaison.",
            shipper: "Expéditeur",
            portOfLoading: "Port de chargement",
            destination: "Destination",
            goods: "Désignation de la marchandise",
            experience: "Expérience",
            companies: "Entreprises",
            languages: "Langues",
            lines: "Lignes de cargaison",
            lineNo: "N°",
            designation: "Désignation",
            details: "Détail",
            original: "Original",
        },
        experience: {
            intro: "Trois escales, du développement applicatif à l'automatisation de la livraison.",
            current: "En poste",
            leg: "Escale",
            missions: "Missions",
        },
        skills: {
            intro: "Le parc à conteneurs : chaque bloc, un domaine que je charge et livre en production.",
        },
        projects: {
            intro: "Le convoi des sites livrés. Le conteneur qui passe au centre ouvre ses portes ; survolez ou touchez les autres, faites glisser pour remonter la file.",
            notice:
                "Cette section est mise à jour régulièrement. Certains projets présentés sont en cours de développement et peuvent ne pas être complets ou fonctionnels.",
            viewProject: "Voir le site",
            toComplete: "À compléter",
            inProgress: "En cours",
            underConstruction: "En construction",
            delivered: "Livré",
            previous: "Conteneur précédent",
            next: "Conteneur suivant",
            carousel: "Carrousel des projets",
            openDoors: "Ouvrir les portes",
        },
        education: {
            intro: "Les certificats qui accompagnent la cargaison.",
            certificate: "Certificat",
        },
        contact: {
            intro: "Une offre en Suisse romande ou en France ? Remplissez le bon d'expédition, il part directement dans votre client mail.",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Expédier le message",
            sentNotice: "Votre client mail va s'ouvrir pour finaliser l'envoi.",
            languages: "Langues",
            recipient: "Destinataire",
            sender: "Expéditeur",
            channels: "Autres canaux",
            linkedinLabel: "Profil LinkedIn",
            githubLabel: "Dépôts GitHub",
        },
        footer: {
            madeWith: "Fait avec React & Tailwind",
            legal: "Mentions légales & confidentialité",
        },
    },
    en: {
        nav: {
            changeTheme: "Toggle theme",
            changeLang: "Passer en français",
            primary: "Main navigation",
            contact: "Contact",
            menu: "Open menu",
            close: "Close menu",
        },
        hero: {
            contactCta: "Contact me",
            linkedin: "LinkedIn",
            github: "GitHub",
            downloadCv: "Download my CV",
            status: "Open to new opportunities",
            scrollNext: "Scroll to next section",
            photoAlt: "Profile photo of T.Prasath",
            plateTitle: "Identification plate",
            origin: "Origin",
            destination: "Destination",
            experience: "Experience",
            experienceValue: "5+ years",
            companies: "Companies",
        },
        sections: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            contact: "Contact",
        },
        about: {
            intro: "The bill of lading: who ships, from where, to where, and what the cargo holds.",
            shipper: "Shipper",
            portOfLoading: "Port of loading",
            destination: "Destination",
            goods: "Description of goods",
            experience: "Experience",
            companies: "Companies",
            languages: "Languages",
            lines: "Cargo lines",
            lineNo: "No.",
            designation: "Item",
            details: "Details",
            original: "Original",
        },
        experience: {
            intro: "Three ports of call, from building applications to automating their delivery.",
            current: "Current",
            leg: "Port of call",
            missions: "Missions",
        },
        skills: {
            intro: "The container yard: each block is a domain I load and ship to production.",
        },
        projects: {
            intro: "The convoy of shipped sites. The container passing the centre opens its doors; hover or tap the others, drag to move along the line.",
            notice:
                "This section is updated regularly. Some featured projects are still under development and may be incomplete or non-functional.",
            viewProject: "Visit site",
            toComplete: "To be completed",
            inProgress: "In progress",
            underConstruction: "Under construction",
            delivered: "Delivered",
            previous: "Previous container",
            next: "Next container",
            carousel: "Projects carousel",
            openDoors: "Open the doors",
        },
        education: {
            intro: "The certificates travelling with the cargo.",
            certificate: "Certificate",
        },
        contact: {
            intro: "A role in Swiss Romandy or France? Fill in the shipping note, it goes straight to your email client.",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Ship the message",
            sentNotice: "Your email client will open to finish sending.",
            languages: "Languages",
            recipient: "Recipient",
            sender: "Sender",
            channels: "Other channels",
            linkedinLabel: "LinkedIn profile",
            githubLabel: "GitHub repositories",
        },
        footer: {
            madeWith: "Made with React & Tailwind",
            legal: "Legal notice & privacy",
        },
    },
}
