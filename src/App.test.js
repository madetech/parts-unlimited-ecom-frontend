import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import { promises as fsPromises } from 'fs';

describe('<MyComponent /', () => {
  it('renders three <Foo /> components', async () => {
    const wrapper = mount(<App/>);
    const customData = {
      customerName: "Harry Harlow",
    }
    wrapper.find('input[data-test="customer-name"]').simulate('change', {target: {value: 'Harry Harlow'}})
    await wrapper.find('button').simulate('submit')
    let fileNames = await fsPromises.readdir('/tmp/parts')
    let contents = []
    await Promise.all(fileNames.map(async (fileName) => {
     contents.push(await fsPromises.readFile(`/tmp/parts/${fileName}`))
    }))
    console.log(fileNames);
    console.log(contents);
    const contentsWithCustomData = contents.filter(content => content === customData);
    console.log(contentsWithCustomData);
    const customer_details = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')
    return expect(customer_details).toEqual(JSON.stringify(customData))
  });
});
