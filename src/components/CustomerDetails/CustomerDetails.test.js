import React from 'react';
import {mount} from 'enzyme';
import CustomerDetails from '../CustomerDetails';

describe('CustomerDetails', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
        <CustomerDetails/>
      );
  });

  it('render a customer form first heading ', () => {
    expect(wrapper.find("h3").at(0).text()).toEqual("Shipping Details");
  });

  it('render a customer form fourth label ', () => {
    expect(wrapper.find("FormItem").at(3).text()).toEqual("City");
  });

  it('has two postcodes for shipping + billing', () => {
    expect(wrapper.find('[label="Postcode"]').length).toEqual(2);
  })

  it('contains a submit button', () => {
    expect(wrapper.find('[htmlType="submit"]').length).toEqual(1);
  })
})