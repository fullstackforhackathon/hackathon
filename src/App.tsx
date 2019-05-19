import React from "react";
import "./App.css";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import DragDrop from "./components/DragDrop";
import SortableDragDrop from "./components/SortableDragDropAndCustomFields";
import FileDragDrop from "./components/FileDragDrop";

import UploadDragDrop from "./components/UploadDragDrop";

import ReportGrid from './components/ReportGrid';
import DateRangePicker from './components/DateRangePicker';

class App extends React.Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="app">
          <div className="card">
            {/* <FileDragDrop /> */}
            {/* <UploadDragDrop /> */}
            {/* <SortableDragDrop /> */}
            <ReportGrid />
            {/* <DateRangePicker /> */}
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
