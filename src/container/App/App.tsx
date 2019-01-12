import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import AdressPicker from "../../components/PickAdress/AdressPicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button>click me</button>
          <AdressPicker/>
        </div>
      </div>
    );
  }
}

export default App;
