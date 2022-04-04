// import React, {useState} from "react";


const Confirm = () => {
    const confirmBox = window.confirm("Are you sure you want to go to D3JORDAN.COM?\nSay yes, its a trick question!")
        if (confirmBox) {
            window.location.href = "https://www.d3jordan.com/";
        }
}

    
export default Confirm;