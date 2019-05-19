import React from "react";
import "./App.css";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import DragDrop from "./components/DragDrop";
import SortableDragDrop from "./components/SortableDragDropAndCustomFields";
import FileDragDrop from "./components/FileDragDrop";

import UploadDragDrop from "./components/UploadDragDrop";

import store from "./Store/store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:61693";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <DragDropContextProvider backend={HTML5Backend}>
                    <div className="app">
                        <div className="card">
                            <UploadDragDrop />
                            <SortableDragDrop />
                            <ReportGrid />
                        </div>
                    </div>
                </DragDropContextProvider>
            </Provider>
        );
    }
}

export default App;
