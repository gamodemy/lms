import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Development", 210],
    ["Design", 160],
    ["Marketing", 110],
    ["Music", 130],
    ["Photography", 111],
    ["Self-Dev", 115],
    ["Business", 117],
    ["Education", 127],
];

export const options = {
    title: "Number Of Courses in LMS",
    is3D: true,
};

const Numberofcourse = () => {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    )
}

export default Numberofcourse;