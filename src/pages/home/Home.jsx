import { useState } from "react";
import { useNavigate } from 'react-router-dom';

//components
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";

//styles
import "./home.scss";
import {
  MessageOutlined,
  FileAddOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
const { Content, Footer, Sider } = Layout;


const Home = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [currentTab, setCurrentTab] = useState('/');

  const navigate = useNavigate();

  function getItem(label, key, icon, children) {
    return { key, icon, children, label };
  }
  
  const items = [
    getItem("Home", "/", <HomeOutlined />),
    getItem("Message", "/messenger", <MessageOutlined />),
    getItem("User", "/user", <UserOutlined />),
    getItem("Team", "/team", <TeamOutlined />),
    getItem("Files", "/files", <FileAddOutlined />),
  ];

  const handleChangeTab = (e) => {
    setCurrentTab(e.key);
    navigate(`${e.key}`)
  }

  return (
    <div className="homepage">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >-
          <div onClick={() => setCollapsed(!collapsed)} className="menuTab-btn">
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>

            {!collapsed && <span className="menuTab-title">Menu</span>}
          </div>
          <Menu
            onClick={handleChangeTab}
            theme="dark"
            defaultSelectedKeys={[currentTab]}
            selectedKeys={[currentTab]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Navbar
            style={{
              padding: 0,
            }}
          />
          <Search />
          <Content
            style={{
              margin: "30px 50px",
            }}
          >
            {currentTab === '/' ? (<h3>Homepage</h3>) : <Outlet />}
          </Content>
          {/* <Footer
            style={{
              textAlign: "center",
            }}
          >
            HighsaurceHatjet©2022 Created by ZuyThank
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
