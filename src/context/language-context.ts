import { createContext } from "react"

export type Lang = "fr" | "en"

export interface LanguageContextValue {
    lang: Lang
    toggleLang: () => void
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
