'use client'
import Link from "next/link";
import styles from "../../page.module.css";
import { Textfield } from "../../../components/Textfield";
import { useRouter } from "next/navigation";
import { login } from "../../../firebase/firebase";

export default function LoginInstitucao() {
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        var email = document.getElementById('E-mail');
        var password = document.getElementById('Senha');

        // Call the 'login' function once and await its result
        if (email.value == undefined || password.value == undefined) {
            alert('preencha os campos')
        } else {
            var isLogged = await login(email.value, password.value);
            console.log("isLogged antes do push ou router" + isLogged);
            if (isLogged) {
                router.push('/instituicao/home');
            } else {
                alert('Usuário não cadastrado/senha incorreta');
            }
        }


    }

    return (
        <main className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formHeader}>
                    Autenticação Institucional
                </h1>
                <div className={styles.inputsContainer}>
                    <Textfield
                        label={'E-mail'}
                        placeholder={'Digite seu e-mail'}
                    />
                    <Textfield
                        label={'Senha'}
                        type='password'
                        placeholder={'Digite sua senha'}
                    />
                    <p className={styles.redirectToCadastro}>
                        Ainda não possui uma conta? <Link href={'/instituicao/cadastro'}>Crie uma</Link>
                    </p>
                </div>
                <button className={styles.button}>
                    Entrar
                </button>
            </form>
        </main>
    );
}

// Raízes familiares: celebrando a importância dos antepassados em nossa jornadaimport styles from "./page.module