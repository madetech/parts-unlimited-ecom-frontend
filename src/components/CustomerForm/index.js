import React from 'react';
import { Form, Input, Button, Col, Row } from 'antd';

const FormItem = Form.Item;

export default function CustomerForm(props){
  return <Form>
    <FormItem label="Customer Name">
      <Input/>
    </FormItem>
    <h3>Shipping Details</h3>
    <FormItem label="Address line 1">
      <Input/>
    </FormItem>
    <FormItem label="Address line 2">
      <Input/>
    </FormItem>
    <FormItem label="City">
      <Input/>
    </FormItem>
    <FormItem label="County">
      <Input/>
    </FormItem>
    <FormItem label="Postcode">
      <Input/>
    </FormItem>
    <FormItem label="Phone Number">
      <Input/>
    </FormItem>
    <FormItem label="Email">
      <Input type="email"/>
    </FormItem>
    <h3>Billing Details</h3>
     <FormItem label="Address line 1">
      <Input/>
    </FormItem>
    <FormItem label="Address line 2">
      <Input/>
    </FormItem>
    <FormItem label="City">
      <Input/>
    </FormItem>
    <FormItem label="County">
      <Input/>
    </FormItem>
    <FormItem label="Postcode">
      <Input/>
    </FormItem>
    <FormItem label="Phone Number">
      <Input/>
    </FormItem>
    <FormItem label="Email">
      <Input type="email"/>
    </FormItem>
    <Row>
      <Col span={24} style={{textAlign: 'right'}}>
    <FormItem>
      <Button htmlType="submit">Next</Button>
    </FormItem>
    </Col>
    </Row>
    </Form>
}
