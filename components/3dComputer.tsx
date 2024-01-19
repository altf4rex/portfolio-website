"use client"
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

function Model() {
    const { scene } = useGLTF('/images/computer.glb')
    return (
      <motion.primitive 
        object={scene} 
        scale={4}
        animate={["hover"]}
        variants={{
          unliked: {
            x: [0, 0],
            y: [0, 0],
            scale: 0.9
          },
          liked: {
            x: 4,
            y: [0, -1.5, 2],
            scale: 0.9,
            transition: { duration: 0.5 }
          },
          hover: {
            rotateZ: 0,
            rotateY: 0.3,
            scale: 1.3,
            transition: {
              rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity }
            }
          }
        }}
      />
    )
  }
  
  export default function Computer() {
    return (
      <Canvas className='w-screen h-screen'>
        <ambientLight />
        <pointLight position={[10, -10, 10]} />
        <Model />
      </Canvas>
    )
  }