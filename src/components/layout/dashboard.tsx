import React, { useState } from 'react'
import IFrame from "../preview/Iframe"
import BuilderBlock from "../elements/BuilderBlock"

import Selection from "../dashboardItems/selection"
import Editor from "../dashboardItems/editor"
import { GrabberIcon } from '@primer/octicons-react'
import Global from "../dashboardItems/global"
import Widget from 'components/includes/base/widget'

import s from "./Sidebar.scss"

export default function Dashboard() {

      const setSelection = () => setCurrentSidebar(Selection)
      const setGlobal = () => setCurrentSidebar(Global)

      function openEditor(element: Widget) {
            setCurrentSidebar(<Editor element={element} />)

      }
      const [currentSidebar, setCurrentSidebar] = useState(Selection)
      const displayedSidebar = currentSidebar

      return (

            <div className="w-full h-screen flex ">
                  <div id="sidebar" className={s.sidebar}>
                        <div className={s.sidebar__nav}>
                              <div className={s.sidebar__nav__burger}
                                    onClick={() => setGlobal()}>
                                    <svg viewBox="0 0 20 20"><title>Menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                              </div>
                              <div className={s.sidebar__nav__logo}> <h1>Page Builder</h1>  </div>
                              <div className={s.sidebar__nav__selection}
                                    onClick={() => setSelection()}
                              > <GrabberIcon /></div>


                        </div>
                        {displayedSidebar}

                  </div>
                  <div className="flex-1">
                        <IFrame>
                              <BuilderBlock setEditor={openEditor} />
                        </IFrame>
                  </div>
            </div>

      )
}
