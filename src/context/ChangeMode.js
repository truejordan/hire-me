import React, {useState, useEffect, createContext} from 'react';
import "../Styles/pageStyle/page.css"

export const ModeContext = createContext();

export const ChangeMode = (props) =>{
	// state
	const [isLight, setIsLight] = useState(false);

	// effect
	useEffect(() => {
		// check local storage
		const CurrentTheme = localStorage.getItem("theme-color");
		if (CurrentTheme === "light-theme") {
			setIsLight(true);
		} else {
			setIsLight(false);
		}
        console.log(useEffect);
	}, []);

	const ToggleChecked = () => {
		// logic
		if (isLight) {
			localStorage.setItem("theme-color", "dark-theme");
			setIsLight(false);
		} else {
			localStorage.setItem("theme-color", "light-theme");
			setIsLight(true);
		}
		console.log(ToggleChecked);
	};


	return(
		<ModeContext.Provider value={{isLight, ToggleChecked}}>
			{props.children}
		</ModeContext.Provider>
	)
    
}
