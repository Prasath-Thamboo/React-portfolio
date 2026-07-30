import { createContext } from "react"

export type Theme = "devopsdark" | "devopslight"

export interface ThemeContextValue {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
