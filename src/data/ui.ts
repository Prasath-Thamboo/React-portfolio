import type { Lang } from "../context/language-context"

export interface UiStrings {
    nav: {
        changeTheme: string
        changeLang: string
        chapterNav: string
        contact: string
    }
    hero: {
        whoami: string
        contactCta: string
        linkedin: string
        github: string
        downloadCv: string
        status: string
        scrollNext: string
        scroll: string
        photoAlt: string
    }
    sections: {
        about: string
        experience: string
        skills: string
        projects: string
        education: string
        contact: string
    }
    experience: {
        current: string
    }
    projects: {
        notice: string
        viewProject: string
        toComplete: string
    }
    contact: {
        name: string
        email: string
        message: string
        send: string
        sentNotice: string
        languages: string
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
            changeLang: "Changer de langue",
            chapterNav: "Navigation par chapitre",
            contact: "Me contacter",
        },
        hero: {
            whoami: "$ whoami",
            contactCta: "Me contacter",
            linkedin: "LinkedIn",
            github: "GitHub",
            downloadCv: "Télécharger mon CV",
            status: "status: disponible pour de nouvelles opportunités",
            scrollNext: "Défiler vers la section suivante",
            scroll: "scroll",
            photoAlt: "Photo de profil",
        },
        sections: {
            about: "À propos",
            experience: "Expérience professionnelle",
            skills: "Compétences techniques",
            projects: "Projets",
            education: "Formations & Certifications",
            contact: "Contact",
        },
        experience: {
            current: "En poste",
        },
        projects: {
            notice:
                "Cette section est mise à jour régulièrement. Certains projets présentés sont en cours de développement et peuvent ne pas être complets ou fonctionnels. Veuillez vérifier les liens et les informations avant de les utiliser.",
            viewProject: "Voir le projet",
            toComplete: "À compléter",
        },
        contact: {
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer",
            sentNotice: "Votre client mail va s'ouvrir pour finaliser l'envoi.",
            languages: "Langues",
        },
        footer: {
            madeWith: "Fait avec React & Tailwind",
            legal: "Mentions légales & confidentialité",
        },
    },
    en: {
        nav: {
            changeTheme: "Toggle theme",
            changeLang: "Switch language",
            chapterNav: "Chapter navigation",
            contact: "Contact me",
        },
        hero: {
            whoami: "$ whoami",
            contactCta: "Contact me",
            linkedin: "LinkedIn",
            github: "GitHub",
            downloadCv: "Download my CV",
            status: "status: open to new opportunities",
            scrollNext: "Scroll to next section",
            scroll: "scroll",
            photoAlt: "Profile photo",
        },
        sections: {
            about: "About",
            experience: "Professional Experience",
            skills: "Technical Skills",
            projects: "Projects",
            education: "Education & Certifications",
            contact: "Contact",
        },
        experience: {
            current: "Current",
        },
        projects: {
            notice:
                "This section is updated regularly. Some featured projects are still under development and may be incomplete or non-functional. Please check links and details before relying on them.",
            viewProject: "View project",
            toComplete: "To be completed",
        },
        contact: {
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send",
            sentNotice: "Your email client will open to finish sending.",
            languages: "Languages",
        },
        footer: {
            madeWith: "Made with React & Tailwind",
            legal: "Legal notice & privacy",
        },
    },
}
