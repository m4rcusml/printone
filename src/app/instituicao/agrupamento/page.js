'use client'
import { Header } from '../../../components/Header';
import { Grupo } from '../../../components/Grupo';
import styles from '../styles.module.css';
import * as grupoStyles from '../../../components/Grupo/styles.module.css';

export default function Agrupamento() {
    const grupos = [
        {
            id: 1,
            nome: 'Grupo 1',
            alunos: [
                { id: 1, nome: 'Aluno 1' },
                { id: 2, nome: 'Aluno 2' },
                { id: 3, nome: 'Aluno 3' },
            ]
        },
        {
            id: 2,
            nome: 'Grupo 2',
            alunos: [
                { id: 4, nome: 'Aluno 4' },
                { id: 5, nome: 'Aluno 5' },
                { id: 6, nome: 'Aluno 6' },
            ]
        },
        {
            id: 3,
            nome: 'Grupo 3',
            alunos: [
                { id: 7, nome: 'Aluno 7' },
                { id: 8, nome: 'Aluno 8' },
                { id: 9, nome: 'Aluno 9' },
            ]
        }
    ];

    function handleAdd() {

    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Agrupamento</h1>

                <div className={styles.listaDeGrupos}>
                    {grupos.map((grupo, index) => (
                        <Grupo key={index} grupo={grupo} />
                    ))}

                    <div className={grupoStyles.container} onClick={handleAdd}>
                        <h3 style={{ textAlign: 'center' }}>
                            Adicionar
                        </h3>
                        <div className={grupoStyles.add}>
                            <p className={grupoStyles.plus}>
                                +
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}