import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  Dropdown from './components/dropdown/Dropdown.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown />
      </div>
    );
  }
}

export default App;
