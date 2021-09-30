import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

const data = [
  {
    key: "1",
    name: "Advertising",
    amount: "$650",
  },
  {
    key: "2",
    name: "Car & Truck Expenses",
    amount: "$210",
  },
  {
    key: "3",
    name: "Contractors",
    amount: "$610",
  },
  {
    key: "`4",
    name: "Education and Training",
    amount: "$588",
  },
  {
    key: "5",
    name: "Employee Benefits",
    amount: "$530",
  },
  {
    key: "6",
    name: "Meals and Entertainment",
    amount: "$420",
  },
  {
    key: "7",
    name: "Office Expenses and Postage",
    amount: "$310",
  },
  {
    key: "8",
    name: "Other Expenses",
    amount: "$358",
  },
  {
    key: "9",
    name: "Professional Services",
    amount: "$210",
  },
  {
    key: "10",
    name: "Rent",
    amount: "$188",
  },
];

function Expenses() {
  return (
    <div>
      <Table
        className="card_style"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
}

export default Expenses;
