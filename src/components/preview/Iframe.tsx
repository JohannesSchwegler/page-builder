import React from 'react'
import Frame from 'react-frame-component';

export default function Iframe({children}) {
    return (
        <Frame
     
 
        head={<>

            <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" rel="stylesheet"></link>
           
        </>}
    >
       <h1>Iframe</h1>

       {children}
     
    </Frame>
    )
}


Iframe.defaultProps = {
    html: "<h1>Sorry, there was an error</h1>",
    css: "b"
};