import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { promises as fsPromises } from 'fs';
import _ from 'lodash';
import rimraf from 'rimraf'
import fs from 'fs';

describe('<MyComponent /', () => {
  it('renders three <Foo /> components', async () => {
    var response = JSON.stringify({successful: false, errors: []})
    await fsPromises.writeFile('/tmp/responseFromCustomerDetails.json', response);
    const wrapper = mount(<App/>);
    const customData = {
      customerName: "Harry Harlow",
    }
    wrapper.find('input[data-test="customer-name"]').simulate('change', {target: {value: 'Harry Harlow'}})
    await wrapper.find('button').simulate('submit')
    let fileNames = await fsPromises.readdir('/tmp/parts')
    console.log('filename:', fileNames)
    let contents = []
    await Promise.all(fileNames.map(async (fileName) => {
     contents.push((await fsPromises.readFile(`/tmp/parts/${fileName}`)).toString())
    }))
    const contentsWithCustomData = contents.filter(content => {
      return _.isEqual(customData, JSON.parse(content))
    });

    return expect(contentsWithCustomData.length).toEqual(1)
  });
});
