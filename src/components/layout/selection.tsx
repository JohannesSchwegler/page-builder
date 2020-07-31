import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { HeadingIcon, ZapIcon } from '@primer/octicons-react'

export default function Selection() {
    return (
        <>

            <input type="search" id="site-search" name="q"
                aria-label="Search through site content" />

            <button>Search</button>

            {/* Accordion */}
            <div className="jj-accordion">
                <div className="jj-accordion-item">
                    <div className="jj-accordion-item-title">
                        <h1>BASIC</h1>
                    </div>
                    <div className="jj-accordion-grid">
                        {/*Heading */}
                        <div className="jj-element-wrapper">
                            <div className="jj-element-body" draggable="true">
                                <div className="jj-element-icon">
                                    <HeadingIcon size='medium' />
                                </div>
                                <div className="jj-element-title">
                                    <p >Text Editor</p>
                                </div>
                            </div>
                        </div>

                        {/*Heading */}
                        <div className="jj-element-wrapper">
                            <div className="jj-element-body" draggable="true">
                                <div className="jj-element-icon">
                                    <HeadingIcon size='medium' />
                                </div>
                                <div className="jj-element-title">
                                    <p >Text Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}



