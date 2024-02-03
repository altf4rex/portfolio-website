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
      <div className="px-[5.5rem] pt-[3.25rem] pb-16 border-[0.125rem] border-[#D9D9D9] ">
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
        <div className="mt-3 border-[0.125rem] border-[#D9D9D9]">
        <div style={{width: `${progress.toFixed(2)}%`, overflow:"hidden"}} className="mx-[0.125rem] my-[0.2rem]">
        <svg
          width="516"
          height="28"
          viewBox="0 0 522 28"
            preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[28rem] h-[1.6rem]"
        >
          <defs>
          <clipPath id="clip">
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>
          <g clipPath="url(#clip0_427_1094)">
            <g filter="url(#filter0_d_427_1094)">
              <rect width="20" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter1_d_427_1094)">
              <rect x="23" width="20" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter2_d_427_1094)">
              <rect x="46" width="20" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter3_d_427_1094)">
              <path d="M69 0H89V28H69V0Z" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter4_d_427_1094)">
              <rect x="92" width="20" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter5_d_427_1094)">
              <rect x="115" width="20" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter6_d_427_1094)">
              <rect x="138" width="20" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter7_d_427_1094)">
              <rect x="161" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter8_d_427_1094)">
              <rect x="185" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter9_d_427_1094)">
              <rect x="209" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter10_d_427_1094)">
              <rect x="233" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter11_d_427_1094)">
              <rect x="257" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter12_d_427_1094)">
              <rect x="281" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter13_d_427_1094)">
              <rect x="305" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter14_d_427_1094)">
              <rect x="329" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter15_d_427_1094)">
              <rect x="377" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter16_d_427_1094)">
              <path d="M473 0H494V28H473V0Z" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter17_d_427_1094)">
              <path d="M497 0H518V28H497V0Z" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter18_d_427_1094)">
              <rect x="449" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter19_d_427_1094)">
              <rect x="425" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter20_d_427_1094)">
              <rect x="401" width="21" height="28" fill="#D9D9D9" />
            </g>
            <g filter="url(#filter21_d_427_1094)">
              <rect x="353" width="21" height="28" fill="#D9D9D9" />
            </g>
          </g>
        </svg>
        </div>
        </div>
      </div>
    </Html>
  );
};

export default ModelLoader;
