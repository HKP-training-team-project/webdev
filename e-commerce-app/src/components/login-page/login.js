import React from 'react'
import './login.css'
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import JWT from 'jsonwebtoken'

function Login() {
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" id="login-main-container">
            <div className="col-8">
                <div className="d-flex justify-content-center">
                    <h1><b>Log In</b></h1>
                </div>
                <form 
                    onSubmit={
                        async (e) => {
                            e.preventDefault()
                            let response = await fetch('https://hkp-training-teamprj.herokuapp.com/users/login', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: `email=${e.target[0].value}&password=${e.target[1].value}`
                            })
                            if(response.status === 200) {
                                let data = await response.json()
                                const jwt = data.token.substring(7)
                                let userInfo = JWT.decode(jwt,'Put secret in .env!!!')
                                if(userInfo.isAdmin === true) {
                                    dispatch({type: 'LOGIN-SUCCESS-ADMIN'})
                                }
                                else{
                                    dispatch({type: 'LOGIN-SUCCESS-USER'})
                                }
                            }
                            if(response.status > 399) {
                                let error = await response.json()
                                dispatch({
                                    type: 'LOGIN-ERROR',
                                    payload: {
                                        message: error.message
                                    }
                                })
                            }
                        }
                    }
                >
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="email" />
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
                <div className='d-flex justify-content-center mt-5'>
                    <h1>{login.message}</h1>
                </div>
                {login.loggedIn && !login.isAdmin ? <Redirect to='/main-user'></Redirect> : ''}
                {login.loggedIn && login.isAdmin ? <Redirect to='/main-admin'></Redirect> : ''}
            </div>
        </div>
    )
    
}
export default Login