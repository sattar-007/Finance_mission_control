import React from "react";
import "./Selectbox.css";
import { Select } from "antd";
import Title from "antd/lib/typography/Title";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

function Selectbox() {
  return (
    <div className="align">
      <div>
        <Title style={{ color: "black" }} level={3}>
          Hello! Abdul
        </Title>
        <Title level={5}>Finance mission control</Title>
      </div>
      <div className="names-search">
        <Select
          showSearch
          style={{ width: 200, marginRight: "20px" }}
          placeholder="last 3 days"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="monday">Monday</Option>
          <Option value="tuesday">Tuesday</Option>
          <Option value="wednesday">Wednesday</Option>
        </Select>
      </div>
    </div>
  );
}

export default Selectbox;
