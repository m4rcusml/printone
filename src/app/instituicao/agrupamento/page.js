'use client'
import { Header } from '../../../components/Header';
import { Grupo } from '../../../components/Grupo';
import styles from '../styles.module.css';
import * as grupoStyles from '../../../components/Grupo/styles.module.css';
import { getGrouping, getMembersOfAGrouping, user } from '../../../firebase/firebase';
import { PopUp } from '../../../components/PopUp'
import { useEffect, useState } from 'react';
export default function Agrupamento() {
    //PopUp
    var [component, setComponent] = useState(null)
    const OpenPopUp = async (grouping) => {
        
        var members = await getMembersOfAGrouping(grouping)
        setComponent(<PopUp members={members} grouping={grouping} setComp={setComponent} />)
    }
    // get agrupamentos
    var [users, setUsers] = useState([])
    var [isToShow, setIsToShow] = useState(false)
    useEffect(() => {
        getGrouping().then((grouping) => {
            setUsers(grouping);
            setIsToShow(true);
        });
    }, [])
    const refresh = () => {
        setIsToShow(false);
        getGrouping().then((grouping) => {
            setUsers(grouping);
            setIsToShow(true);
        });
    }

    function handleAdd() {
        setComponent()
    }
    
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Agrupamento</h1>

                <div className={styles.listaDeGrupos}>
                    
                    {
                        isToShow &&
                            users?.map((user) => (
                                    <Grupo func2={ refresh} func={ OpenPopUp } group={user.agrupamento}/>
                            ))
                    }

                    
                </div>
                <div id='popupDiv'>
                    {component}
                </div>
            </main>
        </div>
    )
}
/*
{grupos.map((grupo, index) => (
    <Grupo key={index} grupo={grupo} />
    ))}
    
    {
        toggleGroup && group &&
        group.map((group) => (
            <Grupo grupo={group} />
        ))
    }

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
    */