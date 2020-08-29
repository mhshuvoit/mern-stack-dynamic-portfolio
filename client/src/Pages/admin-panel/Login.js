import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../../utils/setAuthToken'
import ApiEndPoint from '../../components/user-panel/ApiEndPoint'

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: {}
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let loginJson = {
            email: this.state.email,
            password: this.state.password,
        }
        Axios.post(ApiEndPoint.baseurl + '/user/login', loginJson)
            .then(response => {
                let token = response.data.token
                localStorage.setItem('auth_token', token)
                setAuthToken(token)
                let decode = jwtDecode(token)
                console.log(decode)
                window.location = "/dashboard"
            })
            .catch(error => {
                this.setState({
                    error: error.response.data
                })
            })
    }

    render() {
        let { email, password, error } = this.state
        return (
            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <h1 className='text-center display-4'>Login Here</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <label htmlFor='email'> Email: </label>
                            <input
                                type="email"
                                className={
                                    error.email ? "form-control is-invalid" : "form-control"
                                }
                                placeholder="Enter Your Email"
                                name='email'
                                id='email'
                                value={email}
                                onChange={this.changeHandler}
                            />
                            {error.email && (
                                <div className="invalid-feedback">{error.email}</div>
                            )}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'> Password: </label>
                            <input
                                type="password"
                                className={
                                    error.password ? "form-control is-invalid" : "form-control"
                                }
                                placeholder="Enter Your Password"
                                name='password'
                                id='password'
                                value={password}
                                onChange={this.changeHandler}
                            />
                            {error.password && (
                                <div className="invalid-feedback">{error.password}</div>
                            )}
                        </div>
                        <Link to='/admin'>Don't Have Account? Register Here</Link>
                        <button className='btn btn-primary my-3 d-block'>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default LoginForm