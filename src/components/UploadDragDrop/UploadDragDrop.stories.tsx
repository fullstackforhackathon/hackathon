import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Upload from './Upload/Upload';
import { Provider } from 'react-redux';
import store from './../../Store/store';

storiesOf('UploadDragAndDrop', module)
    .add('Simple', () => (
        <Provider store={store}>
            <Upload />
        </Provider>
    ));

