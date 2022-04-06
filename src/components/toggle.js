import React from "react";
import "../Styles/toggle/toggle.css"
import ChangeMode from "./ChangeMode"

export default function ToggleMode(){
    

    return(
        <div className="toggle--container">
            <input type={"checkbox"} id="toggle" className="toggle--checkbox" onClick={ChangeMode}/>
            <label for="toggle" className="toggle--label" >
                <span className="toggle--label-background"></span>
            </label>
            <div className=""></div>
        </div>
        
    )
}