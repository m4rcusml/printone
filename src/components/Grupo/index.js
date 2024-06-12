'use client'
import { deleteGrouping } from '../../firebase/firebase';
import * as styles from './styles.module.css';

export function Grupo({ group }) {

    function handleClick() {
        alert(`A`);
    }

    return (
        <div className={styles.container} >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h3 style={{ textAlign: 'center' }}>
                    {group}
                </h3>
                <h3 onClick={ () => {deleteGrouping(group)}}>
                    X
                </h3>
            </div>
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