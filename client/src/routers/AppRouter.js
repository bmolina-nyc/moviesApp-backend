import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePageHeader from '../components/HomepageHeader'
import SessionHeader from '../components/SessionHeader';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import SearchPage from '../components/SearchPage';
import NotFoundPage from '../components/NotFoundPage';
import RegisterPage from '../components/RegisterPage';
import ContentPage from '../components/ContentPage';
import ShowDetail from '../components/ShowDetail';

const AppRouter = () => (

  <BrowserRouter>
    <div> 
      {localStorage.getItem("jwtToken") ?  <SessionHeader /> : <HomePageHeader /> } 
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/content" component={ContentPage} />
          <Route path="/movies/:movieId" component={ShowDetail} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter; 