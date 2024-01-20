"use client"
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { motion} from 'framer-motion-3d'
import { PerspectiveCamera } from '@react-three/drei'
import { MotionValue } from 'framer-motion';


  export default function Computer({mouseX, mouseY}: {mouseX: MotionValue<number>, mouseY: MotionValue<number>}) {

    function Model() {
      const { scene } = useGLTF('/images/computer.glb')
      return (
        <motion.primitive 
          object={scene} 
          rotation={[mouseY, mouseX, 0]}
        />
      )
    }

    return (
      <Canvas>
        <PerspectiveCamera makeDefault position={[0.2, 0.2, 1.2]} />
        <ambientLight />
        <pointLight position={[10, -10, 10]} />
        <Model />
      </Canvas>
    )
  }