import logo from "@/../public/panda.png"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-accent/30 w-[95%] h-10 sm:h-14 mb-3 sm:mb-6 rounded-full flex items-center justify-between px-3 sm:px-20 mt-10 sm:mt-20 self-center">
            <Image src={logo} alt="logo" className="h-3 sm:h-6 w-auto" />
            <p className="font-light text-xs sm:text-sm">&copy;2024 Copyright. All rights reserved.</p>
        </div>
    )
}