import React, { Component } from 'react';
import './App.css';

import elements from './data/MOCK_DATA_1000.json';

import Dropdown from './components/dropdown/Dropdown.js';
import Display from './components/display/Display.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      label: '',
      value: -1
    };
  }

  handleSelected = (ele) => {
    this.setState({
      label: ele.label,
      value: ele.label
    })
  }

  render = () => {
    return (
      <div className="App">
        <Dropdown elements={elements} onSelected={this.handleSelected}/>
        { (this.state.label === '') 
        ? null 
        : (<Display label={this.state.label} value={this.state.value} />)
        }
      </div>
    );
  }
}

export default App;
