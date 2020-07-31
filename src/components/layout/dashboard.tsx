import React, { useState } from 'react'
import IFrame from "../preview/Iframe"
import BuilderBlock from "../elements/BuilderBlock"

import Selection from "../dashboardItems/selection"
import Editor from "../dashboardItems/editor"
import { GrabberIcon } from '@primer/octicons-react'
import Global from "../dashboardItems/global"


export default function Dashboard() {

      enum Dashboard {
            Selection,
            Editor,
            Global
      }

      function setActiveSidebar(type) {
            console.log(type);
            switch (type) {
                  case Dashboard[Dashboard.Selection]:
                        setCurrentSidebar(Selection)
                        break;
                  case Dashboard[Dashboard.Editor]:
                        setCurrentSidebar(Editor)
                        break;
                  case Dashboard[Dashboard.Global]:
                        setCurrentSidebar(Global)
                        break;
            }
      }

      const [currentSidebar, setCurrentSidebar] = useState(Selection)
      const displayedSidebar = currentSidebar

      return (

            <div className="w-full h-screen flex ">
                  <div id="sidebar" className="jj-sidebar">
                        <div className="jj-sidebar-nav text-white">
                              <div className="jj-sidebar-nav-burger"
                                    onClick={() => setActiveSidebar(Dashboard[Dashboard.Global])}
                              ><svg viewBox="0 0 20 20"><title>Menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>     </div>
                              <div className="jj-sidebar-nav-logo"> <h1>Page Builder</h1>  </div>
                              <div className="jj-sidebar-nav-selection"
                                    onClick={() => setActiveSidebar(Dashboard[Dashboard.Selection])}
                              > <GrabberIcon /></div>


                        </div>
                        {displayedSidebar}

                  </div>
                  <div className="flex-1">
                        <IFrame>
                              {/* <BuilderBlock setEditor={setActiveSidebar(Dashboard[Dashboard.Editor])} /> */}
                        </IFrame>
                  </div>
            </div>

      )
}
