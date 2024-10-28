import { WordsRotate } from "@/components/WordsRotate";
import Navbar from "../components/NavBar";
import BlurRight from "@/components/BlurRight";
import BlurLeft from "@/components/BlurLeft";
import Header from "@/components/Header";
import TextAboutme from "@/components/TextAboutme";
import BlurFade from "@/components/magicui/blur-fade";
import TextRevealLanding from "@/components/TextRevealLanding";

export default function Home() {
  return (
    <main>
      <div className="relative isolate pt-5">
        <BlurLeft />
        <div className="flex flex-col items-center max-w-3xl container mx-auto p-8 h-full min-h-screen">
          <div className="mx-auto px-6 lg:px-8">
            <Header />
            <div className="mt-20 inline-block max-w-2xl text-start justify-start">
              <BlurFade delay={0.25} inView>
                <h1 className="text-4xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-800 text-transparent bg-clip-text">Hey, soy&nbsp;
                  <WordsRotate />
                </h1>
                <h2 className="text-md sm:text-xl font-semibold mt-4">
                  Soy un ingeniero de software autodidacta de España. En este momento me estoy centrando en convertirme en un {" "}
                  <span className="text-md sm:text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-800 text-transparent bg-clip-text">
                    desarrollador web full stack.
                  </span>
                </h2>
              </BlurFade>
              <TextAboutme />
            </div>
          </div>
          <div className="fixed bottom-2 w-full">
            <Navbar />
          </div>
        </div>
        <BlurRight />
      </div>
    </main>
  );
}
