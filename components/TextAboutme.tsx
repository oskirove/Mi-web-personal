import BlurFade from "@/components/magicui/blur-fade";

export default function TextAboutme() {
    return (
        <div>
            <section id="header">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-3xl mb-4 font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                        Un poco de mi historia 💭
                    </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                    <span className="text-md sm:text-xl font-semibold mt-4">
                        <div>
                            Soy un desarrollador web autodidacta de España, en camino de convertirme en full stack
                            y en continua formación. Me apasiona todo lo relacionado con la tecnología, desde diseñar
                            prototipos hasta plantear arquitecturas para software específicos. Empecé estudiando Administración
                            de Sistemas Informáticos en Red (ASIR) y ahora estoy iniciando Desarrollo de Aplicaciones Multiplataforma (DAM).
                            Mi meta es clara: construir aplicaciones que no solo luzcan bien, sino que sean sólidas y realmente útiles para
                            sus usuarios.
                        </div>
                        <br />
                        <div>
                            Disfruto colaborar en proyectos, pero también me motiva emprender mis propias ideas.
                            Lo que más me gusta de la programación es que te da el poder de crear lo que quieras,
                            desde cualquier lugar del mundo. Mi enfoque combina técnica, diseño y lógica. Durante mi tiempo en
                            Siweb, en Vigo, donde trabajé como diseñador UX/UI, descubrí lo importante que es equilibrar la estética
                            con la funcionalidad. En cada proyecto busco ese equilibrio, creando soluciones que conecten de verdad
                            con quienes las usan.
                        </div>
                    </span>
                </BlurFade>
            </section>
        </div>
    )
}
