import { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom shader for the Sun's glow effect
const SunGlowMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color('#ffaa00') },
    // Vertex shader
    `
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment shader
    `
    uniform float time;
    uniform vec3 color;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      vec3 glow = color * intensity;
      
      // Pulsing effect
      float pulse = sin(time * 2.0) * 0.1 + 0.9;
      
      gl_FragColor = vec4(glow * pulse, 1.0);
    }
  `
);

extend({ SunGlowMaterial });

export default function Sun() {
    const sunRef = useRef();
    const glowRef = useRef();

    useFrame((state) => {
        if (glowRef.current) {
            glowRef.current.time = state.clock.elapsedTime;
        }
    });

    return (
        <group>
            {/* Main Sun sphere */}
            <mesh position={[0, 0, 0]} ref={sunRef}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshStandardMaterial
                    emissive="#ffaa00"
                    emissiveIntensity={3}
                    color="#ffaa00"
                />
                <pointLight intensity={3} distance={100} decay={2} color="#ffaa00" />
            </mesh>

            {/* Inner Glow layer */}
            <mesh position={[0, 0, 0]} scale={1.2}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <sunGlowMaterial ref={glowRef} transparent side={THREE.BackSide} blending={THREE.AdditiveBlending} />
            </mesh>

            {/* Outer Corona layer */}
            <mesh position={[0, 0, 0]} scale={1.4}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <sunGlowMaterial transparent side={THREE.BackSide} blending={THREE.AdditiveBlending} color={new THREE.Color('#ff4400')} />
            </mesh>
        </group>
    );
}
