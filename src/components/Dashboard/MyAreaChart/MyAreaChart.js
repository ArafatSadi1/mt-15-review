import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyAreaChart = ({children}) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-blue-900 mb-4">
        Investment vs Revenue
      </h2>
      <AreaChart
        width={500}
        height={400}
        data={children}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>{" "}
    </div>
  );
};

export default MyAreaChart;
