"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/constants";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1366px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const xMobile = useMotionValue(0)
   const x = useTransform(isMobile ? xMobile : scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <div ref={targetRef} className="relative h-[240vh] bg-black max-[1366px]:h-screen max-md:h-[80vh] max-sm:h-[63vh]">
      <div className="sticky top-0 flex h-screen  items-center overflow-hidden max-[1366px]:realtive max-[1366px]:overflow-x-scroll max-md:h-[80vh]  max-sm:h-[65vh]">
        <motion.div style={isMobile ? {} : { x: x }} className="pr-56  max-[1820px]:pr-96 max-lg:pr-20 max-md:pr-10 max-md:pl-2">
          <div className="flex absolute top-0 z-10 max-[1366px]:top-24">
            <svg
              className="w-[25vw] max-lg:w-[30vw] max-md:w-[60vw]"
              xmlns="http://www.w3.org/2000/svg"
              width="471"
              height="2"
              viewBox="0 0 471 2"
              fill="none"
            >
              <path
                d="M0 1L471 0.999959"
                stroke="#B2B2B1"
                strokeDasharray="4 4"
              />
            </svg>
            <svg
              className="mt-4 w-[18vw] max-lg:w-[22vw] max-md:w-[40vw]"
              xmlns="http://www.w3.org/2000/svg"
              width="321"
              height="2"
              viewBox="0 0 321 2"
              fill="none"
            >
              <path
                d="M0 1L321 1.00003"
                stroke="#B2B2B1"
                strokeDasharray="4 4"
              />
            </svg>
            <svg
              className="mt-6 mr-2 w-[26vw] max-lg:w-[30vw] max-md:w-[59vw]"
              xmlns="http://www.w3.org/2000/svg"
              width="490"
              height="2"
              viewBox="0 0 490 2"
              fill="none"
            >
              <path
                d="M0 1L490 0.999957"
                stroke="#B2B2B1"
                strokeDasharray="4 4"
              />
            </svg>
            {[...Array(projects.length + 1)].map((a, i) => (
                <svg
                  key={i}
                  className="mt-6 w-[22vw] max-[1820px]:w-[24vw] max-lg:w-[38vw] max-md:w-[60vw]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="514"
                  height="2"
                  viewBox="0 0 514 2"
                  fill="none"
                >
                  <path
                    d="M0 1L2766 1.00024"
                    stroke="#B2B2B1"
                    strokeDasharray="4 4"
                  />
                </svg>
            ))}
            <p className="absolute top-12 right-4 text-[0.75rem] font-light uppercase text-primary max-[1820px]:top-16">
              project line end <br/>
              next.<br/>
              contacts &gt;&gt;<br/>
              -<br/>
              /
            </p>
              <svg width="268" height="614" viewBox="0 0 268 614" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2rem] max-w-[14vw] max-h-[32rem] max-xl:hidden">
                <path d="M257 589L253 593L249 589" stroke="#B2B2B1"/>
                <path d="M257 509L253 513L249 509" stroke="#B2B2B1"/>
                <path d="M257 599L253 603L249 599" stroke="#B2B2B1"/>
                <path d="M257 549L253 553L249 549" stroke="#B2B2B1"/>
                <path d="M257 609L253 613L249 609" stroke="#B2B2B1"/>
                <path d="M257 559L253 563L249 559" stroke="#B2B2B1"/>
                <path d="M267 614L267 0.999999" stroke="#B2B2B1" strokeDasharray="4 4"/>
                <path d="M267 1H6.17504e-05" stroke="#B2B2B1" strokeDasharray="4 4"/>
              </svg>
          </div>
          <div className="flex mt-36 relative z-50">
            {projects.map((p) => (
              <div className="flex flex-col" key={p.id}>
                <div className="flex items-end mr-16">
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:brightness-75"
                  >
                    <Image
                      className="mr-10 object-cover max-w-[30rem] max-h-[30rem] max-md:w-[20rem] max-md:h-[20rem]"
                      src={p.img}
                      alt={p.alt}
                      width={500}
                      height={500}
                    />
                  </Link>
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:brightness-75"
                  >
                    <Image
                      className="object-cover h-screen max-w-[21rem] max-h-[21rem] max-md:w-[16rem] max-md:h-[16rem]"
                      src={p.imgMobile}
                      alt={p.alt}
                      width={400}
                      height={400}
                    />
                  </Link>
                </div>
                <p className="text-main mt-2 uppercase">{"//"}{p.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
