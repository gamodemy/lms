import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Teacher", 2000],
    ["Student", 6000],
];

export const options = {
    title: "Teacher Student Ratio",
    is3D: true,
};

const StudentTeacher = () => {
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

export default StudentTeacher;