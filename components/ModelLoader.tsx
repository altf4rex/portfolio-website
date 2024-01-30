import { Html, useProgress } from "@react-three/drei";
import {motion} from "framer-motion"

const ModelLoader = () => {
  const { progress } = useProgress();
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.01,

      },
    }),
  };
  let array = new Array(18).fill(null);
  return (
    <Html
      as='div'
      center
      className="absolute left-[28rem] top-1/2 -translate-y-1/2"
    >
        <div className="py-12 px-10 border-[0.125rem] border-white ">
            <div className="flex items-center">
                <div className="w-2 h-2 mr-1 bg-[#FAEE50] blinking-dot"></div>
                <p className="text-main">
                    {progress.toFixed(2)}%
                </p>
                <motion.div 
                 className="text-main flex ml-2"
                 animate="visible"
                 >
                LOADING            
                    <motion.div     
                    animate={{
                        opacity: [0, 1],
                    }} 
                    transition={{ delay: 0.1 }}
                    >.</motion.div>
                    <motion.div     
                    animate={{
                        opacity: [0, 1],
                    }} 
                    transition={{ delay: 0.2 }}
                    >.</motion.div>
                    <motion.div     
                    animate={{
                        opacity: [0, 1],
                    }} 
                    transition={{ delay: 0.3 }}
                    >.</motion.div>
                </motion.div>
            </div>
            <motion.div 
                initial="hidden"
                animate="visible"
                className="border-[0.125rem] border-white">
                  <div className="m-1 flex">
                    {array.map((a, index) => (
                      <motion.div key={index} variants={variants} custom={index} className="w-5 h-7 mr-1 bg-white"></motion.div>
                    ))}
                  </div>

            </motion.div>
        </div>
    </Html>
    );
  }

export default ModelLoader;