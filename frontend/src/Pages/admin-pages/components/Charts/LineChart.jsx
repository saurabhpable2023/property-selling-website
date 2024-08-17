// src/components/Charts/LineChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Property_Added: 40, Property_Sold: 35, amt: 2400 },
    { name: 'Feb', Property_Added: 30, Property_Sold: 25, amt: 2210 },
    { name: 'Mar', Property_Added: 20, Property_Sold: 35, amt: 2290 },
    { name: 'Apr', Property_Added: 27, Property_Sold: 24, amt: 2000 },
    { name: 'May', Property_Added: 18, Property_Sold: 16, amt: 2181 },
    { name: 'Jun', Property_Added: 23, Property_Sold: 20, amt: 2500 },
    { name: 'Jul', Property_Added: 34, Property_Sold: 42, amt: 2100 },
    { name: 'Aug', Property_Added: 60, Property_Sold: 50, amt: 2100 },
];

const CustomLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Property_Added" stroke="#8884d8" />
                <Line type="monotone" dataKey="Property_Sold" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;