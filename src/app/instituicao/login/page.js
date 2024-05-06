'use client'
import Link from "next/link";
import styles from "../../page.module.css";
import { Textfield } from "@/components/Textfield";
import { useRouter } from "next/navigation";

export default function LoginInstitucao() {
    const router = useRouter();

    function handleSubmit(event) {
        event.preventDefault();
        router.push('/instituicao/home');
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