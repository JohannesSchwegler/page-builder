import React, { ReactNode } from 'react'


interface IframeProps {
    children: ReactNode

}
export default function Iframe({ children }: IframeProps) {

    return (
        <div id="preview">

            {children}


        </div>
    )
}


Iframe.defaultProps = {
    html: "<h1>Sorry, there was an error</h1>",
    css: "b"
};