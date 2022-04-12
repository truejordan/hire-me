import React, {useContext} from "react"
import "../Styles/index/index.css"
import "../Styles/pageStyle/page.css"
import { ModeContext} from "../context/ChangeMode"

export default function Page({children}){

    const {isLight} = useContext(ModeContext);

    return(
        <div className={`page ${isLight ? 'light-theme' : ''}`}>
            {children}
	    </div>
    )
}
