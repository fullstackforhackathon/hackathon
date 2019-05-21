import { combineReducers } from "redux";
import uploadReducer, { IUploadReducer } from "./uploadReducer";

export interface IRootReducerState {
    excelData: IUploadReducer;
}

export default combineReducers<IRootReducerState>({
    excelData: uploadReducer
});
