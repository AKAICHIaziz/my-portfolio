import { Sparkles } from "@/components/Sparkles";
import Image from "next/image";

import ml from "../../public/ml.svg"
import dev from "../../public/dev.svg"


export default function Profile() {
    return (
        <div className="w-full h-[70vh] flex flex-col sm:w-8/12 relative mt-5">

            <div className="absolute -mb-32 inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
                <Sparkles
                    density={1200}
                    className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </div>

            <div className="flex flex-col items-center gap-7">

                <h1 className="w-full font-bold text-base sm:text-xl text-foreground text-center">Empowering innovation through intelligent solutions and seamless development.</h1>

                <div className="w-full flex flex-row items-center justify-center gap-10">

                    <div className="w-[40%] sm:w-[30%] h-36 sm:h-60 bg-accent/20 flex flex-col items-center justify-top gap-1 p-4 rounded-md">
                        <Image src={dev} alt="dev" className="w-16 h-16 mb-3" />
                        <h2 className="text-center">Software Development</h2>
                        <p className="hidden sm:block text-foreground/70 text-center text-sm sm:text-base">Crafting reliable and scalable applications tailored to meet unique business needs, from frontend design to backend systems.</p>
                    </div>

                    <div className="w-[40%] sm:w-[30%] h-36 sm:h-60 bg-accent/20 flex flex-col items-center justify-top gap-1 p-4 rounded-md">
                        <Image src={ml} alt="ml" className="w-14 h-14 mb-3" />
                        <h2 className="hidden sm:block text-center">Machine Learning Solutions</h2>
                        <h2 className="block sm:hidden">ML Solutions</h2>
                        <p className="hidden sm:block text-foreground/70 text-center text-sm sm:text-base">Building intelligent models and AI solutions to automate processes, analyze data, and enable smarter decision making.</p>
                    </div>

                </div>


            </div>

        </div>
    );
}
