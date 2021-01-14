import React from 'react'
import './login.css'
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

let handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch('Some url', {
        method: 'POST',
        body: {
            username: e.target[0].value,
            password: e.target[1].value
        }
    })
    if(response.status !== 200) {
        alert('Invalid Login Credientials')
    }
    else {

    }
}

function Login() {
    const loggedIn = useSelector(state => state.login.loggedIn)
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" id="login-main-container">
            <div className="col-8">
                <div className="d-flex justify-content-center">
                    <h1><b>Log In</b></h1>
                </div>
                <form onSubmit={handleLogin()}>
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
                {loggedIn ? <Redirect to='/main'></Redirect> : <div></div>}

            </div>
        </div>
    )
    
}
export default Login