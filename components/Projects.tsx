"use client"
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react"

export default function Projects() {
    
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current; // Получаем текущий элемент из ссылки
    if (el) { // Проверяем, существует ли элемент
      const onWheel = (e: WheelEvent) => { // Обработчик события прокрутки
        let modifier = 1; // Модификатор скорости прокрутки
        if (e.deltaMode === e.DOM_DELTA_LINE) { // Если прокрутка измеряется в строках
          modifier = parseInt(getComputedStyle(el).lineHeight); // Используем высоту строки в качестве модификатора
        } else if (e.deltaMode === e.DOM_DELTA_PAGE) { // Если прокрутка измеряется в страницах
          modifier = el.clientHeight; // Используем высоту элемента в качестве модификатора
        }
        if (e.deltaY !== 0) { // Если колесо мыши прокручивается
          // Если мы находимся в начале и пытаемся прокрутить вверх, или находимся в конце и пытаемся прокрутить вниз,
          // мы не предотвращаем действие по умолчанию для события wheel, что позволяет странице прокручиваться
          if ((e.deltaY < 0 && el.scrollLeft <= 0) || 
              (e.deltaY > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
            return;
          }
          el.scrollLeft += modifier * e.deltaY; // Изменяем положение прокрутки элемента
          e.preventDefault(); // Предотвращаем действие по умолчанию (вертикальную прокрутку)
        }
      };
      el.addEventListener("wheel", onWheel); // Добавляем обработчик события к элементу
      return () => el.removeEventListener("wheel", onWheel); // Удаляем обработчик события при размонтировании компонента
    }
  }, []);


  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (el) {
  //     const onWheel = (e: WheelEvent) => {
  //       let modifier = 1;
  //       if (e.deltaMode === e.DOM_DELTA_LINE) {
  //         modifier = parseInt(getComputedStyle(el).lineHeight);
  //       } else if (e.deltaMode === e.DOM_DELTA_PAGE) {
  //         modifier = el.clientHeight;
  //       }
  //       if (e.deltaY !== 0) {
  //         // Добавляем проверку, что мы находимся в нижней части блока
  //         if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
  //           if ((e.deltaY < 0 && el.scrollLeft <= 0) || 
  //               (e.deltaY > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
  //             return;
  //           }
  //           el.scrollLeft += modifier * e.deltaY;
  //           e.preventDefault();
  //         }
  //       }
  //     };
  //     el.addEventListener("wheel", onWheel);
  //     return () => el.removeEventListener("wheel", onWheel);
  //   }
  // }, []);
  return (
    <section className="pl-20 pt-36 overflow-hidden bg-black">
      <h2 className="header">projects</h2>
      <div className="flex flex-col overflow-hidden pr-40" ref={scrollRef}>
      <div className="flex pl-[2vw]">
        <svg
        className="mt-14 min-w-[20rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="471"
          height="2"
          viewBox="0 0 471 2"
          fill="none"
        >
          <path d="M0 1L471 0.999959" stroke="#B2B2B1" stroke-dasharray="4 4" />
        </svg>
        <svg
         className="mt-[4.5rem] min-w-[15rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="321"
          height="2"
          viewBox="0 0 321 2"
          fill="none"
        >
          <path d="M0 1L321 1.00003" stroke="#B2B2B1" stroke-dasharray="4 4" />
        </svg>
        <svg
            className="mt-[5.5rem] mr-2 min-w-[20rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="490"
          height="2"
          viewBox="0 0 490 2"
          fill="none"
        >
          <path d="M0 1L490 0.999957" stroke="#B2B2B1" stroke-dasharray="4 4" />
        </svg>
        {
          [...Array(projects.length + 1)].map((a, i) => 
          <>
          <svg
          key={i}
          className="mt-[5.5rem] min-w-[20rem]"
           xmlns="http://www.w3.org/2000/svg"
           width="514"
           height="2"
           viewBox="0 0 514 2"
           fill="none"
         >
           <path d="M0 1L2766 1.00024" stroke="#B2B2B1" stroke-dasharray="4 4" />
         </svg>
         </>
          )
        }
      </div>
      <div className="scroll flex mt-20">
        {
            projects.map((p) => 
            <div className="flex flex-col">
                <div className="flex items-end mr-[4vw]">
                    <Link href={p.link} target="_blank" rel="noopener noreferrer" className="hover:brightness-75">
                    <Image 
                        className="mr-[2vw] object-cover max-w-[30rem] max-h-[30rem]"
                        src={p.img}
                        alt={p.alt}
                        width={500}
                        height={500}
                    />
                    </Link>
                    <Link href={p.link} target="_blank" rel="noopener noreferrer" className="hover:brightness-75">
                    <Image 
                        className="object-cover max-w-[24rem] max-h-[24rem]"
                        src={p.img}
                        alt={p.alt}
                        width={400}
                        height={400}
                    />
                    </Link>
                </div>
                <p className="text-main mt-[4vh] uppercase">//{p.name}</p>
            </div>
            )
        }
      </div> 
      </div>


    </section>
  );
}