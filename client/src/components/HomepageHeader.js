import React from 'react';
import { NavLink } from 'react-router-dom';


const HomepageHeader = () => (
    <header>
      <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>
      <NavLink to="/register" activeClassName="is-active" exact={true}>Register</NavLink>
    </header>
)

export default HomepageHeader;