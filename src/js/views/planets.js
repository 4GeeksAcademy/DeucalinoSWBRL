import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
export const Planets = (props) => {
	const { uid } = useParams();
    const [ planet, setPlanet]= React.useState ([])
   
    React.useEffect(() => {
      loadSomeData(); 
	 console.log(loadSomeData)
    }, []);
    const loadSomeData= async ()=>{
      const data= await fetch(`https://www.swapi.tech/api/planets/${uid}`)
      const planetID= await data.json()
      console.log(planetID)
      setPlanet(planetID.result.properties)
      
    }
	return (
		<div className="text-center mt-5">
			<h1>Around the World... Around the wooorld!</h1>
			<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg` } className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">Diameter:{planet.diameter}</p>
        <p className="card-text">Rotation Perior:{planet.rotation_period}</p>
		<p className="card-text">Orbital period:{planet.orbital_period}</p>
		<p className="card-text">Gravity:{planet.gravity}</p>
		<p className="card-text">Climate:{planet.climate}</p>
      </div>
    </div>
  </div>
</div>
			
		</div>
	);
}