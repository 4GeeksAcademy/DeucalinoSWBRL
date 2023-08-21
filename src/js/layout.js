import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import {StNavbar } from "./component/stnavbar";
import { Main } from "./views/main";
import {Characters} from "./views/characters";
import {Planets} from "./views/planets";
import {Starships} from "./views/starships";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<StNavbar />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/characters/:uid" element={<Characters />} />
						<Route path="/planets/:uid" element={<Planets />} />
						<Route path="/starships/:uid" element={<Starships />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
