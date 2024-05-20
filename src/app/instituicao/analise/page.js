import { Header } from '../../../components/Header';
import styles from '../styles.module.css';

export default function Analise() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Análise</h1>
                <p className={styles.title}>Grupos</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        flexWrap: 'wrap',
                        padding: 20

                    }}
                >
                    {
                        [1,2,3,4,5,6,7,8].map((item, index) => (
                            <button 
                                key={index} 
                                style={{
                                    padding: 10,
                                    cursor: 'pointer'
                                }}
                            >
                                {'Turma ' + item}
                            </button>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}