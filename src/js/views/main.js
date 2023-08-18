import React, { useContext, useEffect } from "react";
import "../../styles/main.css";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { StarshipsCard } from "../component/starshipsCard";
import { Link, useParams } from 'react-router-dom';

export const Main = () => {
  const { store, actions } = useContext(Context);
  const {uid}=useParams()

  useEffect(() => {
    console.log(store.people)
  }, [])

  return (
    <div className="text-center mt-5 container bg-dark bg-opacity-25">
      <h1>The Universe Grid</h1>  
      <div class="d-flex flex-row mb-3 text-center">
      <div className="text-center ">
        <h3 className="text-warning">Characters Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.people.map((character,uid) => (    
                  <CharactersCard key={character.uid} character={character} className=" d-flex flex-row mb-3" />        
            ))}
          </div>
        </div>
      </div> 
      <div className="text-center">
        <h3 className="text-warning">Planets Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.planets.map((planet,uid) => (
              <PlanetsCard key={planet.uid} planet={planet} />
            ))}
          </div>
        </div>
      </div>

      {/* Starships Grid */}
      <div className="text-center">
        <h3 className="text-warning">Starships Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.starships.map((starship,uid) => (
              <StarshipsCard key={starship.uid} starship={starship} />
            ))}
          </div>
        </div>
      </div>
      </div>
    
    </div>
  );
};
