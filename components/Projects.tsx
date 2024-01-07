"use client"
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react"

export default function Projects() {
    
  const scrollRef = useRef<HTMLDivElement>(null);



  return (
    <section className="pl-[4vw] pt-[10vh] overflow-hidden bg-black">
      <h2 className="header">projects</h2>
      <div className="flex pl-[2vw]">
        <svg
        className="mt-[8vh]"
          xmlns="http://www.w3.org/2000/svg"
          width="471"
          height="2"
          viewBox="0 0 471 2"
          fill="none"
        >
          <path d="M0 1L471 0.999959" stroke="#B2B2B1" stroke-dasharray="4 4" />
        </svg>
        <svg
         className="mt-[10vh]"
          xmlns="http://www.w3.org/2000/svg"
          width="321"
          height="2"
          viewBox="0 0 321 2"
          fill="none"
        >
          <path d="M0 1L321 1.00003" stroke="#B2B2B1" stroke-dasharray="4 4" />
        </svg>
        <svg
            className="mt-[12vh] pr-[1vw]"
          xmlns="http://www.w3.org/2000/svg"
          width="490"
          height="2"
          viewBox="0 0 490 2"
          fill="none"
        >
          <path d="M0 1L490 0.999957" stroke="#B2B2B1" stroke-dasharray="4 4" />
        </svg>
        <svg
         className="mt-[12vh]"
          xmlns="http://www.w3.org/2000/svg"
          width="514"
          height="2"
          viewBox="0 0 514 2"
          fill="none"
        >
          <path d="M0 1L2766 1.00024" stroke="#B2B2B1" stroke-dasharray="4 4" />
        </svg>
      </div>
      <div className="scroll mt-[10vh] flex overflow-x-auto" ref={scrollRef}>
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
    </section>
  );
}