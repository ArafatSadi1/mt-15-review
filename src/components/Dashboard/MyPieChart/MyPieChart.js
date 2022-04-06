import React from "react";
import { Pie, PieChart } from "recharts";

const MyPieChart = ({children}) => {

  return (
    <div>
      <h2 className="text-xl font-bold text-blue-900 mb-4">
        Investment vs Revenue
      </h2>

      <PieChart width={500} height={400}>
        <Pie
          data={children}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={children}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
