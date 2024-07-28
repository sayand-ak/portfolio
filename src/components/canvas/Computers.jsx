import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight 
        intensity={4.15}
        groundColor="black"
      />
      
      <pointLight intensity={3} />

      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12}
        penumbra={4}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive 
        object={computer.scene}
        scale={ isMobile ? 0.55 :0.75}
        position={isMobile ? [0, -3.25, -1.5] :[0, -3.25, -1.5]}
        rotate={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

// This function creates a canvas for computers
const ComputersCanvas = () => {
  // This state variable is used to determine if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);
 
  // This useEffect hook is used to detect if the user is on a mobile device
  useEffect(() => {
    // This media query is used to detect if the user is on a mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // This sets the isMobile state variable to true if the user is on a mobile device
    setIsMobile(mediaQuery.matches);

    // This function is used to handle changes in the media query
    const handleMediaQuery = (e) => setIsMobile(e.matches);

    // This adds an event listener to the window to detect changes in the media query
    window.addEventListener("change", handleMediaQuery);

    // This removes the event listener from the window when the component is unmounted
    return () => window.removeEventListener("change", handleMediaQuery);

  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;