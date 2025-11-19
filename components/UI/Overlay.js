import styles from './Overlay.module.css';

export default function Overlay({ selectedPlanet, setSelectedPlanet }) {
    return (
        <div className={styles.overlay}>
            <header className={styles.header}>
                <h1 className={styles.title}>PLANETÁRIO VIRTUAL</h1>
                <p className={styles.subtitle}>Explore o Sistema Solar</p>
            </header>

            {selectedPlanet && (
                <div className={styles.detailPanel}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setSelectedPlanet(null)}
                    >
                        ✕
                    </button>
                    <h2 className={styles.planetName}>{selectedPlanet.name}</h2>
                    <div className={styles.planetColor} style={{ backgroundColor: selectedPlanet.color }}></div>
                    <p className={styles.description}>{selectedPlanet.description}</p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Tamanho Relativo</span>
                            <span className={styles.statValue}>{selectedPlanet.size.toFixed(1)}×</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Gravidade</span>
                            <span className={styles.statValue}>{selectedPlanet.gravity}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Temperatura</span>
                            <span className={styles.statValue}>{selectedPlanet.temperature}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Dia</span>
                            <span className={styles.statValue}>{selectedPlanet.dayLength}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Distância</span>
                            <span className={styles.statValue}>{selectedPlanet.distance} UA</span>
                        </div>
                    </div>
                </div>
            )}

            <footer className={styles.footer}>
                <p>Arraste para girar • Scroll para zoom • Clique nos planetas</p>
            </footer>
        </div>
    );
}
