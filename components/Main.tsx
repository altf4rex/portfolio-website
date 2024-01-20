"use client"
import { motion, useScroll, useTransform, useMotionValue} from "framer-motion"
import { useRef, useState } from "react"
import Computer from "./3dComputer";
import useMeasure from "react-use-measure";
export default function Main() {

    const sensitivity = 0.01;

    const [isDragging, setIsDragging] = useState(false)
    const [ref3d, bounds] = useMeasure({ scroll: false });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(-0.5);

    let ref = useRef(null);
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    return (
        <motion.section className="h-screen flex items-center pl-[2vw] overflow-hidden relative z-0 max-md:pl-0" ref={ref} style={{y}}>
            <h1 className="header">DN</h1>
            <motion.div
            ref={ref3d}
            onPointerMove={(e) => {
                if (isDragging) {
                    mouseX.set((e.clientX - bounds.x - bounds.width / 2) * sensitivity);
                    mouseY.set((e.clientY - bounds.y - bounds.height / 2) * sensitivity);
                }
              }}
              onTapStart={() => setIsDragging(true)}
              onTap={() => setIsDragging(false)}
            >
                <Computer 
                    mouseX={mouseX}
                    mouseY={mouseY}/>
            </motion.div>

        </motion.section>
    )
}
