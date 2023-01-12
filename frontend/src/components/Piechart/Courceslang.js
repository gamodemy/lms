import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Language", "Number of Courses", "Number of Student", "Number of Teachers"],
    ["English", 10000, 8000, 6000],
    ["Hindi", 9000, 7000, 4000],
    ["Odia", 7000, 6000, 2000],
    ["Tamil", 10000, 6000, 8000],
    ["Telugu", 8000, 6000, 5000],
];

export const options = {
    title: "Language of Courses vs Students vs Teachers",
    chartArea: { width: "50%" },
    hAxis: {
        title: "Numbers",
        minValue: 0,
    },
    vAxis: {
        title: "Language",
    },
};

const Courceslang = () => {
    return (
        <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default Courceslang;