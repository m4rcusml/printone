'use client'
import { deleteGrouping } from '../../firebase/firebase';
import * as styles from './styles.module.css';

export function Grupo({ group, func, func2 }) {

    function RefreshComp(){
        var element = document.getElementById(group);
        element.innerHTML = "";
    }
    function handleClick() {
        alert(`A`);
    }

    return (
        <div id={group} className={styles.container} >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h3 style={{ textAlign: 'center' }}>
                    {group}
                </h3>
                <h3 onClick={ () => {deleteGrouping(group).then( ()=> { func2() })}}>
                    X
                </h3>
            </div>
            <div onClick={ () => { func() }} className={styles.details}>
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