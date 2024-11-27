import Image from "next/image";
import my_image from "../../public/img.png"

export default function Profile() {
    return (
        <div className="w-full flex flex-row items-center justify-around sm:w-8/12 pl-7 pr-7 mb-4 sm:mb-8">

            <div className="flex flex-col w-full sm:w-[60%] gap-2">
                <h1 className="font-thin text-sm sm:text-lg text-foreground/70">Software Developer</h1>
                <h1 className="text-[#563A9C] text-xl sm:text-5xl font-semibold">
                    Akaichi Mohamed Aziz
                </h1>
                <p className="text-foreground/70 text-justify text-xs sm:text-sm font-extralight ">
                    Dedicated and passionate about crafting innovative solutions that simplify everyday life, foster meaningful connections, and bring people closer together through technology.
                </p>
            </div>

            <Image src={my_image} alt="Profile image" className="w-44 hidden rounded-full lg:block" />

        </div>
    )
}