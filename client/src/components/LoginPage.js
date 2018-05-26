import React from 'react';
import ReactDOM from 'react-dom';
import { loginUser } from '../auth/apiCalls';
import { Link } from 'react-router-dom';


class LoginPage extends React.Component {

  state = {
    username: "",
    password: "",
    message: ""
  }

  reset = () =>{
    this.setState({username: null, password: null})
  }


  handleOnSubmit = (event) => {
    event.preventDefault();

    const loginInfo = JSON.stringify(this.state)

    loginUser(loginInfo).then( (object) => {
      if (object.error){
        this.setState({
            message: "User not found. Please re-enter credentials!",
            username: null,
            password: null
          });
      } else { 
      localStorage.setItem("jwtToken", object.jwt)
      localStorage.setItem("id", object.user.id)
      localStorage.setItem("username", object.user.username)
      window.location.reload();
      this.props.history.push('/dashboard')
      }
    })  
  }




  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }


  render(){
    return(
      <div>
      <h3>Login to your account</h3>
      <div>{this.state.message}</div>
        <form>
        <label htmlFor="username">Username</label>  
        <input type= "text" name="username" id="password" onChange={this.handleOnChange}/>
        <label htmlFor="password">Password</label>  
        <input type="text" name ="password" id="password" onChange={this.handleOnChange}/>
        <button type="submit" onClick={this.handleOnSubmit}>Click to login</button>
        </form>
          <div>
          <h3>Need an account?</h3>
            <Link to="/register">Click here to Register</Link>
          </div>
      </div>
    )
  }
}

export default LoginPage;