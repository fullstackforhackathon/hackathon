import React, { useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
import { ICustomField } from '.';

interface IProps {
    inputFields: ICustomField[];
    onUpdateInputFields: (newCustomFields: ICustomField[]) => void;
}

export interface ContainerState {
    cards: Array<{
        id: number
        text: string
    }>
}

const Container: React.FC<IProps> = ({ inputFields: customFields, onUpdateInputFields: onUpdateCustomFields }) => {
    {
        const moveCard = useCallback(
            (dragIndex: number, hoverIndex: number) => {
                const dragCard = customFields[dragIndex]
                onUpdateCustomFields(
                    update(customFields, {
                        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                    }),
                )
            },
            [customFields],
        )

        const renderCard = (card: ICustomField, index: number) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.name}
                    moveCard={moveCard}
                />
            )
        }

        return (
            <div>{customFields.map((customField, i) => renderCard(customField, i))}</div>
        )
    }
}

export default Container;