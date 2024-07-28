import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl]);

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={1}/>
            <directionalLight position={[0, 0, 1.7]}/>
            <mesh castShadow receiveShadow scale={2.5}>
                
                <icosahedronGeometry args={[1, 1]}/>

                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />

                <Decal 
                    position={[0, 0, 1]}
                    rotation={[ 2 * Math.PI, 0, 6.25]}
                    flatShading
                    map={decal}
                />

            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
