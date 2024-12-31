import {LaptopMinimalCheck} from "lucide-react"


const Navbar = () =>{
    return (
        <div className=" flex justify-center md:justify-between items-center p-4">
            <a href="#home" className="flex items-center justify-between font-bold text-3xl md:text-xl">
                
            <LaptopMinimalCheck />
            PRAS <span className="text-accent ">DEV</span>
            </a>

            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" 
                    className="btn btn-small btn-ghost">
                            Accueil
                    </a>
                </li>
                <li>
                    <a href="#About" 
                    className="btn btn-small btn-ghost">
                            A propos
                    </a>
                </li>
                <li>
                    <a href="#Skills" 
                    className="btn btn-small btn-ghost">
                            Skills
                    </a>
                </li>
                <li>
                    <a href="#Projects" 
                    className="btn btn-small btn-ghost">
                            Projets
                    </a>
                </li>

            </ul>
        </div>
    )
} 

export default Navbar