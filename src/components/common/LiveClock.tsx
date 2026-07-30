import { useEffect, useState } from "react"

const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
})

const LiveClock = () => {
    const [time, setTime] = useState(() => formatter.format(new Date()))

    useEffect(() => {
        const interval = setInterval(() => setTime(formatter.format(new Date())), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center gap-1.5 font-mono text-[11px] opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>Paris · {time}</span>
        </div>
    )
}

export default LiveClock
