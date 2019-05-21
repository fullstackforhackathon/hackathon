import IAction from "../Interfaces/IAction";
import * as constants from "../Constants/UploadConstants";

export interface IUploadReducer {
    excel: any;
    fetching: boolean;
    errorMessage: string;
}

const defaultState = { fetching: false, excel: null, errorMessage: "" };

export default (pervState: IUploadReducer = defaultState, action: IAction) => {
    let state = pervState;
    switch (action.type) {
        case constants.UPLOAD_FILE_PENDING:
            state = { ...state, fetching: true };
            break;
        case constants.UPLOAD_FILE_FULFILLED:
            state = { ...state, fetching: false, excel: action.payload.data.data };
            break;
        case constants.UPLOAD_FILE_REJECTED:
            state = { ...state, fetching: false, errorMessage: action.payload.message };
            break;
        default:
            break;
    }

    return state;
};
