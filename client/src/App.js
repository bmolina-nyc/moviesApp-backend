import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';


//will need to add a store here


const App = () => (
  <Provider>
    <AppRouter />
  </Provider>
)

export default App;
