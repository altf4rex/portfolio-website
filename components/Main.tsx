"use client"
import { motion, useScroll, useTransform} from "framer-motion"
import { useRef, useState } from "react"
import Computer from "./3dComputer";
import Header from "./Header";

export default function Main() {

    let ref = useRef(null);
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    return (
        <motion.section className="h-screen flex flex-col overflow-hidden relative z-0" ref={ref} style={{y}}>
            <div className="hidden max-[1366px]:block max-[1366px]:w-screen max-[1366px]:h-screen max-[1366px]:absolute max-[1366px]:top-0 max-[1366px]:left-0 max-[1366px]:z-10"></div>
            <Header />
            <h1 className="header absolute z-0 left-20 top-[62%] -translate-y-1/2 max-lg:left-2 max-lg:top-[36%] max-md:top-[34%] max-md:-left-9">DN</h1> 
            <div className="hidden absolute bottom-12 left-3 max-h-[36vh] max-md:flex  max-sm:bottom-24 ">
            <svg width="20" height="367" viewBox="0 0 20 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9998 342L14.9998 346L18.9998 342" stroke="#B2B2B1"/>
                    <path d="M10.9998 262L14.9998 266L18.9998 262" stroke="#B2B2B1"/>
                    <path d="M10.9998 352L14.9998 356L18.9998 352" stroke="#B2B2B1"/>
                    <path d="M10.9998 302L14.9998 306L18.9998 302" stroke="#B2B2B1"/>
                    <path d="M10.9998 362L14.9998 366L18.9998 362" stroke="#B2B2B1" strokeOpacity="0.9"/>
                    <path d="M10.9998 312L14.9998 316L18.9998 312" stroke="#B2B2B1"/>
                    <path d="M1 367L0.999984 -5.24521e-06" stroke="#B2B2B1" strokeDasharray="4 4"/>
                </svg>
                <p className="text-main">Front-end is not just a job, <br/> 
                it&apos;s a mindset.</p>
            </div>
            <Computer />
        </motion.section>
    )
}