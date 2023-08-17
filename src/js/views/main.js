import React,{useContext} from "react";
import "../../styles/main.css";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { StarshipsCard } from "../component/starshipsCard";

export const Main = () => {
  const { store } = useContext(Context);

  return (
    <div className="text-center mt-5 container bg-dark bg-opacity-25">
      <h1>The Universe Grid</h1>
      
      {/* Characters Grid */}
      <div className="text-center ">
        <h3 className="text-warning">Characters Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.people.map((person, index) => (
              <CharactersCard key={index} person={person} />
            ))}
          </div>
        </div>
      </div>

      {/* Planets Grid */}
      <div className="text-center">
        <h3 className="text-warning">Planets Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.planets.map((planet, index) => (
              <PlanetsCard key={index} planet={planet} />
            ))}
          </div>
        </div>
      </div>

      {/* Starships Grid */}
      <div className="text-center">
        <h3 className="text-warning">Starships Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.starships.map((starship, index) => (
              <StarshipsCard key={index} starship={starship} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

