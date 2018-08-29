import React, { Component } from 'react';
import './App.css';
import CustomerDetails from './components/CustomerDetails';
import Theme from './components/Theme';
import SaveCustomerDetails from './useCases/SaveCustomerDetails';

const saveCustomerDetails = new SaveCustomerDetails();

class App extends Component {
  render() {
    return (
      <Theme>
        <CustomerDetails saveCustomerDetails={saveCustomerDetails}/>
      </Theme>
    )
  }
}

export default App;
