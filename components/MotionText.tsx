"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const TextAnimation = ({ text, link }: { text: string; link: string }) => {
  const textArray = text.split("");
  //const totalAnimationTime = textArray.reduce((acc, _, i) => acc + i * 0.1, 0); // Общее время анимации

  const letterVariants = {
    hover: (i: number) => ({
      opacity: [0, 1],
      transition: {
        delay: i * 0.03,
        type: "tween",
        ease: "linear",
      },
    }),
    visible: {
      opacity: 1,
    },
    initial: {
      opacity: 1,
    },
  };

  const underscoreVariants = {
    initial: { opacity: 0, left: "0%" },
    hover: {
      opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      left: ["0%", "70%"],
      transition: {
        duration: 0.3,
      },
    },
    visible: { opacity: 0, left: "0%" },
    
  };

  const drawSvg = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: {
      duration: 0.1,
    }},
    visible: {
      scale: 1
    },
  }

  return (
    <motion.div
      className="relative"
      initial="initial"
      whileHover="hover"
      animate="visible"
      whileInView="hover"
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="border-hover group flex items-center p-2 text-sm text-primary border-[0.08rem] border-primary hover:border-white  hover:text-white"
      >
        {textArray.map((char, index) => (
          <motion.span key={index} variants={letterVariants} custom={index + 1}>
            {char}
          </motion.span>
        ))}
        <motion.span
          variants={underscoreVariants}
          className="absolute bottom-1"
        >
          _
        </motion.span>
        <motion.svg
        variants={drawSvg}
          className="ml-3"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clipPath="url(#clip0_133_649)">
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
        </motion.svg>
      </Link>
    </motion.div>
  );
};

export default TextAnimation;
