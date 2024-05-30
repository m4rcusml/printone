'use client'
import styles from '../styles.module.css';
import { Chart } from "react-google-charts";
import { Header } from '../../../components/Header';
export default function Analise_grafic() {
    const data = [
        ["Task", "Hours per Day"],
        ["Ausentes", 11],
        ["Presentes", 2]
    ];

    const options = {
        title: "",
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <h1 className={styles.title}>Análise - Gráfico</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        height={"400px"}
                        width={"400px"} />
                </div>
            </div>


        </div>
    )
}