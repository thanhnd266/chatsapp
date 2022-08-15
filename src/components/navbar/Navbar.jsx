import './navbar.scss';

const Navbar = () => {

    return (
        <div className="navbar-wrapper">
            <div className="app-name">
                <h1>Cavanica</h1>
            </div>
            <div className="nav-additional">
                <div className="btn-new-message">
                    <button>+New Message</button>
                </div>
                <div className="nav-noti">
                    <i className="fa-regular fa-bell"></i>
                </div>
                <div className="nav-user">
                    <div className="nav-user-dropdown dropdown btn-group">
                        <div className="nav-user-info" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img alt="" src="https://khoinguonsangtao.vn/wp-content/uploads/2022/05/anh-avatar-dep-ngau-hinh-dai-dien.jpg" />
                            <button type="button" className="btn-user-dropdown btn btn-secondary dropdown-toggle">
                                Luxsandra Diarra
                            </button>
                        </div>
                        <div className="nav-user-additional dropdown-menu dropdown-menu-end">
                            <button className="dropdown-item" type="button">Profile</button>
                            <button className="dropdown-item" type="button">Help</button>
                            <button className="dropdown-item" type="button">Settings</button>
                            <button className="dropdown-item" type="button">Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;