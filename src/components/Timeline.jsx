import Image from "next/image";
import experience from "@/../public/experience.svg"
import education from "@/../public/education.svg"

export default function Timeline({ items }) {
    return (

        <ol className="flex flex-col gap-3 border-l-2 border-foreground ">
            {
                items.map((item, index) => (
                    <li key={index} className="flex flex-col">

                        <div className="flex items-start">
                            <div className="rounded-full bg-foreground w-fit h-fit p-1 -start-4 relative">
                                {item.experience && (<Image src={experience} alt="experience" className="w-5" />)}
                                {item.education && (<Image src={education} alt="education" className="w-5" />)}
                            </div>
                            <span className="text-foreground w-fit">{item.title}</span>
                        </div>

                        <div className="pl-7 sm:pl-8 flex items-center gap-5">
                            <span className="text-sm text-primary">{item.society}</span>
                            <span className="text-xs font-light">{item.date}</span>
                        </div>

                        <p className="pl-7 sm:pl-8 text-sm text-foreground/70 font-extralight w-full sm:w-[70%] text-justify" dangerouslySetInnerHTML={{ __html: item.description }} />

                    </li>
                ))
            }
        </ol>

    )
}