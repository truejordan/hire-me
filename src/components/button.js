import React from "react";
import Confirm from "./confirmRedirect";
import "../Styles/button/button.css"

export default function Button(){


    return (
        <div className="btn-container">
					<button className="btn" onClick={Confirm}><h4>D3JORDAN.COM</h4></button>
				</div>
    )
}