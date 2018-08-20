import { Steps, Layout } from 'antd';
import React from 'react';
import CustomerForm from '../CustomerForm';

const Step = Steps.Step;
const {Content, Header} = Layout;

export default function CustomerDetails(props){
  return <Layout>
    <Header/>
    <Content>
      <Steps progressDot current={0}>
        <Step title="Details" />
        <Step title="Items" />
        <Step title="Confirmation" />
      </Steps>
      <CustomerForm/>
    </Content>
  </Layout>
}
