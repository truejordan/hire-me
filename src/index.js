import React from "react"
import App from "./App"
import { createRoot } from 'react-dom/client';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);

// ReactDOM.render(
// 	<div>
// 		<App/>
// 	</div>,
// 	document.getElementById("root")
// );
