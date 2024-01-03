"use client";
import Image from "next/image";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Wait() {
    let ref1 = useRef(null);
    let ref2 = useRef(null);

  let { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["20%", "100%"],
  });

  let { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"]
  });
  let y = useTransform(scrollYProgress1, [0, 1], ["0%", "70%"]);
    let rotate = useTransform(scrollYProgress2, [0, 1], ["45deg", "260deg"]);
    let rotateArrow1 = useTransform(scrollYProgress2, [0, 1], ["200deg", "220deg"]);
    let rotateArrow2 = useTransform(scrollYProgress2, [0, 1], ["210deg", "360deg"]);
    let rotateArrow3 = useTransform(scrollYProgress2, [0, 1], ["100deg", "140deg"]);

    const transform = useMotionTemplate`translate(-80%, -80%) rotate(${rotate})`;
    const transform1 = useMotionTemplate`translate(-80%, -80%) rotate(${rotateArrow1})`;
    const transform2 = useMotionTemplate`translate(-80%, -80%) rotate(${rotateArrow2})`;
    const transform3 = useMotionTemplate`translate(-80%, -80%) rotate(${rotateArrow3})`;

  return (
    <div className="overflow-hidden mt-[2vh] relative z-10 bg-black">
      <div className="relative top-0 left-0 w-screen h-[60vh] z-10 bg-black"></div>
      <motion.div className="relative z-20 bg-black" ref={ref1} style={{ y }}>
        <div className="relative ml-[10vw]">
          <div className="absolute top-0 left-[-1rem] text-xs text-secondary">
            Prtfl
            <br />
            Ldd
            <br />
            +10
            <br />
            100%
          </div>
          {/* <h2 className="header ">ABOUT<br/>ME</h2> */}
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
        <div className="mt-[8vh] ml-[10vw] flex">
          <p className="text-main max-w-[50%] mt-[18vh] mr-[10vw]">
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
          </p>
          <div className="relative" ref={ref2}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block">
              <motion.svg
                style={{ transform }}
                className="clock-arrow"
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
                className="clock-arrow"
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
                className="clock-arrow"
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
                className="clock-arrow"
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
                className="clock-center"
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
              className="max-w-[40vw] max-h-[44vh]"
              src="\images\group15.svg"
              alt="about me"
              width={373}
              height={469}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
