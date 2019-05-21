import React, { useCallback } from "react";
import Card from "./Card";
import update from "immutability-helper";
import { ICustomField } from ".";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootReducerState } from "../../Reducers/RootReducer";

interface IProps {
    inputFields: ICustomField[];
    onUpdateInputFields: (newCustomFields: ICustomField[]) => void;
}

export interface ContainerState {
    cards: Array<{
        id: number;
        text: string;
    }>;
}

interface IStateToProps {
    fetching: boolean;
    excel: any;
}

const Container: React.FC<IProps & IStateToProps> = ({ inputFields: customFields, onUpdateInputFields: onUpdateCustomFields, excel }) => {
    {
        const moveCard = useCallback(
            (dragIndex: number, hoverIndex: number) => {
                const dragCard = customFields[dragIndex];
                onUpdateCustomFields(
                    update(customFields, {
                        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
                    })
                );
            },
            [customFields]
        );

        const renderCard = (card: ICustomField, index: number) => {
            return <Card key={card.id} index={index} id={card.id} text={card.name} moveCard={moveCard} />;
        };

        return excel ? <div>{customFields.map((customField, i) => renderCard(customField, i))}</div> : null;
    }
};

const mapStateToProps = (state: IRootReducerState) => ({
    fetching: state.excelData.fetching,
    excel: state.excelData.excel
});

const mapDisaptchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDisaptchToProps
)(Container);

// export default Container;
