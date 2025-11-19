import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function CameraController({ selectedPlanet }) {
    const { camera, controls } = useThree();
    const targetPosition = useRef(new THREE.Vector3());
    const targetLookAt = useRef(new THREE.Vector3());
    const isFollowing = useRef(false);

    useEffect(() => {
        if (selectedPlanet && selectedPlanet.positionRef) {
            isFollowing.current = true;
        } else {
            isFollowing.current = false;
            // Reset to default view when no planet selected
            targetPosition.current.set(0, 20, 40);
            targetLookAt.current.set(0, 0, 0);
        }
    }, [selectedPlanet]);

    useFrame((state, delta) => {
        if (isFollowing.current && selectedPlanet && selectedPlanet.positionRef?.current) {
            // Get planet's current world position
            const worldPosition = new THREE.Vector3();
            selectedPlanet.positionRef.current.getWorldPosition(worldPosition);

            // Calculate camera offset based on planet size
            const offset = selectedPlanet.size * 4 + 2;

            // Update target position to follow planet
            targetPosition.current.set(
                worldPosition.x + offset,
                worldPosition.y + offset * 0.5,
                worldPosition.z + offset
            );

            // Look at the planet
            targetLookAt.current.copy(worldPosition);
        }

        // Smoothly interpolate camera position
        camera.position.lerp(targetPosition.current, delta * 2);

        // Smoothly interpolate controls target (where the camera looks)
        if (controls) {
            controls.target.lerp(targetLookAt.current, delta * 2);
            controls.update();
        }
    });

    return null;
}
