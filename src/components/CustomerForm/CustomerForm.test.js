import React from 'react';
import { shallow } from 'enzyme';
import CustomerForm from '../CustomerForm';
import { promises as fsPromises } from 'fs';

describe('CustomerForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <CustomerForm/>
      );
  });

  describe('OnSubmit event', () => {
    it('renders a customer form', async () => {
      // use jest/enzyme to fill out our component
      const input = wrapper.find('[label="Customer Name"]')
      console.log(input)
      input.value = 'Barry Barlow';
      wrapper.simulate('submit');

      const result = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')

      const custData = {
        customerName: "Barry Barlow"
      }
      return expect(result).toEqual(JSON.stringify(custData))
    });
  })
})
