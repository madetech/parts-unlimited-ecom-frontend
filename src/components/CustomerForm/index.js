import React from 'react';
import { Form, Input, Button, Col, Row } from 'antd';

const FormItem = Form.Item;

export function onSubmit(saveCustomerDetails) {
  return async function(e, data) {
    console.log(data)
    e.preventDefault()
    await saveCustomerDetails.execute(data)
  }
}

function CustomerForm(props) {
  const { getFieldDecorator } = props.form

  return <Form onSubmit={(e) => onSubmit(props.saveCustomerDetails)(e, props.form.getFieldsValue())}>
    <FormItem label="Customer Name">
      {getFieldDecorator("customerName", {})(<Input data-test="customer-name"/>)}
    </FormItem>
    <h3>Shipping Details</h3>
    <FormItem label="Address line 1">
      {getFieldDecorator("shippingAddress1", {})(<Input/>)}
    </FormItem>
    <FormItem label="Address line 2">

      {getFieldDecorator("shippingAddress2", {})(<Input/>)}
    </FormItem>
    <FormItem label="City">
      {getFieldDecorator("shippingCity", {})(<Input/>)}
    </FormItem>
    <FormItem label="County">
      {getFieldDecorator("shippingCounty", {})(<Input/>)}
    </FormItem>
    <FormItem label="Postcode">
      {getFieldDecorator("shippingPostcode", {})(<Input/>)}
    </FormItem>
    <FormItem label="Phone Number">
      {getFieldDecorator("shippingPhone", {})(<Input/>)}
    </FormItem>
    <FormItem label="Email">
      {getFieldDecorator("shippingEmail", {})(<Input type="email" />)}
    </FormItem>
    <h3>Billing Details</h3>
    <FormItem label="Address line 1">
      {getFieldDecorator("billingAddress1", {})(<Input/>)}
    </FormItem>
    <FormItem label="Address line 2">
      {getFieldDecorator("billingAddress2", {})(<Input/>)}
    </FormItem>
    <FormItem label="City">
      {getFieldDecorator("billingCity", {})(<Input/>)}
    </FormItem>
    <FormItem label="County">
      {getFieldDecorator("billingCounty", {})(<Input/>)}
    </FormItem>
    <FormItem label="Postcode">
      {getFieldDecorator("billingPostcode", {})(<Input/>)}
    </FormItem>
    <FormItem label="Phone Number">
      {getFieldDecorator("billingPhone", {})(<Input/>)}
    </FormItem>
    <FormItem label="Email">
      {getFieldDecorator("billingEmail", {})(<Input type="email" />)}
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
export default Form.create()(CustomerForm)
