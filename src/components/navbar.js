import React from "react"
import Button from "./button";
import reactLogo from "./images/D3j noglow lg.png"
import "../Styles/navbar/navbar.css"
import ToggleMode from "./toggle";
// import {useState, useEffect} from 'react';



export default function Navbar() {
	// const [value, setValue] = useState(false);
	return (
		<header>
			<nav className="nav-container">
				<div className="icon-container">
					<img className="logo" alt="React Logo" src={reactLogo}></img>
					<h4>DEV3JORDAN</h4>
				</div>
				<div className="buttons">
				<Button/>
				<ToggleMode/>			
				</div>
			</nav>
		</header>
	);
}