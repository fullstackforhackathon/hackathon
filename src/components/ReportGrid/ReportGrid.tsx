import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef, CellValueChangedEvent } from "ag-grid-community";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./reportGrid.scss";

interface IReportGridProps {
    rowData: any[]
    columnDefs: (ColDef | ColGroupDef)[],
    onCellValueChanged?: (event: CellValueChangedEvent) => void
}

const ReportGrid = ({ rowData, columnDefs, onCellValueChanged }: IReportGridProps) => {
    return (
        <div className="ag-theme-balham report-grid">
            <AgGridReact
                defaultColDef={{ editable: true }}
                columnDefs={columnDefs}
                rowData={rowData}
                onCellValueChanged={onCellValueChanged}
            />
        </div>
    );
};

export default ReportGrid;
