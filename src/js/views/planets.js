import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
export const Planets = () => {
	const { store, actions } = useContext(Context);
	const {uid}=useParams()
  
	useEffect(() => {
	  console.log(store.planets)
	}, [])
	(
		<div className="text-center mt-5">
			<h1>Around the World... Around the wooorld!</h1>
			<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={store.people.imagePlanet}  className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.planet.name}</h5>
        <p className="card-text">Diameter:{store.planets.diameter}</p>
        <p className="card-text">Rotation Perior:{store.planets.rotation_period}</p>
		<p className="card-text">Orbital period:{store.planets.orbital_period}</p>
		<p className="card-text">Gravity:{store.planets.gravity}</p>
		<p className="card-text">Climate:{store.planets.climate}</p>
      </div>
    </div>
  </div>
</div>
			
		</div>
	);
}