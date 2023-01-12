import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Teacher ID", "Hours Teached", "Final"],
    [0, 0, 0],
    [1, 5, 88],
    [2, 4, 77],
    [3, 3, 93],
    [4, 19, 85],
    [5, 5, 91],
    [6, 6, 71],
    [7, 10, 78],
    [8, 8, 93],
    [9, 9, 80],
    [10, 10, 82],
    [11, 16, 75],
    [12, 5, 80],
    [13, 3, 90],
    [14, 1, 72],
    [15, 5, 75],
    [16, 6, 68],
    [17, 7, 98],
    [18, 3, 82],
    [19, 9, 94],
    [20, 2, 79],
    [21, 2, 95],
    [22, 2, 86],
    [23, 3, 67],
    [24, 4, 60],
    [25, 2, 80],
    [26, 6, 92],
    [27, 2, 81],
    [28, 0, 79],
    [29, 19, 83],
];

export const options = {
    chart: {
        title: "Teacher's Final Time",
        subtitle: "Based on Hours Teach",
    },
    series: {
        0: { axis: "hours Teached" },
        1: { axis: "final time" },
    },
    axes: {
        y: {
            "hours studied": { label: "Hours Teached" },
            "final grade": { label: "Final Time" },
        },
    },
};

const Teachscatter = () => {
    return (
        <Chart
            chartType="Scatter"
            width="100%"
            height="500px"
            data={data}
            options={options}
        />
    );
}

export default Teachscatter;