import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import './BarChart.css'

export default function BarChart() {
  const barChartData = {
    labels: ["2011", "2012", "2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
    datasets: [
      {
        data: [3000, 3500, 2900, 3100, 3600, 4200, 4300, 4800, 4500, 5600,6200, 7800],
        label: "import / export industrial machine units",
        borderColor: "#ec87c0",
        backgroundColor: "#d770ad",
        fill: true,
      },
      {
        data: [0, 0, 0, 0, 5000, 5500, 4900, 7000, 7500, 8000,8500, 8800],
        label: "tons of foods export / import",
        borderColor: "#ffce54",
        backgroundColor: "#f68b42",
        fill: true,
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0, 5000, 6600, 8300,8500, 9000],
        label: "units of electronic goods exported / imported",
        borderColor: "#4fc1e9",
        backgroundColor: "#3bafda",
        fill: true,
      },
    ],
  };

  return (
    <div style={{width:"100%"}} >
      <Bar
        type="bar"
        
        options={{
          title: {
            display: true,
            text: "No of Units import / export per each year",
            fontSize: 15,
          },
          legend: {
            display: true, //Is the legend shown?
            position: "top", //Position of the legend.
          },
          responsive:true
        }}
        data={barChartData}
      />
    </div>
  );
}
