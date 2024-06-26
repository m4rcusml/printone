'use client'
import { Header } from '../../../components/Header';
import styles from '../styles.module.css';
import { Textfield } from "../../../components/Textfield";
import { Checkfield } from "../../../components/Checkfield";
import { RegisterText } from "../../../components/RegisterText"
import { getAllUsers, getGrouping, setUser } from '../../../firebase/firebase';
import { useEffect, useState } from 'react';
export default function Registro() {
    async function handleSubmit(event) {
        event.preventDefault();

    }
    var [users, setUsers] = useState([])
    var [isToShow, setIsToShow] = useState(false)
    const refresh = () => {
        setIsToShow(false);
        getGrouping().then((grouping) => {
            setUsers(grouping);
            setIsToShow(true);
        });
    }
    useEffect(() => {
        getAllUsers().then((data) => {
            setUsers(data);
            console.log(data);
            setIsToShow(true);
        })
    }, [])
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Registro</h1>
                <div>

                    {
                        isToShow &&
                        users?.map((user) => (
                            <RegisterText func={refresh} label={user.nome} chave={user.CPF}/>
                        ))
                    }

                </div>
            </main>
        </div>
    )
}
/*
<RegisterText label="Teste 1" input="10h32" output="19h17" />
<RegisterText label="Teste 2" />
<RegisterText label="Teste 3" />
*/