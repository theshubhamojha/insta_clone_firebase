import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './signup.js';
import Login from './login.js';
import Home from './home.js';

class App extends Component {
	
	
	
  render() {
    return (
      <div>
      <Login />
	  <br /> <br />
	  <Home />
      </div>
    );
  }
}

export default App;
