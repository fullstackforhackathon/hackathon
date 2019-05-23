import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Upload from './Upload';
import { Provider } from 'react-redux';
import store from '../../../Store/store';

storiesOf('Upload', module)
    .addDecorator(story => <div style={{ padding: "3rem", width: 800, height: 290, border: "1px dashed black" }}>{story()}</div>)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Simple', () => <Upload />);

