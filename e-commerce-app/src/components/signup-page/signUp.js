import React from 'react'
import './signUp.css'
import {Link} from 'react-router-dom'
const SignUp = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" id="login-main-container">
            <div className="col-8">
                <div className="d-flex justify-content-center">
                    <h1><b>Sign Up</b></h1>
                </div>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Name" />
                    </div>
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
                <Link to='/'>
                    <button className="form-control btn btn-primary mt-5">Back to login</button>
                </Link>    
            </div>
        </div>
    )
    
}
export default SignUp