import Image from "next/image";
import logo from "../../public/logo.png"
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="fixed pr-[7%] pl-8 bg-muted/20 border-b backdrop-blur-3xl w-full h-14 flex flex-row items-center justify-between sm:pr-[17%] ">

            <div>Logo</div>

            <div className="block p-1 rounded-md bg-background sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>


            <ul className="hidden sm:flex space-x-4 text-sm">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/skills">Skills</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
