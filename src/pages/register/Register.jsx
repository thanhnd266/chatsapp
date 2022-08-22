import './register.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Register = () => {

    const focusInput = useRef();

    useEffect(() => {
        window.onload = () => {
            focusInput.current.focus();
        }
    }, []);

    

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
                                    readOnly 
                                    id="username" 
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                />
                            </div>
                            <div className="register-email">
                                <input 
                                    readOnly
                                    id="email" 
                                    className="form-control"
                                    type="email" 
                                    placeholder="Email" 
                                    required
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                />
                            </div>
                            <div className="register-password">
                                <input 
                                    readOnly
                                    id="password" 
                                    className="form-control"
                                    type="password" 
                                    placeholder="Password" 
                                    required
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                />
                            </div>
                            <div className="register-confirm-password">
                                <input 
                                    readOnly
                                    id="confirm-password" 
                                    className="form-control"
                                    type="password" 
                                    placeholder="Confirm your password" 
                                    required
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                />
                            </div>
                            <button type="submit" className="register-btn btn">Sign Up</button>
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