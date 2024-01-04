"use client"
import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

export default function Main() {
    let ref = useRef(null);
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    return (
        <motion.section className="pl-[2vw] overflow-hidden relative z-0" ref={ref} style={{y}}>
            <h1 className="header">DN</h1>
        </motion.section>
    )
}
