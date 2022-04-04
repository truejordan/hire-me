import React from "react"
import Button from "./button";
import reactLogo from "./images/D3j noglow lg.png"
import "../Styles/navbar/navbar.css"
import ToggleMode from "./toggle";



export default function Navbar() {
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