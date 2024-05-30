import { Pie } from 'react-chartjs-2';
import 'chart.js'
import { Chart } from "react-google-charts";
export function Graphic() {
    const data = {
        labels: ['ausentes', 'presentes'],
        datasets: [
            {
                data: [95, 5],
                backgroundColor: ["red", "green"],
            }
        ]
    }
    const dataChart = [
        ["", ""],
        ["Ausentes", 11],
        ["Presentes", 2],
    ]
    const options = {
        title: '',
    };
    return (
        <div>
            <Chart chartType="PieChart" data={data.datasets} options={options} width={"100%"} height={"400px"} />

        </div>
    )
}
// <Pie data={data} />