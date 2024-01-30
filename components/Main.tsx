"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Computer from "./3dComputer";
import Header from "./Header";
import { useEffect, useState } from 'react'
import Image from "next/image";

export default function Main() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQueryTablet = window.matchMedia("(max-width: 1366px)");
  
    // Set state variable
    setIsTablet(mediaQueryTablet.matches);
  
    // Define a callback function to handle changes to the media query
    const handleTabletChange = (event: MediaQueryListEvent) => {
      setIsTablet(event.matches);
    };
  
    // Add the callback function as a listener for changes to the media query
    mediaQueryTablet.addEventListener("change", handleTabletChange);
  
    // Remove the listener when the component is unmounted
    return () => {
      mediaQueryTablet.removeEventListener("change", handleTabletChange);
    };
  }, []);
  

  return (
    <section
      className="w-screen h-screen top-0 left-0 relative z-0 flex flex-col overflow-hidden">
        <motion.div
        className="w-screen h-screen absolute"
        ref={ref}
        style={{ y }}
        >
      <Header />
      <h1 className="header absolute z-0 left-20 top-[62%] -translate-y-1/2 max-lg:left-2 max-lg:top-[36%] max-sm:top-[34%] max-md:-left-9">
        DN
      </h1>
      <div className="hidden absolute bottom-24 left-3 max-h-[36vh] max-sm:flex">
        <svg
          width="20"
          height="367"
          viewBox="0 0 20 367"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.9998 342L14.9998 346L18.9998 342" stroke="#B2B2B1" />
          <path d="M10.9998 262L14.9998 266L18.9998 262" stroke="#B2B2B1" />
          <path d="M10.9998 352L14.9998 356L18.9998 352" stroke="#B2B2B1" />
          <path d="M10.9998 302L14.9998 306L18.9998 302" stroke="#B2B2B1" />
          <path
            d="M10.9998 362L14.9998 366L18.9998 362"
            stroke="#B2B2B1"
            strokeOpacity="0.9"
          />
          <path d="M10.9998 312L14.9998 316L18.9998 312" stroke="#B2B2B1" />
          <path
            d="M1 367L0.999984 -5.24521e-06"
            stroke="#B2B2B1"
            strokeDasharray="4 4"
          />
        </svg>

      </div>
      {
        !isTablet ? 
        <Computer /> : 
          <Image
            className="absolute -bottom-24 -right-[30rem] max-lg:min-w-[1000px] max-lg:min-h-[600px] max-lg:-bottom-8 max-lg:-right-96 max-md:-bottom-8 max-md:-right-56 max-sm:min-w-[56rem] max-sm:min-h-[35rem] max-sm:-right-64"
            src="/images/Image_computer4.png"
            alt="computer"
            width={1920}
            height={1080}
          />
      }
        
      </motion.div>
    </section>
  );
}
