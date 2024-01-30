"use client"
import { Canvas  } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import ModelLoader from './ModelLoader';

  export default function Computer() {

    function Model() {
      const { scene } = useGLTF('/images/untitled.glb');
      
      return (
      <mesh 
      scale={0.2}
      position={[-0.02, -0.46, 0]}>
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
      camera={{position: [0.64, -0.1, 1.15], fov: 50}}
      >
        <Suspense fallback={<ModelLoader />}>
        <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        />
              <ambientLight intensity={1} />
              <spotLight position={[0.2, -0.2, 1]} angle={Math.PI / 4} penumbra={1} intensity={1.5} castShadow />
          <Model />
          <Preload all /> 
        </Suspense>
      </Canvas>
    )
  }