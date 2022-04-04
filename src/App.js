import React from "react";
import Page from "./components/page";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Body from "./components/body";
import SpiritLvl from "./components/spiritLvl";
import Footer from "./components/footer";

export default function App() {
	return (
		<Page>
			<Navbar />
			<Header />
			<Body />
			<div className="body-container">
            <SpiritLvl />
			</div>
			<Footer />
		</Page>
	);
}
