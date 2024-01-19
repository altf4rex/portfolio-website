"use client"

import { arr, links } from "@/constants";
import { motion } from "framer-motion";
import TextAnimation from "./MotionText";

export default function Contacts() {
    const doubleArr = [...arr, ...arr];
    const variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
      },
    }),
  };
  return (
    <motion.footer
      initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{ once: true, amount: 0.5}}
    id="contacts"
    className="h-screen flex justify-center flex-col overflow-hidden relative z-50 bg-black "
    >
      <motion.div
      className="absolute -right-[54rem]  max-2xl:-right-[80rem] max-xl:-right-[110rem]"
      initial={{opacity: 0, x: 200}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{ once: true}}
      transition={{ duration: 1.4}}
      >
      <svg
        className="circle"
        width="2178"
        height="2178"
        viewBox="0 0 2178 2178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1089"
          cy="1089"
          r="1088.5"
          stroke="#1E1E1E"
          stroke-dasharray="10 10"
        />
      </svg>
      </motion.div>
      <motion.div
      initial={{opacity: 0, x: 200}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{ once: true}}
      transition={{ duration: 1.4}}
      className="absolute -right-[28rem] max-2xl:-right-[45rem] max-xl:-right-[60rem]">
      <svg
        className="circle-small "
        width="1028"
        height="1028"
        viewBox="0 0 1028 1028"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="514"
          cy="514"
          r="513.5"
          stroke="#1E1E1E"
          stroke-dasharray="20 20"
        />
      </svg>
      </motion.div>
      <div className="track-left absolute top-0 flex z-[60]">
      {doubleArr.map((a, index) => (
          <p
            key={index}
            className="text-[0.6rem] uppercase whitespace-nowrap text-secondary pr-4"
          >
            {a}
          </p>
        ))}
      </div>
      <div className="px-3 flex justify-between items-center relative z-[60] max-lg:flex-col max-lg:items-start max-md:px-0">
        <motion.div 
        className="text-[16rem] font-extralight -tracking-[0.14em] text-primary max-md:text-[9rem] max-md:mb-5"
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.7}}
        transition={{ duration: 0.8}}
        >
          CONTACT
        </motion.div>
        <motion.div className="text-sm text-secondary pr-10 max-lg:pr-0 max-lg:pl-8 max-md:pl-4 max-md:mb-5"
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{ once: true, amount: 0.8}}
        transition={{ease: "easeOut", duration: 0.8}}
        >
          <p>//CHECKING...</p>
          <p className="text-primary">I am ready to talk in anytime.</p>
          <br />
          <span>&lt;</span>
          <p className="py-3">
            - .... .- -. -.-
            <br />
            -.-- --- ..-
          </p>
          &gt;<span className="blinking-underscore text-primary">_</span>
        </motion.div>
      </div>
      <div className="flex justify-between px-6 relative z-[60] max-lg:pt-20 max-md:pt-10 max-md:justify-start max-md:flex-col">
        <div className="flex max-md:flex-col">
          <motion.div 
          className="flex items-center w-fit p-2 mr-4 border border-primary"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.2}}
          transition={{ease: "easeOut", delay: 0.1, duration: 0.5}}
          >
            <div className="w-1 h-1 mr-3 bg-[#FAEE50] blinking"></div>
            <p className="text-sm text-primary">daniil.nat00@gmail.com</p>
          </motion.div>
          <motion.div 
          className="flex items-center w-fit p-2 mr-4 border border-primary max-md:mt-4"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.2}}
          transition={{ease: "easeOut", delay: 0.3, duration: 0.5}}>
            <div className="w-1 h-1 mr-3 bg-[#FAEE50] blinking"></div>
            <p className="text-sm text-primary">+7 929 012 76 05</p>
          </motion.div>
        </div>
        <motion.div 
        className="flex relative z-[60] max-md:mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        >
          {links.map((l, i) => (
            <motion.div
            className="mr-4 max-md:mr-6"
              variants={variants}
              custom={i + 1}
            >
              <TextAnimation text={l.name} link={l.link}/>        
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="track-right absolute bottom-0 flex z-[60]">
        {doubleArr.map((a, index) => (
          <p
            key={index}
            className="text-[0.6rem] uppercase whitespace-nowrap text-secondary pr-4"
          >
            {a}
          </p>
        ))}
      </div>
    </motion.footer>
  );
}
