import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomerDetails from '../components/CustomerDetails';
import Theme from '../components/Theme';
import PageLayout from '../components/PageLayout';


storiesOf('Customer Details', module)
  .add('to Storybook', () => <Theme> <CustomerDetails /></Theme>);

storiesOf('Page Layout', module)
  .add('to Storybook', () => <Theme> <PageLayout /></Theme>);
