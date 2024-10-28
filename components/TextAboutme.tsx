import BlurFade from "@/components/magicui/blur-fade";

export default function TextAboutme() {
    return (
        <div>
            <section id="header">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-xl mt-14 mb-2 font-bold tracking-tighter sm:text-2xl xl:text-2xl/none">
                        Mi historia
                    </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                    <span className="text-sm sm:text-sm dark:text-zinc-400 text-zinc-800 font-semibold mt-4">
                        <p>
                            Empecé en el mundo del desarrollo web como autodidacta y sigo en formación para
                            convertirme en full stack. Me apasiona la tecnología en cada detalle, desde idear
                            un diseño hasta construir una arquitectura sólida. Busco crear aplicaciones que no
                            solo funcionen bien, sino que conecten y aporten valor real a quienes las usan.
                        </p>
                    </span>
                </BlurFade>
            </section>
        </div>
    )
}
