import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"
import projects from "@/data/projectsData"
import Footer from "@/components/Footer";

export default function Projects() {
    return (
        <div className="w-full h-full flex flex-col items-center pt-20 px-5 sm:pt-20 bg-background gap-5">
            <div className="text-xl sm:text-3xl font-medium text-gray-400">Welcome To The Inventory</div>

            <div className="p-2 flex flex-col w-full items-center gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {projects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={project.ProjectName}>
                            <ProjectCard
                                key={index}
                                ProjectImage={project.ProjectImage}
                                ProjectName={project.ProjectName}
                                ProjectType={project.ProjectType}
                                ProjectDescription={project.ProjectDescription}
                                ProjectTechs={project.ProjectTechs}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
