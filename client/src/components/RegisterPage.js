import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import {registerUser} from '../auth/apiCalls'

class RegisterPage extends React.Component{

  state = {
      username: "",
      password: "",
  }

  componentDidMount(){
    if (localStorage.getItem('jwtToken')){
      this.props.history.push('/dashboard')
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
      event.preventDefault();
      
      const registerInfo = JSON.stringify(this.state)

      registerUser(registerInfo).then((user)=>{   
        localStorage.setItem("jwtToken", user.jwt)
        localStorage.setItem("id", user.user.id)
        localStorage.setItem("username", user.user.username)
        localStorage.setItem("tmdb_token", user.tmdb_token)
        window.location.reload()
        setTimeout(() => {this.props.history.push('/dashboard')}, 1000)
      })  
  }


    render(){
        return(
            <div>
              <h3>Register a user</h3>

              <form>
              <label htmlFor="username">Username</label>  
                <input type="text" name="username" onChange={this.handleOnChange}/>
                <label htmlFor="password">Password</label>  
                <input type="text" name="password" onChange={this.handleOnChange}/>
                <button type="submit" onClick={this.handleOnSubmit}>Click to register</button>
              </form>
                <div>
                <h3>Already have an account?</h3>
                    <Link to="/login">Click here to Login</Link>
                </div>
            </div>
        )
    }
}

export default RegisterPage;