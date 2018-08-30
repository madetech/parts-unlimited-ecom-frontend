import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { promises as fsPromises } from 'fs';
import _ from 'lodash';

describe('<MyComponent /', () => {
  it('renders three <Foo /> components', async () => {
    const wrapper = mount(<App/>);
    const customData = {
      customerName: "Harry Harlow",
    }
    wrapper.find('input[data-test="customer-name"]').simulate('change', {target: {value: 'Harry Harlow'}})
    wrapper.find('button').simulate('submit')
    let fileNames = await fsPromises.readdir('/tmp/parts')
    let contents = []
    await Promise.all(fileNames.map(async (fileName) => {
     contents.push((await fsPromises.readFile(`/tmp/parts/${fileName}`)).toString())
    }))
    console.log(fileNames);
    console.log(contents);
    console.log(customData)
    const contentsWithCustomData = contents.filter(content => {
      console.log(JSON.parse(content))
      return _.isEqual(customData, JSON.parse(content))
    });
    console.log(contentsWithCustomData);

    return expect(contentsWithCustomData.length).toEqual(1)
  });
});
