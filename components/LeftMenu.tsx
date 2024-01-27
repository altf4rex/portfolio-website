import Link from "next/link";

export default function LeftMenu() {
    return (
        <nav className="fixed z-50 left-0 top-0 h-screen w-[2vw] px-[3vw] flex flex-col justify-center items-center max-md:h-fit max-md:w-screen max-md:px-1 max-md:bg-black max-md:py-4 max-md:hidden">
            <Link href="/#contacts" className="border-hover border-b-[0.2rem] hover:text-white -rotate-90 text-base whitespace-nowrap text-primary font-bold max-md:rotate-0">CONTACT ME</Link>
            <p className="absolute bottom-10 -rotate-90 text-xs text-primary font-bold max-md:hidden">©2024</p>
        </nav>
    )
}

