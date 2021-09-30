import React from "react";
import { Line } from "react-chartjs-2";
import { Card } from "antd";

const data = {
  labels: ["1", "2", "3", "4"],
  datasets: [
    {
      label: "y-axis in thousands",
      data: [3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const data1 = {
  labels: ["22", "23", "24", "25"],
  datasets: [
    {
      label: "y-axis in thousands",
      data: [3, 10, 15, 10],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = () => (
  <>
    <Card className="card_style">
      <div className="header">
        <h1 className="title">Net Assets</h1>
        <h2>^10%</h2>
      </div>
      <Line data={data} options={options} />
    </Card>

    <Card className="card_style">
      <div className="header">
        <h1 className="title">Equity Investment</h1>
        <h2>^10%</h2>
      </div>
      <Line data={data} options={options} />
    </Card>

    <Card className="card_style">
      <div className="header">
        <h1 className="title">Remaining Loan Amount per Month</h1>
        <h2>^10%</h2>
      </div>
      <Line data={data1} options={options} />
    </Card>
  </>
);

export default Chart;
