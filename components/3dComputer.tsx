"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'


  export default function Computer() {

    function Model() {
      const { scene } = useGLTF('/images/computer.glb')
      return (
      <mesh position={[-0.2, -0.2, 0]}>
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
        <ambientLight />
        <pointLight position={[10, -10, 10]} />
        <Suspense>
        <OrbitControls 
  enablePan={true}
  enableZoom={true}
  enableRotate={true}
/>
          <Model /> 
          <Preload all /> 
        </Suspense>
      </Canvas>
    )
  }