import { useRef, useState } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Html, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Moon from './Moon';
import SaturnRings from './SaturnRings';

const PlanetAtmosphereMaterial = shaderMaterial(
    { color: new THREE.Color(0.0, 0.0, 0.0), viewVector: new THREE.Vector3(0, 0, 0) },
    // Vertex Shader
    `
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform vec3 color;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
      gl_FragColor = vec4(color, intensity);
    }
  `
);

extend({ PlanetAtmosphereMaterial });

export default function Planet({ name, size, distance, color, speed, description, gravity, temperature, dayLength, moons, setSelectedPlanet }) {
    const meshRef = useRef();
    const orbitRef = useRef();
    const planetGroupRef = useRef();
    const [hovered, setHover] = useState(false);

    // Random start angle
    const [angle] = useState(() => Math.random() * Math.PI * 2);

    useFrame((state, delta) => {
        if (orbitRef.current) {
            // Rotate the orbit group to simulate orbit
            orbitRef.current.rotation.y += speed * delta * 0.5;
        }
        if (meshRef.current) {
            // Rotate planet on its axis
            meshRef.current.rotation.y += delta;
        }
    });

    const handleClick = () => {
        // Pass planet data along with position reference for camera tracking
        setSelectedPlanet({
            name,
            size,
            distance,
            color,
            speed,
            description,
            gravity,
            temperature,
            dayLength,
            positionRef: planetGroupRef
        });
    };

    return (
        <group ref={orbitRef} rotation={[0, angle, 0]}>
            <group ref={planetGroupRef} position={[distance, 0, 0]}>
                {/* Planet Mesh */}
                <mesh
                    ref={meshRef}
                    onPointerOver={() => {
                        setHover(true);
                        document.body.style.cursor = 'pointer';
                    }}
                    onPointerOut={() => {
                        setHover(false);
                        document.body.style.cursor = 'auto';
                    }}
                    onClick={handleClick}
                >
                    <sphereGeometry args={[size, 32, 32]} />
                    <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />

                    {hovered && (
                        <Html distanceFactor={15}>
                            <div className="planet-label">
                                {name}
                            </div>
                        </Html>
                    )}
                </mesh>

                {/* Atmosphere Glow */}
                <mesh scale={1.2}>
                    <sphereGeometry args={[size, 32, 32]} />
                    <planetAtmosphereMaterial
                        transparent
                        side={THREE.BackSide}
                        blending={THREE.AdditiveBlending}
                        color={color}
                    />
                </mesh>

                {/* Saturn Rings - now inside planet group */}
                {name === "Saturno" && <SaturnRings />}

                {/* Moons */}
                {moons && moons.map((moon, index) => (
                    <Moon key={index} {...moon} />
                ))}
            </group>
        </group>
    );
}
