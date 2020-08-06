import React from 'react'
import BuilderElement from "./BuilderElement"
import { useRecoilState } from "recoil"
import { htmlTreeState as htmlAtom } from "../../atoms/Atoms"

interface BBProps {
    setEditor: Function;
   
}

export default function BuilderBlock({ setEditor }: BBProps) {

    const [tree] = useRecoilState(htmlAtom)
    console.log(tree)

    return (
        <div className="builder-block">
            {tree.map(item => {
                console.log(item.type);
                return (
                    <BuilderElement type={item.type} setEditor={setEditor} />
                )
            })}
        </div>
    )
}
