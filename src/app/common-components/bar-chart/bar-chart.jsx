import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
// eslint-disable-next-line
const SimpleLineChart = ({ data }) => (
  <ResponsiveContainer>
    <BarChart data={data} margin={margin}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="cocomo" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="expert" fill="#82ca9d" />
      <Bar yAxisId="right" dataKey="real" fill="#00BCD4" />
    </BarChart>
  </ResponsiveContainer>
);

export default SimpleLineChart;
