import Image from "next/image"

import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import linkedin from "../../public/linkedin.svg"
import github from "../../public/github.svg"
import phone from "../../public/phone.svg"
import gmail from "../../public/gmail.svg"
import Link from "next/link"

export default function SocialLinks() {
    return (
        <div className="w-[70%] sm:w-96 h-11 pl-2 pr-2 sm:h-14 border rounded-full bg-card/10 mt-5 mb-10 flex flex-row items-center justify-around ">
            <Link href="https://www.linkedin.com/in/akaichi-med-aziz-23683a254/" target="blank">
                <Image src={linkedin} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            </Link>
            <Link href="https://github.com/AKAICHIaziz" target="blank">
                <Image src={github} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            </Link>
            <Link href="mailto:akaichiaziz10@gmail.com?subject=Job%or%Internship%Opportunity%20|%20Project%20Inquiry&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%...">
                <Image src={gmail} alt="logo" className="w-8 h-8 cursor-pointer hover:scale-125 duration-150" />
            </Link>
            <Link href="/skills">
                <Image src={facebook} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            </Link>
            <Link href="/skills">
                <Image src={instagram} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            </Link>
            <Link href="/skills">
                <Image src={phone} alt="logo" className="w-5  h-5 cursor-pointer hover:scale-125 duration-150" />
            </Link>
        </div>
    )
}