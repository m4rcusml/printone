'use client'
import { useRouter } from 'next/navigation';
import { Header } from '../../../components/Header';
import { Textfield } from '../../../components/Textfield';
import { setUser } from "../../../firebase/firebase";
import styles from '../styles.module.css';

export default function CadastrarUsuario() {
    const router = useRouter();

     async function handleCadastrar(e) {
        e.preventDefault();
        // cadastrar usuario
        const radioInputs = document.querySelectorAll('input[name="sexo"]');
        let selectedValue;
        radioInputs.forEach((radioInput) => {
          if (radioInput.checked) {
            selectedValue = radioInput.value;
          }
        });

        
        var nome = document.getElementById('Nome');
        var cpf = document.getElementById('CPF')
        var dataDeNascimento = document.getElementById('Data de nascimento')
        var email = document.getElementById('E-mail')
        var telefone = document.getElementById('Telefone de contato')
        var agrupamento = document.getElementById('Qual agrupamento o usuário pertence?')
        
        var customData = {
            cpf: cpf.value,
            nome: nome.value,
            dataDeNascimento: dataDeNascimento.value,
            sexo: selectedValue,
            email: email.value,
            telefone: telefone.value,
            agrupamento: agrupamento.value
        }
        await setUser(customData)
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
                            <input type='radio' name='sexo' value='masculino' id='sexo' />
                            <label htmlFor='masculino'>Masculino</label>
                            <input type='radio' name='sexo' value='feminino' id='sexo' />
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
                    <Textfield
                        required
                        label='Qual agrupamento o usuário pertence?'
                        placeholder='Digite o agrupamento do usuário'
                    />
                    
                    <button className={styles.button}>Cadastrar</button>
                </form>
            </main>
        </div>
    )
}

/*
const checkboxElements = document.querySelectorAll('input[name="Sexo"]');
        let checkedValue;
        checkboxElements.forEach((checkbox) => {
            if (checkbox.checked) {
            checkedValue = checkbox.value;
            }
        });
        var sexo = checkedValue;

        var cpf = document.getElementById('CPF');
        var nome = document.getElementById('Nome')
        var nascimento = document.getElementById('Data de nascimento')
        var email = document.getElementById('E-mail')
        var telefone = document.getElementById('Telefone de contato')

        var customData = {
            cpf: cpf.value,
            nome: nome.value,
            dataDeNascimento: nascimento.value,
            sexo: sexo,
            email: email.value,
            telefone: telefone.value
        }
        var response = await setUser(customData);
        console.log(response)
*/