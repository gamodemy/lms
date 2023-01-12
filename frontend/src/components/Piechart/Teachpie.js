import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Development", 610],
    ["Design", 260],
    ["Marketing", 110],
    ["Music", 122],
    ["Photography", 111],
    ["Self-Dev", 101],
    ["Business", 103],
    ["Education", 97],
];

export const options = {
    title: "Daily Teachers Activities",
    is3D: true,
};


const Teachpie = () => {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
}

export default Teachpie;