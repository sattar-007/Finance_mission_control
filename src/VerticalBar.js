import React from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "antd";
import {
  LineChartOutlined,
  FireOutlined,
  FieldTimeOutlined,
  BankOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import "./VerticalBar.css";

const data = {
  labels: ["22", "23", "24", "25", "26", "27"],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 2, 4, 5, 10, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data1 = {
  labels: ["22", "23", "24", "25", "26", "27"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
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

const VerticalBar = () => (
  <>
    <Card style={{ backgroundColor: "cornsilk" }} className="card_style">
      <div className="header">
        <h1 className="title">Bank Balances</h1>
        <h1>$201,142</h1>
        <h2>10% ^ since 6 months</h2>
        <div className="bank-pp">
          <BankOutlined />
        </div>
      </div>
      <Bar data={data} options={options} />

      <div className="header">
        <h1 className="title">Credit Card Balances</h1>
        <h1>$5,103</h1>
        <h2>5% less since 6 months</h2>
        <div className="cre-dit">
          <CreditCardOutlined />
        </div>
      </div>
      <Bar data={data1} options={options} />
    </Card>

    <Card style={{ height: 100 }} className="card_style">
      <div className="header">
        <h1 className="title">Analysis on Receivables</h1>
        <h1>$650.10 per month</h1>
        <div className="graphicon">
          <LineChartOutlined />
        </div>
      </div>
    </Card>

    <Card style={{ height: 100 }} className="card_style">
      <div className="header">
        <h1 className="title">Analysis on payable</h1>
        <h1>$5,410.40 </h1>
        <div className="graphicon">
          <LineChartOutlined />
        </div>
      </div>
    </Card>

    <Card style={{ height: 100 }} className="card_style">
      <div className="header">
        <h1 className="title">Burn rate</h1>
        <h1>$650.10 per month</h1>
        <div className="fireicon">
          <FireOutlined />
        </div>
      </div>
    </Card>

    <Card style={{ height: 100 }} className="card_style">
      <div className="header">
        <h1 className="title">Customer LifeTime Value</h1>
        <h1>$8,312.31 </h1>
        <div className="timeicon">
          <FieldTimeOutlined />
        </div>
      </div>
    </Card>
  </>
);

export default VerticalBar;
