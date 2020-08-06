import React from "react";
import Base from "./Base"


export default class ControlTextarea extends Base {

    label = "Title";
    placeholder = "Enter your title"
    content = "Add Your Heading Text Here"

    getContentTemplate() {
        return (
            <div className="jj-control-field">
                <label htmlFor="" className="elementor-control-title">{this.label}</label>
                <div className="jj-control-wrapper">
                    <textarea className="elementor-control-tag-area" data-setting={this.getType()} placeholder={this.placeholder}></textarea>
                </div>
            </div>
        )
    }

    getType() {
        return "textarea"
    }

    /* Setter */
    setContent(content:string) {
        this.content = content;
    }

}
