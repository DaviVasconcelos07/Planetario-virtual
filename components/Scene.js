'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SolarSystem from './SolarSystem';
import Overlay from './UI/Overlay';
import CameraController from './CameraController';
import { Suspense } from 'react';

export default function Scene({ selectedPlanet, setSelectedPlanet }) {
    return (
        <>
            <Canvas camera={{ position: [0, 20, 40], fov: 60 }}>
                <color attach="background" args={['#000008']} />
                <ambientLight intensity={0.1} />
                <pointLight position={[0, 0, 0]} intensity={2} color="#ffaa00" distance={100} decay={2} />

                <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
                <Stars radius={100} depth={50} count={5000} factor={10} saturation={0} fade speed={2} />

                <Suspense fallback={null}>
                    <SolarSystem setSelectedPlanet={setSelectedPlanet} />
                </Suspense>

                <CameraController selectedPlanet={selectedPlanet} />

                <OrbitControls makeDefault enablePan={false} minDistance={5} maxDistance={200} />
            </Canvas>
            <Overlay selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} />
        </>
    );
}
