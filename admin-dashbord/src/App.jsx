import { useState } from "react";
import { Layout, Button } from "antd";
import Sidebar from "./components/Sidebar";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import "./App.css";
import CustomHeader from "./components/Header";
const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setcollapsed(!collapsed)}
          className="triger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader/>
        </Header>
        <Content className="content"></Content>
      </Layout>
    </Layout>
  );
}

export default App;
