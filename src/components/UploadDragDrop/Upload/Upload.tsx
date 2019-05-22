import * as React from "react";
import Dropzone from "../Dropzone/Dropzone";
import "./upload.css";
import Progress from "./../Progress/Progress";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { uploadExcelFile } from "../../../Actions/UploadFileAction";
import { IRootReducerState } from "../../../Reducers/RootReducer";

interface IUploadProps {
    upload: (file: any) => void;
}

interface IUploadState {
    files: any[];
    uploading: boolean;
    uploadProgress: any;
    successfullUploaded: boolean;
}

type Props = IUploadProps & IStateToProps;

class Upload extends React.Component<Props, IUploadState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }

    onFilesAdded(files: any) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }

    async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises: any[] = [];
        this.state.files.forEach(file => {
            promises.push(this.props.upload(file));
        });

        try {
            await Promise.all(promises);
            this.setState({ successfullUploaded: true, uploading: false });
        } catch (e) {
            // Not Production ready! Do some error handling here instead...
            this.setState({ successfullUploaded: false, uploading: false });
        }
    }

    renderProgress(file: any) {
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullUploaded) {
            return (
                <div className="ProgressWrapper">
                    <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
                    <img
                        className="CheckIcon"
                        alt="done"
                        src="baseline-check_circle_outline-24px.svg"
                        style={{
                            opacity: uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                        }}
                    />
                </div>
            );
        }
        return null;
    }

    renderActions() {
        if (this.state.successfullUploaded) {
            return <button onClick={() => this.setState({ files: [], successfullUploaded: false })}>Clear</button>;
        } else {
            return (
                <button disabled={this.state.files.length < 0 || this.state.uploading} onClick={this.uploadFiles}>
                    Upload
                </button>
            );
        }
    }

    render() {
        if (this.props.excel) return null;
        return (
            <div className="Upload">
                <div className="Content">
                    <div>
                        <Dropzone onFilesAdded={this.onFilesAdded} disabled={this.props.fetching || this.state.uploading || this.state.successfullUploaded} />
                    </div>
                    <div className="Files">
                        {this.state.files.map(file => {
                            return (
                                <div key={file.name} className="Row">
                                    <span className="Filename">{file.name}</span>
                                    {this.renderProgress(file)}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="Actions">{this.renderActions()}</div>
            </div>
        );
    }
}

interface IStateToProps {
    excel: any;
    fetching: boolean;
}

const mapStateToProps = (state: IRootReducerState) => ({
    fetching: state.excelData.fetching,
    excel: state.excelData.excel
});

const mapDisaptchToProps = (dispatch: Dispatch) => ({
    upload: (file: any) => dispatch(uploadExcelFile(file))
});

export default connect(
    mapStateToProps,
    mapDisaptchToProps
)(Upload);
