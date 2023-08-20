import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
export const Starships = () => {
	const {uid } = useParams();
    const [ starship, setStarship]= React.useState ([])
   
    React.useEffect(() => {
      loadSomeData(); // No necesitas pasar 'id' aquí, ya que no parece estar siendo utilizado en loadSomeData
    }, []);
    const loadSomeData= async ()=>{
      const data= await fetch(`https://www.swapi.tech/api/starships/${uid}`)
      const starship= await data.json()
      setPlanet(starship)
      
    }
	return (
		<div className="text-center mt-5">
			<h1 className="text-light">Road trip</h1>
			<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg` } className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{starship.name}</h5>
        <p className="card-text">Model:{starship.model}</p>
        <p className="card-text">Starship class:{starship.starship_class}</p>
		<p className="card-text">Manufacturer:{starship.manufacturer}</p>
		<p className="card-text">Cost in credits:{starship.cost_in_credits}</p>
		<p className="card-text">Length:{starship.length}</p>
		<p className="card-text">crew:{starship.crew}</p>
		<p className="card-text">Passengers:{starship.passengers}</p>
		<p className="card-text">Max atmosphering speed:{starship.max_atmosphering_speed}</p>
		<p className="card-text">Hyperdrive rating:{starship.hyperdrive_rating}</p>
		<p className="card-text">MGLT:{starship.MGLT}</p>
		<p className="card-text">Cargo capacity:{starship.cargo_capacity}</p>
		<p className="card-text">consumables:{starship.consumables}</p>
      </div>
    </div>
  </div>
</div>
		</div>
	);
}