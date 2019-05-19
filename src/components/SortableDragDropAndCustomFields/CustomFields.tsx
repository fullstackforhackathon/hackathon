import React, { useState, useCallback } from 'react'
import './field.css';
import InputElement from './InputElement';
import update from 'immutability-helper'
import Card from './Card';
import { ICustomField } from '.';

interface IProps {
    customFields: ICustomField[];
    onUpdateCustomFields: (newCustomFields: ICustomField[]) => void;
}

export interface IState {
    isCustomFieldCreated: boolean;
}

const CustomFields: React.FC<IProps> = ({ customFields, onUpdateCustomFields }) => {
    const [isCustomFieldCreated, setIsCustomFieldCreated] = useState(false);

    const moveCustomField = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const dragCustomField = customFields[dragIndex]
            onUpdateCustomFields(
                update(customFields, {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCustomField]],
                }),
            )
        },
        [customFields],
    );

    const renderCustomField = (customField: ICustomField, index: number) => {
        return (
            <Card
                key={customField && customField.id}
                index={index}
                id={customField && customField.id}
                text={customField && customField.name}
                moveCard={moveCustomField}
            />
        )
    };

    const onClickButton = () => {
        setIsCustomFieldCreated(true);
    };


    return (
        <ul className="fieldContainer">
            <div>{customFields.map((customField, i) => renderCustomField(customField, i))}</div>
            {isCustomFieldCreated
                ? <InputElement
                    onAddCustomField={(name) => {
                        onUpdateCustomFields([...customFields, { id: Math.max(...customFields.map((c) => c.id)) + 1, name }]);
                        setIsCustomFieldCreated(false);
                    }}
                />
                : <li className={`field ${isCustomFieldCreated ? 'input' : 'button'}`} onClick={onClickButton}>Push me</li>}
        </ul>
    )
}

export default CustomFields;