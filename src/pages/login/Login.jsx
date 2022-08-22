import './login.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SyncOutlined } from "@ant-design/icons";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login/api/signin', JSON.stringify({
                    username,
                    password,
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

            if(response.data.status_code === 200) {
                // setLoginSuccess(true);
                setIsLoading(true);
                const {  password, ...other } = response.data.data;
                localStorage.setItem("userData", JSON.stringify(other));
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/messenger');
                }, 2000)
            }
        } catch(err) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setErrorMessage(err.response.data.message);
            }, 2000)
            console.log(err);
        }
    }

    return (
        <div className="login-page">
            <div className="login-wrapper">
                <div className="login-content">
                    <div className="login-frame">
                        <h2 className="login-title">Login</h2>
                        <h3 className="login-question">Have an account?</h3>
                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="login-username">
                                <input 
                                    readOnly 
                                    id="username" 
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                    value={username}
                                    onChange={(e) => {
                                        setErrorMessage(false);
                                        setUsername(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="login-password">
                                <input 
                                    readOnly
                                    id="password" 
                                    className="form-control"
                                    type="password" 
                                    placeholder="Password" 
                                    required
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                    value={password}
                                    onChange={(e) => {
                                        setErrorMessage(false);
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>
                            { errorMessage && (
                                <div className="login-error">
                                    <span>{errorMessage}</span>
                                </div>
                            )}
                            { isLoading && (
                                <SyncOutlined spin />
                            )}

                            <button type="submit" className="login-btn btn">SIGN IN</button>
                            <div className="forgot-password">
                                <Link to="#">Forgot Password</Link>
                            </div>
                        </form>

                        <div className="login-method">
                            <h6 className="login-method__title">— Or Sign In With —</h6>
                            <div className="login-method__btn">
                                <button className="btn btn-primary btn-facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <span style={{ marginLeft: '10px' }}>Facebook</span>
                                </button>
                                <button className="btn btn-google">
                                    <i className="fa-brands fa-google-plus-g"></i>
                                    <span style={{ marginLeft: '10px' }}>Google</span>
                                </button>
                            </div>
                        </div>

                        <div className="switch-register">
                            <div className="switch-register__title">
                                <span>Not a member? </span>
                                <Link to="/register">Sign up now.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;