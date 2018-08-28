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
      // expect(wrapper.find("h3").at(0).text()).toEqual("Shipping Details");
    });
  })
})