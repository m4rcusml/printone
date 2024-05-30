import styles from './styles.module.css';
export function Checkfield({ label}){

    return(
        <div className={styles.container}>
            <label htmlFor={label} className={styles.label}>{label}</label>
                <>
                    <input
                        type="radio"
                        name={label}
                        value="masculino"
                        id={label}
                        />
                    Masculino
                </>
                
                <>
                    <input
                        type="radio"
                        name={label}
                        value="feminino"
                        id={label}
                    />
                    Feminino
                </>
        </div>
    )
}