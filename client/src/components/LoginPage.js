import React from 'react'


const LoginPage = () => {
  return (
      <div>
      Login Page!
        <form>
          <label for="username">Username</label>  
          <input type= "text" name="username" id="password"/>
          <label for="password">Password</label>  
          <input type="text" name ="password" id="password"/>
          <button type="submit"></button>
        </form>
      </div>
  )
}

export default LoginPage;