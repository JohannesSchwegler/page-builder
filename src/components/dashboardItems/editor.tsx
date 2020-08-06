import React from 'react'
import { PencilIcon, CodeIcon, PaintbrushIcon } from '@primer/octicons-react'
import { useRecoilState } from "recoil"
import { htmlTreeState as htmlAtom } from "../../atoms/Atoms"
import Widget from 'components/includes/base/widget'


interface EditorProps {
    element: Widget
}
export default function Editor({ element }: EditorProps) {


    const [tree] = useRecoilState(htmlAtom)
    console.log(tree)

    /*    const [size, setSize] = useState("Default")
       const [tag, setTag] = useState(<h1></h1>) */

    /*     const item = findElementInObj(state) */

    /*    function handleChange(event: ChangeEvent) {
         
    
       } */




    return (
        <>
            <div className="jj-panel">
                <ul className="jj-panel-navigation">
                    <li>

                        <PencilIcon />
                Content
            </li>
                    <li>
                        <PaintbrushIcon />
                        Style</li>
                    <li>
                        <CodeIcon />
                Advanced</li>
                </ul>
                <div className="jj-panel-grid">
                    <div className="jj-panel-item">

                        <div className="jj-panel-heading">
                            <h1>Title</h1>
                        </div>

                        {element.controls.map((control: any) => {

                            return (<div className="jj-panel-control">
                                {control.getContentTemplate()}
                            </div>
                            )
                        })}

                        <div className="jj-panel-control">
                            <label>Size</label>
                            <select
                                /*   onChange={handleChange} */
                                data-setting="size">

                                <option value="default">xs</option>

                                <option value="sm">sm</option>

                                <option value="md">Medium</option>

                                <option value="3xl">3xl</option>

                                <option value="4xl">4xl</option>

                                <option value="5xl">5xl</option>

                            </select>

                        </div>

                        <div className="jj-panel-control">
                            <label>HTML Tag</label>
                            <select data-setting="header_size">

                                <option value="h1">H1</option>

                                <option value="h2">H2</option>

                                <option value="h3">H3</option>

                                <option value="h4">H4</option>

                                <option value="h5">H5</option>

                                <option value="h6">H6</option>

                                <option value="div">div</option>

                                <option value="span">span</option>

                                <option value="p">p</option>

                            </select>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

