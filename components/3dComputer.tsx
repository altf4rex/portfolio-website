"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'

  export default function Computer() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 1536px)");
  
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
  

    function Model() {
      const { scene } = useGLTF('/images/computer.glb')
      return (
      <mesh 
      scale={isMobile ? 0.7 : 1}
      position={isMobile ? [0.23, -0.12, 0.1] : [0.15, -0.2, 0]}>
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
      camera={{position: [0.8, 0.2, 1.1], fov: 50}}
      >
        <Suspense>
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