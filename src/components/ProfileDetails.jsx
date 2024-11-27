import Image from "next/image";
import my_image from "../../public/img.png"

export default function ProfileDetails() {
    return (
        <div className="w-10/12 flex flex-row gap-10 items-center sm:w-8/12  pb-10">

            <Image src={my_image} alt="Profile image" className="w-44 hidden rounded-full lg:block" />

            <div>
                <h1 className="font-bold text-base sm:text-xl text-foreground">Who am I</h1>
                <p className="text-foreground/70 text-justify text-sm sm:text-base">
                    A passionate software developer and a final-year computer science student, set to graduate this summer with a bachelor&apos;s degree.
                    My journey started with a love for technology and a curiosity about how things work. Today, I&apos;m dedicated to creating solutions that make life easier and more connected.
                    My approach combines creativity, precision, and a constant drive for growth, enabling me to contribute meaningfully to projects that inspire and push boundaries. I value collaboration, adaptability, and the opportunity to make a positive impact through my work.
                </p>
            </div>

        </div>
    )
}