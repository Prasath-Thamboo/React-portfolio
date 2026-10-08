import { motion } from "framer-motion"
import { Construction, ExternalLink, FolderGit2 } from "lucide-react"
import Title from "./Title"
import Reveal from "./common/Reveal"
import GlassCard from "./common/GlassCard"
import { projects } from "../data/projects"
import { useLanguage } from "../hooks/useLanguage"
import { ui } from "../data/ui"

const Projects = () => {
    const { lang } = useLanguage()
    const t = ui[lang]

    return (
        <section id="projects" className="relative py-20 md:py-24 px-5 md:px-[8%] lg:px-[12%] scroll-mt-24">
            <Title title={t.sections.projects} />

            <Reveal className="max-w-2xl mx-auto mb-10">
                <div className="flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning/10 backdrop-blur-xl px-5 py-4 text-sm opacity-80">
                    <Construction className="w-5 h-5 text-warning shrink-0" />
                    {t.projects.notice}
                </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {projects[lang].map((project, i) =>
                    project.image ? (
                        <Reveal key={project.id} delay={i * 80}>
                            <GlassCard className="h-full flex flex-col overflow-hidden">
                                <div className="aspect-video w-full overflow-hidden bg-base-content/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                    />
                                </div>
                                <div className="p-5 flex flex-col gap-3 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="font-bold text-sm">{project.title}</h3>
                                        {project.inProgress && (
                                            <span className="badge badge-warning badge-outline badge-sm font-mono shrink-0">{t.projects.inProgress}</span>
                                        )}
                                    </div>
                                    <p className="text-xs opacity-70 flex-1">{project.description}</p>
                                    {project.technologies.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="badge badge-outline badge-sm font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-accent btn-sm rounded-full gap-2 mt-1 self-start"
                                        >
                                            {t.projects.viewProject}
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </GlassCard>
                        </Reveal>
                    ) : (
                        <Reveal key={project.id} delay={i * 80}>
                            <div className="relative flex flex-col items-center justify-center text-center gap-3 h-full min-h-[220px] rounded-2xl border-2 border-dashed border-base-content/15 bg-base-100/30 backdrop-blur-xl p-6 hover:border-accent/40 transition-colors duration-300 overflow-hidden">
                                <motion.div
                                    aria-hidden="true"
                                    className="absolute inset-0 -z-10"
                                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                                    style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--a) / 0.15), transparent 70%)" }}
                                />
                                <div className="p-3 bg-base-content/5 rounded-xl">
                                    <FolderGit2 className="w-6 h-6 opacity-40" />
                                </div>
                                <h3 className="font-semibold text-sm opacity-70">{project.title}</h3>
                                <p className="text-xs opacity-45">{project.description}</p>
                                {project.inProgress ? (
                                    <span className="badge badge-warning badge-outline badge-sm font-mono">{t.projects.inProgress}</span>
                                ) : (
                                    <span className="badge badge-outline badge-sm font-mono">{t.projects.toComplete}</span>
                                )}
                            </div>
                        </Reveal>
                    )
                )}
            </div>
        </section>
    )
}

export default Projects
