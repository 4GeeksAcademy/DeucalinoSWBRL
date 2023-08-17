import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipsCard = ({ starship }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Get a vehicle, pay after</h1>
      <div className="card bg-secondary opacity-50">
        <div>
          <h5 className="card-title">{starship.name}</h5>
        </div>
        <img src={starship.imageStarship} className="card-img-top" />
        <div className="card-body">
          <p className="m-0">Model: {starship.model}</p>
          <p className="m-0">Manufacturer: {starship.manufacturer}</p>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mt-5">
            <Link to={"/details"}>
              <button className="btn btn-outline-primary" data-toggle="button" aria-pressed="false">
                <b className="text-light">Learn more!</b>
              </button>
            </Link>
            <button className="btn btn-outline-warning " data-toggle="button" aria-pressed="false" onClick={() => { actions.addFavorites(starship.name) }}>
              <i className={`far fa-heart ${store.favorites.includes(starship.name) ? "fas fa-heart" : ""}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
