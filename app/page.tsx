// import About from "@/components/About";
// import Contacts from "@/components/Contacts";
// import LeftMenu from "@/components/LeftMenu";
// import Main from "@/components/Main";
// import Projects from "@/components/Projects";
// import Wait from "@/components/Wait";


// export default function Home() {
//   return (
//     <main>
//         <LeftMenu />
//         <Main />
//         <About />
//         <Wait />
//         <Projects />
//         <Contacts />
//     </main>
//   )
// }


'use client'
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import LeftMenu from "@/components/LeftMenu";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Wait from "@/components/Wait";
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Задержка в 3 секунды

    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
          <div>
      {loading ? (
        <div className="w-screen h-screen bg-black">Загрузка...</div> // Здесь может быть ваша анимация загрузки
      ) : (
        <>
        <LeftMenu />
        <Main />
        <About />
        <Wait />
        <Projects />
        <Contacts />
        </>
      )}
    </div>
    </main>
  )
}
