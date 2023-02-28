import { Routes, Route } from "react-router-dom";

//styles
import './assets/font-awesome/css/all.min.css';
import 'antd/dist/antd.min.css';
import "./styles/app.scss";
//components
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Messenger from "./pages/messenger/Messenger.jsx";
import User from "./pages/user/User.jsx";
import Team from "./pages/team/Team.jsx";
import Files from "./pages/files/Files.jsx";
import DashLayout from "./components/DashLayout";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route element={<DashLayout />}>
            <Route path="/" element={<Home />} />
            <Route index path="messenger" element={<Messenger />} />
            <Route path="/user" element={<User />} />
            <Route path="/team" element={<Team />} />
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
