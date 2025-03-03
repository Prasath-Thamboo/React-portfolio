import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Navilone, site vitrine',
        description: 'Vous trouverez ici le site officiel de Navilone, un expert dans la gestion de projets pour levolution de votre entreprise ',
        technologies: ['HTML', 'CSS', 'Javascript'],
        demoLink: 'https://navilone.com/',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Visual&ko, site web',
        description: 'Visual&ko vous accompagne dans votre digitalisation, création de site web, boost du SEO/SEA, maintenance et sécurité dapplication',
        technologies: ['ReactJS', 'Tailwind', 'MongoDB'],
        demoLink: 'https://visualandko.com/',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Seranya - Yoga bouddhiste, application web',
        description: 'Inspirant, apaisant.. Seranya vous apporte paix et tranquilité en vous initiant au Yoga avec des articles, et bientot des tutoriels',
        technologies: ['NextJS', 'TailwindCSS', 'NestJS', 'Prisma'],
        demoLink: 'https://seranya.fr/',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Serrurier de proximité, site vitrine de premier contact',
        description: 'Présentation du serrurier, ouvrier qualifié qui peut intervenir très rapidement selon votre ugence',
        technologies: ['HTML', 'CSS', 'MySQL'],
        demoLink: 'http://serrurier-de-proximite.fr/',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'TechandCompare, site web',
        description: 'Comparer les meilleurs produits Hi-tech du moment, vous les présente et permet de vous proposer le meilleur selon vos besoins.',
        technologies: ['PHP', 'React', 'SQL'],
        demoLink: 'https://techandcompare.com/',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Cyria, E-commerce',
        description: 'Ventes de meubles de luxe avec des possibilités presque illimitées, vous pouvez créer votre propre meuble sur-mesure.',
        technologies: ['React', 'Javascript-A-Frame', 'SQL'],
        demoLink: 'https://cyria.net/fr/',
        repoLink: '#',
        image: img6,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects