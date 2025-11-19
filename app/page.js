'use client';

import Scene from '../components/Scene';
import WelcomeScreen from '../components/UI/WelcomeScreen';
import { useState } from 'react';

export default function Home() {
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [showWelcome, setShowWelcome] = useState(true);

    const handleExplore = () => {
        setShowWelcome(false);
    };

    return (
        <main style={{ width: '100vw', height: '100vh' }}>
            {showWelcome ? (
                <WelcomeScreen onExplore={handleExplore} />
            ) : (
                <Scene selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} />
            )}
        </main>
    );
}
