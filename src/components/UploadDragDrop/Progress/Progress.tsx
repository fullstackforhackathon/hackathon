import * as React from "react";
import "./progress.css";

interface IProgressProps {
    progress: number;
}

export default ({ progress }: IProgressProps) => (
    <div className="progressBar">
        <div className="progress" style={{ width: progress + "%" }} />
    </div>
);
