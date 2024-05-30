import styles from './styles.module.css';

export function RegisterText({ label, input, output}) {

    return(
        <div className={styles.register}>
            <div className={styles.label}>{label}</div>
            <div className={styles.input}>{input}</div>
            <div className={styles.output}>{output}</div>
        </div>
    )
}