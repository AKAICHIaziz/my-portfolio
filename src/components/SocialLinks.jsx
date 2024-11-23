import Image from "next/image"

import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import linkedin from "../../public/linkedin.svg"
import github from "../../public/github.svg"
import phone from "../../public/phone.svg"
import gmail from "../../public/gmail.svg"

export default function SocialLinks() {
    return (
        <div className="w-[70%] sm:w-96 h-11 sm:h-14 border rounded-full bg-card/10 mt-5 mb-10 flex flex-row items-center justify-around ">
            <Image src={linkedin} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            <Image src={github} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            <Image src={gmail} alt="logo" className="w-8  h-8 cursor-pointer hover:scale-125 duration-150" />
            <Image src={facebook} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            <Image src={instagram} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            <Image src={phone} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
        </div>
    )
}