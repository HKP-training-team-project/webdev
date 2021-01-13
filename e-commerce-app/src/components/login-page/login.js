import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" id="login-main-container">
            <div className="col-8">
                <div className="d-flex justify-content-center">
                    <h1><b>Log In</b></h1>
                </div>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="username/email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="password" />
                    </div>
                    <div className="form-group">
                        <input className="form-control btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-5">
                    <h1>Don't have an account?</h1>
                </div>
                <Link to='/signup'>
                    <button className="form-control btn btn-primary">Sign up</button>
                </Link>

            </div>
        </div>
    )
    
}
export default Login