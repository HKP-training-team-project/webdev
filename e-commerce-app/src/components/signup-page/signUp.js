import React from 'react'
import './signUp.css'
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
const SignUp = () => {
    const signup = useSelector(state => state.signup)
    const dispatch = useDispatch()
    return (
        <div className ="d-flex flex-column align-items-center justify-content-center signup-main-container">
        <div className="signup_card">
            <div className="col-9">
                <div className="d-flex justify-content-center">
                    <h1 className="signup-h1">Sign Up</h1>
                </div>
                <form className = "signup_form"
                onSubmit=
                    {
                        async (e) => {
                            e.preventDefault();
                            if(e.target[2].value !== e.target[3].value) {
                                alert("Passwords don't match!");
                                return;
                            }
                            if(e.target[2].value.length < 7) {
                                alert("password must be at least seven characters long");
                                return;
                            }
                            let response = await fetch('https://hkp-training-teamprj.herokuapp.com/users/signup', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: `username=${e.target[0].value}&email=${e.target[1].value}&password=${e.target[2].value}&confirmPassword=${e.target[3].value}`
                            })
                            if(response.status === 201) {
                                alert('Signup Successful! Login to access the store.')
                                dispatch({type: 'SIGNUP-SUCCESS'})
                            }
                            if(response.status > 399) {
                                let error = await response.json()
                                let message = error.message.substring(6)
                                dispatch({
                                    type: 'SIGNUP-ERROR',
                                    payload: {
                                        message
                                    }
                                })
                            }
                        }
                    }
                >
                    <div className="form-group">
                        <label for = "name">Name</label>
                        <input className="form-control" name = "name" type="text" required="required" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for = "email">Email</label>
                        <input className="form-control" name = "email" type="email" required="required" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label for = "password">Password</label>
                        <input className="form-control" name = "password" type="password" required="required" placeholder="password" />
                    </div>
                    <div className="form-group">
                        <label for = "confirm-password">Confirm Password</label>
                        <input className="form-control" name = "confirm-password" type="password" required="required" placeholder="confirm password" />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button className="signup_button" type="submit">Submit</button>
                    </div>
                </form>
                <Link to='/'>
                    <button className="form-control signup_login-button mt-5">Back to login</button>
                </Link>    
                <div className='d-flex justify-content-center mt-5'>
                    <h1 className="signup-message">{signup.message}</h1>
                </div>
                {signup.userCreated ? <Redirect to='/'></Redirect>: ''}
            </div>
        </div>
        </div>
    )
    
}
export default SignUp