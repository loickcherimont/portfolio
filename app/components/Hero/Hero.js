import { useState } from "react"
import { Csection } from "../Csection"
import MyButton from "./MyButton"
import HeroButton from "./MyButton"

export default function Hero() {

    // States
    const [menuIsCalled, setMenuIsCalled] = useState(false)

    // Handlers
    const handleMenu = () => {
        setMenuIsCalled(!menuIsCalled)
    }



    const navItems = ["_LCK", "_Projets", "_Contact"].map((item, index) => <li key={index} className={`${menuIsCalled ? `block`: `hidden`} lg:block`}><a href={`#${item}`} className="hover:scale-110 hover:text-slate-800 rounded-lg px-3 p-1 transition duration-1000 ease-in-out block">{item}</a></li>)


    return <Csection cProperties={"flex flex-col items-center text-slate-500"}>
        {/* NAVIGATION */}
        <ul className="lg:w-full lg:flex lg:justify-around lg:p-3 fixed top-3 right-3 lg:static text-center bg-white opacity-[90%]">
            <li className="lg:hidden text-end"><button type="button" onClick={handleMenu}>MENU</button></li>
            {navItems}
        </ul>
        {/* PORTRAIT */}
        <div className="mt-12 text-center flex flex-col items-center justify-between space-y-3 w-full">
            <img src="./Photo_LoickCherimont.jpg" alt="Photo de Loick Cherimont" className="w-64 h-64 lg:w-80 lg:h-80 rounded-full" />
            <h1 className="text-3xl">LCK_Dev</h1>

            {/* BUTTONS */}
            <div className="flex flex-col w-full lg:flex-row p-6 lg:justify-between lg:items-baseline space-y-4 lg:space-x-4 lg:w-96">
                <MyButton
                    href={"./CV_LoickCherimont.pdf"}
                    title={"CV Loïck CHERIMONT"}
                    className={"hover:bg-slate-900 bg-slate-800 text-white"}
                >Mon CV</MyButton>
                <MyButton
                    href={"#_Contact"}
                    title={"M'embaucher"}
                    className={"hover:bg-slate-100 bg-white text-slate-800 border"}
                >Me Recruter</MyButton>
            </div>
        </div>

    </Csection>
}

// Responsive bugs
// - Smartphones bouton menu caché à résoudre
