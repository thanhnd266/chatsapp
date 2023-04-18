import { Routes, Route } from "react-router-dom";

//styles
import "./assets/font-awesome/css/all.min.css";
import "antd/dist/antd.min.css";
import "./styles/app.scss";
//components
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Messenger from "./pages/messenger/Messenger.jsx";
import User from "./pages/user/User.jsx";
import Community from "./pages/community/Community.jsx";
import Files from "./pages/contact/Contact.jsx";
import DashLayout from "./components/DashLayout";
import React, { Suspense } from "react";
import SuspenseFallback from "@/components/Progress";
// import Layout from "./components/Layout";

const Layout = React.lazy(() => import("./components/Layout"));

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <Layout />
            </Suspense>
          }
        >
          <Route element={<DashLayout />}>
            <Route path="/" element={<Home />} />
            <Route index path="messenger" element={<Messenger />} />
            <Route path="/user" element={<User />} />
            <Route path="/community" element={<Community />} />
            <Route path="/files" element={<Files />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
