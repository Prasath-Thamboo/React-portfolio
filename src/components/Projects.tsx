import { motion } from "framer-motion"
import { Construction, FolderGit2 } from "lucide-react"
import Title from "./Title"
import Reveal from "./common/Reveal"
import { projects } from "../data/projects"

const Projects = () => {
    return (
        <section id="projects" className="relative py-20 md:py-24 px-5 md:px-[8%] lg:px-[12%] scroll-mt-24">
            <Title title="Projets" />

            <Reveal className="max-w-2xl mx-auto mb-10">
                <div className="flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning/10 backdrop-blur-xl px-5 py-4 text-sm opacity-80">
                    <Construction className="w-5 h-5 text-warning shrink-0" />
                    Cette section sera complétée prochainement avec des projets détaillés (infrastructure, CI/CD,
                    automatisation).
                </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {projects.map((project, i) => (
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
                            <span className="badge badge-outline badge-sm font-mono">À compléter</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Projects
