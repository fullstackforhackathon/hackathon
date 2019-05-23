import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './Progress';

storiesOf('Progress bar', module)
    .add('default', () => <ProgressBar progress={0} />)
    .add('little value', () => <ProgressBar progress={9} />)
    .add('full', () => <ProgressBar progress={100} />)
    .add('over full', () => <ProgressBar progress={220} />)
