import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         This will be a login page
//       </div>
//     );
//   }
// }


const app = (
  <Provider>
    <AppRouter />
  </Provider>
);

// export default App;
