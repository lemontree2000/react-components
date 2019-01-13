import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import AddressPicker from "../../components/AddressPicker/AddressPicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button>click me</button>
          <AddressPicker/>
        </div>
      </div>
    );
  }
}

export default App;
