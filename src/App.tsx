import React from 'react';

import './App.css';
import "../src/styles/main.scss"
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Dashboard from "../src/components/layout/dashboard"
import { RecoilRoot } from "recoil"



function App() {
  return (

    <RecoilRoot>
      <Dashboard />
      {/* <div className="flexbox">
        <Board id="board_1" className="board">
          <Card id="card_1" className="card" draggable="true">
            <p>Card One</p>
          </Card>

        </Board>


        <Board id="board_2" className="board">
          <Card id="card_2" className="card" draggable="true">
            <p>Card two</p>
          </Card>

        </Board>
      </div> */}
      {/*   <Homepage /> */}
    </RecoilRoot>

  );
}

export default App;
