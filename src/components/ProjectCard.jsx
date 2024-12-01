import Image from "next/image";

export default function ProjectCard({
    ProjectImage,
    ProjectName,
    ProjectType,
    ProjectDescription,
    ProjectTechs
}) {
    const truncate = (input) =>
        input?.length > 100 ? `${input.substring(0, 100)}...` : input;
    return (
        <div className="w-full sm:w-[30vw] h-fit p-3 rounded-xl bg-card flex flex-col gap-4 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <Image src={ProjectImage} alt="project image" className="rounded-xl" />

            <div className="w-full h-full flex flex-col gap-3">

                <div className="w-full flex justify-between items-center">
                    <h1 className="text-base ">{ProjectName}</h1>
                    <p className="text-xs text-gray-400">{ProjectType}</p>
                </div>

                <div className="text-sm font-light text-gray-400 text-justify">
                    <p>{truncate(ProjectDescription)}</p>
                </div>

                <div className="w-full h-fit p-3 rounded-xl bg-accent/20 wrapper flex flex-wrap gap-3 justify-around sm:justify-between items-center content-center">

                    {ProjectTechs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center w-fit h-fit gap-2 px-2 py-1 rounded-full bg-accent"
                        >
                            <Image src={tech.techImg} className="w-4" alt={tech.techName} />
                            <p className="font-extralight text-xs">{tech.techName}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}