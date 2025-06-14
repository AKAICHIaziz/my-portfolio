import Image from "next/image";
import projet_tt from "../../public/projects_images/projet_tt.png"
import projetML from "../../public/projects_images/colab.png"
import Link from "next/link";

export default function LatestProjects() {
    return (
        <div className="w-10/12 flex flex-col gap-2 sm:gap-5 items-center -mt-28 sm:mt-0">

            <Link className="flex flex-row items-center justify-between w-full" href="/projects">
                <h1 className="font-bold text-lg sm:text-xl text-foreground">Latest projects</h1>

                <div className="border-b flex flex-row items-center gap-2 cursor-pointer text-xs text-foreground/60 transition-all hover:gap-4">
                    <p>Read more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

            </Link>

            <div className=" w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-8">

                <div className=" w-full sm:w-[45vw] p-3 flex flex-col sm:gap-5 gap-3 lg:flex-row items-center sm:items-start bg-accent/20 rounded-lg">
                    <Image src={projet_tt} alt="Profile image" className="w-72 rounded" />
                    <div className="w-full flex flex-col gap-2 justify-between">
                        <h2 className="font-semibold text-sm sm:text-base">TT Intern OP Manager</h2>
                        <div className="text-foreground font-light text-center text-xs sm:text-sm justify-center w-fit wrapper flex flex-wrap gap-1">
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">React</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">Node</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">Express</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">MongoDB</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">JWT</p>
                        </div>
                        <Link href="/projects/intern-operations-manager" className="flex justify-center sm:justify-end">
                            <button className="transition-all duration-300 hover:scale-105 text-xs inline-flex h-8 sm:h-9 w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-light text-foreground focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                 Read more
                            </button>
                        </Link>
                    </div>
                </div>

                <div className=" w-full sm:w-[45vw] p-3 flex flex-col sm:gap-5 gap-3 lg:flex-row items-center sm:items-start bg-accent/20 rounded-lg">
                    <Image src={projetML} alt="Profile image" className="w-72 rounded" />
                    <div className="w-full flex flex-col gap-2 justify-between">
                        <h2 className="font-semibold text-sm sm:text-base">Heart disease anomaly detection</h2>
                        <div className="text-foreground font-light text-center text-xs sm:text-sm justify-center w-fit wrapper flex flex-wrap gap-1">
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">ML</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">Python</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit whitespace-nowrap flex-1">Scikit-learn</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">Matplotlib</p>
                            <p className="bg-accent/30 text-primary p-1 px-3 rounded-lg w-fit flex-1">Flask</p>
                        </div>
                        <Link href="/projects" className="flex justify-center sm:justify-end">
                            {/* <button className="bg-primary/10 text-foreground text-xs font-light sm:text-sm w-full rounded-md h-8 flex items-center justify-center sm:w-32">
                                Read more
                            </button> */}
                            <button className="transition-all duration-300 hover:scale-105 text-xs inline-flex h-8 sm:h-9 w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-light text-foreground focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Read more
                            </button>

                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}