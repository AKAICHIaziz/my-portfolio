"use client";

import Image from "next/image";
import logo from "../../public/panda.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const isActive = (path) => pathname === path;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="fixed z-30 pr-[7%] pl-8 bg-muted/20 border-b backdrop-blur-3xl w-full h-14 flex flex-row items-center justify-between sm:pr-[17%] ">
                <Image src={logo} alt="LOGO" className="w-20 sm:w-28" />

                <button
                    onClick={toggleSidebar}
                    className="block p-1 rounded-md bg-background sm:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>

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
                            href="/about"
                            className={isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}
                        >
                            About
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

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-background/90 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } w-[70%] z-30 shadow-lg sm:hidden`}
            >
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 p-2 bg-background rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <ul className="flex flex-col gap-6 mt-16 p-4 text-sm">
                    <li>
                        <Link
                            href="/"
                            onClick={toggleSidebar}
                            className={isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            onClick={toggleSidebar}
                            className={isActive("/projects") ? "text-primary" : "text-foreground hover:text-primary"}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            onClick={toggleSidebar}
                            className={isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/skills"
                            onClick={toggleSidebar}
                            className={isActive("/skills") ? "text-primary" : "text-foreground hover:text-primary"}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            onClick={toggleSidebar}
                            className={isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-20"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}
