import { Steps, Layout } from 'antd';
import React from 'react';
import CustomerForm from '../CustomerForm';
import {css} from 'emotion';

const Step = Steps.Step;

export default function CustomerDetails(props){
  return <div>
          <Steps progressDot current={0} className={css`margin-top:20px;`}>
            <Step title="Details" />
            <Step title="Items" />
            <Step title="Confirmation" />
          </Steps>
          <CustomerForm/>
        </div>
}
