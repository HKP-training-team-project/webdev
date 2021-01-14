import React from 'react'
import './signUp.css'
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
const SignUp = () => {
    const signup = useSelector(state => state.signup)
    const dispatch = useDispatch()
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" id="login-main-container">
            <div className="col-8">
                <div className="d-flex justify-content-center">
                    <h1><b>Sign Up</b></h1>
                </div>
                <form onSubmit=
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
                        <input className="form-control" type="text" required="required" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" required="required" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" required="required" placeholder="password" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" required="required" placeholder="confirm password" />
                    </div>
                    <div className="form-group">
                        <input className="form-control btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
                <Link to='/'>
                    <button className="form-control btn btn-primary mt-5">Back to login</button>
                </Link>    
                <div className='d-flex justify-content-center mt-5'>
                    <h1>{signup.message}</h1>
                </div>
                {signup.userCreated ? <Redirect to='/'></Redirect>: ''}
            </div>
        </div>
    )
    
}
export default SignUp