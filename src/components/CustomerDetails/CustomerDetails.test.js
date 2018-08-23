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

  it('renders a customer form first heading ', () => {
    expect(wrapper.find("h3").at(0).text()).toEqual("Shipping Details");
  });

  it('renders a customer form fourth label ', () => {
    expect(wrapper.find("FormItem").at(3).text()).toEqual("City");
  });

  it('renders a customer form second step', () => {
    expect(wrapper.find("Step").at(1).text()).toEqual("Items")
  })

  it('contains two postcodes for shipping + billing', () => {
    expect(wrapper.find('[label="Postcode"]').length).toEqual(2);
  })

  it('conatains fifteen form label items', () => {
    expect(wrapper.find('FormItem[label]').length).toEqual(15);
  })

  it('contains three steps progress dot', () => {
    expect(wrapper.find("Step").length).toEqual(3);
  })

  it('contains a submit button', () => {
    expect(wrapper.find('[htmlType="submit"]').length).toEqual(1);
  })

  it('sets and returns the customer name barry', () => {
    const customername = wrapper.find('Input').at(0)
    customername.value = 'Barry';
    expect(customername.value).toEqual("Barry");
   })
})

