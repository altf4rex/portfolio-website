"use client"

import Link from "next/link";
import { arr, links } from "@/constants";
import { motion } from "framer-motion";
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
    <section
      id="contacts"
      className="h-screen flex justify-center flex-col overflow-hidden relative z-50 bg-black"
    >
      <svg
        className="circle absolute -right-[57%]"
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
      <svg
        className="circle-small absolute -right-[20%]"
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
      <div className="px-3 flex justify-between items-center">
        <motion.div 
        className="relative z-[60] text-[16rem] font-extralight -tracking-[0.14em] text-primary"
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.7}}
        transition={{ duration: 0.8}}
        >
          CONTACT
        </motion.div>
        <motion.div className="text-sm text-secondary pr-10"
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
          <span className="">&gt;</span>_
        </motion.div>
      </div>
      <div className="flex justify-between px-6">
        <div className="flex">
          <motion.div 
          className="flex items-center w-fit p-2 mr-4 border border-primary"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.2}}
          transition={{ease: "easeOut", delay: 0.1, duration: 0.5}}
          >
            <div className="w-1 h-1 mr-3 bg-[#FAEE50]"></div>
            <p className="text-sm text-primary">daniil.nat00@gmail.com</p>
          </motion.div>
          <motion.div 
          className="flex items-center w-fit p-2 mr-4 border border-primary"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.2}}
          transition={{ease: "easeOut", delay: 0.3, duration: 0.5}}>
            <div className="w-1 h-1 mr-3 bg-[#FAEE50]"></div>
            <p className="text-sm text-primary">+7 929 012 76 05</p>
          </motion.div>
        </div>
        <motion.div 
        className="flex relative z-[60]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        >
          {links.map((l, i) => (
            <motion.div
              variants={variants}
              custom={i + 1}
            >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={l.link}
              className="group flex items-center w-fit p-2 mr-4 border border-primary hover:border-white "
            >
              <p className="mr-2 text-sm text-primary group-hover:text-white">
                {l.name}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clip-path="url(#clip0_133_649)">
                  <path
                    className="group-hover:fill-white"
                    d="M10.5 8.00651e-07H14.5C14.6326 8.00651e-07 14.7598 0.0526792 14.8536 0.146447C14.9473 0.240216 15 0.367393 15 0.500001V4.5C15.0002 4.59902 14.9709 4.69586 14.916 4.77825C14.8611 4.86064 14.7829 4.92487 14.6915 4.96279C14.6 5.0007 14.4993 5.01061 14.4022 4.99124C14.3051 4.97187 14.2159 4.92411 14.146 4.854L12.5 3.207L0.853999 14.854L0.145999 14.146L11.793 2.5L10.146 0.854001C10.0759 0.784071 10.0281 0.6949 10.0088 0.597791C9.98939 0.500683 9.9993 0.400011 10.0372 0.308538C10.0751 0.217064 10.1394 0.138909 10.2217 0.0839806C10.3041 0.029052 10.401 -0.000176365 10.5 8.00651e-07Z"
                    fill="#B2B2B1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_133_649">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="matrix(-1 0 0 1 15 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>               
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
    </section>
  );
}
