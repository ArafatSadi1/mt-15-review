import React from 'react';
import MyAreaChart from './MyAreaChart/MyAreaChart';
import MyBarChart from './MyBarChart/MyBarChart';
import MyLineChart from './MyLineChart/MyLineChart';
import MyPieChart from './MyPieChart/MyPieChart';

const Dashboard = () => {
    const data = [
        {
          month: "Mar",
          investment: 100000,
          sell: 241,
          revenue: 10401,
        },
        {
          month: "Apr",
          investment: 200000,
          sell: 423,
          revenue: 24500,
        },
        {
          month: "May",
          investment: 500000,
          sell: 726,
          revenue: 67010,
        },
        {
          month: "Jun",
          investment: 500000,
          sell: 529,
          revenue: 40405,
        },
        {
          month: "Jul",
          investment: 600000,
          sell: 601,
          revenue: 50900,
        },
        {
          month: "Aug",
          investment: 700000,
          sell: 670,
          revenue: 61000,
        },
      ];
    
    return (
        <div className='grid grid-cols-2 mt-8'>
            <MyLineChart>{data}</MyLineChart>
            <MyAreaChart>{data}</MyAreaChart>
            <MyBarChart>{data}</MyBarChart>
            <MyPieChart>{data}</MyPieChart>
        </div>
    );
};

export default Dashboard;