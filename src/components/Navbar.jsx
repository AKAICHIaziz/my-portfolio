"use client"

import Image from "next/image";
import logo from "../../public/panda.png"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {

    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <nav className="fixed z-20 pr-[7%] pl-8 bg-muted/20 border-b backdrop-blur-3xl w-full h-14 flex flex-row items-center justify-between sm:pr-[17%] ">

            <Image src={logo} alt="LOGO" className="w-20 sm:w-28" />

            <div className="block p-1 rounded-md bg-background sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>


            <ul className="hidden sm:flex flex-row gap-4 text-sm">
                <li>
                    <Link
                        href="/"
                        className={isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}
                    >
                        Home
                    </Link>

                </li>
                <li>
                    <Link
                        href="/projects"
                        className={isActive("/projects") ? "text-primary" : "text-foreground hover:text-primary"}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/skills"
                        className={isActive("/skills") ? "text-primary" : "text-foreground hover:text-primary"}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};


