import Image from "next/image";
import my_image from "../../public/img2.jpg"

export default function ProfileDetails() {
    return (
        <div className="w-full flex flex-col items-center gap-5 sm:gap-5 p-4 sm:p-2">

            <Image src={my_image} alt="Profile image" className="w-24 sm:w-40 rounded-full z-20"/>

            <div className="flex flex-col gap-2 sm:gap-0">
                <h1 className="font-semibold text-sm sm:text-lg text-foreground">Who am I ?</h1>
                <p className="text-foreground/70 text-justify text-xs sm:text-base">
                    I&apos;m Akaichi Mohamed Aziz, a passionate software developer and a final-year computer science student, set to graduate this summer with a bachelor&apos;s degree.
                    My journey started with a love for technology and a curiosity about how things work. Today, I&apos;m dedicated to creating solutions that make life easier and more connected.
                    My approach combines creativity, precision, and a constant drive for growth, enabling me to contribute meaningfully to projects that inspire and push boundaries. I value collaboration, adaptability, and the opportunity to make a positive impact through my work.
                </p>
            </div>

        </div>
    )
}