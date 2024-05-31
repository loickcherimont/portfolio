'use client'

export default function MyButton({ href, title, className, children }) {

    // Download CV button lead to it
    const titleContent = title.split(" ")

    return  <a href={href || "#"} title={title} className={`rounded-md inline-block w-full lg:w-36 px-4 py-2 font-normal transition duration-300 text-base ${className}`} type="button" download={ titleContent.indexOf("CV") === -1 ? `${href}`:null}>{children}</a>
}