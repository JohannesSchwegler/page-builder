import React from 'react'
import styles from "../../styles/builder.module.scss"

export default function BuilderElement({type, text, classes, setEditor}) {

      console.log(styles);
    return (
        <div className={styles["builder-element"]}
        onClick={()=>{
            
            setEditor()
        }}
        >
              
         { type === "Heading" ? <h1 className={`${classes}`}>{text}</h1> : "N"}     
            
        </div>
    )
}
