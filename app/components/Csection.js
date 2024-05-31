export function Csection({ children, cProperties, id }) {
    return <section className={`w-full h-screen ${cProperties}`} id={id}>{ children }</section>
}