import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Development", 2110],
    ["Design", 2060],
    ["Marketing", 1010],
    ["Music", 1130],
    ["Photography", 1111],
    ["Self-Dev", 1115],
    ["Business", 1117],
    ["Education", 1127],
];

export const options = {
    title: "Daily Students Activities",
    is3D: true,
};

const piechart = () => {
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

export default piechart;