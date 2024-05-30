'use client'
import { useRouter } from 'next/navigation';
import styles from "./styles.module.css"
export function PopUp({ grouping, members, setComp }) {
    const router = useRouter();
    return (
        <div>
            <div onClick={() => { setComp(null) }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

            </div>
            <div onClick={() => { }} style={{ position: "absolute", color: 'white', top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#004AAD", minWidth: "30rem", padding: "20px", borderRadius: "5px" }}>
                {grouping}
                <div style={{ backgroundColor: '#fff' }}>
                    {
                        members.map((member) => (
                            <div style={{ padding: '10px', color: 'black', borderRadius: '5px', border: '1px solid black', borderColor: 'gray' }}>
                                {member.nome}
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}