'use client'
import * as styles from './styles.module.css';

export function Grupo({ group }) {

    function handleClick() {
        alert(`A`);
    }
    
    return (
        <div className={styles.container} >
            <h3 style={{ textAlign: 'center' }}>
                {group}
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