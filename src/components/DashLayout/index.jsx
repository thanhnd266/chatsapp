import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

//components
import Navbar from "../../components/navbar/Navbar";

//styles
import {
  MessageOutlined,
  FileAddOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { socket } from "../../config/socket";
const { Content, Sider } = Layout;

const DashLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [currentTab, setCurrentTab] = useState("/");
  const [userInfo, setUserInfo] = useState({});
  const [currentOnliner, setCurrentOnliner] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    setUserInfo(userData);
    if (!userData) {
      navigate("/login");
    } else {
      socket.emit("addUser", userData);
      socket.on("getUsers", (users) => {
        setCurrentOnliner([...users]);
      })
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname) {
      setCurrentTab(window.location.pathname);
    }
  }, [currentTab]);

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
    navigate(`${e.key}`);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        className="dashlayout-sider"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
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
          userInfo={userInfo}
          style={{
            padding: 0,
          }}
        />
        <Content>
          <Outlet context={[currentOnliner]} />
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
  );
};

export default DashLayout;
