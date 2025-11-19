import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Planet from './Planet';
import Sun from './Sun';
import OrbitLine from './OrbitLine';
import { planets } from '../data/planets';

export default function SolarSystem({ setSelectedPlanet }) {
    return (
        <group>
            <Sun />

            {/* Planets */}
            {planets.map((planet, index) => (
                <group key={index}>
                    <OrbitLine distance={planet.distance} />
                    <Planet {...planet} setSelectedPlanet={setSelectedPlanet} />
                </group>
            ))}
        </group>
    );
}
