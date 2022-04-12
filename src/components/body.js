import React, {useContext} from "react";
import { ModeContext } from "../context/ChangeMode";
import "../Styles/body/body.css";

export default function Body() {

	const {isLight} = useContext(ModeContext)

	let themeOpener;

	if (isLight) {
		themeOpener = "🧛🏼Ahh the light it burns! Please use toggle, I prefer dark mode!";
	} else {
		themeOpener = "I learnt to design in React and im hooked 🤩";
	}

	return (
		<div className="body">
			<h3 id="opener">{themeOpener}</h3>
			<ol>
				<li>I built this page in React, I'm a fast learner and taught myself React almost overnight.</li>
				<li>I can use react context api to pass through data on a multi level component tree.</li>
				<li>
					I have years of experience as a visual designer and can interpret your
					clients visual requirements in code. No problem!
				</li>
				<li>
					Component wrapping is a designers dream come true in code. My experience
					creating design libraries are transferable and can be used for creating
					component libraries.
				</li>
				<li>
					Have you seen{" "}
					<span>
						<a href="https://www.nftyflakes.com/">NFTYFLAKES.COM</a>
					</span>
					, I designed the artwork and UI for this very kool Web 3 NFT project.
				</li>
				<li>I can get sassy with css, its great for component styles</li>
				<li>Look to the right I designed this spirit level with SCSS, I'm all about balancing creativity with structure.</li>
				<li>
					Im cool and loveable <span className="teddy">🧸</span>
				</li>
			</ol>
		</div>
	);
}
