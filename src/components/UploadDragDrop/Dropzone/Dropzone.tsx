import * as React from "react";
import "./dropzone.css";

interface IDropzoneProps {
    disabled: boolean;
    onFilesAdded: (e: any) => void;
}

interface IDropzoneState {
    hightlight: boolean;
}

class Dropzone extends React.Component<IDropzoneProps, IDropzoneState> {
    protected fileInputRef: any;

    constructor(props: IDropzoneProps) {
        super(props);
        this.state = { hightlight: false };
        this.fileInputRef = React.createRef();

        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded(event: any) {
        if (this.props.disabled) return;
        const files = event.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }

    onDragOver(event: any) {
        event.preventDefault();
        if (this.props.disabled) return;
        this.setState({ hightlight: true });
    }

    onDragLeave() {
        this.setState({ hightlight: false });
    }

    onDrop(event: any) {
        event.preventDefault();
        if (this.props.disabled) return;
        const files = event.dataTransfer.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ hightlight: false });
    }

    private fileListToArray(list: any) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    render() {
        return (
            <div
                className={`dropzone ${this.state.hightlight ? "highlight" : ""}`}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                onClick={this.openFileDialog}
                style={{ cursor: this.props.disabled ? "default" : "pointer" }}
            >
                <input ref={this.fileInputRef} className="fileInput" type="file" multiple onChange={this.onFilesAdded} />
                <img alt="upload" className="icon" src="baseline-cloud_upload-24px.svg" />
                <span>Upload Files</span>
            </div>
        );
    }
}

export default Dropzone;
