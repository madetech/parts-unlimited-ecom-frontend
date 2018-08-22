import React, { Component } from 'react';
import './App.css';
import CustomerDetails from './components/CustomerDetails';
import Theme from './components/Theme';

class App extends Component {
  render() {
    return <Theme><CustomerDetails/></Theme>
  }
}

export default App;
