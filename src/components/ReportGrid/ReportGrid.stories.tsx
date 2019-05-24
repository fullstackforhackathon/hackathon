import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReportGrid from './ReportGrid';

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
const columnDefs = [
    { headerName: "ИД", field: "id", resizable: true },
    { headerName: "Номер", field: "number", resizable: true },
    { headerName: "Диспетчерский номер", field: "dispatchNumber", resizable: true },
    { headerName: "Наименование ЛЭП", field: "name", resizable: true },
    { headerName: "Напряжение, кВ", field: "voltage", resizable: true },
    { headerName: "Год ввода в эксплуатацию", field: "commissionYear", resizable: true },
    { headerName: "Количество цепей", field: "numberOfChains", resizable: true },
    {
        headerName: "Провода",
        children: [
            {
                headerName: "Длина всего, км",
                children: [{ headerName: "По трассе", field: "summaryLength" }, { headerName: "На 1 цепь", field: "summaryLengthByChain" }],
                resizable: true
            },
            {
                headerName: "Длина в т.ч. по участкам, км",
                children: [{ headerName: "По трассе", field: "length" }, { headerName: "На 1 цепь", field: "lengthByChain" }],
                resizable: true
            }
        ],
        resizable: true
    },
    { headerName: "Марка", field: "lineMark", resizable: true },
    { headerName: "Техническое состояние", field: "technicalStatus", resizable: true },
    { headerName: "Срок службы", field: "date", resizable: true }
];


const props = {
    rowData,
    columnDefs
};

const actions = {
    onCellValueChanged: action('onCellValueChanged')
};

storiesOf('ReportGrid', module)
    .add('empty', () => <ReportGrid {...props} rowData={[]} />)
    .add('with test data', () => <ReportGrid {...props} />)
    .add('with action', () => <ReportGrid {...props} {...actions} />)