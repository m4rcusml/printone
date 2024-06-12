import { deleteUsers } from '../../firebase/firebase';
import styles from './styles.module.css';

export function RegisterText({ label, chave ,input, output}) {
    

    return(
        <div className={styles.register}>
            <div className={styles.label}>{label}</div>
            <div className={styles.input}>{input ? input : '10h14'}</div>
            <div className={styles.output}>{output ? output : '19h14'}</div>
            <div style={{marginLeft: 'auto'}} onClick={async () => { await deleteUsers(chave)}} > X </div>
        </div>
    )
}