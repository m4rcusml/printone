'use client'
import { useRouter } from 'next/navigation';
import { Header } from '../../../components/Header';
import { Textfield } from '../../../components/Textfield';
import styles from '../styles.module.css';

export default function CadastrarUsuario() {
    const router = useRouter();

    function handleCadastrar(e) {
        e.preventDefault();
        // cadastrar usuario
        alert('Usuário cadastrado com sucesso!');
        router.back();
    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Cadastrar usuário</h1>
                <form
                    onSubmit={handleCadastrar}
                    style={{
                        maxWidth: '80%',
                        margin: 'auto',
                        marginTop: '20px',
                        gap: 25,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Textfield
                        required
                        label='Nome'
                        placeholder='Digite o nome do usuário'
                    />
                    <Textfield
                        required
                        label='CPF'
                        placeholder='Digite o CPF do usuário'
                    />
                    <Textfield
                        required
                        label='Data de nascimento'
                        placeholder='dd/mm/aa'
                        type='date'
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: 'white' }}>
                        <label htmlFor='sexo'>Sexo</label>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <input type='radio' name='sexo' id='masculino' />
                            <label htmlFor='masculino'>Masculino</label>
                            <input type='radio' name='sexo' id='feminino' />
                            <label htmlFor='feminino'>Feminino</label>
                        </div>
                    </div>
                    <Textfield
                        required
                        type='email'
                        label='E-mail'
                        placeholder='Digite o e-mail do usuário'
                    />
                    <Textfield
                        required
                        label='Telefone de contato'
                        placeholder='Digite o telefone do usuário'
                    />

                    <button className={styles.button}>Cadastrar</button>
                </form>
            </main>
        </div>
    )
}