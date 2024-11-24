import Image from "next/image";
import project_image from "../../public/project_image.png"

export default function LatestProjects() {
    return (
        <div className="w-10/12 flex flex-col gap-5 items-center sm:w-8/12 -mt-28 sm:mt-0">

            <div className="flex flex-row items-center justify-between w-full">
                <h1 className="font-bold text-lg sm:text-xl text-foreground">Latest projects</h1>

                <div className="flex flex-row items-center gap-2 cursor-pointer text-xs text-foreground/60 transition-all hover:gap-4">
                    <p>Read more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

            </div>

            <div className=" w-full flex flex-col items-center gap-2 sm:gap-8">

                <div className=" w-full sm:w-[90%] p-2 flex flex-col lg:gap-10 gap-0 lg:flex-row items-center bg-accent/5 rounded-xl">
                    <Image src={project_image} alt="Profile image" className="w-72 " />
                    <div className="p-5 w-full flex flex-col justify-between gap-3">
                        <h2 className="font-semibold text-sm sm:text-base">Heart disease anomaly detection</h2>
                        <p className="text-muted-foreground text-justify text-xs sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus, nemo sit temporibus iste fugiat! Quia libero nulla sit veritatis assumenda impedit nobis quod possimus, mollitia iure molestias, animi aut.</p>
                        <a href="#" className="flex justify-end">
                            <button className="bg-primary/10 text-primary text-xs sm:text-sm font-medium w-full rounded-md h-7 sm:h-9 flex items-center justify-center sm:w-32">
                                Read more
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-full sm:w-[90%] p-2 flex flex-col lg:gap-10 gap-0 lg:flex-row items-center bg-accent/5 rounded-xl">
                    <Image src={project_image} alt="Profile image" className="w-72 " />
                    <div className="p-5 w-full flex flex-col justify-between gap-3">
                        <h2 className="font-semibold text-sm sm:text-base">TT Intern OP</h2>
                        <p className="text-muted-foreground text-justify text-xs sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus, nemo sit temporibus iste fugiat! Quia libero nulla sit veritatis assumenda impedit nobis quod possimus, mollitia iure molestias, animi aut.</p>
                        <a href="#" className="flex justify-end">
                            <button className="bg-primary/10 text-primary text-xs sm:text-sm font-medium w-full rounded-md h-7 sm:h-9 flex items-center justify-center sm:w-32">
                                Read more
                            </button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}