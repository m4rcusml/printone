import { Header } from '../../../components/Header';
import styles from '../styles.module.css';

export default function Analise() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Análise</h1>
            </main>
        </div>
    )
}