import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { UploadComponent, Props, IUploadState } from './Upload';
import { action } from '@storybook/addon-actions';
import { StateMock } from '@react-mock/state';

const mockState = (ui: any, state: IUploadState) => <StateMock state={state}>{ui}</StateMock>;
const state = {
    files: [
        { name: 'test1.tsx' },
        { name: 'test.tsx' },
        { name: 'test.tsx' },
        { name: 'test.tsx' },
        { name: 'test.tsx' },
        { name: 'test.tsx' },
        { name: 'test.tsx' },
        { name: 'test.tsx' },
        { name: 'test.tsx' },
    ],
    uploading: false,
    uploadProgress: {
        'test1.tsx': {
            percentage: 30
        }
    },
    successfullUploaded: false,
}

const props: Props = {
    excel: null,
    fetching: false,
    upload: action('upload')
}

const UploadComponentWithState = () => mockState(<UploadComponent {...props} />, { ...state, uploading: true });

storiesOf('Upload', module)
    .addDecorator(story => <div style={{ width: 800, height: 270 }}>{story()}</div>)
    .add('default', () => <UploadComponent {...props} />)
    .add('loading', () => <UploadComponent {...props} fetching={true} />)
    .add('loading with files', () => <UploadComponentWithState />);
