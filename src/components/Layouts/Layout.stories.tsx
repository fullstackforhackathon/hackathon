import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from './Layout';

storiesOf('Layout', module)
    .add('default', () => <Layout />)
    .add('Layout with childrens', () => <Layout><h2>Test</h2></Layout>)