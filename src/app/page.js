

import Image from "next/image";
import my_image from "../../public/img.png"
import project_image from "../../public/project_image.png"
import Marquee from "@/components/Marquee"
import { Sparkles } from "@/components/Sparkles"

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 pt-24 bg-transparent">

      <div className="w-10/12 flex flex-row gap-10 items-center sm:w-8/12">

        <Image src={my_image} alt="Profile image" className="w-44 hidden rounded-full lg:block" />

        <div>
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="font-bold text-base sm:text-xl text-foreground">Who am I</h1>

            <div className="hidden sm:flex flex-row items-center gap-2 cursor-pointer text-sm text-foreground/60 transition-all hover:gap-4">
              <p>Read more</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>

          </div>
          <p className="text-foreground/70 text-justify text-sm sm:text-base">
            A passionate software developer and a final-year computer science student, set to graduate this summer with a bachelor&apos;s degree.
            My journey started with a love for technology and a curiosity about how things work. Today, I&apos;m dedicated to creating solutions that make life easier and more connected.
            My approach combines creativity, precision, and a constant drive for growth, enabling me to contribute meaningfully to projects that inspire and push boundaries. I value collaboration, adaptability, and the opportunity to make a positive impact through my work.
          </p>
        </div>

      </div>

      <div className="w-full flex flex-col sm:w-8/12">

        <h1 className="font-bold text-base sm:text-xl text-foreground text-center sm:text-left ">My Expertise, Your Solution</h1>

        <div className="relative -z-10 h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>

      </div>

      <div className="w-10/12 flex flex-col gap-10 items-center sm:w-8/12">

        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-bold text-xl text-foreground">Latest projects</h1>

          <div className="flex flex-row items-center gap-2 cursor-pointer text-sm text-foreground/60 transition-all hover:gap-4">
            <p>Read more</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

        </div>

        <div className=" w-full flex flex-col items-center gap-8">

          <div className=" w-full sm:w-[90%] p-2 flex flex-col lg:gap-10 gap-0 lg:flex-row items-center bg-card rounded-xl">
            <Image src={project_image} alt="Profile image" className="w-72 " />
            <div className="p-5 w-full flex flex-col justify-between gap-3">
              <h2 className="font-semibold text-sm sm:text-base">Heart disease anomaly detection</h2>
              <p className="text-muted-foreground text-justify text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus, nemo sit temporibus iste fugiat! Quia libero nulla sit veritatis assumenda impedit nobis quod possimus, mollitia iure molestias, animi aut.</p>
              <a href="#" className="flex justify-end">
                <button className="bg-primary/10 text-primary text-sm font-medium w-full rounded-md h-9  flex items-center justify-center sm:w-32">
                  Read more
                </button>
              </a>
            </div>
          </div>

          <div className="w-full sm:w-[90%] p-2 flex flex-col lg:gap-10 gap-0 lg:flex-row items-center bg-card rounded-xl">
            <Image src={project_image} alt="Profile image" className="w-72 " />
            <div className="p-5 w-full flex flex-col justify-between gap-3">
              <h2 className="font-semibold text-sm sm:text-base">TT Intern OP</h2>
              <p className="text-muted-foreground text-justify text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus, nemo sit temporibus iste fugiat! Quia libero nulla sit veritatis assumenda impedit nobis quod possimus, mollitia iure molestias, animi aut.</p>
              <a href="#" className="flex justify-end">
                <button className="bg-primary/10 text-primary text-sm font-medium w-full rounded-md h-9  flex items-center justify-center sm:w-32">
                  Read more
                </button>
              </a>
            </div>
          </div>

        </div>

      </div>

      <div className="w-10/12 flex flex-col gap-1 sm:w-8/12">

        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-bold text-xl text-foreground">Technical Expertise</h1>

          <div className="flex flex-row items-center gap-2 cursor-pointer text-sm text-foreground/60 transition-all hover:gap-4">
            <p>See all</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

        </div>

        <div className="w-full p-2">
          <Marquee />
        </div>



      </div>

    </div>

  );
}