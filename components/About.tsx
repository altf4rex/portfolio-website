"use client";
import Image from "next/image";
import { motion, useMotionTemplate, useScroll, useTransform} from "framer-motion";
import { useRef,  useState, useEffect} from "react";

export default function About() {
  const [seconds1, setSeconds1] = useState(10);
  const [seconds2, setSeconds2] = useState(200);
  const [seconds3, setSeconds3] = useState(300);
  const [seconds4, setSeconds4] = useState(200);

  const isActive = true;
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds1(previous => previous  + 12 );
        setSeconds2(previous => previous + 4);
        setSeconds3(previous => previous + 1);
        setSeconds4(previous => previous + 10);
      }, 800);

  
      return () => clearInterval(interval);
    }
  }, [isActive]);

  
  let ref2 = useRef(null);

  let { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"]
  });

    let rotate = useTransform(scrollYProgress2, [0, 1], [`${seconds1}deg`, `${seconds1 + 360}deg`]);
    let rotateArrow1 = useTransform(scrollYProgress2, [0, 1], [`${seconds2}deg`, `${seconds2 + 360}deg`]);
    let rotateArrow2 = useTransform(scrollYProgress2, [0, 1], [`${seconds3}deg`, `${seconds3 + 360}deg`]);
    let rotateArrow3 = useTransform(scrollYProgress2, [0, 1], [`${seconds4}deg`, `${seconds4 + 360}deg`]);

    const transform = useMotionTemplate`translate(-80%, -80%) rotate(${rotate})`;
    const transform1 = useMotionTemplate`translate(-80%, -80%) rotate(${rotateArrow1})`;
    const transform2 = useMotionTemplate`translate(-80%, -80%) rotate(${rotateArrow2})`;
    const transform3 = useMotionTemplate`translate(-80%, -80%) rotate(${rotateArrow3})`;

    return (
      <div 
        className="pl-36 pt-20 overflow-hidden relative z-10 bg-black"
      >
      <div className="relative z-20 bg-black">
        <div className="relative ">
          <div className="absolute top-0 left-[-4vw] text-xs text-secondary">
            Prtfl
            <br />
            Ldd
            <br />
            +10
            <br />
            100%
          </div>
          <Image
            className="w-[90%] h-[100%]"
            src="\images\about me.svg"
            alt="about me"
            width={1542}
            height={304}
          />
          <div className="absolute bottom-0 right-[9vw] text-right text-xs text-secondary">
            Front-end is not just a job,
            <br />
            it's a mindset.
          </div>
        </div>
        <div 
        className="mt-8 flex max-md:flex-wrap">
          <motion.div 
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true, amount: 0.7}}
          transition={{ duration: 0.8}}
          className="text-main max-w-[50%] mt-40 mr-20">
            <span className="text-secondary">
              //DESCRIPTION
              <br />
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur. Sociis sit amet massa
              etiam urna in. Curabitur morbi faucibus ut mattis morbi eu.
              Dapibus condimentum eget est risus fermentum. Cras fermentum
              sagittis faucibus ligula sed pellentesque eu.
              <br />
            </span>
            <span className="text-secondary">
              &gt;CONT
              <br />
              +;:____DSCR
              <br />
              ISO
              <br />
            </span>
          </motion.div>
          <motion.div 
          className="relative" ref={ref2}
          initial={{opacity: 0, scale: 1.2}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{ once: true, amount: 0.7}}
          transition={{ duration: 0.8}}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block">
              <motion.svg
                style={{ transform }}
                className="clock-arrow max-w-[5.5rem] max-h-[15rem]"
                width="88"
                height="239"
                viewBox="0 0 88 239"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.469846"
                  y1="0.82899"
                  x2="87.0009"
                  y2="238.571"
                  stroke="#EA3222"
                />
              </motion.svg>
              <motion.svg
                style={{ transform: transform1 }}
                className="clock-arrow max-w-[16rem] max-h-[0.065rem] duration-500"
                width="259"
                height="1"
                viewBox="0 0 259 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="259" y2="0.5" stroke="#DFDFDF" />
              </motion.svg>
              <motion.svg
                style={{ transform: transform2 }}
                className="clock-arrow max-w-[11.2rem] max-h-[5.4rem] duration-500"
                width="180"
                height="85"
                viewBox="0 0 180 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.44042 0.518641C2.92681 -0.155262 1.15348 0.525456 0.479579 2.03907C-0.194325 3.55268 0.486393 5.32601 2 5.99991L4.44042 0.518641ZM2 5.99991L177.401 84.0933L179.841 78.6121L4.44042 0.518641L2 5.99991Z"
                  fill="#FEFEFE"
                  stroke="#080909" 
                  stroke-width="2" 
                  stroke-linecap="square"
                />
              </motion.svg>
              <motion.svg
                style={{ transform: transform3 }}
                className="clock-arrow max-w-[11.4rem] max-h-[11.4rem] duration-200"
                width="183"
                height="183"
                viewBox="0 0 183 183"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.353553"
                  y1="0.646447"
                  x2="182.08"
                  y2="182.373"
                  stroke="#0000EA"
                />
              </motion.svg>
              <svg
                className="clock-center max-w-[1.9rem] max-h-[1.9rem] duration-500"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="13"
                  fill="#FAEE50"
                  stroke="#080909"
                  stroke-width="4"
                />
              </svg>
            </div>
            <Image
              className="max-w-[26rem] max-h-[24rem]"
              src="\images\group 16.svg"
              alt="about me"
              width={494}
              height={469}
            />
          </motion.div>
        </div>
        <div className="mt-[4vh] ml-[-4vw] text-xs text-secondary">
            INIT
            <br />
            DATA TYPE
            <br />
            +10
            <br />
            ----SP DIR[ + ]
        </div>
      </div>
    </div>
  );
}
