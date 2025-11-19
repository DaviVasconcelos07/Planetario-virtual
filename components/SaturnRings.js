import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function SaturnRings() {
    const ringsRef = useRef();

    useFrame((state, delta) => {
        if (ringsRef.current) {
            ringsRef.current.rotation.z += delta * 0.1;
        }
    });

    return (
        <mesh ref={ringsRef} rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[1.8, 3.2, 64]} />
            <meshStandardMaterial
                color="#C9B18F"
                opacity={0.7}
                transparent
                side={2}
                emissive="#C9B18F"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
}
