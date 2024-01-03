
export default function Header() {
    return (
            <header className="text-main flex items-center relative top-0 my-[3vw] mx-[6vw]">
                <div className="absolute left-1">
                    <p>Daniil Natorin</p>
                    <p>[Web Developer]</p>
                </div>
                <div className="absolute flex right-1">
                    <div className="mr-[6vw] text-xs font-normal">
                        <p>WORKING WORLDWIDE</p>
                        <p>15:19, GMT+3</p>
                    </div>
                    <div className="text-xs">
                        <p>DMS 52° 37′ 0″ N, 39° 36′ 0″ E</p>
                        <p>Decimal 52.616667, 39.6E</p>
                    </div>
                </div>
            </header>
    )
}