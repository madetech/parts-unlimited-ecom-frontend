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

  afterEach(async () => {
    await fsPromises.writeFile('/tmp/customer-details.json', '', (err) => {
      if (err) throw err;
      console.log("Run")
    })
  })

  describe('OnSubmit event', () => {
    it('renders a customer form', async () => {
      const customer_name_input = wrapper.find('input#customerName')
      const shipping_city_input = wrapper.find('input#shippingCity')
      const billing_postcode_input = wrapper.find('input#billingPostcode')
      const button = wrapper.find('button')

      customer_name_input.simulate('change', { target: { value: 'Barry Barlow' } })
      shipping_city_input.simulate('change', { target: { value: 'London' } })
      billing_postcode_input.simulate('change', { target: { value: 'N1 0UT' } })

      button.simulate('submit');

      const result = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')

      const custData = {
        customerName: "Barry Barlow",
        shippingCity: "London",
        billingPostcode: "N1 0UT"
      }
      return expect(result).toEqual(JSON.stringify(custData))
    });
  })
})
