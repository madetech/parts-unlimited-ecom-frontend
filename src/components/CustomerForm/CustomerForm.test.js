import React from 'react';
import { mount } from 'enzyme';
import CustomerForm from '../CustomerForm';
import { promises as fsPromises } from 'fs';

describe('CustomerForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
        <CustomerForm/>
      );
  });

  describe('OnSubmit event', () => {
    it('renders a customer form', async () => {
      // use jest/enzyme to fill out our component
      const input = wrapper.find('input#customerName')
      const button = wrapper.find('button')

      input.simulate('change', { target: { value: 'Barraaaay Barlow' } })
      button.simulate('submit');

      const result = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')

      const custData = {
        customerName: "Barry Barlow"
      }
      return await expect(result).toEqual(JSON.stringify(custData))
    });
  })
})
