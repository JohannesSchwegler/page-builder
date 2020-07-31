import React from 'react'
import BuilderElement from "./BuilderElement"

export default function BuilderBlock() {
    enum Elements {
        Image,
        Heading,
        Row

    }

    enum FontSize {
        "text-xl",
        "text-2xl",
        "text-3xl",
    }
    const state = [
        {
            id: 1,
            type: Elements[Elements.Heading],
            options:{
                text:"This is a normal heading.",
                class: FontSize[FontSize["text-3xl"]]
            }


        }
    ]

    return (
        <div className="builder-block">
            {state.map(item => {
                console.log(item);
                return (
                   <BuilderElement type={item.type} text={item.options.text} classes={item.options.class}/>
                )
            })}
        </div>
    )
}
