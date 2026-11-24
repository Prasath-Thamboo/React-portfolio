import { useEffect, useState, type ReactNode } from "react"
import { ThemeContext, type Theme } from "./theme-context"

const STORAGE_KEY = "portfolio-theme-v2"

function getInitialTheme(): Theme {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "quai" || stored === "nuit") return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "nuit" : "quai"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        window.localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "quai" ? "nuit" : "quai"))
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
