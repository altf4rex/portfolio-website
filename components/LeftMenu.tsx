import Link from "next/link";

export default function LeftMenu() {
    return (
        <nav className="fixed z-50 left-0 top-0 h-screen w-[2vw] px-[3vw] flex flex-col justify-center items-center">
            <Link href="/#contacts" className="-rotate-90  text-lg whitespace-nowrap text-primary font-bold underline hover:text-white">CONTACT ME</Link>
            <p className="absolute bottom-[10vh] -rotate-90 text-xs text-primary font-bold">©2023</p>
        </nav>
    )
}