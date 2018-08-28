import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomerDetails from '../components/CustomerDetails';
import Theme from '../components/Theme';
import CustomerForm from '../components/CustomerForm';

storiesOf('Customer Details', module)
  .add('default', () => <Theme> <CustomerDetails /></Theme>);

storiesOf('Customer Form', module)
  .add('default', () => <Theme> <CustomerForm /></Theme>);
