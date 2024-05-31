'use client'

import { Apropos } from "./components/About/Apropos";
import { Csection } from "./components/Csection";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaGolang, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Hero from "./components/Hero/Hero";
import TechnoItem from "./components/About/TechnoItem";
import { ProjectItem } from "./components/Projects/ProjectItem";
import { Field } from "./components/Contact/Field";
import MyButton from "./components/Hero/MyButton";
import { Footer } from "./components/Footer";
// import HeroButton from "./components/HeroButton";

export default function Home() {

  return <div className="app bg-gradient-to-b from-white to-slate-200">
    <Hero />
    {/* // 2eme section : A propos de moi */}
    <Csection cProperties={"flex flex-col items-center justify-items-start"} id={"_LCK"}>
      {/* Deux elements légèrement arrondis : 
      - Gauche une div
      - Droite une div
      */}
      <h2 className="text-3xl p-6 text-slate-800">LCK</h2>
      {/* pour les deux blocs d'a propos */}
      <div className="flex justify-evenly w-full mt-12">
        {/* A faire :
        
        - Se présenter brièvement : Loick Cherimont 23 ans
        - Profession : Développeur Web en autodidacte
        - Sa passion vite fait : Aime créer
        - Rigueur et passion, point forts de mes projets
        - Sa spécialité : JS et Front-End
                 */}
        <Apropos cProperties={"text-slate-900"}>
          <p>Je m'appelle <strong>Loïck CHERIMONT</strong> (23 ans), je suis <strong>Développeur web junior</strong> spécialisé <strong>Javascript et Front-End.</strong></p>
          <p>Dans mes projets, je suis à la fois <strong>sérieux et passionné</strong>, ce qui me motive à faire toujours plus pour <strong>satisfaire au mieux mes clients.</strong></p>
          <p className="mt-3 text-2xl text-center font-bold">Découvrez en section <a href="#_Projets" className="hover:text-slate-500 underline transition duration-300">Projets</a> mes atouts!</p>

          {/* Technos */}
          {/* Trouver un moyen de réduire la taille des techno */}
          <ul className="flex space-x-2 justify-center items-center pt-3">
            <TechnoItem><IoLogoJavascript size={96} className="hover:text-yellow-500 transition-all duration-500" /></TechnoItem>
            <TechnoItem><FaGolang size={96} className="hover:text-cyan-500 transition-all duration-500" /></TechnoItem>
            <TechnoItem>Autre tech.</TechnoItem>
          </ul>
        </Apropos>
      </div>




    </Csection>
    {/* // 3eme section : Projets les plus marquants (sauf qu'il n'y en a pas ^^) */}


    <Csection cProperties={"flex flex-col items-center justify-start gap-20"} id={"_Projets"}>

      <h2 className="text-3xl p-6 text-slate-800">Projets</h2>

      {/* Grille */}
      <div className="grid md:grid-rows-1 md:grid-cols-3 grid-rows-3 gap-20">

        {/* exemple de projet 1  */}
        <ProjectItem />

        {/* exemple de projet 2  */}
        <ProjectItem />

        {/* exemple de projet 3 */}
        <ProjectItem />
      </div>
    </Csection>
    {/* // 4eme section : Contact */}
    <Csection cProperties={"flex flex-col items-center gap-20 h-full"} id={"_Contact"}>


      <h2 className="text-3xl p-6 text-slate-800">Contact</h2>

      <div className="flex flex-col-reverse lg:flex-row w-[80%] justify-around py-6 px-2 space-y-4">


        <form className="flex flex-col justify-around gap-3 p-3 grow sm:text-sm">

          <Field id={"nom"} type="text" placeholder={"Votre nom"} />
          <Field id={"prenom"} type="text" placeholder={"Votre prénom"} />
          <Field id={"email"} type="email" placeholder={"Votre email"} />
          <Field id={"objet"} type="text" placeholder={"Objet du message"} />
          <Field id={"message"} type={""} placeholder={"Votre message"} />

          <button type="submit" title="Envoyer votre message" className="rounded-md p-1 bg-slate-900 text-white border border-slate-900 hover:text-slate-900 hover:bg-slate-100 hover:shadow-md transition duration-300">Envoyer</button>
        </form>

        {/* Contacts */}
        <ul className="pl-10 flex lg:flex-col justify-evenly text-slate-500">
          <li className="">
            <a href="mailto:loickcherimont@gmail.com" className="w-full flex hover:text-slate-900 transition duration-300" title="Me contacter par mail">
              <SiGmail size={40} className="text-red-500 me-1" /><p className="hidden lg:block pt-1.5 ps-1.5 hover:text-slate-900">loickcherimont@gmail.com</p>
            </a>
          </li>
          <li className=""><a href="https://www.linkedin.com/in/loickcherimont" className="w-full flex hover:text-slate-900 transition duration-300" title="Me contacter par LinkedIn"><FaLinkedin size={40} className="text-blue-500 me-1" /><p className="hidden lg:block pt-1.5 ps-1.5">www.linkedin.com/in/loickcherimont</p></a></li>
          <li className=""><a href="https://www.github.com/loickcherimont" className="w-full flex hover:text-slate-900 transition duration-300" title="Plus de code sur Github"><FaGithub size={40} className="text-slate-700 me-1" /><p className="hidden lg:block pt-1.5 ps-1.5">github.com/loickcherimont</p></a></li>
        </ul>



      </div>
    </Csection>

    {/* Return to the top */}
    <MyButton
      href={"#"}
      title={"Retour vers le haut"}
      className={"hover:bg-slate-900 bg-slate-800 text-white rounded-md lg:inline-block w-36 px-4 py-2 font-normal transition duration-300 text-base text-center opacity-75 fixed bottom-6 right-6 border p-1 hidden"}
    >Retour</MyButton>

    <Footer />
  </div>
}

// Soucis au hover du bouton "Envoyer" de la partie Contact
