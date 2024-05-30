'use client'
import { Header } from '../../../components/Header';
import { Graphic } from '../../../components/Graphic';
import { getGrouping } from '../../../firebase/firebase';
import styles from '../styles.module.css';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
export default function Analise() {
    var router = useRouter();
    var [group, setGroups] = useState([])
    var [isToShow, setIsToShow] = useState(false)
    var [ dataDiv, setDataDiv] = useState(null);
    useEffect(() => {
        getGrouping().then((data) => {
            setGroups(data);
            setIsToShow(true);
        })
    }, [])
    function openGraphic(group){
        router.push('/instituicao/analise_grafico')

        /*
        buttonValue = document.getElementById('')
        setDataDiv(document.getElementById('mainDiv').innerHTML);
        document.getElementById('mainDiv').innerHTML = <Graphic />
        */
    }
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Análise - Grupos</h1>
                
                <div id='mainDiv'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        flexWrap: 'wrap',
                        padding: 20

                    }}
                >
                    {
                        isToShow &&
                        group.map((group) => (
                            <button id={group.agrupamento} onClick={ () => { openGraphic(group.agrupamento)}}
                                style={{
                                    padding: 10,
                                    cursor: 'pointer'
                                }}
                            >
                                {group.agrupamento}
                            </button>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}