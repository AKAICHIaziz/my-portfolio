import Image from "next/image";
import my_image from "../../public/img.png"
import ButtonA from "./ui/ButtonA";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="w-full flex flex-row items-center justify-around sm:w-8/12 pl-7 pr-7 mb-4 sm:mb-8">

            <div className="flex flex-col w-full sm:w-[58%] gap-0 sm:gap-2">
                <h1 className="font-thin text-sm sm:text-lg text-foreground/70">Software Developer</h1>
                <h1 className="text-[#6522a4] text-xl sm:text-5xl font-semibold">
                    Akaichi Mohamed Aziz
                </h1>
                <p className="text-foreground text-justify text-sm sm:text-sm font-thin mb-2 sm:mb-1">
                    Passionate about crafting innovative solutions that leverage technology to drive positive change and contribute to the advancement of society.
                </p>
                <Link href="/Akaichi_Med_Aziz_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-fit">
                    <ButtonA />
                </Link>
            </div>

            <Image src={my_image} alt="Profile image" className="w-44 hidden rounded-full lg:block" />

        </div>
    )
}