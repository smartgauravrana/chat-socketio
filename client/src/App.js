import React, { Component } from 'react';
import io from 'socket.io-client';

import './App.css';

class App extends Component {
  render() {
    const socket = io('http://localhost/5000');

    return (
      <div id="mario-chat">
        <h2>Chat App</h2>
        <div id="chat-window">
            <div id="output"></div>
            <div id="feedback"></div>
        </div>
        <input id="handle" type="text" placeholder="Handle" />
        <input id="message" type="text" placeholder="Message" />
        <button id="send">Send</button>
    </div>
    );
  }
}

export default App;
