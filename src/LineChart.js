import React from "react";
import { Line } from "react-chartjs-2";
import { Card } from "antd";
//import "./LineChart.css";

const data = {
  labels: ["1", "2", "3", "4"],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const data1 = {
  labels: ["20", "21", "23", "24"],
  datasets: [
    {
      label: "# of Votes",
      data: [200, 190, 350, 250, 400, 150],

      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const data2 = {
  labels: ["0", "5", "10", "15"],
  datasets: [
    {
      label: "y-axis in dollars$",
      data: [2, 5, 10, 8],

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

const LineChart = () => (
  <>
    <Card className="card_style">
      <div className="header">
        <h1 className="title">MRR/ARR</h1>
      </div>
      <Line data={data} options={options} />
    </Card>

    <Card className="card_style">
      <div className="header">
        <h1 className="title">Cost of Sales</h1>
      </div>
      <Line data={data1} options={options} />
    </Card>

    <Card className="card_style">
      <div className="header">
        <h1 className="title">Gross Profit</h1>
      </div>
      <Line data={data2} options={options} />
    </Card>
  </>
);

export default LineChart;
