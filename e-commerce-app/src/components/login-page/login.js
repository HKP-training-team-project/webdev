import React from 'react'
import './login.css'
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import JWT from 'jsonwebtoken'

function Login() {
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()
    return (
        <div className ="d-flex flex-column align-items-center justify-content-center login-main-container">
        <div className="login_card">
            <div className="col-9">
                <div className="d-flex justify-content-center">
                    <h1 className="login-h1">Log In</h1>
                </div>
                <form className = "login_form"
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
                                localStorage.setItem('token', data.token.substring(7))
                            }
                            if(response.status > 399 && response.status !== 500) {
                                dispatch({
                                    type: 'LOGIN-ERROR',
                                    payload: {
                                        message: 'Invalid Login Credientials'
                                    }
                                })
                                setTimeout(() => {
                                    dispatch({
                                        type: 'LOGIN-ERROR',
                                        payload: {
                                            message: ''
                                        }
                                    })
                                }, 5000)
                                e.target[0].value = ''
                                e.target[1].value = ''
                            }
                            else {
                                dispatch({
                                    type: 'LOGIN-ERROR',
                                    payload: {
                                        message: 'Issue with database. Sorry.'
                                    }
                                })
                            }
                        }
                    }
                >
                    <div className="">
                        <label for = "email">Email Address:</label>
                        <input className="form-control" name = "email" required="required" type="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label for = "password">Password:</label>
                        <input className="form-control" name = "password" required="required" type="password" placeholder="password" />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button className="login_button" type="submit">Submit</button>
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-5">
                    <h1 className="login_signup-h1">Don't have an account?</h1>
                </div>
                <Link to='/signup'>
                    <button className="form-control btn login_signup-button">Sign up</button>
                </Link>
                <div className='d-flex justify-content-center mt-5'>
                    <h1 className="login_message">{login.message}</h1>
                </div>
                {login.loggedIn && !login.isAdmin ? <Redirect to='/main-user'></Redirect> : ''}
                {login.loggedIn && login.isAdmin ? <Redirect to='/main-admin'></Redirect> : ''}
            </div>
        </div>
        </div>
    )
    
}
export default Login