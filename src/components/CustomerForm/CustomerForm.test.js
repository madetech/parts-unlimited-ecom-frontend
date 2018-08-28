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
      const input = (wrapper.find("Input").text())

      input.value = 'Blah blah';
      // run wrapper.simulate('submit');
      const result = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')
      const custData = {
        // whatever we put in the form
      }
      return expect(result).toEqual(JSON.stringify(custData))
    });
  })
})
