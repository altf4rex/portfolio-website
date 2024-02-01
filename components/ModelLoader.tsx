import { Html, useProgress } from "@react-three/drei";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ModelLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      className="absolute left-[28rem] top-1/2 -translate-y-1/2"
    >
      <div className="py-12 px-10 border-[0.125rem] border-white ">
        <div className="flex items-center">
          <div className="w-2 h-2 mr-1 bg-[#FAEE50] blinking-dot"></div>
          <p className="text-main">{progress.toFixed(2)}%</p>
          <motion.div className="text-main flex ml-2">
            LOADING
            <motion.div
              animate={{
                opacity: [0, 1],
              }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              .
            </motion.div>
            <motion.div
              animate={{
                opacity: [0, 1],
              }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              .
            </motion.div>
            <motion.div
              animate={{
                opacity: [0, 1],
              }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              .
            </motion.div>
          </motion.div>
        </div>
        {/* <motion.div 
                className="w-96 border-[0.125rem] border-white">
                   <div className="m-1 flex">
                    {array.map((a, index) => (
                      <motion.div key={index} variants={variants} custom={index} className="w-5 h-7 mr-1 bg-white"></motion.div>
                    ))}
                  </div> 

            </motion.div> */}
        <div className="h-10 bg-white" style={{ width: `${progress.toFixed(2)}%`}}/>
      </div>
    </Html>
  );
};

export default ModelLoader;
