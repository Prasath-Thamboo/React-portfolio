import { useEffect, useState, type ReactNode } from "react"
import { ThemeContext, type Theme } from "./theme-context"

const STORAGE_KEY = "portfolio-theme"

function getInitialTheme(): Theme {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "devopsdark" || stored === "devopslight") return stored
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "devopslight" : "devopsdark"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        window.localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "devopsdark" ? "devopslight" : "devopsdark"))
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
