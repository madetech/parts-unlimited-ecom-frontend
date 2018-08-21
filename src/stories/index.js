import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomerDetails from '../components/CustomerDetails';
import Theme from '../components/Theme';


storiesOf('Customer Details', module)
  .add('to Storybook', () => <Theme> <CustomerDetails /></Theme>);

