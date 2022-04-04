import React from "react";
import "../Styles/toggle/toggle.css"

export default function ToggleMode(){

    return(
        <div className="toggle--container">
            <input type={"checkbox"} id="toggle" className="toggle--checkbox"/>
            <label for="toggle" className="toggle--label" >
                <span className="toggle--label-background"></span>
            </label>
            <div className=""></div>
        </div>
        
    )
}