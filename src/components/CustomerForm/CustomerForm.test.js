import React from 'react';
import {shallow} from 'enzyme';
import CustomerForm from '../CustomerForm';

describe('CustomerForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <CustomerForm/>
      );
  });

  describe('OnSubmit event', () => {
    it('renders a customer form', () => {
      // use jest/enzyme to fill out our component
      // run wrapper.simulate('submit');
      var result = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')

    });
  })
})
