import React from 'react';
import './App.css';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import DragDrop from './components/DragDrop';
import SortableDragDrop from './components/SortableDragDropAndCustomFields';
import FileDragDrop from './components/FileDragDrop';

import UploadDragDrop from './components/UploadDragDrop';

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
            {/* <ReportGrid /> */}
            <DateRangePicker />
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     );
//   }

//   public componentDidMount(): void {
//     axios.get("http://45.66.10.180:81/api/values").then(response => {
//       console.log(response);
//     }).catch(err => console.log('fail: ', err));
//   }
// }

export default App;
