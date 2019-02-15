import React, { Component } from 'react';
import Login from './components/Login/Login';
import io from 'socket.io-client';
import './App.css';
const socket = io('http://localhost:5000');
// var socket = require('socket.io-client')('http://localhost/5000');


class App extends Component {

  // componentDidMount() {
  //   const socket = io('http://localhost/5000');
  // }

  render() {


    return (
      <div className="main_container">
        <Login />
      </div>
      
    );
  }
}

export default App;
