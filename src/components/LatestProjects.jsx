import Image from "next/image";
import project_image from "../../public/projet_tt.png"
import Link from "next/link";

export default function LatestProjects() {
    return (
        <div className="w-10/12 flex flex-col gap-5 items-center sm:w-10/12 -mt-36 sm:mt-0">

            <Link className="flex flex-row items-center justify-between w-full" href="/projects">
                <h1 className="font-bold text-lg sm:text-xl text-foreground">Latest projects</h1>

                <div className="flex flex-row items-center gap-2 cursor-pointer text-xs text-foreground/60 transition-all hover:gap-4">
                    <p>Read more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

            </Link>

            <div className=" w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-8">

                <div className=" w-full sm:w-fit p-3 flex flex-col sm:gap-10 gap-3 lg:flex-row items-center sm:items-start bg-accent/20 rounded-xl">
                    <Image src={project_image} alt="Profile image" className="w-72 border" />
                    <div className="w-full flex flex-col gap-2 justify-between">
                        <h2 className="font-semibold text-sm sm:text-base">Heart disease anomaly detection</h2>
                        <div className="text-foreground font-light text-center text-xs sm:text-sm grid grid-cols-3 gap-2 justify-center w-fit">
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">React</p>
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">Node</p>
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">Express</p>
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">MongoDB</p>
                        </div>
                        <a href="#" className="flex justify-end">
                            <button className="bg-primary/10 text-primary text-xs sm:text-sm w-full rounded-md h-8 flex items-center justify-center sm:w-32">
                                Read more
                            </button>
                        </a>
                    </div>
                </div>

                <div className=" w-full sm:w-fit p-3 flex flex-col sm:gap-10 gap-3 lg:flex-row items-center sm:items-start bg-accent/20 rounded-xl">
                    <Image src={project_image} alt="Profile image" className="w-72 border" />
                    <div className="w-full flex flex-col gap-2 justify-between">
                        <h2 className="font-semibold text-sm sm:text-base">Heart disease anomaly detection</h2>
                        <div className="text-foreground font-light text-center text-xs sm:text-sm grid grid-cols-3 gap-2 justify-center w-fit">
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">React</p>
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">Node</p>
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">Express</p>
                            <p className="bg-accent p-1 px-3 rounded-lg w-fit">MongoDB</p>
                        </div>
                        <a href="#" className="flex justify-end">
                            <button className="bg-primary/10 text-primary text-xs sm:text-sm w-full rounded-md h-8 flex items-center justify-center sm:w-32">
                                Read more
                            </button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}