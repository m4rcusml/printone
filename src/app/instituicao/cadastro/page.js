'use client'
import Link from 'next/link';
import styles from '../../page.module.css';
import { Textfield } from '@/components/Textfield';

export default function CadastroInstituicao() {

    function handleSubmit(e) {
        e.preventDefault();

        console.log('Cadastro concluido');
    }

    return (
        <main className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formHeader}>Cadastro da instituição</h1>
                <div className={styles.inputsContainer}>
                    <Textfield
                        label={'Nome da instituição'}
                        placeholder={'Digite o nome da instituição'}
                    />
                    <Textfield
                        label={'E-mail'}
                        placeholder={'Digite seu e-mail institucional'}
                    />
                    <Textfield
                        label={'CEP'}
                        placeholder={'Digite o CEP'}
                    />
                    <Textfield
                        label={'CNPJ'}
                        placeholder={'Digite o CNPJ'}
                    />
                    <Textfield
                        label={'Telefone'}
                        placeholder={'Digite um telefone para contato'}
                    />
                    <p className={styles.redirectToCadastro}>
                        Já possui uma conta? <Link href={'/instituicao/login'}>Entre agora</Link>
                    </p>
                </div>
                <button className={styles.button}>
                    Cadastrar
                </button>
            </form>
        </main>
    )
}