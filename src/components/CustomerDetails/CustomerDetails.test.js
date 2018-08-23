import React from 'react';
import {mount} from 'enzyme';
import CustomerDetails from '../CustomerDetails';

const wrapper = mount(
  <CustomerDetails/>
);

it('render a customer form Shipping Details heading ', () => {
  expect(wrapper.find("h3").at(0).text()).toEqual("Shipping Details");
});

it('render a customer form label City ', () => {
  expect(wrapper.find("FormItem").at(3).text()).toEqual("City");
});