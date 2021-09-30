import React from "react";
import { Layout } from "antd";
import {
  AppstoreTwoTone,
  GiftTwoTone,
  BankTwoTone,
  CustomerServiceTwoTone,
  GithubOutlined,
  DropboxOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./App.css";
import Selectbox from "./Selectbox";
import LineChart from "./LineChart";
import VerticalBar from "./VerticalBar";
import Chart from "./Chart";

import { Row, Col } from "antd";
import Expenses from "./Expenses";

const { Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout className="width-left-side">
          <Sider className="sider icon-font">
            <div className="sidebar">
              <AppstoreTwoTone style={{ paddingBottom: 50 }} />
              <GiftTwoTone />
              <BankTwoTone />
              <CustomerServiceTwoTone />
              <GithubOutlined />
              <DropboxOutlined />
              <Avatar
                className="avatar-iicon"
                size={64}
                icon={<UserOutlined />}
              />
            </div>
          </Sider>
          <Layout>
            <Content>
              <div>
                <Selectbox />
              </div>
              <Row>
                <Col span={8}>
                  <LineChart />
                  <Chart />
                </Col>
                <Col span={8}>
                  <VerticalBar />
                </Col>
                <Col span={8}>
                  <Expenses />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
