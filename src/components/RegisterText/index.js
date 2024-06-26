import { deleteUser } from '../../firebase/firebase';
import styles from './styles.module.css';

export function RegisterText({ func,label, chave ,input, output}) {
    function func2(){
        document.getElementById(chave).innerHTML = "";
    }

    return(
        <div id={chave} className={styles.register}>
            <div className={styles.label}>{label}</div>
            <div className={styles.input}>{input ? input : '10h14'}</div>
            <div className={styles.output}>{output ? output : '19h14'}</div>
            <div style={{marginLeft: 'auto'}} onClick={async () => { await deleteUser(chave).then(()=> {func(); func2()})}} > X </div>
        </div>
    )
}