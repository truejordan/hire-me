import React, {useContext} from "react";
import "../Styles/toggle/toggle.css";
import "../Styles/pageStyle/page.css";
import { ModeContext} from "../context/ChangeMode";


const ToggleMode = () => {
	
    const {ToggleChecked} = useContext(ModeContext)
    const {isLight} = useContext(ModeContext)

	return (
		<div className="toggle--container">
			<input
				type={"checkbox"}
				id="toggle"
				className="toggle--checkbox"
				checked={isLight}
				onChange={ToggleChecked}
			/>
			<label htmlFor="toggle" className="toggle--label">
				<span className="toggle--label-background"></span>
			</label>
			<div className=""></div>
		</div>
	);
};

export default ToggleMode;
