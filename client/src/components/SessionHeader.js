import React from 'react';
import { NavLink, Link } from 'react-router-dom';


class SessionHeader extends React.Component{

logout = () => {
  localStorage.clear();
  window.location.reload();
  this.props.history.push('/dashboard')
}

  render(){
    return(
    <header>
      <NavLink to="/search" activeClassName="is-active" exact={true}>Search</NavLink>
      <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="" activeClassName="is-active" exact={true} onClick={this.logout}>Logout</NavLink>
      <h4>Logged in as {localStorage.getItem('username')} - this is part of the header</h4>
    </header>
    )
  }


};

export default SessionHeader;