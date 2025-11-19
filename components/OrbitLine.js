import * as THREE from 'three';

export default function OrbitLine({ distance }) {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[distance - 0.05, distance + 0.05, 64]} />
            <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={THREE.DoubleSide} />
        </mesh>
    );
}
