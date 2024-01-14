"use client"
import { useEffect, useState } from 'react';


export default function Header() {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      
      return () => clearInterval(intervalId);
    }, []);
    const hours = currentTime.getHours().toString().padStart(2, '0'); 
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');

    return (
            <header className="text-main flex items-center relative top-0 my-[3vw] mx-[6vw] max-md:my-2 max-md:mx-6 max-md:justify-between">
                <div className="absolute left-1 max-md:static">
                    <p>Daniil Natorin</p>
                    <p>[Web Developer]</p>
                </div>
                <div className="absolute flex right-1 max-md:static">
                    <div className="mr-[6vw] text-xs font-normal">
                        <p>WORKING WORLDWIDE</p>
                        <p>{hours}<span className='blinking'>:</span>{minutes}, GMT+3</p>
                    </div>
                    <div className="text-xs max-md:hidden">
                        <p>DMS 52° 37′ 0″ N, 39° 36′ 0″ E</p>
                        <p>Decimal 52.616667, 39.6E</p>
                    </div>
                </div>
            </header>
    )
}