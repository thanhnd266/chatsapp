import { useNavigate } from 'react-router-dom';

const Navbar = ({ userInfo }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('userData');
        navigate('/login');
    }

    return (
        <div className="navbar-wrapper">
            <div className="app-name">
                <h1>Cavanica</h1>
            </div>
            <div className="nav-additional">
                <div className="nav-noti">
                    <i className="fa-regular fa-bell"></i>
                </div>
                <div className="nav-user">
                    <div className="nav-user-dropdown dropdown btn-group">
                        <div className="nav-user-info" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {userInfo.profilePicture 
                                ? <img alt="avatar" src={userInfo.profilePicture} />
                                : <img alt="none-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                            }
                            <button type="button" className="btn-user-dropdown btn btn-secondary dropdown-toggle">
                                {userInfo.username}
                            </button>
                        </div>
                        <div className="nav-user-additional dropdown-menu dropdown-menu-end">
                            <button className="dropdown-item" type="button">Profile</button>
                            <button className="dropdown-item" type="button">Help</button>
                            <button className="dropdown-item" type="button">Settings</button>
                            <button onClick={handleLogout} className="dropdown-item" type="button">Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;