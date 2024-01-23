"use client"
import { motion, useScroll, useTransform, useMotionValue} from "framer-motion"
import { useRef, useState } from "react"
import Computer from "./3dComputer";
import useMeasure from "react-use-measure";

export default function Main() {

    let ref = useRef(null);
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    return (
        <motion.section className="h-screen absolute flex items-center pl-[2vw] overflow-hidden relative z-0 max-md:pl-0" ref={ref} style={{y}}>
            <h1 className="header">DN</h1>
            <Computer />
        </motion.section>
    )
}