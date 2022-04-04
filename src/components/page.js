import React from "react"
import "../Styles/pageStyle/page.css"

export default function Page(props){
    return(
        <div className="page">
            {props.children} 
	    </div>
    )
}