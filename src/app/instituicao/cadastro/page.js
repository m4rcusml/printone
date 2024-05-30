'use client'
import Link from 'next/link';
import styles from '../../page.module.css';
import { Textfield } from '../../../components/Textfield';
import { createAccount } from '../../../firebase/firebase';
import { useRouter } from "next/navigation";

export default function CadastroInstituicao() {
    const router = useRouter();


    function handleSubmit(e) {
        e.preventDefault();
        var instituicao = document.getElementById('Nome da instituição')
        var email = document.getElementById('E-mail');
        var cep = document.getElementById('CEP');
        var cnpj = document.getElementById('CNPJ');
        var telefone = document.getElementById('Telefone');
        var senha = document.getElementById('Senha');
        var customData = {
            instituicao: instituicao.value,
            email: email.value,
            cep: cep.value,
            cnpj: cnpj.value,
            telefone: telefone.value,
            senha: senha.value
        }
        createAccount(email.value, senha.value, customData);
        console.log('Cadastro concluido\n' + customData);
        
        router.push("../instituicao/login")
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
                    <Textfield
                        label={'Senha'}
                        type='password'
                        placeholder={'Digite sua senha'}
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