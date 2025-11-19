import { useEffect, useState } from 'react';
import styles from './WelcomeScreen.module.css';

export default function WelcomeScreen({ onExplore }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger entrance animations
        setIsVisible(true);
    }, []);

    const handleExplore = () => {
        // Fade out before transitioning
        setIsVisible(false);
        setTimeout(() => {
            onExplore();
        }, 800);
    };

    return (
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
            {/* Animated stars background */}
            <div className={styles.starsContainer}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.star}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className={styles.content}>
                <h1 className={styles.title}>
                    PLANETÁRIO VIRTUAL
                </h1>

                <div className={styles.divider} />

                <p className={styles.description}>
                    Bem-vindo à sua jornada pelo cosmos
                </p>

                <p className={styles.subtitle}>
                    Explore os planetas do nosso Sistema Solar em uma experiência 3D interativa.
                    Descubra informações fascinantes sobre cada corpo celeste.
                </p>

                <button
                    className={styles.exploreButton}
                    onClick={handleExplore}
                >
                    <span className={styles.buttonText}>Explorar Agora</span>
                    <span className={styles.buttonIcon}>→</span>
                </button>

                <div className={styles.hint}>
                    Arraste para girar • Scroll para zoom • Clique nos planetas
                </div>
            </div>
        </div>
    );
}
