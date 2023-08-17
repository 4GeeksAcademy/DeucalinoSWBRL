import React, { useContext, useEffect } from "react";
import "../../styles/main.css";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/CharactersCard";
import { PlanetsCard } from "../component/PlanetsCard";
import { StarshipsCard } from "../component/StarshipsCard";

export const Main = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadSomeData();
  }, []);

  return (
    <div className="text-center mt-5 container bg-dark bg-opacity-25">
      <h1>The Universe Grid</h1>

      {/* Characters Grid */}
      <div className="text-center ">
        <h3 className="text-warning">Characters Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.people.map((character) => (
              <CharactersCard key={character.uid} character={character} />
            ))}
          </div>
        </div>
      </div>

      {/* Planets Grid */}
      <div className="text-center">
        <h3 className="text-warning">Planets Grid</h3>
        <div className="overflow-x-auto">
          <div className="card-grid">
            {store.planets.map((planet) => (
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
            {store.starships.map((starship) => (
              <StarshipsCard key={starship.uid} starship={starship} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
