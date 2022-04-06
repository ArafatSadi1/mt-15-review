import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineChart = ({children}) => {
  return (
    <div className="">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Month Wise Sell</h3>
      <LineChart
        width={500}
        height={400}
        data={children}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="sell" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sell"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
