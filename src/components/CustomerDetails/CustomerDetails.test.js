import React from 'react';
import {mount} from 'enzyme';
import CustomerForm from '../CustomerForm';
it('render a form', () => {
  const wrapper = mount(
      <div><div className="foo">Hello</div></div>
  );
  expect(wrapper.find(".foo").text()).toEqual("Hello");
});

it('render a customer form Shipping Details heading ', () => {
  const wrapper = mount(
    <CustomerForm/>
  );
  expect(wrapper.find("h3").at(0).text()).toEqual("Shipping Details");
});

it('render a customer form label City ', () => {
  const wrapper = mount(
    <CustomerForm/>
  );
  expect(wrapper.find("FormItem").at(3).text()).toEqual("City");
});