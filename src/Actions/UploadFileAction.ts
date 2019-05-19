import { UPLOAD_FILE } from "../Constants/UploadConstants";
import IAction from "../Interfaces/IAction";
import axios from "axios";

export const uploadExcelFile = (file: any): IAction => {
    const formData = new FormData();
    formData.append("file", file, file.name);

    return {
        type: UPLOAD_FILE,
        payload: axios.post(`/api/v1/Parser/Parse`, formData)
    };
};
