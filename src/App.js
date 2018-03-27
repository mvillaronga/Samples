import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  Dropdown from './components/dropdown/Dropdown.js'

let elements = [
  { label: "Steve Austin",  value: 1 },
  { label: "Jamie Sommers", value: 2 },
  { label: "Rick Deckard", value: 3 },
  { label: "John Conner", value: 4 },
  { label: "Gaius Baltar", value: 5 },
  { label: "John Smith", value: 6 },
  { label: "Seven Of Nine",  value: 7 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown elements={elements} />
      </div>
    );
  }
}

export default App;
