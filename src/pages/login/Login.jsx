import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SyncOutlined } from "@ant-design/icons";
import axiosClient from '../../config/axios';
import Cookies from 'js-cookie';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/auth/api/signin', JSON.stringify({
                    email,
                    password,
                }),
            )

            if(response.status_code === 200) {
                setIsLoading(true);

                const {  password, ...other } = response.data.data;
                localStorage.setItem("userData", JSON.stringify(other));

                Cookies.set('access_token', response.data.access_token);
                Cookies.set('refresh_token', response.data.refresh_token);

                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/messenger');
                }, 2000)
            }
        } catch(err) {
            console.log(err);
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setErrorMessage(err.response.data.message);
            }, 2000)
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
                            <div className="login-email">
                                <input 
                                    id="email" 
                                    className="form-control"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setErrorMessage(false);
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="login-password">
                                <input 
                                    id="password" 
                                    className="form-control"
                                    type="password" 
                                    placeholder="Password" 
                                    required
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