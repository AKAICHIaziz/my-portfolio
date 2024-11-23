import Image from "next/image";
import my_image from "../../public/img.png"

export default function Profile() {
    return (
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
    )
}