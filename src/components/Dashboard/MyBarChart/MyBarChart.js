import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyBarChart = ({children}) => {

  return (
    <div>
      <h2 className="text-xl font-bold text-blue-900 mb-4">
        Investment vs Revenue
      </h2>
      <BarChart
        width={500}
        height={400}
        data={children}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="investment" />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
      </BarChart>{" "}
    </div>
  );
};

export default MyBarChart;
