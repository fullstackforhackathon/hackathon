import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "./reportGrid.css";
// import { connect } from "react-redux";
// import { IRootReducerState } from "../../Reducers/RootReducer";

const columnDefs = [
    { headerName: "ИД", field: "id" },
    { headerName: "Номер", field: "number" },
    { headerName: "Диспетчерский номер", field: "dispatchNumber" },
    { headerName: "Наименование ЛЭП", field: "name" },
    { headerName: "Напряжение, кВ", field: "voltage" },
    { headerName: "Год ввода в эксплуатацию", field: "commissionYear" },
    { headerName: "Количество цепей", field: "numberOfChains" },
    {
        headerName: "Провода",
        children: [
            {
                headerName: "Длина всего, км",
                children: [{ headerName: "По трассе", field: "summaryLength" }, { headerName: "На 1 цепь", field: "summaryLengthByChain" }]
            },
            {
                headerName: "Длина в т.ч. по участкам, км",
                children: [{ headerName: "По трассе", field: "length" }, { headerName: "На 1 цепь", field: "lengthByChain" }]
            }
        ]
    },
    { headerName: "Марка", field: "lineMark" },
    { headerName: "Техническое состояние", field: "technicalStatus" },
    { headerName: "Срок службы", field: "date" }
];

const rowData = [
    {
        id: 1,
        number: 1,
        dispatchNumber: "A-1/2",
        name: "Мебельная-Фабричная",
        voltage: 110,
        commissionYear: 1957,
        numberOfChains: 2,
        summaryLength: 14.58,
        summaryLengthByChain: 28.58,
        length: "-",
        lengthByChain: "-",
        lineMark: "AC-185",
        technicalStatus: "годна",
        date: 2019 - 1957
    },
    {
        id: 2,
        number: 1,
        dispatchNumber: "A-1/2",
        name: "Мебельная-Фабричная",
        voltage: 110,
        commissionYear: 1957,
        numberOfChains: 2,
        summaryLength: 14.58,
        summaryLengthByChain: 28.58,
        length: "-",
        lengthByChain: "-",
        lineMark: "AC-185",
        technicalStatus: "годна",
        date: 2019 - 1957
    },
    {
        id: 3,
        number: 1,
        dispatchNumber: "A-1/2",
        name: "Мебельная-Фабричная",
        voltage: 110,
        commissionYear: 1957,
        numberOfChains: 2,
        summaryLength: 14.58,
        summaryLengthByChain: 28.58,
        length: "-",
        lengthByChain: "-",
        lineMark: "AC-185",
        technicalStatus: "годна",
        date: 2019 - 1957
    }
];

const HelloWorld = () => {
    return (
        <div className="ag-theme-balham report-grid">
            <AgGridReact
                defaultColDef={{ editable: true }}
                columnDefs={columnDefs}
                rowData={rowData}
                onCellValueChanged={() => console.log(JSON.stringify(rowData))}
            />
        </div>
    );
};
// const mapStateToProps = (state: IRootReducerState) => ({
//     excel: state.excelData.excel
// });
export default HelloWorld;
// export default connect(mapStateToProps)(HelloWorld);
