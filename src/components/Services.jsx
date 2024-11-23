import { Sparkles } from "@/components/Sparkles"

export default function Profile() {
    return (
        <div className="w-full flex flex-col sm:w-8/12">

            <h1 className="font-bold text-base sm:text-xl text-foreground text-center sm:text-left ">My Expertise, Your Solution</h1>

            <div className="b relative -z-10 h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
                <Sparkles
                    density={1200}
                    className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </div>

        </div>
    )
}