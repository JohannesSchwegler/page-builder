import React from 'react';
import logo from './logo.svg';
import './App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Dashboard from "../src/components/layout/dashboard"

import Homepage from "./pages/Homepage"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
function App() {
  return (

        <DndProvider backend={HTML5Backend}>
      {/* <Dashboard /> */}
      <Homepage />
    </DndProvider>
  
  );
}

export default App;
