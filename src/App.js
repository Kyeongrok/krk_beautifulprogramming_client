import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import axios from 'axios'

class App extends Component {
  componentWillMount(){
    console.log("hello");
    axios.get({
      url:'https://k3q0fbhd62.execute-api.ap-northeast-2.amazonaws.com/prod/greeting?name=kyeongrok',
      headers:{
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true
      }
    })
      .then(function (response) {
        console.log('here');
        console.log(response);
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Box/>
      </div>
    );
  }
}

export default App;
