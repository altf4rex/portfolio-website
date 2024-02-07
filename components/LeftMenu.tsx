import Link from "next/link";

export default function LeftMenu() {
    return (
        <nav className="fixed z-50 w-[2vw] px-[3vw] left-0 top-0 h-screen flex flex-col justify-center items-center bg-black max-md:hidden">
            <Link href="/" className="absolute top-10">
            <svg width="68" height="24" viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[4.2rem] h-[1.4rem]">
                <path d="M0.5 23.5V3.5H28.161C29.4756 3.5 30.7172 3.76667 31.8857 4.3C33.0542 4.81429 34.0675 5.52857 34.9257 6.44286C35.8021 7.3381 36.4867 8.39524 36.9797 9.61429C37.4909 10.8333 37.7465 12.1286 37.7465 13.5C37.7465 13.705 37.7408 13.9083 37.7294 14.1098C37.6644 15.2569 37.4145 16.3489 36.9797 17.3857C36.4867 18.6048 35.8021 19.6714 34.9257 20.5857C34.0675 21.481 33.0542 22.1952 31.8857 22.7286C30.9916 23.1221 30.0547 23.3651 29.0751 23.4575C28.7744 23.4858 28.4697 23.5 28.161 23.5H0.5ZM9.12696 16.3571H26.2439C27.1021 16.3571 27.7959 16.0905 28.3254 15.5571C28.8548 15.0238 29.1196 14.3381 29.1196 13.5C29.1196 12.6619 28.8548 11.9762 28.3254 11.4429C27.7959 10.9095 27.1021 10.6429 26.2439 10.6429H9.12696V16.3571Z" fill="#FAEE50"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.7294 3.5H29.0751V23.4575C30.0547 23.3651 30.9916 23.1221 31.8857 22.7286C33.0542 22.1952 34.0675 21.481 34.9257 20.5857C35.8021 19.6714 36.4867 18.6048 36.9797 17.3857C37.4145 16.3489 37.6644 15.2569 37.7294 14.1098V12.0714L56.8457 23.5H65.5V3.5H56.8457V14.9286L37.7294 3.5Z" fill="#FAEE50"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.5V0.5H31.0751H39.7294L57.8457 11.3307V12.9286L38.7294 1.5H30.0751V1.54412C29.7744 1.51471 29.4697 1.5 29.161 1.5H2.5ZM66.5 20.5H67.5V0.5H58.8457V1.5H66.5V20.5Z" fill="#FAEE50"/>
            </svg>
            </Link>
            <Link href="/#contacts" className="border-hover border-b-[0.2rem] hover:text-white -rotate-90 text-base whitespace-nowrap text-primary font-bold">CONTACT ME</Link>
            <p className="absolute bottom-10 -rotate-90 text-xs text-primary font-bold">©2024</p>
        </nav>
    )
}

