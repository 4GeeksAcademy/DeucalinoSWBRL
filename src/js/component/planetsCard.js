import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetsCard = ({ planet }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Come for vacations</h1>
      <div className="card bg-secondary opacity-50">
        <div>
          <h5 className="card-title">{planet.name}</h5>
        </div>
        <img src={planet.imagePlanet} className="card-img-top" />
        <div className="card-body">
          <p className="m-0">Population: {planet.population}</p>
          <p className="m-0">Terrain: {planet.terrain}</p>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mt-5">
            <Link to={"/planets"}>
              <button className="btn btn-outline-primary" data-toggle="button" aria-pressed="false">
                <b className="text-light">Learn more!</b>
              </button>
            </Link>
            <button className="btn btn-outline-warning " data-toggle="button" aria-pressed="false" onClick={() => { actions.addFavorites(planet.name) }}>
              <i className={`far fa-heart ${store.favorites.includes(planet.name) ? "fas fa-heart" : ""}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
