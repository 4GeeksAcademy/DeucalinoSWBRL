import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStore, getState } from "react-router-dom";

export const Characters = () => {
    const { uid } = useParams();
    const [ people, setPeople]= React.useState ([])
   
    React.useEffect(() => {
      loadSomeData(); // No necesitas pasar 'id' aquí, ya que no parece estar siendo utilizado en loadSomeData
    }, []);
    const loadSomeData= async ()=>{
      const data= await fetch(`https://www.swapi.tech/api/people/${uid}`)
      const character= await data.json()
      setPeople(character)
      
    }

    if (!people) {
        return <div>Loading...</div>;
    }
	const {
        name,
        gender,
        height,
        eye_color,
        hair_color,
        homeworld,
        species,
        skin_color,
        birth_year,
        mass,
    } = people;

    // Resto de tu código para renderizar la información de los personajes


return(
		<div className="text-center mt-5">
			<h1 className="text-light">Who got the power?!</h1>
			<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg` } className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{people.name}</h5>
        <p className="card-text">Homeworld:{people.homeworld}</p>
        <p className="card-text">Birth year:{people.birth_year}</p>
		<p className="card-text">Skin color:{people.skin_color}</p>
		<p className="card-text">Mass:{people.mass}</p>
		<p className="card-text">Height:{people.height}</p>
      </div>
    </div>
  </div>
</div>			
</div>
	);
}
