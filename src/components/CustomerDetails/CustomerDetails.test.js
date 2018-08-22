import React from 'react';
import {mount} from 'enzyme';

it('render a form', () => {
  const wrapper = mount(
      <div><div className="foo">Hello</div></div>
  );
  expect(wrapper.find(".foo").text()).toEqual("Hello");
});
