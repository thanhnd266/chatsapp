import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuMobile from "../MenuMobile";
import Cookies from "js-cookie";
import { socket } from "../../config/socket";
import { NavbarContainer } from "./styled";

const Navbar = ({ userInfo, pathname }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    socket.emit("userLogout", userInfo);
    navigate("/login");
  };

  return (
    <NavbarContainer>
      <div className="app-name">
        <h2>Cavanica</h2>
      </div>
      <div className="nav-additional">
        <div className="nav-noti">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className="nav-user">
          <div className="nav-user-dropdown dropdown btn-group">
            <div
              className="nav-user-info"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {userInfo.profilePicture ? (
                <img
                  className="dropdown-toggle"
                  alt="avatar"
                  src={userInfo.profilePicture}
                />
              ) : (
                <img
                  className="dropdown-toggle"
                  alt="none-avatar"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
              )}
              <button
                type="button"
                className="btn-user-dropdown btn btn-secondary dropdown-toggle"
              >
                {userInfo.username}
              </button>
            </div>

            <button
              type="button"
              className="btn-mobi__menu btn btn-secondary"
              onClick={showDrawer}
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <MenuMobile open={open} setOpen={setOpen} />

            <div className="nav-user-additional dropdown-menu dropdown-menu-end">
              <button className="dropdown-item" type="button">
                Profile
              </button>
              <button className="dropdown-item" type="button">
                Help
              </button>
              <button className="dropdown-item" type="button">
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="dropdown-item"
                type="button"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
