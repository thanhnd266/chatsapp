import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axiosClient from '../../config/axios';
import Cookies from 'js-cookie';
import { SyncOutlined } from '@ant-design/icons';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errMess, setErrMess] = useState('');
    const focusInput = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        window.onload = () => {
            focusInput.current.focus();
        }
    }, []);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        
        const verifyEmail = EMAIL_REGEX.test(email);
        
        if(!username) return setErrMess('Username is not valid');
        if(!email || !verifyEmail) return setErrMess('Email is not valid');
        if(!password) return setErrMess('Password is not valid');
        if(password !== confirmPassword) return setErrMess('Password is not match');
        
        try {
            setIsLoading(true);
            
            const response = await axiosClient.post('/user/create', JSON.stringify({
                username,
                email,
                password,
            }));

            localStorage.setItem("userData", JSON.stringify(response.data));

            Cookies.set('access_token', response.data.access_token);
            Cookies.set('refresh_token', response.data.refresh_token);

            if(response.status_code === 200) {
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/');
                }, 2000)
            }

        } catch(err) {
            setTimeout(() => {
                setIsLoading(false);
                setErrMess(err)
            }, 2000)
        }
    }

    return (
        <div className="register-page">
            <div className="register-wrapper">
                <div className="register-content">
                    <div className="register-frame">
                        <h2 className="register-title">Register</h2>
                        <h3 className="register-question">Create new account</h3>
                        <form className="register-form">
                            <div className="register-username">
                                <input 
                                    ref={focusInput}
                                    id="username" 
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    value={username}
                                    onChange={(e) => {
                                        setErrMess(false);
                                        setUsername(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="register-email">
                                <input 
                                    id="email" 
                                    className="form-control"
                                    type="email" 
                                    placeholder="Email" 
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setErrMess(false);
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="register-password">
                                <input 
                                    id="password" 
                                    className="form-control"
                                    type="password" 
                                    placeholder="Password" 
                                    required
                                    value={password}
                                    onChange={(e) => {
                                        setErrMess(false);
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="register-confirm-password">
                                <input 
                                    id="confirm-password" 
                                    className="form-control"
                                    type="password" 
                                    placeholder="Confirm your password" 
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setErrMess(false);
                                        setConfirmPassword(e.target.value)
                                    }}
                                />
                            </div>
                            
                            {errMess && (
                                <div className="register-error">{errMess}</div>
                            )}

                            { isLoading && (
                                <SyncOutlined spin />
                            )}

                            <button 
                                type="submit" 
                                className="register-btn btn"
                                onClick={handleCreateUser}
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="switch-login-form">
                            <div className="switch-login-form__title">
                                <span>Already a member? </span>
                                <Link to="/login">Login here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;