import { motion } from "framer-motion"

interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <div className="flex flex-col items-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="uppercase font-extrabold text-3xl tracking-widest text-center"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-3 flex items-center gap-2"
            >
                <div className="h-px w-10 bg-accent/40 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-accent to-secondary rounded-full" />
                <div className="h-px w-10 bg-accent/40 rounded-full" />
            </motion.div>
        </div>
    )
}

export default Title
