// import React from "react";
// import Body from "./body";
import {useState} from 'react';

const ChangeMode = () =>{
        // create a state for the switch
        const [switchToggled, setSwitchToggled] = useState(false);

        const ToggleSwitch = () =>{
                // change the stat when the function is called

                switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
                console.log(ChangeMode);
        }

      
}
 export default ChangeMode;