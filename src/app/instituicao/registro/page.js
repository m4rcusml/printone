'use client'
import { Header } from '../../../components/Header';
import styles from '../styles.module.css';
import { Textfield } from "../../../components/Textfield";
import { Checkfield } from "../../../components/Checkfield";
import { RegisterText} from "../../../components/RegisterText"
import { setUser} from '../../../firebase/firebase';
export default function Registro() {
    async function handleSubmit(event) {
        event.preventDefault();
        
        //alert('concluido com sucesso')
    }
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div>
                    <RegisterText label="Teste" />
                </div>
            </main>
        </div>
    )
}