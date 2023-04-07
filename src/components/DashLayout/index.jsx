import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./styles.scss";

//components
import Navbar from "../../components/navbar/Navbar";

//styles
import { Layout, Menu } from "antd";
import { socket } from "../../config/socket";
import { navbarItems } from "../../contants/navbar";
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
      });
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname) {
      setCurrentTab(window.location.pathname);
    }
  }, [currentTab]);

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
          items={navbarItems}
        />
      </Sider>
      <Layout className="site-dashlayout">
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
