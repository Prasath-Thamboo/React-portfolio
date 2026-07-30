import { motion, type Variants } from "framer-motion"
import { Mail, LinkedinIcon, MapPin, Globe, ArrowDown } from "lucide-react"
import { profile } from "../data/profile"
import img from "../assets/img.png"
import NetworkBackground from "./common/NetworkBackground"

const orbitBadges = [
    { label: "Terraform", position: "top-[6%] -left-6 md:-left-10" },
    { label: "CI/CD", position: "top-[38%] -right-8 md:-right-14" },
    { label: "Ansible", position: "bottom-[10%] -left-8 md:-left-12" },
    { label: "Kubernetes-ready", position: "bottom-[-4%] right-[8%]" },
]

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden px-5 md:px-[8%] lg:px-[12%] pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen flex items-center scroll-mt-16"
        >
            <div className="absolute inset-0 -z-20">
                <NetworkBackground />
            </div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)] bg-base-100/40"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-0 -z-10 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 -z-10 w-[22rem] h-[22rem] rounded-full bg-secondary/10 blur-3xl"
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative flex flex-col-reverse md:flex-row items-center gap-16 md:gap-8 w-full"
            >
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.p variants={item} className="font-mono text-sm text-accent mb-3">
                        $ whoami
                    </motion.p>
                    <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold leading-tight">
                        {profile.name}
                    </motion.h1>
                    <motion.p
                        variants={item}
                        className="mt-3 text-xl md:text-2xl font-semibold bg-gradient-to-r from-accent via-secondary to-accent bg-size-200 bg-clip-text text-transparent animate-gradient-x"
                    >
                        {profile.role}
                    </motion.p>
                    <motion.p variants={item} className="mt-4 text-sm md:text-base opacity-65 leading-relaxed max-w-md">
                        {profile.tagline}
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 mt-5 text-sm opacity-70"
                    >
                        <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-accent" />
                            {profile.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-accent" />
                            {profile.mobility}
                        </span>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap gap-3 items-center justify-center md:justify-start mt-7">
                        <a href="#contact" className="btn btn-accent rounded-full gap-2 px-6">
                            <Mail className="w-4 h-4" />
                            Me contacter
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline rounded-full gap-2 px-6"
                        >
                            <LinkedinIcon className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    variants={item}
                    className="relative shrink-0 w-full max-w-sm"
                >
                    {orbitBadges.map((badge, i) => (
                        <motion.span
                            key={badge.label}
                            className={`hidden md:flex absolute ${badge.position} z-20 items-center px-3 py-1.5 rounded-full border border-base-content/10 bg-base-100/70 backdrop-blur-md font-mono text-[11px] shadow-lg`}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                        >
                            {badge.label}
                        </motion.span>
                    ))}

                    <div className="rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl bg-base-100/60 backdrop-blur-xl">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-base-content/10 bg-base-content/5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                            <span className="ml-3 font-mono text-[11px] opacity-50 truncate">~/t — zsh</span>
                        </div>
                        <div className="p-1.5">
                            <img
                                src={img}
                                alt="Photo de profil"
                                className="w-full h-72 md:h-80 object-cover rounded-lg"
                            />
                        </div>
                        <div className="px-4 py-2.5 border-t border-base-content/10 font-mono text-[11px] text-secondary flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                            status: disponible pour de nouvelles opportunités
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.a
                href="#about"
                aria-label="Défiler vers la section suivante"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-90 transition-opacity"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] font-mono uppercase tracking-widest">scroll</span>
                <ArrowDown className="w-4 h-4" />
            </motion.a>
        </section>
    )
}

export default Hero
