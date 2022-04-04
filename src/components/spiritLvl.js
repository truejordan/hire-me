import React from "react";
import "../Styles/spiritLvl/spiritLvl.css"

export default function SpiritLvl(){
    return(
        <div className="spirit-lvl">
            <div className="outer-casing">
                <div className="inner-housing">
                    <div className="glass-tube">

                        <div className="bubble">
                            <div className="bubble-boddy">
                                <div className="bubble-inner"></div>
                            </div>
                        </div>

                        <div className="markings">
                            <div className="marking-group">
                                <div className="line-marking"></div>
                                <div className="line-marking"></div>
                            </div>
                            <div className="marking-group">
                                <div className="line-marking"></div>
                                <div className="line-marking"></div>
                            </div>
                        </div>

                        <div className="shine"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}