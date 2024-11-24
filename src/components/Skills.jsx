import Marquee from "./Marquee";

export default function Skills() {
    return (
        <div className="w-10/12 flex flex-col gap-1 sm:w-8/12 mt-8 sm:mt-16">

            <div className="flex flex-row items-center justify-between w-full">

                <h1 className="font-bold text-lg sm:text-xl text-foreground">Technical Expertise</h1>

                <div className="flex flex-row items-center gap-2 cursor-pointer text-xs text-foreground/60 transition-all hover:gap-4">
                    <p>See all</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

            </div>

            <div className=" w-full p-2">
                <Marquee />
            </div>

        </div>
    )
}