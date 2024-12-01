
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import projects from "@/data/projectsData"
import Link from "next/link";

export default async function ProjectPage({ params }) {
    const { slug } = await params

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="pt-40">
                project not found
            </div>
        )
    }

    return (
        <div className="w-full h-full pt-20 flex flex-col items-center gap-4 px-5">

            <div className="w-full items-start pl-0 sm:pl-20">
                <Link href="/projects" className="w-fit flex flex-row items-center gap-2 transform duration-300 hover:gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path fill="#0033ff" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8 .4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" /></svg>
                    <p>Go Back</p>
                </Link>
            </div>

            {
                project.images && (<Carousel images={project.images} />)
            }

            <h1 className="text-lg sm:text-2xl font-medium text-center">{project.ProjectName}</h1>

            <p
                className="text-gray-400 w-full sm:w-[50vw] text-sm sm:text-base text-justify font-light"
                dangerouslySetInnerHTML={{ __html: project.ProjectDescription }}
            />

            {
                project.pdfFile && (
                    <embed src={project.pdfFile} className="w-full sm:w-[60%]" width="full" height="1000px" type="application/pdf" />
                )
            }



        </div>
    );
}
