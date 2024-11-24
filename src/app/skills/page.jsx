
import { Sparkles } from "@/components/Sparkles"



export default function Skills() {
    return (
        <div className="w-full h-full flex flex-col items-center pt-10 ">


            <div className="relative flex flex-col items-center justify-center w-full h-40">
                <h1 className="font-medium text-xl sm:text-4xl text-gray-400">Tools of My Trade</h1>
                <Sparkles
                    density={1200}
                    className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </div>


        </div>
    )
}
