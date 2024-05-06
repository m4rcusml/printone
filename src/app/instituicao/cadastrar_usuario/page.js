import { Header } from '@/components/Header';
import { Textfield } from '../../../components/Textfield';
import styles from '../styles.module.css';

export default function CadastrarUsuario() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Cadastrar usuário</h1>
                <div style={{
                    maxWidth: '80%',
                    margin: 'auto',
                    marginTop: '20px',
                    gap: 25,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Textfield
                        label='CPF'
                        placeholder='Digite o CPF do usuário'
                    />
                    <Textfield
                        label='Nome'
                        placeholder='Digite o nome do usuário'
                    />
                    <Textfield
                        label='Data de nascimento'
                        placeholder='dd/mm/aa'
                    />
                    <Textfield
                        label='E-mail'
                        placeholder='Digite o e-mail do usuário'
                    />
                    <Textfield
                        label='Telefone'
                        placeholder='Digite o telefone do usuário'
                    />
                </div>
            </main>
        </div>
    )
}