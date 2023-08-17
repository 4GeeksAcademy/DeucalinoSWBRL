import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { StarshipsCard } from "../component/starshipsCard";
export const Main = () => (
	<div className="text-center mt-5 container bg-dark bg-opacity-25">
		<h1>The Universe Grid</h1>
		<div className="text-center ">
			<h3 className="text-warning">Characters Grid</h3>
			<div className="overflow-x-auto">
				<CharactersCard/>
			</div>
		</div>
		<div className="text-center">
			<h3 className="text-warning">Planets Grid</h3>
			<div className="overflow-x-auto">
				<PlanetsCard/>
			</div>
		</div>
		<div className="text-center">
			<h3 className="text-warning">Starships Grid</h3>
			<div className="overflow-x-auto">
				<StarshipsCard/>
			</div>
		</div>
	</div>
);
