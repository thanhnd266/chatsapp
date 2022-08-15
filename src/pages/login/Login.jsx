import './login.scss'

const Login = () => {

    return (
        <div className="login-page">
            <div className="login-wrapper">
                <div className="login-content">
                    <div className="login-frame">
                        <h2 className="login-title">Login</h2>
                        <h3 className="login-question">Have an account?</h3>
                        <form className="login-form">
                            <div className="login-username">
                                <input 
                                    readOnly 
                                    id="username" 
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                />
                            </div>
                            <div className="login-password">
                                <input 
                                    readOnly
                                    id="password" 
                                    className="form-control" 
                                    type="password" 
                                    placeholder="Password" 
                                    onFocus={e => e.target.removeAttribute('readonly')}
                                />
                            </div>
                            <button type="submit" className="login-btn btn btn-primary">SIGN IN</button>
                            <div className="remember-user">
                                <input type="checkbox" name="remember-user" id="remember-user" />
                                <label htmlFor="remember-user">Remember me</label>
                                <button className="btn btn-primary">Forgot Password</button>
                            </div>
                        </form>

                        <div className="login-method">
                            <h6 className="login-method__title">— Or Sign In With —</h6>
                            <div className="login-method__btn">
                                <button className="btn btn-primary">Facebook</button>
                                <button className="btn btn-light">Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;