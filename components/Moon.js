import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Moon({ name, size, distance, speed, color }) {
    const moonRef = useRef();
    const orbitRef = useRef();

    // Random start angle
    const [angle] = useState(() => Math.random() * Math.PI * 2);

    useFrame((state, delta) => {
        if (orbitRef.current) {
            orbitRef.current.rotation.y += speed * delta * 0.5;
        }
        if (moonRef.current) {
            moonRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <group ref={orbitRef} rotation={[0, angle, 0]}>
            <mesh ref={moonRef} position={[distance, 0, 0]}>
                <sphereGeometry args={[size, 16, 16]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </group>
    );
}
