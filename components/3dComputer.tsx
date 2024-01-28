"use client"
import { Canvas  } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import ModelLoader from "@/components/ModelLoader";

  export default function Computer() {

    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQueryTablet = window.matchMedia("(max-width: 1366px)");
      const mediaQueryMobile = window.matchMedia("(max-width: 767px)");
    
      // Set state variable
      setIsTablet(mediaQueryTablet.matches);
      setIsMobile(mediaQueryMobile.matches);
    
      // Define a callback function to handle changes to the media query
      const handleTabletChange = (event: MediaQueryListEvent) => {
        setIsTablet(event.matches);
      };
    
      const handleMobileChange = (event: MediaQueryListEvent) => {
        setIsMobile(event.matches);
      };
    
      // Add the callback function as a listener for changes to the media query
      mediaQueryTablet.addEventListener("change", handleTabletChange);
      mediaQueryMobile.addEventListener("change", handleMobileChange);
    
      // Remove the listener when the component is unmounted
      return () => {
        mediaQueryTablet.removeEventListener("change", handleTabletChange);
        mediaQueryMobile.removeEventListener("change", handleMobileChange);
      };
    }, []);
    
    function Model() {
      const { scene } = useGLTF('/images/3dcomputer.glb');
      
      return (
      <mesh 
      scale={isMobile ? 0.6 : isTablet ? 0.8 : 1}
      position={isMobile ? [0.15, -0.5, 0] : [-0.02, -0.46, 0]}>
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
      camera={{position: [0.64, -0.25, 1.2], fov: 50}}
      >
        <Suspense fallback={<ModelLoader />}>
        <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={isTablet ? false : true}
        />
              <ambientLight intensity={1} />
              <spotLight position={[0.2, -0.2, 1]} angle={Math.PI / 4} penumbra={1} intensity={1.5} castShadow />
          <Model />
          <Preload all /> 
        </Suspense>
      </Canvas>
    )
  }