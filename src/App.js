import React from "react";
import Page from "./components/page";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Body from "./components/body";
import SpiritLvl from "./components/spiritLvl";
import Footer from "./components/footer";
import { ChangeMode } from "./context/ChangeMode";


export default function App() {
	return (
		<ChangeMode>
			<Page>
				<Navbar />
				<div className="whole-page">
					<div className="compact">
						<div className="main-tex">
							<Header />
							<Body />
						</div>
						<div className="body-container">
							<SpiritLvl />
						</div>
					</div>
					<Footer />
				</div>
			</Page>
		</ChangeMode>
	);
}
