import * as React from "react";
import Dropzone from "../Dropzone/Dropzone";
import Progress from "./../Progress/Progress";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { uploadExcelFile } from "../../../Actions/UploadFileAction";
import { IRootReducerState } from "../../../Reducers/RootReducer";
import LoadingSpinner from './../../../components/LoadingSpinner/LoadingSpinner';
import "./upload.scss";

interface IUploadProps {
    upload: (file: any) => void;
}

export interface IUploadState {
    files: any[];
    uploading: boolean;
    uploadProgress: any;
    successfullUploaded: boolean;
}

export type Props = IUploadProps & IStateToProps;

export class UploadComponent extends React.Component<Props, IUploadState> {
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

    public render() {
        if (this.props.excel) return null;
        const isLoad = this.props.fetching || this.state.uploading || this.state.successfullUploaded;
        return (
            <div className="upload">
                {isLoad && <LoadingSpinner />}
                <div className="content">
                    <Dropzone onFilesAdded={this.onFilesAdded} disabled={isLoad} />
                    <div className="files">
                        {this.state.files.map(file => {
                            return (
                                <div key={file.name} className="row">
                                    <span className="filename">{file.name}</span>
                                    {this.renderProgress(file)}
                                </div>
                            );
                        })}
                    </div>
                    <div className="actions">{this.renderActions()}</div>
                </div>
            </div>
        );
    }

    private renderProgress(file: any) {
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullUploaded) {
            return (
                <div className="progressWrapper">
                    <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
                    <img
                        className="checkIcon"
                        style={{ opacity: uploadProgress && uploadProgress.state === "done" ? 0.5 : 0 }}
                        alt="done"
                        src="baseline-check_circle_outline-24px.svg"
                    />
                </div>
            );
        }
    }

    private renderActions() {
        if (this.state.successfullUploaded) {
            return <button onClick={() => this.setState({ files: [], successfullUploaded: false })}>Clear</button>;
        } else {
            return (
                <button disabled={this.state.files.length < 0 || this.state.uploading || this.props.fetching} onClick={this.uploadFiles}>
                    Upload
                </button>
            );
        }
    }

    private onFilesAdded(files: any) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }

    private async uploadFiles() {
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

export default connect(mapStateToProps, mapDisaptchToProps)(UploadComponent);
