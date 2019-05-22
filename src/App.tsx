import React from "react";
import "./App.css";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

// import DragDrop from "./components/DragDrop";
// import SortableDragDrop from "./components/SortableDragDropAndCustomFields";
import UploadDragDrop from "./components/UploadDragDrop/Upload/Upload";
import { Provider } from "react-redux";
import store from "./Store/store";
// import DateRangePicker from './components/DateRangePicker';

// import ReportGrid from "./components/ReportGrid/ReportGrid";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <DragDropContextProvider backend={HTML5Backend}>
                    <div className="app">
                        <div className="card">
                            {/* <FileDragDrop /> */}
                            <UploadDragDrop />
                            {/* <ReportGrid /> */}
                            {/* <SortableDragDrop /> */}
                            {/* <DateRangePicker /> */}
                        </div>
                    </div>
                </DragDropContextProvider>
            </Provider>
        );
    }
}

export default App;
