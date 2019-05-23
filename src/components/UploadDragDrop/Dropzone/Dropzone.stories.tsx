import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropzone from './Dropzone';

const dropZoneProps = {
    disabled: false,
    onFilesAdded: action('onFilesAdded'),
}

storiesOf('Drop zone', module)
    .add('default', () => <Dropzone {...dropZoneProps} />)
    .add('disabled', () => <Dropzone {...dropZoneProps} disabled={true} />)