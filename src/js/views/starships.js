import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
export const Starships = () => {
	const { store, actions } = useContext(Context);
	const {uid}=useParams()
  
	useEffect(() => {
	  console.log(store.starships)
	}, [])
	(
		<div className="text-center mt-5">
			<h1 className="text-light">Road trip</h1>
			<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={store.people.imagePlanet}  className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.starships.name}</h5>
        <p className="card-text">Model:{store.starships.model}</p>
        <p className="card-text">Starship class:{store.starships.starship_class}</p>
		<p className="card-text">Manufacturer:{store.starships.manufacturer}</p>
		<p className="card-text">Cost in credits:{store.starships.cost_in_credits}</p>
		<p className="card-text">Length:{store.starships.length}</p>
		<p className="card-text">crew:{store.starships.crew}</p>
		<p className="card-text">Passengers:{store.starships.passengers}</p>
		<p className="card-text">Max atmosphering speed:{store.starships.max_atmosphering_speed}</p>
		<p className="card-text">Hyperdrive rating:{store.starships.hyperdrive_rating}</p>
		<p className="card-text">MGLT:{store.starships.MGLT}</p>
		<p className="card-text">Cargo capacity:{store.starships.cargo_capacity}</p>
		<p className="card-text">consumables:{store.starships.consumables}</p>
      </div>
    </div>
  </div>
</div>
		</div>
	);
}