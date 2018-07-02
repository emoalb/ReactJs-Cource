import React, { Component } from 'react';
import Slider from './Components/Slider';
import Characters from './Components/Characters';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Slider />
        <Characters />
      </div>
    );
  }
}

export default App;
