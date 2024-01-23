"use client"
import { motion, useScroll, useTransform, useMotionValue} from "framer-motion"
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
            <Header />
            <h1 className="header absolute z-0 left-20 top-[65%] -translate-y-1/2 max-[1366px]:z-10 max-[1366px]:w-screen">DN</h1> 
            <Computer />
        </motion.section>
    )
}