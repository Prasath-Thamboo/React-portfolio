import { Component, type ErrorInfo, type ReactNode } from "react"

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { error: null }

    static getDerivedStateFromError(error: Error) {
        return { error }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("Render error:", error, info.componentStack)
    }

    render() {
        if (this.state.error) {
            return (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        padding: 24,
                        overflow: "auto",
                        fontFamily: "monospace",
                        whiteSpace: "pre-wrap",
                        color: "#e6edf3",
                        background: "#0a0e14",
                        zIndex: 9999,
                    }}
                >
                    <h1 style={{ color: "#f85149", fontSize: 18, marginBottom: 12 }}>Erreur de rendu</h1>
                    <p style={{ marginBottom: 12 }}>{this.state.error.message}</p>
                    <pre style={{ fontSize: 12, opacity: 0.7 }}>{this.state.error.stack}</pre>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
