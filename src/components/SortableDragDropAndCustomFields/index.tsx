import React from 'react';
import SortableDragDrop from './SortableDragDrop';
import CustomFields from './CustomFields';
import './index.css';
import axios from 'axios';

export interface ICustomField {
    id: number;
    name: string;
}

interface IProps {

}

interface IState {
    customFields: ICustomField[];
    inputFields: ICustomField[];
}

export default class Container extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.onUpdateCustomFields = this.onUpdateCustomFields.bind(this);
        this.onUpdateInputFields = this.onUpdateInputFields.bind(this);
    }
    state = {
        customFields: [
            {
                id: 1,
                name: 'Write a cool JS library',
            },
            {
                id: 2,
                name: 'Make it generic enough',
            },
            {
                id: 3,
                name: 'Write README',
            },
            {
                id: 4,
                name: 'Create some examples',
            },
            {
                id: 5,
                name: 'Spam in Twitter',
            },
            {
                id: 6,
                name: '???',
            },
            {
                id: 7,
                name: 'PROFIT',
            },
        ],
        inputFields: [
            {
                id: 1,
                name: 'Write a cool JS library',
            },
            {
                id: 2,
                name: 'Make it generic enough',
            },
            {
                id: 3,
                name: 'Write README',
            },
            {
                id: 4,
                name: 'Create some examples',
            },
            {
                id: 5,
                name: 'Spam in Twitter',
            },
            {
                id: 6,
                name: '???',
            },
            {
                id: 7,
                name: 'PROFIT',
            },
        ],
    };

    componentDidMount() {
        axios.get('http://45.66.10.180:81/api/v1/Fields?businessEntityTypeId=1')
            .then((res) => {
                const customFields: ICustomField[] = res.data;
                this.setState({ customFields });
            });
    }

    render() {
        return (
            <div className="sortableDragDropContainer">
                <h1 className="title">Drag and Drop</h1>
                <div className="dragDrop">
                    <CustomFields
                        customFields={this.state.customFields}
                        onUpdateCustomFields={this.onUpdateCustomFields}
                    />
                    <SortableDragDrop
                        inputFields={this.state.inputFields}
                        onUpdateInputFields={this.onUpdateInputFields}
                    />
                </div>
            </div>
        );
    }

    private onUpdateCustomFields(newCustomFields: ICustomField[]) {
        this.setState({ customFields: [...newCustomFields] });
    }

    private onUpdateInputFields(newInputFields: ICustomField[]) {
        this.setState({ inputFields: [...newInputFields] });
    }
}