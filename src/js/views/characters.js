import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStore, getState } from "./flux"; // Asegúrate de importar las funciones adecuadas para acceder al store

export const Characters = () => {
    const { id } = useParams();
    const fetchPeople = getStore(actions => actions.loadSomeData); // Reemplaza con la acción correspondiente
    const people = getState(state => state.people); // Reemplaza con el estado correspondiente

    useEffect(() => {
        fetchPeople(); // No necesitas pasar 'id' aquí, ya que no parece estar siendo utilizado en loadSomeData
    }, [fetchPeople]);

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
      <img src={imageCharacter}  className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Homeworld:{homeworld}</p>
        <p className="card-text">Birth year:{birth_year}</p>
		<p className="card-text">Skin color:{skin_color}</p>
		<p className="card-text">Mass:{mass}</p>
		<p className="card-text">Height:{height}</p>
      </div>
    </div>
  </div>
</div>			
</div>
	);
}
