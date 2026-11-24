import { createContext } from "react"

export type Theme = "quai" | "nuit"

export interface ThemeContextValue {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
