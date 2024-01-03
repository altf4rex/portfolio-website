"use client"
import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

export default function Wait() {
    // let ref = useRef(null);
    // let { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start start", "end start"]
    // })
    // let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    // ref={ref} style={{y}}
    return (
        <div className="wait" >
            <div className="wait-content"></div>
        </div>
    )
}


