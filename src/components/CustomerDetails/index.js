import { Steps, Row, Col } from 'antd';
import React from 'react';
import CustomerForm from '../CustomerForm';
import { css } from 'emotion';

const Step = Steps.Step;

export default function CustomerDetails(props){
  return <div>
          <Row>
            <Col span={24}>
              <Steps progressDot current={0} className={css`margin-top:20px;`}>
                <Step title="Details" />
                <Step title="Items" />
                <Step title="Confirmation" />
              </Steps>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <CustomerForm saveCustomerDetails={props.saveCustomerDetails}/>
            </Col>
          </Row>
        </div>
}
