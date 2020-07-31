import React from 'react'

export default function BuilderElement({type, text, classes}) {

      console.log(type);
    return (
        <div className="builder-element">
              
         { type === "Heading" ? <h1 className={`${classes}`}>{text}</h1> : "N"}     
            
        </div>
    )
}
