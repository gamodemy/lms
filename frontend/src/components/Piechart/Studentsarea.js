import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Popularity"],
    ["India", 1110],
    ["South Africa", 910],
    ["Germany", 650],
    ["United States", 800],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["Australia", 666],
];

const Studentsarea = () => {
    return (
        <Chart
            chartEvents={[
                {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
        />
    );
}

export default Studentsarea;