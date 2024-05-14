'use client'
import * as styles from './styles.module.css';

export function Grupo({ grupo }) {

    function handleClick() {
        alert(`Alunos => ${grupo.alunos.length}`);
    }
    
    return (
        <div className={styles.container} onClick={handleClick}>
            <h3 style={{ textAlign: 'center' }}>
                {grupo.nome}
            </h3>
            <div className={styles.details}>
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />

                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
            </div>
        </div>
    )
}