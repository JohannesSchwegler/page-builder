import React from 'react'
import s from "./BuilderElement.scss"

import Widget, { Categories, Widgets } from "../includes/base/widget"
import Textarea from "../includes/controls/Textarea"


interface BEProps {
    type: string;
    setEditor: Function
}

export default function BuilderElement({ type, setEditor }: BEProps) {





    const newTitle = new Textarea()
    newTitle.setContent("This is a test")

    const Heading = new Widget(Widgets.Heading, Categories.Base, [newTitle])





    return (
        <div className={`builder-element ${s["builder-element"]}`}
            onClick={() => {
                setEditor(Heading)
            }}>

            {type === Widgets.Heading ? <h1 className={` `}>"f"</h1> : "N"}

            <div className="builder-element-overlay">
                <ul>
                    <li>
                        Edit
                    </li>
                </ul>
            </div>
        </div>
    )
}
