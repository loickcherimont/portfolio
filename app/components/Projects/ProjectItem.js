import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

export function ProjectItem() {
    return <div className="text-center">
        <img src="https://placehold.co/250x150" alt="Photo de mon projet" />
        <h3 className="font-bold">Titre du projet</h3>
        {/* Techno. */}
        <ul className="flex space-x-2">
            <li><IoLogoJavascript size={40} className="hover:text-yellow-500 transition-all duration-500" /></li>
            <li><FaGolang size={50} className="hover:text-cyan-500 transition-all duration-500" /></li>
        </ul>
    </div>
}