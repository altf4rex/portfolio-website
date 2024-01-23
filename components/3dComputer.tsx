"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { Text } from '@react-three/drei';
  export default function Computer() {

    function Model() {
      const { scene } = useGLTF('/images/computer.glb')
      return (
      <mesh position={[0.2, -0.2, 0]}>
        <primitive 
          object={scene}
        />
      </mesh>
      )
    }

    return (
      <Canvas
      frameloop='demand'
      shadows
      camera={{position: [0.1, 0.1, 1.2], fov: 50}}
      >
        <Suspense>
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            />
              <ambientLight intensity={2} />
              <spotLight position={[0.2, -0.2, 1]} angle={Math.PI / 4} penumbra={1} intensity={0.5} castShadow />
            <Model /> 
            <Text

          position={[0.2, 0.2, 0.222]}
          color="white"
          fontSize={0.2}
          maxWidth={1}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="left"
        >
         :(
        </Text>
            <Preload all /> 
        </Suspense>
      </Canvas>
    )
  }