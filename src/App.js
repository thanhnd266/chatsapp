import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styles
import "antd/dist/antd.min.css";
import "./styles/app.scss";
//components
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Messenger from "./pages/messenger/Messenger.jsx";
import User from "./pages/user/User.jsx";
import Team from "./pages/team/Team.jsx";
import Files from "./pages/files/Files.jsx";

const App = () => {

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/user" element={<User />} />
            <Route path="/team" element={<Team />} />
            <Route path="/files" element={<Files />} />
          </Route>
        </Routes>
        
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
