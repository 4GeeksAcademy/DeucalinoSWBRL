import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const CharactersCard = (props) =>{
	const { store, actions } = useContext(Context);
	return  (
	
		<div className="text-center mt-5">
			<h1>A rendez vous with the  power</h1>
			<div className="card bg-secondary opacity-50" >
				<div> <h5 className="card-title">{store.people.name}</h5></div>
				  <img src={store.imageCharacter} className="card-img-top"/>
			  <div className="card-body">
			 			<p className="m-0">Gender: {store.people.gender}</p>
                        <p className="m-0">Hair Color: {store.people.hair_color}</p>
                        <p className="m-0">Eye Color: {store.people.eye_color}</p>
			   </div>
			   <div className="card-body d-flex justify-content-between">
			   <Link to={"/details/"}>
                    <button className="btn btn-outline-primary" data-toggle="button"aria-pressed="false">
                       <b className="text-light">Learn more!</b> 
                    </button>
                </Link>
				<button
                            className="btn btn-outline-warning "
                            data-toggle="button"
                            aria-pressed="false"
                            onClick={() => {
                                actions.addFavorites(store.people.name);
                            }}
                        >
                            <i
                                className={`far fa-heart ${
                                    store.favorites.includes(store.people.name)
                                        ? "fas fa-heart"
                                        : ""
                                }`}
                            ></i>
                        </button>
			   </div>
		   </div>
			
		</div>
	);
}