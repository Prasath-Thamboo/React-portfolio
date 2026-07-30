import { useActiveSection } from "../hooks/useActiveSection"
import { CHAPTERS } from "../data/chapters"

const CHAPTER_IDS = CHAPTERS.map((c) => c.id)

const ChapterNav = () => {
    const active = useActiveSection(CHAPTER_IDS)

    return (
        <>
            {/* Desktop : onglets façon reliure de classeur, ancrés sur le bord droit */}
            <nav
                aria-label="Navigation par chapitre"
                className="hidden md:flex flex-col gap-2 fixed right-0 top-1/2 -translate-y-1/2 z-40"
            >
                {CHAPTERS.map((chapter) => {
                    const isActive = active === chapter.id
                    return (
                        <a
                            key={chapter.id}
                            href={`#${chapter.id}`}
                            aria-current={isActive ? "true" : undefined}
                            className={`group flex items-center gap-2.5 w-44 pl-4 pr-3 py-2.5 rounded-l-2xl border border-r-0 backdrop-blur-xl transition-all duration-300 ease-out ${
                                isActive
                                    ? "translate-x-0 bg-accent text-accent-content border-accent shadow-lg shadow-accent/30"
                                    : "translate-x-[168px] hover:translate-x-0 bg-base-100/70 border-base-content/10 text-base-content"
                            }`}
                        >
                            <span className={`font-mono text-[10px] shrink-0 ${isActive ? "opacity-90" : "opacity-40"}`}>
                                {chapter.num}
                            </span>
                            <span className="text-xs font-semibold whitespace-nowrap">{chapter.label}</span>
                        </a>
                    )
                })}
            </nav>

            {/* Mobile : pastilles numérotées compactes sur le bord */}
            <nav
                aria-label="Navigation par chapitre"
                className="md:hidden flex flex-col gap-2 fixed right-2 top-1/2 -translate-y-1/2 z-40"
            >
                {CHAPTERS.map((chapter) => {
                    const isActive = active === chapter.id
                    return (
                        <a
                            key={chapter.id}
                            href={`#${chapter.id}`}
                            aria-label={chapter.label}
                            aria-current={isActive ? "true" : undefined}
                            className={`flex items-center justify-center w-8 h-8 rounded-full border font-mono text-[10px] backdrop-blur-xl transition-all duration-300 ${
                                isActive
                                    ? "bg-accent text-accent-content border-accent scale-110 shadow-lg shadow-accent/30"
                                    : "bg-base-100/70 border-base-content/10 opacity-70"
                            }`}
                        >
                            {chapter.num}
                        </a>
                    )
                })}
            </nav>
        </>
    )
}

export default ChapterNav
