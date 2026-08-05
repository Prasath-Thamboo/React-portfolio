import { useEffect, useState, type ReactNode } from "react"
import { LanguageContext, type Lang } from "./language-context"

const STORAGE_KEY = "portfolio-lang"

function getInitialLang(): Lang {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "fr" || stored === "en") return stored
    return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(getInitialLang)

    useEffect(() => {
        document.documentElement.setAttribute("lang", lang)
        window.localStorage.setItem(STORAGE_KEY, lang)
    }, [lang])

    const toggleLang = () => {
        setLang((prev) => (prev === "fr" ? "en" : "fr"))
    }

    return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>
}
