"use client"
import { motion } from "framer-motion";
const TextAnimation = ({ text }: {text: string}) => {

  const textArray = text.split('');
  //const totalAnimationTime = textArray.reduce((acc, _, i) => acc + i * 0.1, 0); // Общее время анимации

  const letterVariants = {
    hover: (i: number) => ({
      opacity: [0, 1],
      transition: {
        delay: i * 0.05,
        type: "tween", // Добавьте эту строку
        ease: "linear"  // Добавьте эту строку
      },
    }),
    visible: {
        opacity: 1,
    },
    initial: { 
        opacity: 1,
    },
  };
  
  const variants = {
    initial: { opacity: 0, left: 0},
    hover: { 
        opacity: [0, 1, 0, 1, 0], 
        left: "100%",
        transition: {
            duration: 0.7, // Используйте общее время анимации здесь
        }
    }
  }

  return (
    <motion.div
    className="relative"
    initial="initial"
    whileHover="hover"
    animate="visible"
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          custom={index}
        >
          {char}
        </motion.span>
      ))}
                <motion.span 
                variants={variants}
            className="absolute -bottom-1"
          >
            _
          </motion.span>
    </motion.div>
  );
};

export default TextAnimation;


// import React, { useState, useEffect } from 'react';

// const TextAnimation = ({ text }: { text: string }) => {
//   const [visibleText, setVisibleText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       setVisibleText(text.substring(0, index));
//       index += 1;
//       if (index > text.length) {
//         clearInterval(intervalId);
//       }
//     }, 100); // Измените интервал по вашему усмотрению
//     return () => clearInterval(intervalId);
//   }, [text]);

//   return (
//     <div className="typewriter-container">
//       <button className="typewriter-button">
//         <span className="typewriter-text">{visibleText}</span>
//         <span className="typewriter-cursor">_</span>
//       </button>
//     </div>
//   );
// };

// export default TextAnimation;