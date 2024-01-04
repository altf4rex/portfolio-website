"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Wait() {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
      },
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative z-30 py-[20vh] pb-[10vh] overflow-hidden bg-black">
      <Image
        className="absolute letft-0 bottom-0"
        src="\images\52 1.svg"
        alt=""
        width={444}
        height={222}
      />
      <div className="flex justify-around mx-[10vw] items-center text-base leading-[1.6rem] text-normal uppercase text-white">
        <div>
          <p>+9</p>
          <p className="mt-20">MAINT&gt;</p>
          <div className="relative">
            -<br />
            -<br />
            -<br />
            <motion.img
                animate={{
                    opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
                  }}
                  transition={{ duration: 5, ease: "linear"}}
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 "
              src="\images\icon-attention.svg"
              alt="attention"
              width={29}
              height={29}
            />
          </div>
          <p>
            appr em15
            <br />
            act f-pln&gt;
          </p>
          <p className="mt-16">target</p>
        </div>
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={variants} custom={1}>
            standby progress
          </motion.div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="99"
            viewBox="0 0 2 99"
            fill="none"
            className="my-14"
            variants={variants}
            custom={2}
          >
            <path d="M1 0L0.999996 99" stroke="#B2B2B1" strokeDasharray="4 4" />
          </motion.svg>
          <motion.div className="flex" variants={variants} custom={3}>
            wait
            <motion.div variants={variants} custom={4}>.</motion.div>
            <motion.div variants={variants} custom={5}>.</motion.div>
            <motion.div variants={variants} custom={6}>.</motion.div>
          </motion.div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="99"
            viewBox="0 0 2 99"
            fill="none"
            className="my-14"
            variants={variants}
            custom={7}
          >
            <path d="M1 0L0.999996 99" stroke="#B2B2B1" strokeDasharray="4 4" />
          </motion.svg>
          <motion.div variants={variants} custom={8}>
            --- [ projects loaded ] ---
          </motion.div>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="132"
            height="50"
            viewBox="0 0 132 50"
            fill="none"
            className="mt-28"
          >
            <motion.path
                variants={variants} custom={9}
              d="M3.64645 49.3536C3.84171 49.5488 4.15829 49.5488 4.35356 49.3536L7.53554 46.1716C7.7308 45.9763 7.7308 45.6597 7.53554 45.4645C7.34027 45.2692 7.02369 45.2692 6.82843 45.4645L4 48.2929L1.17157 45.4645C0.976313 45.2692 0.65973 45.2692 0.464468 45.4645C0.269206 45.6597 0.269206 45.9763 0.464468 46.1716L3.64645 49.3536ZM3.5 2.18557e-08L3.5 49L4.5 49L4.5 -2.18557e-08L3.5 2.18557e-08Z"
              fill="#B2B2B1"
            />
            <motion.path
                variants={variants} custom={9.5}
              d="M65.6464 49.3536C65.8417 49.5488 66.1583 49.5488 66.3536 49.3536L69.5355 46.1716C69.7308 45.9763 69.7308 45.6597 69.5355 45.4645C69.3403 45.2692 69.0237 45.2692 68.8284 45.4645L66 48.2929L63.1716 45.4645C62.9763 45.2692 62.6597 45.2692 62.4645 45.4645C62.2692 45.6597 62.2692 45.9763 62.4645 46.1716L65.6464 49.3536ZM65.5 2.18557e-08L65.5 49L66.5 49L66.5 -2.18557e-08L65.5 2.18557e-08Z"
              fill="#B2B2B1"
            />
            <motion.path
                variants={variants} custom={10}
              d="M127.646 49.3536C127.842 49.5488 128.158 49.5488 128.354 49.3536L131.536 46.1716C131.731 45.9763 131.731 45.6597 131.536 45.4645C131.34 45.2692 131.024 45.2692 130.828 45.4645L128 48.2929L125.172 45.4645C124.976 45.2692 124.66 45.2692 124.464 45.4645C124.269 45.6597 124.269 45.9763 124.464 46.1716L127.646 49.3536ZM127.5 2.18557e-08L127.5 49L128.5 49L128.5 -2.18557e-08L127.5 2.18557e-08Z"
              fill="#B2B2B1"
            />
          </svg>
        </motion.div>
        <div>
          <p>
            from
            <br />
            wrld
          </p>
          <p className="my-5">
            to
            <br />
            ||||
          </p>
          <p>
            next
            <br />
            point
          </p>
          <p className="mt-16">
            -<br />
            -<br />
            -<br />
          </p>
        </div>
      </div>
      <Image
        className="absolute top-0 right-0"
        src="\images\56 1.svg"
        alt=""
        width={600}
        height={300}
      />
    </div>
  );
}
